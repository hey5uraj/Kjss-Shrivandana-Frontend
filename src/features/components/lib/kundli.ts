// lib/kundli.ts  (server-side only – imports astronomy-engine)
import * as Astronomy from "astronomy-engine";

export const SIGNS = [
  "Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya",
  "Tula", "Vrishchika", "Dhanu", "Makara", "Kumbha", "Meena",
] as const;

export const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni",
  "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha",
  "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana",
  "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati",
] as const;

export interface PlanetPosition {
  name: string;
  short: string;
  longitude: number; // sidereal, 0-360
  sign: number; // 0-11
  signName: string;
  degree: number; // degree inside the sign, 0-30
  house: number; // 1-12 (whole sign)
  nakshatra: string;
  pada: number;
  retrograde: boolean;
}

export interface KundliInput {
  name: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24h)
  place: string;
  /** Minutes ahead of UTC at the birth place. India = 330. */
  tzOffsetMinutes?: number;
}

export interface KundliResult {
  name: string;
  date: string;
  time: string;
  place: string;
  latitude: number;
  longitude: number;
  ayanamsa: number;
  lagna: {
    sign: number;
    signName: string;
    degree: number;
    nakshatra: string;
    pada: number;
  };
  planets: PlanetPosition[];
}

const norm = (d: number) => ((d % 360) + 360) % 360;
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

function toJulianCenturies(date: Date) {
  const jd = date.getTime() / 86400000 + 2440587.5;
  return (jd - 2451545.0) / 36525;
}

/** Lahiri ayanamsa (approximation, accurate to a few arc-seconds for modern dates). */
function lahiriAyanamsa(date: Date) {
  const T = toJulianCenturies(date);
  return 23.85306 + 1.39688 * T;
}

/** Tropical geocentric ecliptic longitude of date. */
function tropicalLongitude(body: Astronomy.Body, date: Date) {
  const time = Astronomy.MakeTime(date);
  const eqj = Astronomy.GeoVector(body, time, true);
  const ect = Astronomy.RotateVector(Astronomy.Rotation_EQJ_ECT(time), eqj);
  return Astronomy.SphereFromVector(ect).lon;
}

function isRetrograde(body: Astronomy.Body, date: Date) {
  const h = 12 * 3600 * 1000;
  const a = tropicalLongitude(body, new Date(date.getTime() - h));
  const b = tropicalLongitude(body, new Date(date.getTime() + h));
  let diff = b - a;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return diff < 0;
}

function tropicalAscendant(date: Date, lat: number, lon: number) {
  const time = Astronomy.MakeTime(date);
  const gstHours = Astronomy.SiderealTime(time);
  const ramc = rad(norm(gstHours * 15 + lon)); // local sidereal time in radians
  const T = toJulianCenturies(date);
  const eps = rad(23.4392911 - 0.0130042 * T);
  const phi = rad(lat);
  const asc = Math.atan2(
    Math.cos(ramc),
    -(Math.sin(ramc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))
  );
  return norm(deg(asc));
}

function describe(longitude: number) {
  const sign = Math.floor(longitude / 30);
  const nakSpan = 360 / 27;
  const nakIndex = Math.floor(longitude / nakSpan);
  const pada = Math.floor((longitude % nakSpan) / (nakSpan / 4)) + 1;
  return {
    sign,
    signName: SIGNS[sign],
    degree: longitude % 30,
    nakshatra: NAKSHATRAS[nakIndex],
    pada,
  };
}

export function calculateKundli(
  input: KundliInput,
  latitude: number,
  longitude: number
): KundliResult {
  const [y, m, d] = input.date.split("-").map(Number);
  const [hh, mm] = input.time.split(":").map(Number);
  const offset = input.tzOffsetMinutes ?? 330;

  // local civil time -> UTC
  const utc = new Date(Date.UTC(y, m - 1, d, hh, mm) - offset * 60000);

  const ayanamsa = lahiriAyanamsa(utc);
  const lagnaLon = norm(tropicalAscendant(utc, latitude, longitude) - ayanamsa);
  const lagna = describe(lagnaLon);

  const bodies: [string, string, Astronomy.Body][] = [
    ["Sun", "Su", Astronomy.Body.Sun],
    ["Moon", "Mo", Astronomy.Body.Moon],
    ["Mars", "Ma", Astronomy.Body.Mars],
    ["Mercury", "Me", Astronomy.Body.Mercury],
    ["Jupiter", "Ju", Astronomy.Body.Jupiter],
    ["Venus", "Ve", Astronomy.Body.Venus],
    ["Saturn", "Sa", Astronomy.Body.Saturn],
  ];

  const planets: PlanetPosition[] = bodies.map(([name, short, body]) => {
    const lon = norm(tropicalLongitude(body, utc) - ayanamsa);
    const info = describe(lon);
    return {
      name,
      short,
      longitude: lon,
      ...info,
      house: ((info.sign - lagna.sign + 12) % 12) + 1,
      retrograde:
        body === Astronomy.Body.Sun || body === Astronomy.Body.Moon
          ? false
          : isRetrograde(body, utc),
    };
  });

  // Rahu / Ketu (mean node)
  const T = toJulianCenturies(utc);
  const rahuLon = norm(125.04452 - 1934.136261 * T - ayanamsa);
  const ketuLon = norm(rahuLon + 180);
  for (const [name, short, lon] of [
    ["Rahu", "Ra", rahuLon],
    ["Ketu", "Ke", ketuLon],
  ] as const) {
    const info = describe(lon);
    planets.push({
      name,
      short,
      longitude: lon,
      ...info,
      house: ((info.sign - lagna.sign + 12) % 12) + 1,
      retrograde: true,
    });
  }

  return {
    name: input.name,
    date: input.date,
    time: input.time,
    place: input.place,
    latitude,
    longitude,
    ayanamsa,
    lagna: { ...lagna },
    planets,
  };
}
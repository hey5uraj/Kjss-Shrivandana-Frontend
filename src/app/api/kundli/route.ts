// app/api/kundli/route.ts
import { NextResponse } from "next/server";
import { calculateKundli, type KundliInput } from "@/features/components/lib/kundli";

async function geocode(place: string) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    place
  )}&format=json&limit=1`;
  const res = await fetch(url, {
    headers: { "User-Agent": "shrivandana-kundli/1.0 (contact@yourdomain.com)" },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { lat: string; lon: string }[];
  if (!data.length) return null;
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<KundliInput>;
    const { name, date, time, place } = body;

    if (!name?.trim() || !date || !time || !place?.trim()) {
      return NextResponse.json(
        { error: "Enter your name, date, time and place of birth." },
        { status: 400 }
      );
    }

    const geo = await geocode(place);
    if (!geo) {
      return NextResponse.json(
        { error: "We could not find that place. Try 'Village, District, State'." },
        { status: 404 }
      );
    }

    const kundli = calculateKundli(
      { name: name.trim(), date, time, place: place.trim(), tzOffsetMinutes: 330 },
      geo.lat,
      geo.lon
    );
    return NextResponse.json(kundli);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while creating the kundli." },
      { status: 500 }
    );
  }
}
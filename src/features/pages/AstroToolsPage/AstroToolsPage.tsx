"use client";

import { useRef, useState } from "react";
import KundliView from "@/features/components/ui/KundliView";
import type { KundliResult } from "@/features/components/lib/kundli";
import Image from "next/image";


/* ---------- Types ---------- */
interface Tool {
  title: string;
  description: string;
  href: string;
  gradient: string;
  image: string;
}

interface KundliForm {
  name: string;
  dob: string;
  tob: string;
  place: string;
}

/* ---------- Data ---------- */
const TOOLS: Tool[] = [
  {
    title: "Kundli",
    description: "Your birth chart, planets and houses.",
    href: "#kundli",
    gradient: "from-[#4A2362] to-[#C8432B]",
    image: "/Kundli.png"
  },
  {
    title: "Matching",
    description: "Guna Milan for marriage compatibility.",
    href: "/astro-tools/matching",
    gradient: "from-[#2A1548] to-[#F5A21A]",
    image: "/public/Kundli.png"

  },
  {
    title: "Horoscope",
    description: "Daily, weekly and yearly predictions.",
    href: "#horoscope",
    gradient: "from-[#C8432B] to-[#3A1F66]",
    image: "/public/Kundli.png"

  },
];

const SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

type Sign = (typeof SIGNS)[number];

// Replace with real API data
const HOROSCOPE: Record<Sign, string> = {
  Aries: "Energy runs high today. Begin new work after sunrise prayers.",
  Taurus: "[Daily prediction for Taurus]",
  Gemini: "[Daily prediction for Gemini]",
  Cancer: "[Daily prediction for Cancer]",
  Leo: "[Daily prediction for Leo]",
  Virgo: "[Daily prediction for Virgo]",
  Libra: "[Daily prediction for Libra]",
  Scorpio: "[Daily prediction for Scorpio]",
  Sagittarius: "[Daily prediction for Sagittarius]",
  Capricorn: "[Daily prediction for Capricorn]",
  Aquarius: "[Daily prediction for Aquarius]",
  Pisces: "[Daily prediction for Pisces]",
};

/* ---------- Shared styles ---------- */
const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#2A1548]/60 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 [color-scheme:dark] focus:border-[#F5A21A] focus:outline-none focus:ring-1 focus:ring-[#F5A21A]";

const labelClass = "mb-1.5 block text-xs font-medium text-white";

/* ---------- Page ---------- */
export default function AstroToolsPage() {
  const [form, setForm] = useState<KundliForm>({
    name: "",
    dob: "",
    tob: "",
    place: "",
  });
  const [sign, setSign] = useState<Sign>("Aries");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [kundli, setKundli] = useState<KundliResult | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleChange =
    (field: keyof KundliForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  /* ---- create kundli ---- */
  const createKundli = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setKundli(null);

    try {
      const res = await fetch("/api/kundli", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          date: form.dob,
          time: form.tob,
          place: form.place,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not create kundli.");

      setKundli(data as KundliResult);
      // wait for the result to render, then scroll to it
      setTimeout(
        () => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        50
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create kundli.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FFF6EC]">
      {/* ===== Hero ===== */}
      <section className="bg-[#2A1548] px-5 pb-10 pt-12 text-white min-h-[300px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            Free Astrology
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Astro Tools
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
            Understand your chart with free kundli, matching and horoscope
            tools.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] px-5 pb-16 pt-8">
        {/* ===== Tool cards ===== */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {TOOLS.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="group overflow-hidden rounded-xl border border-[#3A2460] bg-[#22103C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A1548]"
            >
              <div
                className={`relative h-32 bg-gradient-to-br ${t.gradient} sm:h-36`}
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-4 pb-4 pt-3">
                <h2 className="font-serif text-lg text-white">{t.title}</h2>
                <p className="mt-1 text-xs text-white/60">{t.description}</p>
              </div>
            </a>
          ))}
        </section>

        {/* ===== Generate kundli ===== */}
        <section id="kundli" className="mt-12 scroll-mt-6">
          <h2 className="font-serif text-2xl text-[#2A1F33]">
            Generate your kundli
          </h2>

          <form
            onSubmit={createKundli}
            className="mt-5 rounded-xl border border-[#3A2460] bg-[#22103C] p-5 pb-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="dob" className={labelClass}>
                  Date of birth
                </label>
                <input
                  id="dob"
                  type="date"
                  required
                  value={form.dob}
                  onChange={handleChange("dob")}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="tob" className={labelClass}>
                  Time of birth
                </label>
                <input
                  id="tob"
                  type="time"
                  required
                  value={form.tob}
                  onChange={handleChange("tob")}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="place" className={labelClass}>
                  Place of birth
                </label>
                <input
                  id="place"
                  type="text"
                  required
                  placeholder="City, State"
                  value={form.place}
                  onChange={handleChange("place")}
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 rounded-full bg-[#2E1A52] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D2166] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A21A]"
            >
              {loading ? "Creating kundli…" : "Create kundli"}
            </button>

            {error && (
              <p role="alert" className="mt-3 text-sm text-[#F5A21A]">
                {error}
              </p>
            )}
          </form>

          {/* ---- Kundli result ---- */}
          <div ref={resultRef} className="scroll-mt-6" aria-live="polite">
            {kundli && <KundliView kundli={kundli} />}
          </div>
        </section>

        {/* ===== Daily horoscope ===== */}
        <section id="horoscope" className="mt-12 scroll-mt-6">
          <h2 className="font-serif text-2xl text-[#2A1F33]">Daily horoscope</h2>

          <div className="mt-5 rounded-xl border border-[#3A2460] bg-[#22103C] p-5">
            <label htmlFor="sign" className={labelClass}>
              Your sun sign
            </label>
            <select
              id="sign"
              value={sign}
              onChange={(e) => setSign(e.target.value as Sign)}
              className={`${inputClass} max-w-[176px]`}
            >
              {SIGNS.map((s) => (
                <option key={s} value={s} className="bg-[#22103C] text-white">
                  {s}
                </option>
              ))}
            </select>

            <p
              aria-live="polite"
              className="mt-5 rounded-lg bg-[#2A1548]/70 px-4 py-4 text-sm text-white"
            >
              <span className="font-semibold text-[#F5A21A]">{sign}</span>
              <span className="text-white/60"> · </span>
              {HOROSCOPE[sign]}
            </p>
          </div>
        </section>

        {/* ===== CTA banner ===== */}
        <section className="mt-10">
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl bg-gradient-to-r from-[#C8432B] via-[#7A3459] to-[#2A1548] px-6 py-6 text-white sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl">
                Book a puja for your graha shanti
              </h2>
              <p className="mt-1.5 text-sm text-white/85">
                Remedies performed at sacred temples in your name.
              </p>
            </div>
            <a
              href="/puja"
              className="rounded-full bg-[#F5A21A] px-6 py-2.5 text-sm font-semibold text-[#2A1548] transition-colors hover:bg-[#FFB535] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Puja
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
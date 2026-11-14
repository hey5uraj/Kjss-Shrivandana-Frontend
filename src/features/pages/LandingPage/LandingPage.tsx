"use client";

import Link from "next/link";

const serif = "font-[family-name:var(--font-serif)]";
const card = "rounded-2xl border border-[#f0e2d0] bg-white";

import { useState } from "react";
import Image from "next/image";

import {
  pujaCategories,
  pujaSteps,
  getPujasByType,
  formatPrice,
} from "@/data";

const quick = [
  { t: "Puja", d: "Personalised pujas performed in your name at temples." },
  { t: "Chadhava", d: "Send offerings to your deity, from home." },
  { t: "Panchang", d: "Tithi, muhurat, Rahu Kaal and festivals each day." },
  { t: "Temples", d: "Explore temples and their stories across India." },
];

const pujas = [
  { tag: "Wealth & Prosperity", name: "Mahalakshmi Wealth Puja", bg: "from-[#3b2468] via-[#7a2f55] to-[#c0392b]" },
  { tag: "Knowledge & Speech", name: "Saraswati Vidya Puja", bg: "from-[#2a1740] via-[#6b3a3a] to-[#f0a81c]" },
  { tag: "Protection & Peace", name: "Shani Shanti Puja", bg: "from-[#c0392b] via-[#8a2f45] to-[#2a1740]" },
];

const features = [
  { t: "Divine temple", d: "Set up a personal mandir for your deities and seek blessings any time." },
  { t: "Hindu literature", d: "Curated books, articles and videos on Sanatan Dharma." },
  { t: "Devotional music", d: "Aarti, mantra, bhajan and chalisa audio, ad-free." },
  { t: "Panchang & horoscope", d: "Daily panchang, horoscope, fasts and festivals." },
  { t: "Puja & Chadhava seva", d: "Book seva for you and your family at partner temples." },
  { t: "Devotee community", d: "Connect with fellow devotees and share the journey." },
];

const library = [
  { t: "Aarti", d: "Complete aartis for every deity.", bg: "bg-[#f5e6c4]" },
  { t: "Chalisa", d: "Read along during your puja.", bg: "bg-[#eadcf3]" },
  { t: "Mantra", d: "Mantras with meaning and benefits.", bg: "bg-[#f6d8cc]" },
  { t: "Home remedies", d: "Ayurvedic and household wisdom.", bg: "bg-[#d9ebd3]" },
];

function Emblem() {
  return (
    <svg viewBox="0 0 400 400" className="mx-auto h-auto w-full max-w-[360px]" fill="none" stroke="#c98a2b" strokeWidth="1.2" aria-hidden>
      <circle cx="200" cy="200" r="195" />
      <circle cx="200" cy="200" r="150" />
      <circle cx="200" cy="200" r="105" />
      {[0, 60, 120].map((r) => (
        <ellipse key={r} cx="200" cy="200" rx="105" ry="45" transform={`rotate(${r} 200 200)`} />
      ))}
      <circle cx="200" cy="200" r="38" fill="#c8402a" stroke="none" />
      <path d="M200 178c10 12 14 20 0 34-14-14-10-22 0-34z" fill="#f0a81c" stroke="none" />
    </svg>
  );
}

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("All Sevas");
  const filteredPujas = getPujasByType(activeCategory);
  return (
    <>
      {/* HERO */}
      <section className="flex items-center pb-12 bg-[#2a1740]">
        <div className="mx-auto grid max-w-[1300px] items-center  gap-10 px-4 py-15 pt-25 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f0a81c]">
              Online puja · Chadhava · Panchang
            </p>
            <h1 className={`${serif} mt-4 text-4xl leading-tight text-white sm:text-5xl`}>
              Worship with devotion, wherever you are.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
              Book pujas in your name at sacred temples, offer chadhava, read today&apos;s panchang and keep your daily prayers in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/puja" className="rounded-full bg-[#f0a81c] px-6 py-3 text-sm font-semibold text-[#2a1740]">
                Book a Puja
              </Link>
              <Link href="/chadhava" className="rounded-full border border-[#c98a2b] px-6 py-3 text-sm font-semibold text-[#f0a81c]">
                Offer Chadhava
              </Link>
            </div>
            <div className="mt-7 flex gap-8 text-xs text-white/75">
              <span className="max-w-[70px]">Secure payments</span>
              <span className="max-w-[110px]">Puja video shared with you</span>
              <span className="max-w-[70px]">Hindi &amp; English</span>
            </div>
          </div>
          {/* <Emblem /> */}
          {/* right section */}
          <div className="flex justify-center md:justify-center">
            <div className="relative aspect-recangle w-full max-w-[680px] max-h-[550px] overflow-hidden rounded-2xl">
              <video
                className="h-full w-full object-cover"
                src="/video/shivji.mp4"
                // poster="/video/shiv ji.jpg"
                autoPlay
                loop
                controls
                playsInline
                preload="auto"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </section>

      <main className="mx-auto max-w-[1300px] px-5 sm:px-6">
        {/* QUICK LINKS */}
        <section className="grid gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {quick.map((q) => (
            <Link href={`/${q.t.toLowerCase()}`} key={q.t} className={`${card} p-5`}>
              <h3 className={`${serif} text-xl`}>{q.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b5d78]">{q.d}</p>
            </Link>
          ))}
        </section>

        {/* SPECIAL PUJAS */}
        <section className="pt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className={`${serif} text-3xl`}>Special pujas this week</h2>
              <p className="mt-1 text-sm text-[#6b5d78]">Sample cards – replace with live puja data.</p>
            </div>
            <Link href="/puja" className="whitespace-nowrap text-sm font-semibold text-[#c0392b]">
              View all pujas →
            </Link>
          </div>

          {/* ---------- */}
          {/* <div className="mt-5 grid gap-5 md:grid-cols-3">
            {pujas.map((p) => (
              <article key={p.name} className={`${card} overflow-hidden`}>
                <div className={`h-[82px] bg-gradient-to-br sm:h-[110px] ${p.bg}`} />
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#c0392b]">{p.tag}</p>
                  <h3 className={`${serif} mt-2 text-xl`}>{p.name}</h3>
                  <p className="mt-1 text-xs text-[#6b5d78]">[Temple name], [City] · [Puja date]</p>
                  <button className="mt-3 rounded-full bg-[#2a1740] px-5 py-2 text-sm font-semibold text-white">
                    Participate 
                  </button>
                </div>
              </article>
            ))}
          </div> */}
          <div className="grid w-full grid-cols-1 mt-5 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPujas.slice(0, 3).map((puja) => (
              <article
                key={puja.id}
                className="overflow-hidden rounded-xl border border-[#e9dfd0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image (gradient fallback ke saath) */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${puja.gradient} sm:h-36`}
                >
                  <Image
                    src={puja.image}
                    alt={puja.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[11px] font-bold tracking-[0.08em] text-[#c94432]">
                    {puja.category}
                  </p>
                  <h2 className="mt-2 font-serif text-xl leading-snug">
                    {puja.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#817986]">
                    Venue: {puja.venue}
                  </p>
                  <p className="mt-1 text-sm text-[#817986]">
                    Date: {puja.date}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold">
                      From {formatPrice(puja.price)}
                    </p>


                    <Link href={`/puja/${puja.slug}`} className="shrink-0 rounded-full bg-[#2b1642] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#503064]">
                      Participate
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>


        </section>

        {/* TODAY'S PANCHANG */}
        <section className="mt-10 flex flex-col gap-6 rounded-3xl bg-[#2a1740] p-6 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f0a81c]">Today&apos;s Panchang</p>
            <p className={`${serif} mt-1 max-w-[320px] text-3xl leading-tight`}>Thursday, 22 October 2026</p>
          </div>
          <dl className="grid grid-cols-3 gap-8 text-sm">
            {[
              ["Tithi", "[Tithi name]"],
              ["Nakshatra", "[Nakshatra]"],
              ["Rahu Kaal", "[HH:MM – HH:MM]"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs text-white/70">{k}</dt>
                <dd className="mt-1 text-base">{v}</dd>
              </div>
            ))}
          </dl>
          <Link href="/panchang" className="self-start rounded-full bg-[#f0a81c] px-6 py-3 text-sm font-semibold text-[#2a1740] md:self-auto">
            Full Panchang
          </Link>
        </section>

        {/* FEATURES */}
        <section className="pt-24">
          <h2 className={`${serif} text-3xl`}>One app for your devotional needs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className={`${card} p-5`}>
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b5d78]">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LIBRARY */}
        <section className="pt-12">
          <div className="flex items-end justify-between">
            <h2 className={`${serif} text-3xl`}>From the library</h2>
            <Link href="/library" className="text-sm font-semibold text-[#c0392b]">Read all →</Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {library.map((l) => (
              <Link href="/library" key={l.t} className={`rounded-2xl p-5 ${l.bg}`}>
                <h3 className={`${serif} text-xl`}>{l.t}</h3>
                <p className="mt-2 text-sm">{l.d}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ASTRO BANNER */}
        <section className="my-12 flex flex-col gap-5 rounded-3xl bg-gradient-to-br from-[#c8402a] via-[#8a2f45] to-[#2a1740] p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className={`${serif} text-3xl`}>Free kundli, matching and horoscope</h2>
            <p className="mt-2 text-sm text-white/90">Use our astrology tools to understand your chart.</p>
          </div>
          <Link href="/astro-tools" className="self-start rounded-full bg-[#f0a81c] px-6 py-3 text-sm font-semibold text-[#2a1740] sm:self-auto">
            Open Astro Tools
          </Link>
        </section>
      </main>
    </>
  );
}
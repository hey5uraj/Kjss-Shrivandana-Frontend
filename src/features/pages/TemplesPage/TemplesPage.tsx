"use client";

import { useMemo, useState } from "react";
import type { TempleFilter } from "@/data/types";
import { TEMPLES, TEMPLE_FILTERS } from "@/data/temples";
import Image from "next/image";



export default function TemplesPage() {
  const [filter, setFilter] = useState<TempleFilter>("All");
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TEMPLES.filter((t) => {
      const matchesDeity = filter === "All" || t.deity === filter;
      const matchesQuery =
        q === "" ||
        t.name.toLowerCase().includes(q) ||
        t.location.toLowerCase().includes(q);
      return matchesDeity && matchesQuery;
    });
  }, [filter, query]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <main className="bg-[#FFF6EC]">
      {/* ===== Hero ===== */}
      <section className="min-h-[320px] bg-[#2A1548] px-5 pb-10 pt-12 text-white">
        <div className="mx-auto max-w-[1300px] px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            Sacred Places
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Explore temples across India.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
            Discover the stories, deities and traditions of India&rsquo;s most
            revered temples.
          </p>

          <form
            onSubmit={handleSearch}
            role="search"
            className="mt-6 flex max-w-md items-center gap-3"
          >
            <label htmlFor="temple-search" className="sr-only">
              Search by temple or city
            </label>
            <input
              id="temple-search"
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search by temple or city"
              className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#22103C] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#F5A21A] focus:outline-none focus:ring-1 focus:ring-[#F5A21A]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#F5A21A] px-6 py-3 text-sm font-semibold text-[#2A1548] transition-colors hover:bg-[#FFB535] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] px-5 pb-16 pt-9">
        {/* ===== Featured temples ===== */}
        <section>
          <h2 className="font-serif text-2xl text-[#2A1F33]">
            Featured temples
          </h2>

          {/* Filter pills */}
          <div
            role="tablist"
            aria-label="Filter by deity"
            className="mt-4 flex flex-wrap gap-2.5"
          >
            {TEMPLE_FILTERS.map((f) => {
              const isActive = f === filter;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(f)}
                  className={`rounded-full bg-[#22103C] px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-[#2E1A52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A1548] ${isActive ? "text-[#F5A21A]" : "text-white"
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          {visible.length > 0 ? (
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {visible.map((t) => (
                <article
                  key={t.id}
                  className="overflow-hidden rounded-xl border border-[#e9dfd0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div
                    className={`relative h-32 bg-gradient-to-br ${t.gradient} sm:h-36`}
                  >
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                    <p className="text-[11px] font-bold tracking-[0.08em] text-[#c94432] uppercase">
                      {t.deity}
                    </p>
                    <h3 className="mt-2 font-serif text-xl leading-snug">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#000000]">{t.location}</p>
                    <p className="mmt-1 text-sm text-[#817986]">
                      {t.description}
                    </p>
                    <a
                      href={`/temples/${t.id}`}
                      className="mt-3 inline-block self-start rounded-full bg-[#2E1A52] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3D2166] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A21A]"
                    >
                      Explore temple
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-[#6F6578]">
              No temples match your search. Try a different name, city or deity.
            </p>
          )}
        </section>

        {/* ===== CTA banner ===== */}
        <section className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl bg-gradient-to-r from-[#C8432B] via-[#7A3459] to-[#2A1548] px-6 py-6 text-white sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl">Book a puja at a temple</h2>
              <p className="mt-1.5 text-sm text-white/85">
                Have it performed in your name, video shared with you.
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
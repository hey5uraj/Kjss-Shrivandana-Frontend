"use client";

import { useState } from "react";
import Image from "next/image";
import {
  pujaCategories,
  pujaSteps,
  getPujasByType,
  formatPrice,
} from "@/data";
import Link from "next/link";

export default function PujaPage() {
  const [activeCategory, setActiveCategory] = useState("All Sevas");
  const filteredPujas = getPujasByType(activeCategory);

  return (
    <main className="bg-[#FFF6EC]">
      {/* Hero */}
      <section className="bg-[#2A1548] px-5 pb-10 pt-12 text-white min-h-[300px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            PUJA SEVA
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Puja performed in your name
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
            Choose a puja, share your name and gotra, and receive the video
            of the ritual after it is completed.
          </p>
        </div>
      </section>

      {/* Puja Listings */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16 pt-9">
        <div className="mb-6 flex w-full gap-2 overflow-x-auto pb-1">
          {pujaCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm transition ${activeCategory === category
                  ? "border-[#2b1642] bg-[#2b1642] text-white"
                  : "border-[#e2d7c6] bg-white text-[#514b54] hover:border-[#2b1642]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPujas.map((puja) => (
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

        {filteredPujas.length === 0 && (
          <p className="py-12 text-center text-[#817986]">
            No pujas found in this category.
          </p>
        )}
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16 pt-9">
        <h2 className="mb-6 font-serif text-3xl md:text-4xl">How it works</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pujaSteps.map((step) => (
            <div
              key={step.number}
              className={`${step.color} min-h-36 rounded-xl p-5`}
            >
              <p className={`${step.text} font-serif text-3xl`}>
                {step.number}
              </p>
              <h3 className="mt-1 text-sm font-bold text-[#382b3b]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-[#66574e]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
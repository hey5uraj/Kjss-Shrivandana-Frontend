"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, filters, books } from "@/data/library";

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBooks =
    activeFilter === "All"
      ? books
      : books.filter((book) =>
          activeFilter === "Home remedies"
            ? book.category === "Remedy"
            : book.category === activeFilter,
        );

  return (
    <main className="bg-[#FFF6EC]">
      {/* Header */}
      <section className="min-h-[300px] bg-[#2A1548] px-5 pb-10 pt-12 text-white">
        <div className="mx-auto max-w-[1300px] px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            Prayers & Wisdom
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            The Shrivandana Library
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">
            Aartis, chalisas, mantras and home remedies, always at hand.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16 pt-9">
        {/* Category overview */}
        <div className="mb-6 grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`${category.color} min-h-[100px] w-full min-w-0 rounded-lg px-3 py-3 text-left transition duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer`}
            >
              <h2 className="font-serif text-sm font-bold text-[#382b3b]">
                {category.name}
              </h2>
              <p className="mt-1 text-sm leading-5 text-[#66574e]">
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {/* Browse heading */}
        <h2 className="mb-6 mt-7 font-serif text-3xl md:text-4xl">
          Browse all
        </h2>

        {/* Filters */}
        <div className="mb-3 flex w-full flex-wrap gap-1.5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                activeFilter === filter
                  ? "bg-[#F5A21A] text-[#2A1548]"
                  : "bg-[#321b47] text-white hover:bg-[#543367]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Library grid */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="overflow-hidden rounded-xl border border-[#e9dfd0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Artwork */}
              <div
                className={`relative h-32 bg-gradient-to-br ${book.gradient} sm:h-36`}
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Book information */}
              <div className="p-4">
                <p className="text-[11px] font-bold tracking-[0.08em] text-[#c94432] uppercase">
                  {book.category}
                </p>

                <h3 className="mt-2 font-serif text-xl leading-snug">
                  {book.title}
                </h3>

                <button
                  onClick={() => alert(`Opening: ${book.title}`)}
                  className="mt-4 w-full shrink-0 rounded-full bg-[#2b1642] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#503064] cursor-pointer"
                >
                  Read
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredBooks.length === 0 && (
          <p className="py-10 text-center text-sm text-[#75677c]">
            No library items found.
          </p>
        )}
      </section>
    </main>
  );
}
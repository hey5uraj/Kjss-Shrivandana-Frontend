"use client";

import { useState } from "react";

/* ---------- Types ---------- */
type Deity = "Shiva" | "Vishnu" | "Hanuman" | "Devi" | "Ganesh" | "Shani";
type Filter = "All deities" | Deity;

interface Offering {
  id: string;
  title: string;
  temple: string;
  description: string;
  price: string;
  deities: Deity[];
  iconBg: string;
  icon: React.ReactNode;
}

/* ---------- Data ---------- */
const FILTERS: Filter[] = [
  "All deities",
  "Shiva",
  "Vishnu",
  "Hanuman",
  "Devi",
  "Ganesh",
  "Shani",
];

const ALL_DEITIES: Deity[] = ["Shiva", "Vishnu", "Hanuman", "Devi", "Ganesh", "Shani"];

const OFFERINGS: Offering[] = [
  {
    id: "diya-daan",
    title: "Diya Daan",
    temple: "[Temple name], [City]",
    description: "Light a diya in your name at the sanctum.",
    price: "₹599",
    deities: ALL_DEITIES,
    iconBg: "bg-[#F5E6CC]",
    icon: (
      <span className="relative block h-3.5 w-5">
        <span className="absolute bottom-0 left-0 h-2.5 w-5 rounded-b-full bg-[#B8341F]" />
        <span className="absolute left-1/2 top-0 h-2 w-1.5 -translate-x-1/2 rounded-full bg-[#E8512F]" />
      </span>
    ),
  },
  {
    id: "flower-offering",
    title: "Flower Offering",
    temple: "[Temple name], [City]",
    description: "Fresh flowers and garland offered to the deity.",
    price: "₹999",
    deities: ALL_DEITIES,
    iconBg: "bg-[#F6D9D0]",
    icon: (
      <span className="relative block h-5 w-5">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#D8402B]" />
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#D8402B]" />
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#D8402B]" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#D8402B]" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A21A]" />
      </span>
    ),
  },
  {
    id: "prasad-sweets",
    title: "Prasad & Sweets",
    temple: "[Temple name], [City]",
    description: "Bhog prepared and offered, then shared as prasad.",
    price: "₹799",
    deities: ALL_DEITIES,
    iconBg: "bg-[#E7DDF3]",
    icon: (
      <span className="flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#F5A21A]">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    ),
  },
  {
    id: "bilva-patra",
    title: "Bilva Patra for Shiva",
    temple: "[Temple name], [City]",
    description: "Bilva leaves and abhishek materials offered on your behalf.",
    price: "₹599",
    deities: ["Shiva"],
    iconBg: "bg-[#DDE9D5]",
    icon: <span className="block h-5 w-3 rounded-[50%_50%_50%_50%/70%_70%_30%_30%] bg-[#2F6B3A]" />,
  },
  {
    id: "sindoor-vastra",
    title: "Sindoor & Vastra",
    temple: "[Temple name], [City]",
    description: "Offer sindoor and cloth to Hanuman or Devi.",
    price: "₹699",
    deities: ["Hanuman", "Devi"],
    iconBg: "bg-[#F5E6CC]",
    icon: (
      <span className="relative block h-5 w-4">
        <span className="absolute left-1/2 top-0 h-1.5 w-2 -translate-x-1/2 rounded-sm bg-[#B8341F]" />
        <span className="absolute bottom-0 h-3.5 w-4 rounded-sm bg-[#B8341F]" />
      </span>
    ),
  },
  {
    id: "til-oil-shani",
    title: "Til & Oil for Shani",
    temple: "[Temple name], [City]",
    description: "Sesame and mustard oil offered at the Shani shrine.",
    price: "₹799",
    deities: ["Shani"],
    iconBg: "bg-[#E7DDF3]",
    icon: (
      <span className="relative block h-5 w-5">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F5A21A]" />
        <span
          className="absolute bottom-0 h-3.5 w-5 bg-[#2A1548]"
          style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)" }}
        />
      </span>
    ),
  },
];

/* ---------- Page ---------- */
export default function ChadhavaPage() {
  const [active, setActive] = useState<Filter>("All deities");

  const visible =
    active === "All deities"
      ? OFFERINGS
      : OFFERINGS.filter((o) => o.deities.includes(active));

  return (
    <main className="bg-[#FFF6EC]">
      {/* ===== Hero ===== */}
      <section className="bg-[#2A1548] px-5 pb-10 pt-12 text-white min-h-[300px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            Chadhava Seva
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Offer chadhava to your beloved deity
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
            Send flowers, sweets, diyas and more to temples across India. The
            offering is made in your name and you receive a video.
          </p>
        </div>
      </section>

      {/* ===== Filters + Cards ===== */}
      <section className="mx-auto max-w-[1300px] px-5 pt-7">
        {/* Filter pills */}
        <div
          role="tablist"
          aria-label="Filter by deity"
          className="flex flex-wrap gap-3"
        >
          {FILTERS.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f)}
                className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A1548] ${
                  isActive
                    ? "border-[#2A1548] bg-[#2A1548] text-white"
                    : "border-[#DCD3C8] bg-white text-[#3A2F45] hover:border-[#2A1548]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((o) => (
            <article
              key={o.id}
              className="flex flex-col rounded-2xl border border-[#EFE3D6] bg-white p-5"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${o.iconBg}`}
              >
                {o.icon}
              </div>

              <h2 className="mt-4 font-serif text-xl text-[#2A1F33]">
                {o.title}
              </h2>
              <p className="mt-2 text-sm text-[#8A7F93]">{o.temple}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6F6578]">
                {o.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-bold text-[#2A1F33]">
                  {o.price}
                </span>
                <button
                  type="button"
                  className="rounded-full bg-[#2A1548] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D2166] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A1548]"
                >
                  Offer
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== CTA banner ===== */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16 pt-12">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#2A1548] px-8 py-9 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl">Want a full ritual instead?</h2>
            <p className="mt-2 text-sm text-white/85">
              Book a puja where pandits perform the complete ritual in your
              name.
            </p>
          </div>
          <a
            href="/puja"
            className="rounded-full bg-[#F5A21A] px-7 py-3 text-sm font-semibold text-[#2A1548] transition-colors hover:bg-[#FFB535]"
          >
            Browse pujas
          </a>
        </div>
      </section>
    </main>
  );
}
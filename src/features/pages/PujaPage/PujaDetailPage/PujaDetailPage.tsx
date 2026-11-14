"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Puja, formatPrice, getRelatedPujas, pujaSteps } from "@/data";

type FormState = { name: string; gotra: string; phone: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

export default function PujaDetailPage({ puja }: { puja: Puja }) {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [form, setForm] = useState<FormState>({ name: "", gotra: "", phone: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [booked, setBooked] = useState(false);

  const related = getRelatedPujas(puja.slug);
  const pkg = puja.packages[selectedPackage];

  const validate = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Enter your full name";
    if (!form.gotra.trim()) e.gotra = "Enter your gotra";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleBook = () => {
    if (!validate()) return;
    // TODO: yahan API / payment (Razorpay) call lagana hai
    console.log({ puja: puja.title, package: pkg.name, ...form });
    setBooked(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:border-[#2b1642] ${
      errors[field] ? "border-[#c94432]" : "border-[#e2d7c6]"
    }`;

  return (
    <main className="bg-[#FFF6EC]">
      {/* Hero */}
      <section className="bg-[#2A1548] px-5 pb-10 pt-8 text-white">
        <div className="mx-auto max-w-[1300px] px-5">
          <Link
            href="/puja"
            className="mb-6 inline-block text-sm text-white/70 transition hover:text-white"
          >
            ← All pujas
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            {puja.category}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-tight md:text-5xl">
            {puja.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            {puja.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1300px] gap-8 px-5 py-10 lg:grid-cols-[1fr_380px]">
        {/* LEFT: details */}
        <div>
          <div
            className={`relative h-64 overflow-hidden rounded-xl bg-gradient-to-br ${puja.gradient} sm:h-96`}
          >
            <Image
              src={puja.image}
              alt={puja.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          {/* Quick info */}
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Deity", value: puja.deity },
              { label: "Venue", value: puja.venue },
              { label: "Date", value: puja.date },
              { label: "Duration", value: puja.duration },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e9dfd0] bg-white p-3"
              >
                <dt className="text-xs text-[#817986]">{item.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-[#382b3b]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-serif text-2xl md:text-3xl">About this puja</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-[#514b54]">
            {puja.about}
          </p>

          <h2 className="mt-10 font-serif text-2xl md:text-3xl">Why it is performed</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-[#514b54]">
            {puja.significance}
          </p>

          <h2 className="mt-10 font-serif text-2xl md:text-3xl">Benefits</h2>
          <ul className="mt-3 space-y-2">
            {puja.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-[#514b54]">
                <span className="mt-0.5 text-[#c94432]" aria-hidden="true">✦</span>
                {b}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl md:text-3xl">What is included</h2>
          <ul className="mt-3 space-y-2">
            {puja.includes.map((item) => (
              <li key={item} className="flex gap-3 text-[#514b54]">
                <span className="mt-0.5 text-[#35583a]" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl md:text-3xl">How it works</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pujaSteps.map((step) => (
              <div key={step.number} className={`${step.color} rounded-xl p-5`}>
                <p className={`${step.text} font-serif text-3xl`}>{step.number}</p>
                <h3 className="mt-1 text-sm font-bold text-[#382b3b]">{step.title}</h3>
                <p className="mt-2 text-sm leading-5 text-[#66574e]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-serif text-2xl md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-3">
            {puja.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#e9dfd0] bg-white p-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-[#382b3b] after:float-right after:text-[#817986] after:content-['+'] group-open:after:content-['−']">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#514b54]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* RIGHT: booking card */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border border-[#e9dfd0] bg-white p-5">
            {booked ? (
              <div className="py-6 text-center">
                <p className="text-4xl text-[#35583a]" aria-hidden="true">✓</p>
                <h2 className="mt-3 font-serif text-2xl">Request received</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#514b54]">
                  The sankalp for <strong>{puja.title}</strong> will be taken in
                  the name of {form.name} ({form.gotra} gotra). We will contact you
                  on {form.phone} to confirm.
                </p>
                <button
                  onClick={() => {
                    setBooked(false);
                    setForm({ name: "", gotra: "", phone: "" });
                  }}
                  className="mt-5 text-sm font-semibold text-[#2b1642] underline"
                >
                  Book for someone else
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-[#817986]">Starting from</p>
                <p className="font-serif text-3xl">{formatPrice(puja.price)}</p>

                <fieldset className="mt-5 space-y-2">
                  <legend className="mb-2 text-sm font-semibold">Choose a package</legend>
                  {puja.packages.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setSelectedPackage(i)}
                      aria-pressed={selectedPackage === i}
                      className={`w-full rounded-lg border p-3 text-left transition ${
                        selectedPackage === i
                          ? "border-[#2b1642] bg-[#f6eefb]"
                          : "border-[#e2d7c6] hover:border-[#2b1642]"
                      }`}
                    >
                      <div className="flex justify-between text-sm font-semibold">
                        <span>{p.name}</span>
                        <span>{formatPrice(p.price)}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-[#817986]">{p.description}</p>
                    </button>
                  ))}
                </fieldset>

                <div className="mt-5 space-y-3">
                  <div>
                    <input
                      aria-label="Full name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-[#c94432]">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      aria-label="Gotra"
                      placeholder="Gotra"
                      value={form.gotra}
                      onChange={(e) => setForm({ ...form, gotra: e.target.value })}
                      className={inputClass("gotra")}
                    />
                    {errors.gotra && (
                      <p className="mt-1 text-xs text-[#c94432]">{errors.gotra}</p>
                    )}
                  </div>
                  <div>
                    <input
                      aria-label="Mobile number"
                      placeholder="Mobile number"
                      inputMode="numeric"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
                      }
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#c94432]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBook}
                  className="mt-5 w-full rounded-full bg-[#2b1642] py-3 text-sm font-semibold text-white transition hover:bg-[#503064]"
                >
                  Book puja · {formatPrice(pkg.price)}
                </button>
              </>
            )}
          </div>
        </aside>
      </section>

      {/* More pujas */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16">
        <h2 className="mb-6 font-serif text-2xl md:text-3xl">More pujas</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.id}
              href={`/puja/${r.slug}`}
              className="overflow-hidden rounded-xl border border-[#e9dfd0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`relative h-32 bg-gradient-to-br ${r.gradient}`}>
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-bold tracking-[0.08em] text-[#c94432]">
                  {r.category}
                </p>
                <h3 className="mt-1 font-serif text-lg">{r.title}</h3>
                <p className="mt-2 text-sm font-semibold">From {formatPrice(r.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
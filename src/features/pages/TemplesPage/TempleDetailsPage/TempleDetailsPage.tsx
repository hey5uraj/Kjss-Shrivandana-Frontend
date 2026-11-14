import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TEMPLES } from "@/data/temples";
import { TEMPLE_DETAILS } from "@/data/temple-details";

export default function TempleDetailsPage({ id }: { id: string }) {
  const temple = TEMPLES.find((t) => t.id === id);
  if (!temple) notFound();

  const related = TEMPLES.filter((t) => t.id !== temple.id).slice(0, 3);
  
  const DETAIL_KEY_BY_ID: Record<string, string> = {
    "1": "kashi-vishwanath",
    "2": "siddhivinayak",
    "3": "tirumala-venkateswara",
    "4": "vaishno-devi",
    "5": "meenakshi-amman",
    "6": "jagannath-temple",
    "7": "somnath-temple",
    "8": "konark-sun-temple",
  };
  
  const detail = TEMPLE_DETAILS[DETAIL_KEY_BY_ID[temple.id] ?? ""];


  return (
    <main className="bg-[#FFF6EC]">
      {/* ===== Hero ===== */}
      <section className="relative min-h-[360px] overflow-hidden bg-[#2A1548] text-white">
        <Image
          src={temple.img}
          alt={temple.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1548] via-[#2A1548]/30 to-transparent" />
        <div className="relative mx-auto flex min-h-[360px] max-w-[1300px] flex-col justify-end px-5 pb-10 pt-12">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/temples" className="hover:text-white">Temples</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{temple.name}</span>
          </nav>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            {temple.deity}
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            {temple.name}
          </h1>
          <p className="mt-3 text-base text-white/85">{temple.location}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            {detail?.tagline ?? temple.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/puja"
              className="rounded-full bg-[#F5A21A] px-6 py-2.5 text-sm font-semibold text-[#2A1548] transition-colors hover:bg-[#FFB535] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Puja
            </Link>
            <Link
              href="/temples"
              className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              &larr; All temples
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] px-5 pb-16 pt-9">
        {!detail ? (
          <section className="rounded-xl border border-[#e9dfd0] bg-white p-6">
            <h2 className="font-serif text-2xl text-[#2A1F33]">About</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6F6578]">
              {temple.description} Detailed information for this temple will be added soon.
            </p>
          </section>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* ===== Main column ===== */}
            <div className="space-y-8">
              <Card title="About the temple">
                {detail.about.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-[#4a4252]">
                    {p}
                  </p>
                ))}
              </Card>

              <Card title="History">
                <p className="text-sm leading-relaxed text-[#4a4252]">{detail.history}</p>
              </Card>

              <Card title="Architecture">
                <p className="text-sm leading-relaxed text-[#4a4252]">{detail.architecture}</p>
              </Card>

              <Card title="Rituals & worship">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {detail.rituals.map((r) => (
                    <li key={r.title} className="rounded-lg bg-[#FFF6EC] p-4">
                      <h3 className="font-serif text-lg text-[#2A1F33]">{r.title}</h3>
                      <p className="mt-1 text-sm text-[#6F6578]">{r.description}</p>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="Festivals">
                <ul className="space-y-3">
                  {detail.festivals.map((f) => (
                    <li key={f.name} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F5A21A]" />
                      <div>
                        <h3 className="text-sm font-semibold text-[#2A1F33]">{f.name}</h3>
                        <p className="text-sm text-[#6F6578]">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="Visitor information">
                <dl className="grid gap-4 sm:grid-cols-2">
                  <Info label="Best time to visit" value={detail.visit.bestTime} />
                  <Info label="Timings" value={detail.visit.timings} />
                  <Info label="Dress code" value={detail.visit.dressCode} />
                  <Info label="How to reach" value={detail.visit.howToReach} />
                </dl>
                <div className="mt-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-[#c94432]">
                    Nearby places
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {detail.visit.nearby.map((n) => (
                      <span
                        key={n}
                        className="rounded-full bg-[#22103C] px-3 py-1 text-xs font-semibold text-white"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              <Card title="Tips for devotees">
                <ul className="list-disc space-y-2 pl-5 text-sm text-[#4a4252]">
                  {detail.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* ===== Sidebar ===== */}
            <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-xl border border-[#e9dfd0] bg-white p-5">
                <h2 className="font-serif text-xl text-[#2A1F33]">Quick facts</h2>
                <dl className="mt-4 divide-y divide-[#f0e7d8]">
                  {detail.facts.map((f) => (
                    <div key={f.label} className="flex justify-between gap-4 py-2.5 text-sm">
                      <dt className="text-[#817986]">{f.label}</dt>
                      <dd className="text-right font-medium text-[#2A1F33]">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-[#C8432B] via-[#7A3459] to-[#2A1548] p-5 text-white">
                <h2 className="font-serif text-xl">Book a puja</h2>
                <p className="mt-1.5 text-sm text-white/85">
                  Have it performed in your name at {temple.name}, video shared with you.
                </p>
                <Link
                  href="/puja"
                  className="mt-4 inline-block rounded-full bg-[#F5A21A] px-6 py-2.5 text-sm font-semibold text-[#2A1548] transition-colors hover:bg-[#FFB535] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book a Puja
                </Link>
              </div>
            </aside>
          </div>
        )}

        {/* ===== More temples ===== */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-[#2A1F33]">More temples to explore</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <article
                key={t.id}
                className="overflow-hidden rounded-xl border border-[#e9dfd0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`relative h-36 bg-gradient-to-br ${t.gradient}`}>
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 pb-4 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#c94432]">
                    {t.deity}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-snug">{t.name}</h3>
                  <p className="mt-1 text-sm text-[#000000]">{t.location}</p>
                  <Link
                    href={`/temples/${t.id}`}
                    className="mt-3 inline-block rounded-full bg-[#2E1A52] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3D2166] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A21A]"
                  >
                    Explore temple
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#e9dfd0] bg-white p-6">
      <h2 className="font-serif text-2xl text-[#2A1F33]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-[0.08em] text-[#c94432]">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-[#4a4252]">{value}</dd>
    </div>
  );
}
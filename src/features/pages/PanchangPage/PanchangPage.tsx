/* app/panchang/page.tsx */

/* ---------- Types ---------- */
interface DetailItem {
  label: string;
  value: string;
}

interface Festival {
  name: string;
  date: string;
}

/* ---------- Data (replace with real API data) ---------- */
const TODAY = new Date(2026, 9, 22); // Thursday, 22 October 2026
const FESTIVAL_DAYS: number[] = [25];

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TODAY_DETAILS: DetailItem[] = [
  { label: "Tithi", value: "Krishna Dwadashi, till 10:30 AM, then Trayodashi" },
  { label: "Nakshatra", value: "Hasta, till 04:43 AM (Nov 7), then Chitra" },
  { label: "Yoga", value: "Vishkambha, till about 04:10 AM (Nov 7), then Priti" },
  { label: "Karana", value: "Taitila till 10:30 AM, Garaja till 10:36 PM, then Vanija" },
  { label: "Sunrise", value: "06:37 AM" },
  { label: "Sunset", value: "05:53 PM" },
];

const MUHURAT: DetailItem[] = [
  { label: "Abhijit Muhurat", value: "11:43 AM – 12:26 PM" },
  { label: "Brahma Muhurat", value: "04:52 AM – 05:44 AM" },
  { label: "Rahu Kaal", value: "10:43 AM – 12:05 PM" },
  { label: "Gulika Kaal", value: "07:59 AM – 09:21 AM" },
  { label: "Yamaganda", value: "02:49 PM – 04:11 PM" },
];

const FESTIVALS: Festival[] = [
  { name: "Sharad Purnima", date: "25 Oct" },
  { name: "[Festival name]", date: "[Date]" },
  { name: "[Festival name]", date: "[Date]" },
];

/* ---------- Helpers ---------- */
function buildCalendar(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

const formatLongDate = (d: Date) =>
  d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/* ---------- Small components ---------- */
function DetailGrid({ items }: { items: DetailItem[] }) {
  return (
    <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs text-[#6F6578]">{item.label}</dt>
          <dd className="mt-0.5 text-sm font-bold text-[#2A1F33]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Page ---------- */
export default function PanchangPage() {
  const year = TODAY.getFullYear();
  const month = TODAY.getMonth();
  const monthLabel = TODAY.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
  const cells = buildCalendar(year, month);

  return (
    <main className="bg-[#FFF6EC]">
      {/* ===== Hero ===== */}
      <section className="bg-[#2A1548] px-5 pb-10 pt-12 text-white min-h-[300px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A21A]">
            Daily Panchang
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            {formatLongDate(TODAY)}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
            Tithi, nakshatra, muhurat and Rahu Kaal for your city. Location:
            [City]
          </p>
        </div>
      </section>

      {/* ===== Calendar + details ===== */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-5 px-5 pt-8 lg:grid-cols-[1fr_1fr]">
        {/* Calendar card */}
        <div className="rounded-2xl border border-[#EFE3D6] bg-white p-5">
          <div className="flex items-start justify-between">
            <h2 className="font-serif text-2xl text-[#2A1F33]">{monthLabel}</h2>
            <span className="text-xs text-[#6F6578]">Sample calendar</span>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-y-2 text-center">
            {WEEK_DAYS.map((d) => (
              <div key={d} className="py-1 text-xs font-bold text-[#6F6578]">
                {d}
              </div>
            ))}

            {cells.map((day, i) => {
              if (day === null) return <div key={`empty-${i}`} />;

              const isToday = day === TODAY.getDate();
              const isFestival = FESTIVAL_DAYS.includes(day);

              return (
                <div key={day} className="flex items-center justify-center">
                  <span
                    className={`flex h-10 w-12 items-center justify-center rounded-xl text-sm ${
                      isToday
                        ? "bg-[#2A1548] font-bold text-white"
                        : isFestival
                        ? "border border-[#E9C46A] bg-[#F5E6C8] font-medium text-[#2A1F33]"
                        : "text-[#3A2F45]"
                    }`}
                    aria-current={isToday ? "date" : undefined}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center gap-5 text-xs text-[#6F6578]">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-[3px] bg-[#2A1548]" />
              Today
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-[3px] border border-[#E9C46A] bg-[#F5E6C8]" />
              Festival / vrat
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Today's details */}
          <div className="rounded-2xl border border-[#EFE3D6] bg-white p-5">
            <h2 className="font-serif text-2xl text-[#2A1F33]">
              Today&rsquo;s details
            </h2>
            <DetailGrid items={TODAY_DETAILS} />
          </div>

          {/* Muhurat & timings */}
          <div className="rounded-2xl bg-[#F5E6C8] p-5">
            <h2 className="font-serif text-2xl text-[#2A1F33]">
              Muhurat &amp; timings
            </h2>
            <DetailGrid items={MUHURAT} />
          </div>

          {/* Upcoming festivals */}
          <div className="rounded-2xl border border-[#EFE3D6] bg-white p-5">
            <h2 className="font-serif text-2xl text-[#2A1F33]">
              Upcoming festivals &amp; vrat
            </h2>
            <ul className="mt-3">
              {FESTIVALS.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between border-b border-[#EFE3D6] py-3 text-sm last:border-b-0"
                >
                  <span className="text-[#2A1F33]">{f.name}</span>
                  <span className="text-[#6F6578]">{f.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA banner ===== */}
      <section className="mx-auto max-w-[1300px] px-5 pb-16 pt-10">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#2A1548] px-8 py-9 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl">
              Book a puja on an auspicious day
            </h2>
            <p className="mt-2 text-sm text-white/85">
              Pick a puja that matches today&rsquo;s tithi and festivals.
            </p>
          </div>
          <a
            href="/puja"
            className="rounded-full bg-[#F5A21A] px-7 py-3 text-sm font-semibold text-[#2A1548] transition-colors hover:bg-[#FFB535] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Browse pujas
          </a>
        </div>
      </section>
    </main>
  );
}
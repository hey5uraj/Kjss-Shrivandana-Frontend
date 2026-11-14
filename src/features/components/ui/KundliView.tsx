// components/KundliView.tsx
import type { KundliResult } from "@/features/components/lib/kundli";
import KundliChart from "./KundliChart";

export default function KundliView({ kundli }: { kundli: KundliResult }) {
  const moon = kundli.planets.find((p) => p.name === "Moon")!;
  const sun = kundli.planets.find((p) => p.name === "Sun")!;

  const facts = [
    ["Lagna (Ascendant)", `${kundli.lagna.signName} ${kundli.lagna.degree.toFixed(2)}°`],
    ["Moon sign (Rashi)", moon.signName],
    ["Nakshatra", `${moon.nakshatra}, pada ${moon.pada}`],
    ["Sun sign", sun.signName],
  ];

  const isNode = (s: string) => s === "Ra" || s === "Ke";

  return (
    <div className="mt-8 rounded-xl border border-[#2A1548]/10 bg-white p-5 sm:p-7">
      <h3 className="font-serif text-2xl text-[#2A1F33]">
        Kundli of {kundli.name}
      </h3>
      <p className="mt-1 text-sm text-[#2A1F33]/70">
        Born {kundli.date} at {kundli.time}, {kundli.place}. Lahiri ayanamsa{" "}
        {kundli.ayanamsa.toFixed(3)}°
      </p>

      <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-[#FFF6EC] p-4">
            <dt className="text-xs text-[#2A1F33]/70">{label}</dt>
            <dd className="mt-1 font-serif text-lg text-[#2A1F33]">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,460px)_1fr]">
        <KundliChart kundli={kundli} />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#2A1F33]">
            <thead>
              <tr className="border-b border-[#2A1F33]/20 text-[#2A1F33]/70">
                <th className="py-2 pr-4 font-medium">Planet</th>
                <th className="py-2 pr-4 font-medium">Sign</th>
                <th className="py-2 pr-4 font-medium">Degree</th>
                <th className="py-2 pr-4 font-medium">House</th>
                <th className="py-2 font-medium">Nakshatra</th>
              </tr>
            </thead>
            <tbody>
              {kundli.planets.map((p) => (
                <tr key={p.name} className="border-b border-[#2A1F33]/10">
                  <td className="py-2 pr-4 font-medium">
                    {p.name}
                    {p.retrograde && !isNode(p.short) ? " (R)" : ""}
                  </td>
                  <td className="py-2 pr-4">{p.signName}</td>
                  <td className="py-2 pr-4">{p.degree.toFixed(2)}°</td>
                  <td className="py-2 pr-4">{p.house}</td>
                  <td className="py-2">
                    {p.nakshatra} ({p.pada})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// components/KundliChart.tsx
import type { KundliResult } from "@/features/components/lib/kundli";

// Polygon points + label centre for each of the 12 houses (North Indian layout, 400x400)
const HOUSES: { points: string; cx: number; cy: number }[] = [
  { points: "100,100 200,0 300,100 200,200", cx: 200, cy: 100 }, // 1
  { points: "0,0 200,0 100,100", cx: 100, cy: 36 }, // 2
  { points: "0,0 100,100 0,200", cx: 36, cy: 100 }, // 3
  { points: "0,200 100,100 200,200 100,300", cx: 100, cy: 200 }, // 4
  { points: "0,200 100,300 0,400", cx: 36, cy: 300 }, // 5
  { points: "0,400 100,300 200,400", cx: 100, cy: 364 }, // 6
  { points: "100,300 200,200 300,300 200,400", cx: 200, cy: 300 }, // 7
  { points: "200,400 300,300 400,400", cx: 300, cy: 364 }, // 8
  { points: "400,400 300,300 400,200", cx: 364, cy: 300 }, // 9
  { points: "400,200 300,100 200,200 300,300", cx: 300, cy: 200 }, // 10
  { points: "400,200 300,100 400,0", cx: 364, cy: 100 }, // 11
  { points: "400,0 300,100 200,0", cx: 300, cy: 36 }, // 12
];

export default function KundliChart({ kundli }: { kundli: KundliResult }) {
  const lagnaSign = kundli.lagna.sign; // 0-11

  return (
    <svg
      viewBox="-4 -4 408 408"
      role="img"
      aria-label={`Lagna kundli chart for ${kundli.name}`}
      className="h-auto w-full max-w-[460px]"
    >
      <rect x="0" y="0" width="400" height="400" fill="#fff9ef" />

      {HOUSES.map((h, i) => {
        const houseNo = i + 1;
        const signNo = ((lagnaSign + i) % 12) + 1; // 1-12
        const inHouse = kundli.planets.filter((p) => p.house === houseNo);
        const labels = [
          ...(houseNo === 1 ? ["Asc"] : []),
          ...inHouse.map((p) => p.short + (p.retrograde && p.short !== "Ra" && p.short !== "Ke" ? "ᴿ" : "")),
        ];
        // wrap into rows of 3
        const rows: string[] = [];
        for (let k = 0; k < labels.length; k += 3) rows.push(labels.slice(k, k + 3).join(" "));

        return (
          <g key={houseNo}>
            <polygon
              points={h.points}
              fill={houseNo === 1 ? "#f6e3c2" : "transparent"}
              stroke="#2a1346"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <text
              x={h.cx}
              y={h.cy - 12}
              textAnchor="middle"
              fontSize="13"
              fill="#8a6f9e"
            >
              {signNo}
            </text>
            <text textAnchor="middle" fontSize="15" fontWeight={600} fill="#2a1346">
              {rows.map((row, r) => (
                <tspan key={r} x={h.cx} y={h.cy + 8 + r * 17}>
                  {row}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
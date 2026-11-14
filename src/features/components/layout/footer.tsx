import Link from "next/link";
import Image from "next/image";

const columns = [
    {
        title: "Services",
        links: [
            { label: "Puja", href: "/puja" },
            { label: "Chadhava", href: "/chadhava" },
            { label: "Panchang", href: "/panchang" },
            { label: "Temples", href: "/temples" },
        ],
    },
    {
        title: "Explore",
        links: [
            { label: "Library", href: "/library" },
            { label: "Astro Tools", href: "/astro-tools" },
            { label: "Login", href: "/login" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#2a1740] text-white">
            <div className="mx-auto grid max-w-[1300px] gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
                <div>
                    <Link
                        href="/"
                        className="mr-3 flex items-center gap-2 font-[family-name:var(--font-serif)] text-xl text-white"
                    >
                        <Image
                            src="/Shri-Logo.png"
                            alt="Shrivandana Logo"
                            width={800}
                            height={300}
                            className="h-15 w-auto"
                        />
                    </Link>                    <p className="mt-3 max-w-xs text-sm text-white/80">
                        Connecting devotees, pandits and temples. [Company name, address]
                    </p>
                </div>

                {columns.map((col) => (
                    <div key={col.title}>
                        <h4 className="text-sm font-semibold">{col.title}</h4>
                        <ul className="mt-3 space-y-2 text-sm text-white/80">
                            {col.links.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="hover:text-white">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <p className="border-t border-white/10 py-4 text-center text-xs text-white/80">
                © 2026 Shrivandana. Prototype design.
            </p>
        </footer>
    );
}
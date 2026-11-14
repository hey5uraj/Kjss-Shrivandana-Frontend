
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { page: "/", label: "Home" },
  { page: "/puja", label: "Puja" },
  { page: "/chadhava", label: "Chadhava" },
  { page: "/panchang", label: "Panchang" },
  { page: "/temples", label: "Temples" },
  { page: "/library", label: "Library" },
  { page: "/astro-tools", label: "Astro Tools" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF6EC] shadow-md">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/Shri-Logo.png"
            alt="Shrivandana Logo"
            width={800}
            height={300}
            className="h-8 w-auto sm:h-10 md:h-12 lg:h-15"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
        >
          {links.map(({ page, label }) => {
            const active =
              page === "/"
                ? pathname === "/"
                : pathname === page ||
                  pathname.startsWith(`${page}/`);

            return (
              <Link
                key={page}
                href={page}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    // ? "bg-[#47306f] text-[#f0a81c]"
                    // : "text-[#2A1548] font-medium hover:bg-[#47306f]/50 hover:text-white"
                    ? "text-[#f0a81c] font-medium"
                    : "text-[#2A1548] font-medium  hover:text-[#f0a81c]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="ml-auto flex shrink-0 items-center gap-3 text-sm font-medium text-[#2A1548] lg:ml-0">
          <span className="whitespace-nowrap">EN | हिन्दी</span>

          <Link
            href="/login"
            className="whitespace-nowrap rounded-full bg-[#f0a81c] px-5 py-2 font-semibold text-[#2a1740] transition-colors hover:bg-amber-400"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="flex items-center gap-1 overflow-x-auto px-4 pb-3 text-sm text-white/90 lg:hidden"
      >
        {links.map(({ page, label }) => {
          const active =
            page === "/"
              ? pathname === "/"
              : pathname === page ||
                pathname.startsWith(`${page}/`);

          return (
            <Link
              key={page}
              href={page}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 transition-colors ${
                active
                  ? "bg-[#47306f] text-[#f0a81c]"
                  : "hover:bg-[#47306f]/50 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  const isEn = path.startsWith("/en");

  return (
    <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Site name */}
        <Link href={isEn ? "/en" : "/"} className="flex items-baseline gap-2 group">
          <span className="text-charcoal text-sm font-medium tracking-wide">
            {isEn ? "From Idea to Moat" : "從點子到護城河"}
          </span>
          <span className="text-warm-gray text-xs font-en">
            {isEn ? "/ 從點子到護城河" : "/ From Idea to Moat"}
          </span>
        </Link>

        {/* Language toggle */}
        <Link
          href={isEn ? "/" : "/en"}
          className="flex items-center gap-1 border border-warm-gray rounded-full px-4 py-1.5 text-xs font-en text-warm-gray hover:border-charcoal hover:text-charcoal transition-colors"
        >
          <span className={isEn ? "text-charcoal font-medium" : ""}>中</span>
          <span className="mx-0.5 opacity-40">/</span>
          <span className={!isEn ? "text-charcoal font-medium" : ""}>EN</span>
        </Link>
      </div>
    </nav>
  );
}

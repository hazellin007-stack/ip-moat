"use client";
import { useEffect, useState } from "react";

const sections = [
  { num: "01", cn: "IP 思維底層邏輯", href: "part1" },
  { num: "02", cn: "一個發明家的故事", href: "part2" },
  { num: "03", cn: "六個致命陷阱", href: "part3" },
  { num: "04", cn: "30 天護城河框架", href: "part4" },
];

export default function SidebarTOC() {
  const [active, setActive] = useState("part1");

  useEffect(() => {
    const OFFSET = 120;

    function onScroll() {
      let current = sections[0].href;
      for (const s of sections) {
        const el = document.getElementById(s.href);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) current = s.href;
      }
      setActive(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 pt-14">
        <p className="text-xs font-en font-semibold tracking-widest text-warm-gray uppercase mb-4">
          Contents
        </p>

        <nav className="flex flex-col gap-0">
          {sections.map((s) => {
            const isActive = active === s.href;
            return (
              <a
                key={s.href}
                href={`#${s.href}`}
                className={`flex items-start gap-2 py-2 pl-3 border-l-2 text-xs leading-snug transition-colors ${
                  isActive
                    ? "border-coral text-coral font-medium"
                    : "border-transparent text-warm-gray hover:text-charcoal hover:border-rule"
                }`}
              >
                <span className="font-en shrink-0 opacity-50 mt-px">{s.num}</span>
                <span>{s.cn}</span>
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 flex items-center gap-1.5 text-xs text-warm-gray hover:text-coral transition-colors pl-3"
        >
          <span>↑</span>
          <span>返回頂部</span>
        </button>
      </div>
    </aside>
  );
}

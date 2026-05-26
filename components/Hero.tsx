import Link from "next/link";

const toc = [
  {
    num: "01",
    cn: "IP 思維底層邏輯",
    en: "The IP Mindset",
    desc: "打破五個你以為對的觀念",
    href: "#part1",
  },
  {
    num: "02",
    cn: "一個發明家的故事",
    en: "An Inventor's Story",
    desc: "沒有重來機會，卻靠著懂規則逆轉全局",
    href: "#part2",
  },
  {
    num: "03",
    cn: "六個致命陷阱",
    en: "Fatal IP Mistakes",
    desc: "六種你在穿越劇裡見過的角色，六條不同的死路",
    href: "#part3",
  },
  {
    num: "04",
    cn: "30天護城河框架",
    en: "30-Day Moat Framework",
    desc: "從點子到保護，一步一步來",
    href: "#part4",
  },
];

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-0">
      {/* Badge — coral-lt is defined in the palette, subtle enough */}
      <div className="inline-flex items-center gap-1.5 bg-coral-lt text-coral text-xs font-en font-semibold tracking-widest px-3 py-1.5 rounded-full mb-6 uppercase">
        IP Strategy · 知識產權策略
      </div>

      {/* Hero row */}
      <div className="flex items-start gap-4 md:gap-6">
        {/* Decorative 01 — use rule color so it recedes into background */}
        <div
          className="font-display text-rule select-none leading-none shrink-0"
          style={{ fontSize: "clamp(72px, 10vw, 120px)" }}
          aria-hidden
        >
          01
        </div>

        {/* Vertical bar + headline — neutral rule border */}
        <div className="border-l-2 border-rule pl-4 md:pl-6 pt-1">
          <h1
            className="font-medium text-charcoal leading-tight tracking-tight"
            style={{ fontSize: "clamp(26px, 4vw, 52px)" }}
          >
            你重生了，時間倒退五年。
            <br />
            你記得那次<span className="underline-coral">創業失敗</span>？
            <br />
            這次你不再掉入陷阱。
          </h1>

          <p className="font-en mt-4 text-warm-gray" style={{ fontSize: "clamp(13px, 1.3vw, 17px)" }}>
            A second-chance field guide to IP moats{" "}
            <span className="text-warm-gray">— by a patent attorney</span>
          </p>

          <p className="text-warm-gray text-sm mt-2">
            By Hazel Lin · 30 min read · 專利師 · 商標師 · IP策略顧問
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-10 border-t border-rule pt-6 grid grid-cols-3 divide-x divide-rule">
        {[
          { num: "4",    label: "Parts",   coral: false },
          { num: "30",   label: "min read", coral: false },
          { num: "100%", label: "Free",    coral: true  },
        ].map(({ num, label, coral }) => (
          <div key={label} className="flex items-baseline gap-2 px-4 first:pl-0">
            <span className={`font-display text-3xl md:text-4xl leading-none ${coral ? "text-coral" : "text-charcoal"}`}>
              {num}
            </span>
            <span className="font-en text-warm-gray text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* TOC Cards — 01 uses coral accent, 02–04 use blue-gray */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {toc.map((item, i) => (
          <Link
            key={item.num}
            href={item.href}
            className={`group bg-bg-card p-4 rounded-sm transition-colors border-t-2 ${
              i === 0 ? "border-coral hover:bg-coral-lt" : "border-blue-gray hover:bg-bg-card-b"
            }`}
          >
            <div className={`font-display text-xl leading-none mb-2 ${i === 0 ? "text-coral" : "text-warm-gray"}`}>
              {item.num}
            </div>
            <div className="text-charcoal font-medium text-sm leading-snug mb-1">{item.cn}</div>
            <div className="font-en text-warm-gray text-xs mb-2">{item.en}</div>
            <div className="text-warm-gray text-xs leading-relaxed border-t border-rule pt-2">{item.desc}</div>
          </Link>
        ))}
      </div>

      <hr className="section-rule mt-10" />
    </section>
  );
}

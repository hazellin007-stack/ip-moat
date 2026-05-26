interface Props {
  id: string;
  partNum: string;
  titleCn: string;
  titleEn: string;
  children: React.ReactNode;
}

export default function ArticleSection({ id, partNum, titleCn, titleEn, children }: Props) {
  return (
    <section id={id} className="py-16">
      {/* Part header */}
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-display text-coral text-4xl leading-none shrink-0">{partNum}</span>
        <div className="border-l border-rule pl-4">
          <h2 className="text-charcoal text-2xl md:text-3xl font-medium leading-snug">{titleCn}</h2>
          <p className="font-en text-warm-gray text-sm mt-0.5">{titleEn}</p>
        </div>
      </div>

      <hr className="section-rule mb-10" />

      {/* Content */}
      <div className="prose-article max-w-2xl">{children}</div>

      <hr className="section-rule mt-16" />
    </section>
  );
}

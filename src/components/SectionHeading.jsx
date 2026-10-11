import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal className="flex justify-center">
        <span className="eyebrow">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-400" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-400" />
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

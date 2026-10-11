import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

const KIND = {
  work: { icon: "briefcase", label: "Internship", tone: "brand" },
  education: { icon: "sparkle", label: "Education", tone: "cyan" },
  award: { icon: "check", label: "Achievement", tone: "amber" },
};

const TONE = {
  brand: "bg-brand-500/15 text-brand-300 ring-brand-400/25",
  cyan: "bg-glow-400/15 text-glow-400 ring-glow-400/25",
  amber: "bg-amber-400/15 text-amber-300 ring-amber-400/25",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been"
          intro="Internship, education and the milestones along the way."
        />

        <div className="relative mt-14">
          {/* vertical rail (not wrapped in Reveal, so it never disappears) */}
          <span
            aria-hidden="true"
            className="absolute left-[13.5px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-500/60 via-white/12 to-transparent sm:block"
          />

          <ol className="space-y-5">
            {experience.map((item, i) => {
              const meta = KIND[item.kind] ?? KIND.work;
              return (
                <Reveal
                  as="li"
                  key={`${item.company}-${item.period}`}
                  delay={i * 110}
                  className="relative sm:pl-14"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 hidden h-[27px] w-[27px] place-items-center rounded-full border border-white/12 bg-ink-900 sm:grid"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-400 to-glow-400" />
                  </span>

                  <article className="card card-hover h-full p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ${TONE[meta.tone]}`}
                      >
                        <Icon name={meta.icon} className="h-3.5 w-3.5" />
                        {meta.label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
                        <Icon name="clock" className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-[0.95rem] font-medium text-brand-300">
                      {item.company}
                      {item.location && (
                        <span className="font-normal text-ink-400">
                          {" "}
                          · {item.location}
                        </span>
                      )}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-ink-400">
                      {item.detail}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

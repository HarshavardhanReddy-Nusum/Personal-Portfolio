import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          {/* prose */}
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-[1.02rem] leading-[1.85] text-ink-400">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={270}>
              <ul className="mt-8 space-y-3.5">
                {about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-ink-300">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* quick facts */}
          <Reveal delay={150}>
            <div className="card sticky top-28 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Icon name="sparkle" className="h-4 w-4 text-brand-300" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-300">
                  Quick facts
                </h3>
              </div>

              <dl className="mt-6 space-y-5">
                {[
                  { icon: "mapPin", label: "Based in", value: profile.location },
                  { icon: "mail", label: "Email", value: profile.email },
                  { icon: "clock", label: "Response time", value: "Within 24 hours" },
                  { icon: "briefcase", label: "Status", value: profile.availability },
                ].map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 flex items-start gap-2.5 text-[0.95rem] text-ink-200">
                      <Icon
                        name={fact.icon}
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                      />
                      <span className="break-words">{fact.value}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full">
                <Icon name="download" className="h-4 w-4" />
                Download résumé
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

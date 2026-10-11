import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills, toolbelt } from "../data/content";

/** Progress bar that fills when it scrolls into view. */
function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-ink-200">{name}</span>
        <span className="font-display text-xs font-semibold tabular-nums text-ink-400">
          {level}%
        </span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/7">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-glow-400 transition-[width] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: active ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for"
          intro="A pragmatic stack built over years of shipping production work — plus the habits that keep it maintainable."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 90}>
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/25 to-glow-400/15 text-brand-300 ring-1 ring-inset ring-white/10">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[0.98rem] font-semibold tracking-tight text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="mt-6 flex flex-1 flex-col gap-4">
                  {group.items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 120}
                    />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* toolbelt chips */}
        <Reveal delay={200} className="mt-14">
          <div className="card p-7 sm:p-9">
            <h3 className="text-center font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-400">
              Also in the toolbelt
            </h3>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {toolbelt.map((tool) => (
                <li key={tool}>
                  <span className="inline-block cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-white">
                    {tool}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

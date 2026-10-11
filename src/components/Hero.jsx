import Icon from "./Icon";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { profile, socials, stats } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ── copy ── */}
        <div>
          <Reveal>
            <span className="eyebrow rounded-full border border-brand-400/25 bg-brand-500/10 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-glow-400" />
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-4 font-display text-xl font-medium text-ink-300 sm:text-2xl">
              {profile.role}
              <span className="mx-3 hidden text-ink-600 sm:inline">/</span>
              <span className="hidden text-ink-400 sm:inline">
                {profile.location}
              </span>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={310}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                View my work
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-ghost"
              >
                Get in touch
              </button>
            </div>
          </Reveal>

          {/* socials */}
          <Reveal delay={380}>
            <ul className="mt-9 flex items-center gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-white"
                  >
                    <Icon name={s.icon} className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── photo ── */}
        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <Photo
            src={profile.photo}
            initials={profile.initials}
            name={profile.name}
          />
        </Reveal>
      </div>

      {/* ── stats bar ── */}
      <div className="mx-auto mt-20 max-w-6xl sm:mt-24">
        <Reveal className="card flex flex-wrap items-stretch gap-y-8 p-7 sm:p-9">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "min-w-[9rem] flex-1 text-center",
                i > 0 ? "sm:border-l sm:border-white/8" : "",
              ].join(" ")}
            >
              <div className="font-display text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none mt-16 hidden justify-center sm:flex">
        <Icon
          name="arrowDown"
          className="h-5 w-5 animate-bounce text-ink-600"
        />
      </div>
    </section>
  );
}

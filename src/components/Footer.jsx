import Icon from "./Icon";
import { navLinks, profile, socials } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/8 px-5 pb-10 pt-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* brand */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-2.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-glow-400 font-display text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
                {profile.initials}
              </span>
              <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
                {profile.name}
              </span>
            </a>
            <p className="max-w-xs text-sm text-ink-400">
              {profile.role} crafting fast, accessible experiences from{" "}
              {profile.location}.
            </p>
          </div>

          {/* links + socials */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink-400 transition-all duration-300 hover:border-brand-400/50 hover:text-white"
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with
            <span className="text-rose-400" aria-label="love">
              ♥
            </span>
            , React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

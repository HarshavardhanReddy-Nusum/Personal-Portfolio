import { useEffect, useState } from "react";
import Icon from "./Icon";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // shrink + blur on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // At the very top no section owns the viewport, so clear the highlight.
      if (y < 160) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/8 bg-ink-950/75 backdrop-blur-xl"
            : "border-b border-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
          {/* logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-glow-400 font-display text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-105">
              {profile.initials}
            </span>
            <span className="hidden font-display text-[0.95rem] font-semibold tracking-tight text-white sm:block">
              {profile.name}
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={[
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    active === link.id
                      ? "text-white"
                      : "text-ink-400 hover:text-ink-200",
                  ].join(" ")}
                >
                  {link.label}
                  <span
                    className={[
                      "absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-brand-400 to-glow-400 transition-all duration-300",
                      active === link.id ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost hidden !px-4 !py-2 text-sm sm:inline-flex"
            >
              <Icon name="download" className="h-4 w-4" />
              Resume
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-ink-200 transition-colors hover:border-brand-400/50 hover:text-white md:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-ink-950/80 backdrop-blur-md transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-x-4 top-24 rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-500",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
                  className={[
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[0.95rem] font-medium transition-all duration-300",
                    active === link.id
                      ? "bg-brand-500/15 text-white"
                      : "text-ink-300 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 opacity-40"
                  />
                </button>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-3 w-full text-sm"
          >
            <Icon name="download" className="h-4 w-4" />
            Download résumé
          </a>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

/**
 * Profile photo with a graceful fallback.
 * Drop your real photo at: public/images/profile.jpg
 * Until then, a styled monogram avatar is rendered instead.
 */
export default function Photo({ src, initials, name, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* orbiting glow behind the photo */}
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[2.5rem] bg-[conic-gradient(from_180deg,rgba(99,102,241,0.55),rgba(34,211,238,0.35),rgba(168,85,247,0.45),rgba(99,102,241,0.55))] opacity-70 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
        {failed ? (
          <div
            className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(99,102,241,0.35),rgba(11,11,19,0.95))]"
            role="img"
            aria-label={name}
          >
            <span className="font-display text-6xl font-bold tracking-tight gradient-text sm:text-7xl">
              {initials}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-400">
              Add photo
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={`${name} — portrait`}
            loading="eager"
            onError={() => setFailed(true)}
            className="aspect-[4/5] w-full object-cover"
          />
        )}

        {/* subtle inner vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,12,0.7),transparent_45%)]"
        />
      </div>

      {/* floating availability pill */}
      <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-ink-900/90 px-4 py-2 text-xs font-medium text-ink-200 shadow-xl backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Available for work
      </div>
    </div>
  );
}

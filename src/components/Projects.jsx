import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  const featured = project.featured;

  return (
    <Reveal
      delay={index * 80}
      className={featured ? "sm:col-span-2 xl:col-span-1" : ""}
    >
      <article className="card card-hover group flex h-full flex-col overflow-hidden">
        {/* visual header */}
        <div
          className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient} sm:h-44`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(255,255,255,0.28),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,19,0.85),transparent_65%)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-black/25 text-white ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <Icon name={project.icon} className="h-7 w-7" />
            </span>
          </div>

          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
            {project.year}
          </span>

          {featured && (
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ink-950">
              <Icon name="sparkle" className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-brand-300">
              {project.title}
            </h3>
            {project.role ? (
              <span className="shrink-0 whitespace-nowrap rounded-md bg-white/5 px-2 py-1 text-[0.7rem] font-medium text-ink-400">
                {project.role}
              </span>
            ) : null}
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-1 text-[0.72rem] font-medium text-ink-300"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 border-t border-white/8 pt-5">
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
            >
              Live demo
              <Icon name="external" className="h-4 w-4" />
            </a>
            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
            <a
              href={project.links.source}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-400 transition-colors hover:text-white"
            >
              Source
              <Icon name="github" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          intro="A selection of work across product interfaces, APIs and open source — each one solved a real problem for a real user."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex justify-center">
          {projects.length > 4 && (
            <button
              onClick={() => setShowAll((v) => !v)}
              className="btn-ghost"
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `Show all ${projects.length} projects`}
              <Icon
                name="arrowDown"
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}

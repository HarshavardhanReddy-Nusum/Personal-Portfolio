import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contact, profile, socials } from "../data/content";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (key) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: "" } : prev));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Tell me a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // If a form endpoint is configured (Web3Forms, Formspree, your API…),
    // POST to it. Otherwise fall back to a pre-filled mailto: link.
    const hasKey = Boolean(contact.formAccessKey);

    if (contact.formEndpoint && hasKey) {
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: contact.formAccessKey,
            subject: form.subject || "New portfolio enquiry",
            from_name: form.name,
            name: form.name,
            email: form.email,
            message: form.message,
            botcheck: "", // honeypot — must stay empty for humans
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.success !== true)
          throw new Error(data.message || `Request failed: ${res.status}`);
        setStatus("sent");
        setForm(EMPTY);
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm(EMPTY);
  };

  const fieldError = (key) =>
    errors[key] ? (
      <p className="mt-1.5 text-xs font-medium text-rose-400" role="alert">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          intro={contact.blurb}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ── contact details ── */}
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card card-hover group flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Email
                </span>
                <span className="block truncate text-[0.95rem] text-ink-200 transition-colors group-hover:text-white">
                  {profile.email}
                </span>
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="card card-hover group flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Phone
                </span>
                <span className="block truncate text-[0.95rem] text-ink-200 transition-colors group-hover:text-white">
                  {profile.phone}
                </span>
              </span>
            </a>

            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                <Icon name="mapPin" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Location
                </span>
                <span className="block truncate text-[0.95rem] text-ink-200">
                  {profile.location}
                </span>
              </span>
            </div>

            <div className="card p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Find me online
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-white"
                    >
                      <Icon name={s.icon} className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ── form ── */}
          <Reveal delay={110}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink-300"
                  >
                    Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    className="field"
                  />
                  {fieldError("name")}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink-300"
                  >
                    Email <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    className="field"
                  />
                  {fieldError("email")}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-ink-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project enquiry"
                  value={form.subject}
                  onChange={update("subject")}
                  className="field"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-ink-300"
                >
                  Message <span className="text-brand-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about what you're working on…"
                  value={form.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  className="field resize-y"
                />
                {fieldError("message")}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Icon name="send" className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* status banners */}
              <div aria-live="polite" className="mt-4">
                {status === "sent" && (
                  <p className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                    <Icon name="check" className="h-4 w-4" />
                    Thanks — your message is on its way. I&apos;ll reply soon!
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-center text-sm text-rose-300">
                    Something went wrong. Please email me directly at{" "}
                    <a
                      className="underline underline-offset-2"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                    </a>
                    .
                  </p>
                )}
              </div>

              <p className="mt-4 text-center text-xs text-ink-400">
                Prefer email? Reach me at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-brand-300 underline underline-offset-2 hover:text-white"
                >
                  {profile.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

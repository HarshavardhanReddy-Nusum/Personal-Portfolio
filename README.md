# Personal Portfolio

A dark, modern single-page portfolio built with **React + Vite + Tailwind CSS v4**.
Sections: **Hero (with photo) → About → Skills → Projects → Experience → Contact**.

---

## ▶️ Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production bundle → dist/
npm run preview  # serve the production build locally
```

---

## ✏️ What to edit

Almost everything lives in **`src/data/content.js`** — name, role, photo path,
email, phone, socials, stats, about text, skills, toolbelt, projects,
experience timeline, contact copy and nav links.

| Thing | Where |
| --- | --- |
| Photo | `public/images/profile.jpg` |
| Résumé | `public/resume.pdf` |
| All site copy & data | `src/data/content.js` |
| Colours, fonts, card/button styles | `src/index.css` (`@theme` + `@layer components`) |
| Page structure / section order | `src/App.jsx` |

> **Photo fallback:** if `public/images/profile.jpg` is missing, a styled
> monogram avatar is rendered automatically — the layout never breaks.

---

## 📬 Contact form

By default the form validates input and opens a **pre-filled `mailto:`** —
works with zero backend.

To make it POST to a real endpoint, set `formEndpoint` in `src/data/content.js`:

```js
export const contact = {
  // …
  formEndpoint: "https://formspree.io/f/xxxxxxx",
};
```

Supported: Formspree, Web3Forms, Basin, or your own JSON API.

---

## 🚀 Deploying

The build uses `base: "./"` so `dist/` works from **any** sub-path.

- **Netlify / Vercel** — build command `npm run build`, publish dir `dist`.
- **GitHub Pages** — push `dist/` to the `gh-pages` branch, or use the
  Actions workflow of your choice.

---

## 🧱 Structure

```
src/
├─ App.jsx                 # section order
├─ index.css               # theme tokens + shared component classes
├─ data/content.js         # ← all editable content
└─ components/
   ├─ Navbar.jsx           # sticky nav, scroll-spy, mobile drawer
   ├─ Hero.jsx             # photo, headline, CTAs, stats
   ├─ Photo.jsx            # <img> + graceful fallback avatar
   ├─ About.jsx            # bio + quick-facts card
   ├─ Skills.jsx           # animated skill bars + toolbelt chips
   ├─ Projects.jsx         # project cards + "show all" toggle
   ├─ Experience.jsx       # timeline (internship / education / award)
   ├─ Contact.jsx          # validated form + contact cards
   ├─ Footer.jsx
   ├─ SectionHeading.jsx   # shared section header
   ├─ Reveal.jsx           # IntersectionObserver scroll-reveal
   └─ Icon.jsx             # inline SVG icon set (no icon dependency)
```

Accessibility: skip-to-content link, focus-visible outlines, `aria-live`
form status, labelled inputs, and full `prefers-reduced-motion` support.

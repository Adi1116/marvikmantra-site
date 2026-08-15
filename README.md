# MarvikMantra — new site (Astro + Tailwind)

A from-scratch rebuild of marvikmantra.com. Static site, no WordPress, no
plugin attack surface, no CMS admin panel — you edit plain data files in
VS Code and redeploy.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Editing content

Everything you'll want to change day-to-day lives in `src/data/`:

- `src/data/site.ts` — phone numbers, addresses, social links, stats (5000+,
  150+, 96%, 18+), founders, mission/vision.
- `src/data/courses.ts` — the 4 programs (Manan-Manthan-Manas, Medha &
  Magnum, Momentum JEE, Momentum NEET). Each course object drives both its
  card and its full detail page automatically — add a new course by adding
  a new object here with a unique `slug`.
- `src/data/teachers.ts` — faculty bios. Add/remove teachers by
  adding/removing objects in the array.

You don't need to touch anything under `src/components/` or `src/pages/`
to update text/dates/numbers — just edit the data files and the site
rebuilds itself from them.

## Before you launch — 3 things to finish

1. **Contact form has no backend yet.** Astro's static build can't process
   form submissions on its own. Wire the form in `src/pages/contact.astro`
   to a form service (Formspree, Getform) or a small serverless function.
   Look for the `TODO (dev note)` comment in that file.
2. **Privacy policy is a placeholder.** `src/pages/privacy-policy.astro`
   needs real, lawyer-reviewed text — the contact form collects data from
   parents/students, so this matters.
3. **Images aren't migrated yet.** I used the real copy from the current
   site but didn't pull over photos/logo/video, since I couldn't verify
   which files on the WordPress media library are original vs. safe to
   reuse given the site was compromised (see below). Grab the logo and any
   photos you trust directly from your own files and drop them in `public/`.

## Why rebuild instead of patch WordPress

The current site has spam links (gambling promo pages) injected directly
into the homepage content — a sign of a compromised plugin/theme. This
rebuild has no WordPress admin, no PHP, no plugin ecosystem, so that
specific attack surface is gone. Recommend pulling any real course/teacher
text updates from the live WP admin by hand (copy from the editor, not raw
HTML) rather than exporting/importing the database, so nothing injected
carries over.

## Deploying

- **Easiest:** push this repo to GitHub, connect it to Vercel or Netlify —
  both auto-deploy on push and handle TLS for free.
- **Self-hosted (Docker/Kubernetes):** `npm run build` produces static
  files in `dist/`. Serve them with a minimal Nginx image — no Node.js
  runtime needed in production since this is a fully static site.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling, tokens defined in
  `src/styles/global.css`

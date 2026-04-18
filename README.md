# Amble Storage

Modern, professional website for **Amble Storage**, a self-storage business in North Dublin.

## Stack

Pure static site — HTML, CSS, vanilla JS. No build step. Loads fast, deploys anywhere.

## Develop

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Structure

- `index.html` — all content (hero, about, solutions, why, testimonials, pricing, FAQ, contact)
- `styles.css` — design system (tokens, responsive layout, components)
- `script.js` — nav toggle, reveal-on-scroll, form UX
- `images/` — favicon and local assets

## Forms

The availability and contact forms currently show a success confirmation on submit and do not POST anywhere. To hook up real email delivery, point the form `action` / JS at your preferred service (Formspree, Netlify Forms, a simple backend, etc.).

## Deploy

Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc.

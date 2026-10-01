# Vipul Singh — Portfolio

Static one-page site: promo, intro and walkthrough videos for mobile apps.
Plain HTML + CSS + a tiny script. No build step, no frameworks.

```
index.html              the page
css/styles.css          fonts, design tokens (colors, type), components, page styles
js/main.js              sizes the embedded Google Form; click-to-play for sample videos
assets/img/             portrait photo, favicon + PNG icons, og-image.jpg (1200×630 link-preview image)
robots.txt, sitemap.xml crawler files (point at the live URL; AI crawlers allowed explicitly)
llms.txt                plain-text summary of the service for AI assistants (ChatGPT, Claude, Gemini, Perplexity)
site.webmanifest        app name + icons for browsers / home screens
assets/fonts/           Archivo + Instrument Serif (self-hosted)
Vipul Singh Portfolio.html   original design export (reference only, not used by the site)
```

## Run locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173. Opening `index.html` directly by double-clicking also works.

## Common edits

| What | Where |
|---|---|
| WhatsApp number | every `wa.me/919958929886` link in `index.html` (find & replace) |
| Order form | Google Form embedded in the **Order form** section of `index.html` — edit questions in Google Forms; its height is set in `js/main.js` (`PAGE1_HEIGHTS`) to fit the form's first page; longer pages scroll inside the form. Re-measure if you change page 1's questions |
| Email | `hello@vipulsingh.com` in `index.html` — the email button near the bottom (its `mailto:` link and its text) |
| Prices | Pricing section in `index.html`, the pre-filled WhatsApp messages in the pricing links, and the package options in the Google Form |
| Colors / fonts | `:root` variables at the top of section 2 in `css/styles.css` (`--color-accent`, `--color-bg`, …) |
| FAQ | `<details>` blocks in the FAQ section of `index.html` |
| Photo | Replace `assets/img/vipul-singh.jpg` (portrait, ~720px wide) |

### Sample videos

The **Work** section shows four YouTube videos (promo + intro, each 9:16 and 16:9). Each one is an
`<a class="yt" data-yt="VIDEO_ID">` link with a thumbnail. Clicking it loads the YouTube player in place
(`js/main.js`). To swap a video, replace its ID in three spots on that line: `href`, `data-yt` and the
thumbnail `src` (`https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg`).

## Deploy (Netlify)

The site is connected to Netlify from the GitHub repo. Every push to `main` redeploys it automatically.
`netlify.toml` tells Netlify there's no build step and the site is served from the repo root.

## SEO

The live URL `https://vipul-singh.netlify.app/` is written into `index.html` (canonical link, `og:url`,
`og:image`, `twitter:image` and the JSON-LD block), `robots.txt` and `sitemap.xml`. If the site moves to
another domain, find & replace that URL in those three files.

- **Structured data** — the `<script type="application/ld+json">` block in `<head>` describes the person,
  the service with its three prices, and the FAQ. When you change a price or an FAQ answer on the page,
  change it there too. Check it with Google's [Rich Results Test](https://search.google.com/test/rich-results).
- **Link-preview image** — `assets/img/og-image.jpg` (1200×630). Regenerate it if the headline, price or photo changes.
- **Sitemap** — update `<lastmod>` in `sitemap.xml` after meaningful content changes.
- **Search Console** — add the site in [Google Search Console](https://search.google.com/search-console)
  (and Bing Webmaster Tools), then submit `https://vipul-singh.netlify.app/sitemap.xml`.
- `Vipul Singh Portfolio.html` is marked `noindex` so search engines don't index the reference export.

### AI assistants (ChatGPT, Claude, Gemini, Perplexity)

- `robots.txt` explicitly allows the AI search and browsing crawlers — don't block them.
- `llms.txt` is a plain-text fact sheet: what the service is, who it's for, prices, delivery, links.
  **Keep it in sync with the page** whenever prices, packages or contact details change.
- FAQ answers are written so an assistant can quote them directly ("How much does an app promo video cost?").
  New FAQs go both in the page and in the FAQPage part of the JSON-LD block.
- AI answers mostly come from web search (ChatGPT search leans on Bing, Gemini on Google), so submit the sitemap
  to **Bing Webmaster Tools** as well as Google Search Console, and get the site mentioned and linked on other sites.

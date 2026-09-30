# Vipul Singh — Portfolio

Static one-page site: promo, intro and walkthrough videos for mobile apps.
Plain HTML + CSS + a tiny script. No build step, no frameworks.

```
index.html              the page
css/styles.css          fonts, design tokens (colors, type), components, page styles
js/main.js              sizes the embedded Google Form; click-to-play for sample videos
assets/img/             portrait photo, favicon
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

After the first deploy, set the absolute URL in the `og:image` meta tag in `index.html`
(e.g. `https://your-site.netlify.app/assets/img/vipul-singh.jpg`) so link previews show the photo.

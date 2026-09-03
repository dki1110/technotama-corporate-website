# technotama-corporate-website

Corporate website for Technotama LLC (合同会社Technotama).

## Overview

A static corporate website showcasing engineering services including:
- Business app improvement and system enhancement
- Field device integration (BLE, etc.)
- CTI/CRM integration and phone automation
- AI utilization support

## Structure

```
├── index.html            # Japanese homepage
├── index_en.html         # English homepage
├── contact.html          # Japanese contact page
├── contact_en.html       # English contact page
├── privacy.html          # Japanese privacy policy
├── privacy_en.html       # English privacy policy
├── 404.html              # Custom 404 page (used automatically by GitHub Pages)
├── styles.css            # Shared stylesheet (design tokens in :root)
├── script.js             # Mobile nav toggle + scroll reveal animation
├── favicon.svg           # Favicon (SVG)
├── apple-touch-icon.png  # iOS home screen icon (180x180)
└── images/
    ├── cat_tama.png      # Mascot image (PNG fallback)
    ├── cat_tama.webp     # Mascot image (WebP, served via <picture>)
    └── ogp.png           # OGP image for social sharing (1200x630)
```

## Features

- Bilingual support (Japanese / English) with hreflang/canonical SEO setup
- Responsive design with hamburger menu on mobile
- Accessibility basics: skip link, SVG service icons (no emoji), decorative images with empty alt
- Noto Sans JP web font and scroll reveal animation (respects prefers-reduced-motion)
- OGP / Twitter Card meta tags, favicon, and Organization JSON-LD
- Google Forms integration for contact
- Sticky footer layout

## Development

This is a static website with no build process required. Simply open `index.html` in a browser or serve with any static file server.

```bash
# Serve with Python
python -m http.server 8000

# Serve with Node.js (npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Deployment

The site is hosted on GitHub Pages and served at https://technotama.com/.

- Pushing to `main` deploys automatically (Settings > Pages: Source = `main` branch, `/ (root)` folder).
- The custom domain is set by the `CNAME` file in the repository root; DNS for `technotama.com` points to GitHub Pages and "Enforce HTTPS" is enabled in the Pages settings.
- `sitemap.xml` is static: update the `<lastmod>` values when pages change.

## License

All rights reserved. Copyright 2026 Technotama LLC.

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
    ├── cat_tama.png      # Mascot image
    └── ogp.png           # OGP image for social sharing (1200x630)
```

## Features

- Bilingual support (Japanese / English) with hreflang/canonical SEO setup
- Responsive design with hamburger menu on mobile
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

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select Source: `main` branch, `/ (root)` folder
4. Save

The site will be available at `https://USERNAME.github.io/technotama-corporate-website/`

### Custom Domain (Optional)

1. Add CNAME record at your DNS provider:
   ```
   www.yourdomain.com -> USERNAME.github.io
   ```
2. Enter custom domain in GitHub Pages settings
3. Enable "Enforce HTTPS"

## License

All rights reserved. Copyright 2026 Technotama LLC.

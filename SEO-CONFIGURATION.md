# SEO Configuration Guide

Generic reference for SEO setup across all projects. For per-project tracking, use `SEO-CHECKLIST.md`.

---

## Table of Contents

1. [Meta Tags](#1-meta-tags)
2. [Open Graph & Social Media](#2-open-graph--social-media)
3. [Structured Data (Schema.org)](#3-structured-data-schemaorg)
4. [Language Support (Multilingual SEO)](#4-language-support-multilingual-seo)
5. [OG Image](#5-og-image)
6. [Sitemap & Robots.txt](#6-sitemap--robotstxt)
7. [SPA Rendering Limitation](#7-spa-rendering-limitation)
8. [Google Search Console](#8-google-search-console)
9. [Testing & Validation](#9-testing--validation)

---

## 1. Meta Tags

### Location
`index.html` — inside `<head>`

### Required Tags
```html
<title>Site Name - Short Description | Author</title>
<meta name="title" content="Site Name - Short Description | Author" />
<meta name="description" content="150–160 character description in the site's primary language." />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta name="author" content="Author Name" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://yourdomain.com/" />
```

### Optional Tags
```html
<meta name="geo.region" content="FI" />
<meta name="geo.placename" content="Finland" />
<meta name="theme-color" content="#000000" />
```

### Rules
- Title: 50–60 characters
- Description: 150–160 characters
- Write description in the site's **primary language** (not English by default)
- Each page should have a unique title and description

---

## 2. Open Graph & Social Media

### Location
`index.html` — inside `<head>`

### Tags
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:title" content="Site Name - Short Description" />
<meta property="og:description" content="Description of the site." />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
<meta property="og:locale" content="fi_FI" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yourdomain.com/" />
<meta property="twitter:title" content="Site Name - Short Description" />
<meta property="twitter:description" content="Description of the site." />
<meta property="twitter:image" content="https://yourdomain.com/og-image.jpg" />
```

### Cache Busting
When replacing the OG image, add or increment a version parameter so social media
platforms fetch the new image instead of the cached one:
```html
<meta property="og:image" content="https://yourdomain.com/og-image.jpg?v=2" />
```
Increment `?v=2` → `?v=3` on the next replacement.

---

## 3. Structured Data (Schema.org)

### Location
`index.html` — `<script type="application/ld+json">` inside `<head>`

### LocalBusiness Schema (web studio / agency)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "description": "What the business does.",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/favicon.svg",
  "image": "https://yourdomain.com/og-image.jpg",
  "email": "info@yourdomain.com",
  "telephone": "+358...",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FI"
  },
  "founder": {
    "@type": "Person",
    "name": "Full Name"
  },
  "sameAs": [
    "https://github.com/username"
  ]
}
```

### Other Common Schema Types
- `"Person"` — personal/portfolio sites
- `"Organization"` — companies
- `"LocalBusiness"` — local service businesses
- `"Product"` — product pages

### Validation
Test at: https://search.google.com/test/rich-results

---

## 4. Language Support (Multilingual SEO)

### hreflang Tags
```html
<link rel="alternate" hreflang="fi" href="https://yourdomain.com/" />
<link rel="alternate" hreflang="en" href="https://yourdomain.com/?lang=en" />
<link rel="alternate" hreflang="x-default" href="https://yourdomain.com/" />
```

### URL Strategy
| Approach | URLs | SEO quality |
|---|---|---|
| Query parameter | `/?lang=en` | Acceptable |
| Path-based (Next.js i18n) | `/en/`, `/fi/` | Better |

Query parameters work but path-based URLs are preferred by Google. If migrating to
Next.js, use its built-in i18n routing to get proper `/fi` and `/en` paths.

### Adding More Languages
1. Add a new `hreflang` tag pointing to the correct URL
2. Add language option to `LanguageContext`
3. Add content JSON files for the new language

---

## 5. OG Image

### Specification
- **Size**: 1200×630px (standard OG size)
- **Format**: JPG at 90% quality
- **Location**: `public/og-image.jpg`

### Generating from Logo (Python + Pillow)
Centers the logo on a white background canvas.
```bash
python3 << 'EOF'
from PIL import Image

width, height = 1200, 630
img = Image.new("RGB", (width, height), (255, 255, 255))
logo = Image.open("public/logo.png")
logo_ratio = min(width / logo.width, height / logo.height)
new_size = (int(logo.width * logo_ratio), int(logo.height * logo_ratio))
logo_resized = logo.resize(new_size, Image.LANCZOS)
paste_x = (width - new_size[0]) // 2
paste_y = (height - new_size[1]) // 2
img.paste(logo_resized, (paste_x, paste_y))
img.save("public/og-image.jpg", "JPEG", quality=90)
EOF
```
Requirements: Python 3 + Pillow (`pip install Pillow`)

### After Replacing the Image
1. Increment the version parameter in `index.html` (`?v=2` → `?v=3`)
2. Deploy the new image
3. Run the Facebook Sharing Debugger and click "Scrape Again"

---

## 6. Sitemap & Robots.txt

### sitemap.xml (`public/sitemap.xml`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Update `<lastmod>` when making significant content changes.

### robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml

# Block admin areas
Disallow: /admin/
```

---

## 7. SPA Rendering Limitation

### The Problem
React SPA (Single Page Application) sites built with Vite serve this to Google on first crawl:
```html
<body>
  <div id="root"></div>
</body>
```
All content loads via JavaScript. Google indexes JS-rendered content in a slower
secondary queue — sometimes days later, sometimes not reliably at all.

### Solution: Static Site Generation (SSG)
Use Next.js with SSG to pre-render all content as static HTML at build time.
Google sees the full content immediately on first crawl.

### Migration from Vite + React to Next.js
- React components carry over with minimal changes
- `useContent` hook (runtime fetch) → `fs.readFileSync` at build time
- Language switching via `?lang=en` → Next.js i18n routing (`/fi`, `/en`)
- Deploys on Netlify natively with `@netlify/plugin-nextjs`

---

## 8. Google Search Console

### Setup Steps
1. Go to https://search.google.com/search-console
2. Add property → enter domain
3. Verify ownership — download the HTML file and place it in `public/`
4. Submit sitemap: Sitemaps → enter `sitemap.xml` → Submit
5. Request indexing: URL Inspection → enter URL → Request Indexing

### Expected Indexing Timeline
| Action | Result |
|---|---|
| Sitemap submitted | Crawling starts within 1–6 hours |
| Indexing requested | Priority crawl in 24–48 hours |
| No action | Natural re-crawl in 1–2 weeks |

### Manual Sitemap Ping (Optional)
```
https://www.google.com/ping?sitemap=https://yourdomain.com/sitemap.xml
```

### Common Issues
| Issue | Solution |
|---|---|
| "URL not found" | Check correct property is selected in Search Console |
| Sitemap errors | Validate at https://www.xml-sitemaps.com/validate-xml-sitemap.html |
| Pages not indexed | Check robots.txt is not blocking; ensure HTTPS works |

---

## 9. Testing & Validation

| Tool | URL | Tests |
|---|---|---|
| Google Rich Results Test | https://search.google.com/test/rich-results | Structured data |
| Facebook Sharing Debugger | https://developers.facebook.com/tools/debug/ | Open Graph tags |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Twitter cards |
| PageSpeed Insights | https://pagespeed.web.dev/ | Core Web Vitals |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Mobile usability |
| Sitemap Validator | https://www.xml-sitemaps.com/validate-xml-sitemap.html | Sitemap XML |

---

## Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Web.dev SEO Guide](https://web.dev/learn/seo/)

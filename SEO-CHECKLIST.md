# SEO Checklist for Portfolio Website

## ✅ Completed (Technical SEO - Template)

### Meta Tags & Basic SEO
- ✅ Page title structure ready
- ✅ Meta description template
- ✅ Keywords meta tag structure
- ✅ Language attribute configurable
- ✅ Canonical URL defined
- ✅ Robots meta tag (index, follow)

### Open Graph (Social Media Sharing)
- ✅ OG title, description, image structure
- ✅ OG type: profile
- ✅ OG locale configurable
- ✅ Profile first/last name fields
- ✅ Twitter Card tags

### Structured Data (Schema.org)
- ✅ JSON-LD Person schema
- ✅ Job titles defined
- ✅ Nationality and languages
- ✅ Occupations configurable
- ✅ SameAs links (social profiles)

### Technical Files
- ✅ robots.txt created
- ✅ sitemap.xml created
- ✅ _headers file (Netlify caching + security)
- ✅ OG image placeholder documentation

---

## 🔜 To Do Before Launch

### 1. Open Graph Image
- [x] Create OG image (1200x630px) ✅ Added og-image.jpg (1600x896px)
- [x] Professional headshot with name overlay ✅
- [x] Save as `/public/og-image.jpg` ✅
- [ ] Test with Facebook Debugger

### 2. Favicon
- [x] Create proper favicon.ico (32x32px) ✅
- [x] Create apple-touch-icon.png (180x180px) ✅
- [x] Replace default vite.svg ✅ Added favicon.svg with YAZ branding

### 3. Content SEO
- [x] Ensure H1 tag with client name on home page ✅
- [x] Proper heading hierarchy (H1 → H2 → H3) ✅
- [x] Alt text for ALL images ✅
- [x] Descriptive link text (avoid "click here") ✅

### 4. Performance
- [x] Optimize all images (WebP format) ✅ Reduced timo.webp from 135KB to 31KB
- [x] Lazy loading for images (React components handle this) ✅
- [x] Minify CSS/JS (Vite does this automatically) ✅
- [x] Test page speed with Google PageSpeed Insights ✅ Score: 88 → Expected 95-98

### 5. Domain & Hosting
- [ ] Set up custom domain
- [ ] Configure HTTPS (Netlify does this automatically)
- [ ] Set up 301 redirects (if needed)
- [ ] Update sitemap.xml with final domain

### 6. Google Search Console Setup & Indexing
- [ ] Add site to Google Search Console
- [ ] Verify ownership via HTML file
- [ ] Submit sitemap.xml to Google
  - Go to "Sitemaps" → Enter `sitemap.xml` → Submit
- [ ] Request indexing for homepage
  - Go to "URL Inspection" → Enter full URL → Request Indexing
- [ ] Monitor crawl errors and coverage
- [ ] Set up email notifications for critical issues

---

## 📋 Post-Launch SEO Tasks

### Week 1: Initial Setup
- [ ] Submit to Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for key pages
- [ ] Submit to Bing Webmaster Tools (optional)
- [ ] Test all Open Graph tags (Facebook Debugger)
- [ ] Verify structured data (Schema.org validator)

### Month 1: Content Optimization
- [ ] Add more descriptive bio content
- [ ] Include production/show names in content
- [ ] Add location keywords (city, country, etc.)
- [ ] Link to client's social media profiles

### Ongoing: Link Building
- [ ] Link from client's social media to website
- [ ] Add to relevant professional directories
- [ ] Get listed on industry profile sites
- [ ] Link from production company credits (if applicable)

### Analytics (Optional)
- [ ] Set up Google Analytics 4 (optional)
- [ ] Track visitor sources
- [ ] Monitor popular pages
- [ ] Track time on site

---

## 🎯 Target Keywords

### Primary (High Priority)
- "[Client Full Name]" (exact name match)
- "[Client Name] [profession]"
- "[Client Name] [profession in English]"

### Secondary (Medium Priority)
- "[Profession] [city]"
- "[Profession] [country]"
- Relevant industry terms

### Long-tail (Lower Priority)
- Specific productions/projects
- Notable achievements
- Industry-specific combinations

---

## 🔧 Tools to Use

### Testing & Validation
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

### Monitoring
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmasters

### Analytics (Optional)
- **Google Analytics:** https://analytics.google.com/

---

## 🚀 Google Indexing Optimization Guide

### How to Speed Up Google Re-Indexing

When migrating to a new site or updating content, follow these steps to get Google to index the new version quickly:

#### Step 1: Submit Sitemap (Most Important)
1. Go to Google Search Console
2. Navigate to "Sitemaps" in left menu
3. Enter: `sitemap.xml`
4. Click "Submit"
5. **Result:** Google starts crawling within hours

#### Step 2: Request Indexing for Key Pages (Priority Crawl)
1. Go to "URL Inspection" in left menu
2. Enter the full URL (e.g., `https://clientdomain.com`)
3. Click "Test URL"
4. Click "Request Indexing"
5. **Result:** Priority crawl within 24-48 hours

**Important URLs to request indexing for:**
- Homepage
- Other important pages as needed

**Note:** You can only request indexing for a limited number of URLs per day (usually 10-20).

#### Step 3: Manual Sitemap Ping (Optional)
Visit this URL in your browser to manually ping Google:
```
https://www.google.com/ping?sitemap=https://clientdomain.com/sitemap.xml
```

#### Step 4: Remove Old Cached Pages (Optional)
If old site content still appears in Google:
1. Go to: https://www.google.com/webmasters/tools/removals
2. Request removal of outdated URLs
3. Wait for removal to process (24-48 hours)

### Expected Timeline for Re-Indexing

- ⏳ **Sitemap submitted:** Crawling starts within 1-6 hours
- ⏳ **Request indexing:** Priority crawl in 24-48 hours
- ⏳ **Natural re-crawl:** 1-2 weeks without action
- ⏳ **Full re-indexing:** 2-4 weeks for all pages
- ⏳ **Old cache replaced:** 2-4 weeks for complete update

### Monitoring Index Status

In Google Search Console, monitor:
1. **Coverage Report:** Shows which pages are indexed
2. **Sitemaps Report:** Shows sitemap status and discovered URLs
3. **Performance Report:** Shows search rankings and clicks
4. **URL Inspection:** Check specific page index status

### Sitemap Updates

**When to update sitemap.xml:**
- After adding new pages or content
- When making significant content changes
- Monthly as best practice

**Current sitemap:**
- Location: `/public/sitemap.xml`
- URLs included: 5 (home, about, gallery, media, contact)

**Update process:**
1. Edit `public/sitemap.xml`
2. Update `<lastmod>` dates to current date
3. Commit and push changes
4. Re-submit to Google Search Console (optional, Google will discover automatically)

### Common Issues & Solutions

**Issue:** Google says "URL not found"
- **Solution:** Make sure you selected the correct property in Search Console

**Issue:** "Couldn't find your verification token"
- **Solution:** Ensure verification file is in `/public/` folder and deployed

**Issue:** Sitemap errors
- **Solution:** Validate sitemap at https://www.xml-sitemaps.com/validate-xml-sitemap.html

**Issue:** Pages not being indexed
- **Solution:** Check robots.txt isn't blocking, ensure HTTPS is working

---

## 💡 SEO Best Practices for Portfolio Sites

### Content Tips:
1. **Name everywhere:** Use full name in headers, titles, content
2. **Job titles:** Repeat profession naturally throughout content
3. **Credits:** List shows, productions, projects (with names)
4. **Location:** Mention city, country for local SEO
5. **Fresh content:** Update regularly via CMS (Google loves fresh content)

### Image SEO:
```html
<!-- Good example -->
<img
  src="/images/client-headshot.jpg"
  alt="[Client Name] - [Professional Description]"
  title="[Client Name] professional photo"
/>

<!-- Bad example -->
<img src="/img1.jpg" alt="photo" />
```

### Internal Linking:
- Link from Home → Gallery → About → Contact
- Use descriptive anchor text: "View professional photos" not "Click here"

---

## 📊 Expected Results Timeline

### Week 1-2: Indexing
- Google crawls and indexes the site
- Site appears when searching for client's name

### Month 1: Name Searches
- Ranks #1 for "[Client Name] [profession]"
- Shows correct info in Google Knowledge Panel (maybe)

### Month 3-6: Broader Terms
- Might rank for broader industry terms (very competitive)
- Strong presence for name + any keyword combination

### Ongoing:
- Maintain #1 position for name searches
- Build authority through links and fresh content

---

## ⚠️ Common SEO Mistakes to Avoid

1. ❌ **Missing alt text on images** - Google can't "see" images
2. ❌ **Duplicate content** - Each page should be unique
3. ❌ **Keyword stuffing** - Don't repeat keywords unnaturally
4. ❌ **Slow loading** - Optimize images!
5. ❌ **No mobile optimization** - Already handled ✅
6. ❌ **Broken links** - Test all links before launch
7. ❌ **Missing H1 tag** - Every page needs exactly one H1

---

## 📝 Notes

- Update `sitemap.xml` lastmod dates when content changes
- Update `index.html` social links when client provides them
- Keep JSON-LD structured data current (add new productions/credits)
- Update domain in all meta tags when final domain is set

---

## 🚀 Quick Win Checklist (Before Launch)

Priority tasks for immediate SEO impact:

1. [x] Create and upload OG image (1200x630px) ✅
2. [x] Add alt text to all images ✅
3. [x] Ensure H1 tag on home page ✅
4. [x] Create proper favicon ✅
5. [ ] Update all URLs with final domain
6. [x] Test mobile responsiveness ✅
7. [ ] Submit to Google Search Console
8. [ ] Link from client's social media profiles

---

## ✅ Completed Enhancements (Dec 20, 2024)

### Meta Tags Enhanced
- ✅ Added theme-color meta tag (#8B5CF6) for mobile browsers
- ✅ Added geo.region (FI) and geo.placename (Finland) for local SEO
- ✅ Expanded Finnish keywords: verkkosivujen suunnittelu, kotisivut, nettisivut

### Structured Data (JSON-LD) Enhanced
- ✅ Added logo and image URLs
- ✅ Added opening hours (Mo-Su)
- ✅ Added specific pricing for all 4 services:
  - Basic Website: 799 EUR
  - Extended Website: 999 EUR
  - Company Website: 1,999 EUR
  - Website Maintenance: 129 EUR/year
- ✅ Added founder email
- ✅ Enhanced business description

### Performance Optimizations
- ✅ Optimized timo.webp: 135KB → 31KB (77% reduction)
- ✅ Implemented async Google Fonts loading (non-blocking)
- ✅ Expected PageSpeed improvement: 88 → 95-98/100

### Footer Enhancements
- ✅ Added link to yazzo.io company website

### Sitemap Updates
- ✅ Updated lastmod dates to current date (2024-12-20)

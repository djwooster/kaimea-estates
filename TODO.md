# Kaimea Estates — Site TODO

Working list for the SEO audit fixes and lead-quality work.
Source audit: *Kaimea Estates SEO & GEO audit* (Sondr Designs, 28 Sep 2026), score 52/100.

## Decisions (keep consistent everywhere, including outside listings)

- **Name:** "Kaimea Estates" everywhere. "Hale Punakai" is retired from site copy (one client testimonial still says it — left as the client's words).
- **Location:** "Honolulu" (not "Kahala").
- **Address:** 5221 Kalanianaole Hwy, Honolulu, HI 96821 (city/ZIP not yet confirmed).
- **Capacity:** up to 60 guests.
- **Canonical domain:** `https://www.kaimeaestates.com` (bare domain 308-redirects to www in Vercel).
- **Leads:** HoneyBook is the destination (it has no public API → use its embedded lead form). Resend is a possible fallback.
- **Git:** commit straight to `main`; Vercel deploys from `main`.

## Done

### Audit 01 — Migration & duplicates
- [x] 301 redirects: `/halepunakai` and `/contact` → `/` (`next.config.mjs`)
- [x] `/weddings` is a real page again (no redirect)
- [x] www canonical + `metadataBase` (`app/layout.tsx`)
- [x] `app/robots.ts` and `app/sitemap.ts` (home, /weddings, /elopements)
- [x] `X-Robots-Tag: noindex` on any `*.vercel.app` host

### Audit 02 — Mobile LCP (was 5.8 s)
- [x] Hero H1 renders on first paint (no fade-in) (`components/Hero.tsx`)
- [x] Hero image served via `next/image` with `priority`

### Audit 03 — Wedding-intent pages
- [x] `/weddings` and `/elopements` built on shared `components/VenuePage.tsx`
- [x] Per-page title, description, canonical, H1, key facts, inclusions, gallery
- [x] FAQ section + FAQPage JSON-LD on both pages
- [x] Added to navbar, footer, homepage Weddings card, and sitemap
- [x] Nav anchors changed to `/#section` so they work from subpages

### Audit 04 — Local & GEO facts
- [x] LocalBusiness/EventVenue JSON-LD in `app/layout.tsx` (address, email, capacity 60, socials)

### Lead quality
- [x] Booking link centralized in `lib/site.ts` (`BOOK_HREF = "#inquire"`)
- [x] Qualifying inquiry form in the footer band on every page (`components/InquiryForm.tsx`, `lib/inquiry.ts`)
  - Event type, guest count, date (+ flexible), catering, planning stage, planner, source, contact info, message, sound-guidelines checkbox
  - Over-60 warning, no-in-house-catering note, honeypot spam field
  - Budget question removed by request
- [x] `/api/inquiry` sends via Resend with a fit rating in the subject; returns 503 without `RESEND_API_KEY`, and the form falls back to a pre-filled mailto

### Content standardization
- [x] Guest count 75 → 60 everywhere
- [x] "Kahala" → "Honolulu" everywhere
- [x] "Hale Punakai" → "Kaimea Estates" everywhere (except the testimonial)

### DNS / hosting
- [x] www CNAME updated in Squarespace DNS to `7ce00b520d90518a.vercel-dns-017.com` (verified live 10 Oct 2026)
- Note: GoDaddy is the registrar; nameservers point to Squarespace, so **all DNS edits happen in Squarespace**. MX records there are Google Workspace email — don't touch.

## TODO

### Leads (highest impact)
- [ ] Build the HoneyBook lead form with the same questions as `InquiryForm` (event type, guest count, date/flexible, catering, planning stage, planner, source, name/email/phone, message, required sound-guidelines checkbox)
- [ ] Send the HoneyBook embed code → swap it into the `#inquire` band, lazy-load the script, keep the qualifying notes above it, delete `/api/inquiry` and `lib/inquiry.ts` if unused
- [ ] Until then, either set up Resend (verify domain in Squarespace DNS, add `RESEND_API_KEY` in Vercel) or accept the mailto fallback
- [ ] Decide whether to relabel "Book a Call" buttons to "Check Availability"
- [ ] Show the starting price / minimum near the form once known (strongest self-filter)

### Content facts needed from the venue
- [ ] Starting price / minimum spend
- [ ] Rental hours, end time / curfew
- [ ] Deposit and cancellation terms
- [ ] Parking and rain plan
- [ ] Elopement package: price, max guests, time block, inclusions, lead time, weekday availability
- [ ] Confirm city/ZIP (Honolulu, 96821) and add a phone number to the JSON-LD if there is one
- [ ] Fill in the `// TODO` blocks in `app/weddings/page.tsx` and `app/elopements/page.tsx`

### Verify after deploy
- [ ] Re-run mobile PageSpeed at https://pagespeed.web.dev and compare to the audit (mobile 75, LCP 5.8 s)
- [ ] Verify the site in Google Search Console and submit `https://www.kaimeaestates.com/sitemap.xml`
- [ ] In Vercel → Domains, set `kaimea-estates.vercel.app` to redirect to `www.kaimeaestates.com`
- [ ] Visually review `/weddings`, `/elopements`, and the inquiry form on mobile

### Off-site consistency (audit 04)
- [ ] Update Google Business Profile, Zola, and VenueConnect to: Kaimea Estates · 5221 Kalanianaole Hwy · Honolulu · up to 60 guests
- [ ] Remove "Hale Punakai" and the 5223 address from listings

### Polish / later
- [ ] About paragraph: "shores of Honolulu — just beyond Waikiki" reads oddly; reword
- [ ] Testimonial still says "Hale Punakai" — ask the client or swap the testimonial
- [ ] "How did you hear about us?" sits alone in the form grid — move it to "About you"
- [ ] Tune fit-rating rules in `lib/inquiry.ts` once real booking data exists
- [ ] Next.js 14.2 is flagged outdated — plan an upgrade
- [ ] Optional: HoneyBook Claude connector (Settings → Connectors on claude.ai) to review lead quality before/after

## Dev notes
- Don't run `npm run build` while `npm run dev` is running — both write to `.next` and it breaks the dev server (`Cannot find module './948.js'`). Fix: stop dev, `rm -rf .next`, restart.

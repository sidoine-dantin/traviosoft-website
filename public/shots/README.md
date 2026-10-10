# Product visuals (public/shots/)

Every image slot on the site looks for a file here. While a file is missing, the
page shows a grey placeholder that names the file it expects. Drop the file in
with **exactly** the name below, then rebuild (`npm run build` regenerates
`src/lib/shots-manifest.json`, which is how the site knows the file exists).

Rules for every screenshot:

- **Demo data only.** No real client names, emails, phone numbers, prices or
  agency documents. Do not reuse images from the app repository: they may show
  real client data.
- Desktop shots: 2400 x 1500 px (16:10), PNG, browser chrome cropped out.
  Phone shots: 1080 x 1350 px (4:5).
- Interface in Spanish if only one language is made (priority market).
- Compress before committing (aim for under 400 KB per image).

| File | Ratio | Where it shows | What it should show |
|---|---|---|---|
| `dashboard.png` | 16:10 | Home hero; Product page, "dashboard" highlight | The dashboard: new requests, quotes to follow up, bookings to make, payments due/overdue |
| `quote-builder.png` | 16:10 | Home, pillar 1 "Save time" | A quote being built: service lines from the catalog, total and margin visible |
| `quote-pdf.png` | 16:10 | Home, pillar 2 "Professional"; Product page hero | The branded quote PDF (agency logo and colors, payment schedule) |
| `payments.png` | 16:10 | Home, pillar 3 "Payments"; Product page, "payment links" highlight | An order's finance tab: deposit + balance milestones, a payment link on each, paid/pending status |
| `suppliers.png` | 16:10 | Home, pillar 4 "Suppliers" | A supplier or guide profile: contacts, documents, languages, area |
| `itinerary-mobile.png` | 4:5 | Product page, "client itinerary" highlight | The client itinerary page on a phone: days, times, meeting point, guide, a shared ticket |
| `invoice-reav.png` | 4:5 | Product page, "REAV invoices" highlight | An invoice PDF showing the REAV (travel agency VAT scheme) notice |
| `tour.mp4` | 16:9 | Home, "See Traviosoft in two minutes" (target of "Watch the 2-minute tour") | 60 to 90 s product tour, H.264 MP4, under 15 MB, subtitles burned in (sound off by default on most visitors) |
| `tour-poster.jpg` | 16:9 | Poster frame shown before the video plays | A clean frame of the tour, 1920 x 1080 |
| `founder.jpg` | 4:5 | Home and About, founder block | Founder portrait, natural light, 1080 x 1350 |

The founder's name, the client testimonial and the company legal details are
not images: they are set in `src/lib/site-config.ts`.

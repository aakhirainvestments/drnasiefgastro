# Dr Nasief van der Schyff – Website

Built by DiamondDevs (Almaaz Salie) | Almaaz.salie6@gmail.com | +27 64 427 3688

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + custom CSS variables
- **Fonts:** DM Serif Display + DM Sans (Google Fonts)
- **Icons:** Lucide React
- **Deploy:** Vercel (recommended) or Netlify

---

## Deployment Steps

### 1. Domain
Register `drnasiefgastro.co.za` at Afrihost.co.za or Domains.co.za (~R150/yr)

### 2. Upload to GitHub
- Create a new repo on github.com (e.g. `drnasiefgastro-website`)
- Upload this entire folder (drag and drop or use GitHub Desktop)

### 3. Deploy on Vercel (recommended - free)
- Go to vercel.com → New Project
- Import your GitHub repo
- Click Deploy — it auto-detects Next.js ✓
- Go to Settings → Domains → add `drnasiefgastro.co.za`
- Vercel gives you DNS records → add them at Afrihost

### 4. Add the Doctor's Photo
- Replace the photo placeholder in `app/page.tsx` (search for "Replace with")
- Add an <img> tag pointing to `/public/dr-nasief.jpg`

### 5. Set Up Bookem (Appointment Booking)
- Create account at bookem.com
- Set up practice profile
- Copy the embed code
- Paste into `app/appointments/page.tsx` (replace the placeholder div)

### 6. Google Maps Embed
- Go to Google Maps → UCT Private Academic Hospital → Share → Embed
- Copy iframe code
- Paste into `app/appointments/page.tsx` and `app/contact/page.tsx` (replace map placeholder)

### 7. Contact Form Backend
- Sign up at formspree.io (free tier)
- Create a form → get your endpoint URL
- In `app/contact/page.tsx`, add action to the form

### 8. Google Business Profile
- Go to business.google.com
- Add: Dr Nasief van der Schyff, Gastroenterologist
- Address: UCT Private Academic Hospital, Observatory, Cape Town
- Add the website URL once live
- Upload the flyer photo + professional photos

### 9. Blog Posts (TinaCMS - optional phase 2)
- Blog posts are currently static in the code
- For Dr van der Schyff to edit his own articles, add TinaCMS (Phase 2)

---

## Colour Reference
- Navy: #0A1F44
- Blue: #1565C0  
- Teal (accent): #00B4D8
- Light blue bg: #F0F7FF

## Contact
DiamondDevs | Almaaz Salie
Almaaz.salie6@gmail.com | +27 64 427 3688

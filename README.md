# PRIME ACADEMY

MVP landing page for online physics tutoring and exam preparation.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```

## Images

Put final teacher photos in `public/images`:

- `kirill-hero.jpg` - first screen hero image for Kirill.
- `ira-hero.jpg` - first screen hero image for Irina.
- `kirill-profile.jpg` - teacher profile image for Kirill.
- `ira-profile.jpg` - teacher profile image for Irina.

The app shows fallback cards while images are missing.

## MVP Notes

- The site works in Mode A: it does not collect or submit lead form data.
- The main CTA opens Kirill's Telegram: `https://t.me/Total_victories`.
- The project Telegram channel is `https://t.me/physicspace`.
- No registration, login, payment, analytics, cookies, CRM, Firebase, Supabase, Google Forms, Airtable, or Notion are connected.
- Legal pages are present, but TODO fields must be completed before publication.

## MVP Public Launch Checklist

- Choose and buy a domain.
- Replace `TODO_DOMAIN` in `src/config/legal.ts` and `public/sitemap.xml`.
- Replace `TODO_EFFECTIVE_DATE` in `src/config/legal.ts`.
- Decide whether `operatorInn` must be public and replace `TODO_INN` if needed.
- Confirm the operator data: full name, self-employed status, city, email.
- Recheck Telegram links:
  - personal contact: `https://t.me/Total_victories`
  - channel: `https://t.me/physicspace`
- Review legal pages:
  - `/privacy`
  - `/personal-data-consent`
  - `/marketing-consent`
  - `/terms`
  - `/cookies`
- Do not connect analytics, cookies, pixels, backend, CRM, or lead form submission without updating legal documents.
- Do not add online payment without a separate legal and technical decision.
- Confirm that all claims about 98 points, MEPhI, olympiads, and photos are allowed for public use.
- Run `npm run build`.
- Run `npm run lint`.
- Test desktop and mobile layout.
- Check all footer links.
- Choose hosting: GitHub Pages, Vercel, Netlify, Timeweb, Selectel, or another static hosting.

## Legal TODO

See `LEGAL_TODO.md`.

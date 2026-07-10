# PRIME ACADEMY

Landing page for PRIME ACADEMY, an online physics school for OGE, EGE, olympiad preparation, and school physics.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react

## Run Locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually:

```text
http://localhost:5173/
```

## Build And Check

```bash
npm run build
npm run lint
```

## Images

Teacher photos are stored in `public/images`:

- `kirill-hero.jpg` - first screen hero image for Kirill.
- `ira-hero.jpg` - first screen hero image for Irina.
- `kirill-profile.jpg` - teacher profile image for Kirill.
- `ira-profile.jpg` - teacher profile image for Irina.

The app shows fallback cards if an image file is unavailable.

## Project Notes

- The main contact scenario opens Kirill's Telegram: `https://t.me/Total_victories`.
- The project Telegram channel is `https://t.me/primephys`.
- Legal pages are available at `/privacy`, `/personal-data-consent`, `/marketing-consent`, `/terms`, and `/cookies`.
- Before connecting analytics, pixels, payments, account registration, or server-side forms, update the legal documents and user-facing copy.
- Before production hosting, choose the public domain and add a matching sitemap if needed.

# Dr. Deepali D. Mahakal — Pediatric Home-Visit Landing Page

A free-to-host static landing page for pediatric home-visit enquiries in Bavdhan, Pune, and nearby areas.

## Features

- Responsive pediatric landing page.
- Resume-based doctor profile and clinical experience sections.
- Services for vaccination enquiries, prescribed injections, newborn examination, growth monitoring, and parent counselling.
- Netlify-compatible enquiry form.
- Phone, WhatsApp, and email calls to action.
- Privacy, medical-safety, and emergency disclaimers.
- Google Analytics-compatible event hooks for contact clicks and enquiry submissions.
- Sticky mobile contact bar.

## Local development

```bash
npm run dev
```

Open <http://localhost:5173>.

## Build

```bash
npm run build
```

The static site is copied to `dist/`.

## Free deployment options

### Netlify

1. Connect this repository to Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Netlify Forms will detect the `home-visit-enquiry` form after deployment.

### Vercel / Cloudflare Pages / GitHub Pages

The page is static and can be hosted on any free static hosting provider. If you do not use Netlify Forms, replace the form with a free provider such as Formspree, Getform, or Google Forms.

## Analytics setup

`index.html` contains a placeholder Google Analytics ID:

```html
G-REPLACE-WITH-YOUR-ID
```

Replace it with the real GA4 measurement ID to start visitor tracking. The app pushes events for call, WhatsApp, sticky contact, and enquiry form interactions.

## Medical safety note

This website is for enquiries only and is not an emergency medical service. For severe or rapidly worsening symptoms, families should visit the nearest emergency department immediately.

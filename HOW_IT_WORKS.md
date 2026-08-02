# How patients use the site — and how you get notified

## Positioning (important)

**Shree Dhanvantari Kids Care** is a Pune paediatric home-visit service:

- **Doctor comes to the patient’s home** for childhood vaccines and existing recommended / prescribed injections
- **Association** — Sindhu Nursing Home (Children’s Hospital), D-1 Rahul Complex, Paud Road, Kothrud, Pune
- Patients: children first; home injections also for adults and elderly when needed

Public listings for Sindhu Nursing Home (Kothrud): Justdial / Practo / local directories.

## What patients do

1. Open the website (or find you via Google / Maps / WhatsApp).
2. Read about home visits for vaccines and recommended injections.
3. Contact via **Book form**, **WhatsApp**, or **Call**.

Form = **enquiry** (not auto-confirmed appointment). You reply and arrange the home visit.

## Enquiry automation (WhatsApp + phone)

The website itself cannot answer WhatsApp or phone calls (it is a free static site). Use these **free** tools on your phone instead:

### WhatsApp auto-reply (recommended)

1. Install **WhatsApp Business** (free) on the clinic phone number used in `js/config.js`.
2. Open **Settings → Business tools → Greeting message** — turn on.
3. Open **Away message** — turn on for times you cannot reply.

**Suggested greeting / away text (copy-paste):**

> Namaste. Thank you for contacting Shree Dhanvantari Kids Care.
> We provide doctor home visits in Pune for childhood vaccines and recommended injections.
> Please share: patient age, which vaccine/injection is needed, your area/address, and a preferred time.
> We will confirm the visit shortly. For emergencies, call local emergency services.

Marathi option:

> नमस्कार. श्री धन्वंतरी किड्स केअरशी संपर्क केल्याबद्दल धन्यवाद.
> आम्ही पुण्यात लसी व शिफारस केलेल्या इंजेक्शनसाठी डॉक्टरांच्या घरगुती भेटी देतो.
> कृपया कळवा: रुग्णाचे वय, कोणती लस/इंजेक्शन, पत्ता/परिसर, आणि पसंतीची वेळ.
> आम्ही लवकरच भेट निश्चित करू. आपत्कालीन स्थितीत स्थानिक आपत्कालीन सेवांना कॉल करा.

### Phone / missed-call automation

- Set a clear **voicemail greeting** on the same number (same message as above, spoken).
- Or use a simple missed-call callback habit: note the number and WhatsApp them the greeting text.
- Full call-bots / IVR usually need paid numbers — not required for a small practice.

### Website form

- Add a free [Web3Forms](https://web3forms.com) key in `js/config.js` so enquiries email you automatically.
- You still reply manually to confirm the visit.

## How people will search / find this website

A new GitHub Pages site does **not** appear on Google instantly. Do these after the site is live:

| Step | What to do |
|------|------------|
| **1. Publish** | Push to GitHub Pages so you have a public URL (`*.github.io/...`) |
| **2. Put URL in config** | Set `siteUrl` in `js/config.js` and replace `YOUR_SITE_URL` in `sitemap.xml` + `robots.txt` |
| **3. Google Search Console** | [search.google.com/search-console](https://search.google.com/search-console) → add property → submit `sitemap.xml` |
| **4. Google Business Profile** | Create/claim a free profile for the practice → set **Website** to your Pages URL → category like Pediatrician / Doctor → service area **Pune** |
| **5. Local keywords** | People search things like “home vaccine Pune”, “doctor injection at home Kothrud” — your page titles and Google Business description should use similar words |
| **6. Share the link** | WhatsApp status, clinic slip, Sindhu Nursing Home desk, Justdial / Practo profile website field |
| **7. Optional custom domain** | Later buy a simple domain (e.g. `shreedhanvantari.in`) and point it to GitHub Pages for easier remembering |

**Typical timeline:** Google may take days to a few weeks after Search Console + Business Profile. Direct links (WhatsApp / Maps) work immediately.

## How you get notified

| Channel | Setup |
|--------|--------|
| **Email** | Free [Web3Forms](https://web3forms.com) key in `js/config.js` |
| **WhatsApp** | Your number as digits, e.g. `9198XXXXXXXX` + Business greeting above |
| **Phone** | `phone` in config + voicemail greeting |

## Google Maps

1. Map on About points to Sindhu Nursing Home, Kothrud (edit `mapsQuery` in config).
2. When Pages is live, set Google Business **Website** to your site URL.

## English + Marathi

Header **EN / मराठी** toggle on every public page. Preference saves in the browser (`localStorage`).

- Strings live in `js/i18n.js`
- Mark copy with `data-i18n="key"` in HTML
- Marathi uses Noto Sans / Serif Devanagari fonts

Phone numbers, addresses, and doctor name stay the same in both languages (from `js/config.js`).

## Edit details

All public details: `js/config.js` (doctor name, phone, WhatsApp, email, affiliation text, `siteUrl`).

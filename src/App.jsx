const services = [
  {
    title: 'Vaccination support',
    description:
      'Guidance for age-appropriate immunization schedules, reminders, and home-visit vaccination enquiries.',
  },
  {
    title: 'Injections at home',
    description:
      'Doctor-supervised injection support for children when prescribed and appropriate for a home setting.',
  },
  {
    title: 'Newborn examination',
    description:
      'Focused newborn check-ups, feeding guidance, jaundice observations, and early wellness counselling.',
  },
  {
    title: 'Growth monitoring',
    description:
      'Weight, height, milestones, nutrition, and development tracking with parent-friendly explanations.',
  },
  {
    title: 'Pediatric consultation guidance',
    description:
      'Home-visit assessment and practical next-step guidance for common child health concerns.',
  },
];

const experienceHighlights = [
  'Experienced pediatrician supporting newborns, infants, children, and families with preventive and illness-care guidance.',
  'Strong focus on parent counselling, vaccination awareness, growth tracking, and safe escalation when clinic or hospital evaluation is needed.',
  'Provides enquiry-based home visits in Pune with clear communication, compassionate bedside care, and child-friendly examination practices.',
];

const phoneNumber = '+91 98765 43210';
const plainPhoneNumber = phoneNumber.replace(/\s/g, '');
const whatsAppNumber = '919876543210';
const email = 'dr.deepali@example.com';

function serviceCards() {
  return services
    .map(
      (service) => `
        <article class="service-card">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `,
    )
    .join('');
}

function experienceItems() {
  return experienceHighlights.map((item) => `<li>${item}</li>`).join('');
}

export function renderApp() {
  return `
    <main class="page-shell">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__content">
          <p class="eyebrow">Home-visit pediatric care • Pune</p>
          <h1 id="hero-title">Dr. Deepali D. Mahakal</h1>
          <p class="credentials">MBBS, DCH • Pediatric care for newborns and children</p>
          <p class="hero__copy">
            Convenient pediatric care enquiries and home visits for families in Bavdhan, Pune,
            and nearby locations. Get support for vaccinations, growth monitoring, newborn
            checks, injections, and pediatric consultation guidance from the comfort of home.
          </p>
          <div class="notice" role="note">
            <strong>No clinic visits:</strong> Dr. Deepali D. Mahakal currently provides home
            visits and enquiry support only. This page is not for walk-in clinic appointments.
          </div>
          <div class="hero__actions" aria-label="Contact options">
            <a class="button button--primary" href="tel:${plainPhoneNumber}">Call for enquiry</a>
            <a class="button button--secondary" href="https://wa.me/${whatsAppNumber}" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <aside class="hero__card" aria-label="Service area details">
          <span class="card__label">Service area</span>
          <h2>Pune / Bavdhan</h2>
          <p>
            Home visits may be available in Bavdhan and nearby Pune locations, subject to
            availability and case suitability.
          </p>
        </aside>
      </section>

      <section class="section" aria-labelledby="services-title">
        <div class="section__heading">
          <p class="eyebrow">Services</p>
          <h2 id="services-title">Pediatric support at your doorstep</h2>
        </div>
        <div class="service-grid">${serviceCards()}</div>
      </section>

      <section class="section split" aria-labelledby="experience-title">
        <div>
          <p class="eyebrow">Experience</p>
          <h2 id="experience-title">Calm, practical pediatric guidance for families</h2>
        </div>
        <ul class="experience-list">${experienceItems()}</ul>
      </section>

      <section class="section contact" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">Enquire about a home visit</h2>
          <p>
            Please call, WhatsApp, or email with your child’s age, concern, location, and
            preferred visit time. Emergency symptoms should be taken to the nearest emergency
            facility immediately.
          </p>
        </div>
        <div class="contact-card">
          <a href="tel:${plainPhoneNumber}">${phoneNumber}</a>
          <a href="https://wa.me/${whatsAppNumber}" target="_blank" rel="noreferrer">WhatsApp enquiry</a>
          <a href="mailto:${email}">${email}</a>
          <p class="contact-card__note">Home visits/enquiries only • No clinic or walk-in facility</p>
        </div>
      </section>
    </main>
  `;
}

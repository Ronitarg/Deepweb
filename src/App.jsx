const services = [
  {
    title: 'Age-appropriate vaccinations',
    description:
      'IAP schedule-aware vaccination guidance, vaccine-record review, due-date reminders, and home-visit vaccination enquiries when suitable.',
  },
  {
    title: 'Prescribed injections at home',
    description:
      'Doctor-reviewed injection support for children when there is a valid prescription and the child is safe for home care.',
  },
  {
    title: 'Newborn examination & care',
    description:
      'Newborn wellness checks, feeding guidance, jaundice observations, danger-sign counselling, and early postnatal support.',
  },
  {
    title: 'Growth & milestone monitoring',
    description:
      'Weight, height, nutrition, developmental milestones, and parent-friendly guidance for early identification of growth concerns.',
  },
  {
    title: 'Pediatric home-visit assessment',
    description:
      'Child-friendly assessment for common pediatric concerns with clear advice on when hospital or specialist care is required.',
  },
  {
    title: 'Parent counselling',
    description:
      'Practical counselling on nutrition, immunization, behaviour, special-child neurodevelopment concerns, and preventive care.',
  },
];

const experienceHighlights = [
  '4+ years of total clinical experience, including pediatric OPD/IPD management and newborn examination and care.',
  'Current Consultant Pediatrician at Kartik Hospital, Nigdi-Pradhikaran, with exposure to 50+ pediatric OPD patients daily.',
  'Hands-on experience with pediatric emergencies including asthma, allergic reactions, pneumonia, convulsions, febrile seizures, shock, and respiratory distress.',
  'Focused on evidence-based treatment, minimal over-prescription, vaccination awareness, growth tracking, and compassionate parent communication.',
];

const faqItems = [
  {
    question: 'Do you have a clinic?',
    answer:
      'No. This landing page is for home-visit and enquiry requests only. There is no walk-in clinic facility listed here.',
  },
  {
    question: 'Can vaccines be given at home?',
    answer:
      'Vaccination requests are reviewed based on the child’s age, vaccine record, availability, cold-chain suitability, and doctor assessment.',
  },
  {
    question: 'Can injections be given without a prescription?',
    answer:
      'No. Injection support should be requested only with a valid prescription or after appropriate medical review.',
  },
  {
    question: 'Which areas are served?',
    answer:
      'Home visits may be available around Bavdhan, Pune, and nearby areas depending on distance, timing, and case suitability.',
  },
  {
    question: 'What should I do in an emergency?',
    answer:
      'For severe breathing difficulty, seizures, unconsciousness, dehydration, blue lips, or any emergency symptom, visit the nearest emergency facility immediately.',
  },
];

const contact = {
  phonePrimary: '+91 84118 11542',
  phoneSecondary: '+91 99231 07387',
  whatsapp: '918411811542',
  emailPrimary: 'deepamahakal60@gmail.com',
  emailSecondary: 'hadkeron67@gmail.com',
  address: 'Bavdhan Khurd, Pune - 411021',
};

function telHref(phoneNumber) {
  return phoneNumber.replace(/[^+\d]/g, '');
}

function trackEvent(name) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name });
  if (typeof window.gtag === 'function') {
    window.gtag('event', name);
  }
}

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

function faqCards() {
  return faqItems
    .map(
      (item) => `
        <details class="faq-card">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `,
    )
    .join('');
}

function enquiryForm() {
  return `
    <form class="enquiry-form" name="home-visit-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="home-visit-enquiry" />
      <p class="hidden-field">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>
      <div class="form-grid">
        <label>
          Parent / guardian name
          <input name="guardianName" type="text" autocomplete="name" required />
        </label>
        <label>
          Mobile number
          <input name="mobile" type="tel" autocomplete="tel" required />
        </label>
        <label>
          Child age
          <input name="childAge" type="text" placeholder="e.g. 6 months" required />
        </label>
        <label>
          Area / location
          <input name="location" type="text" placeholder="e.g. Bavdhan" required />
        </label>
        <label>
          Service needed
          <select name="serviceNeeded" required>
            <option value="">Select service</option>
            <option>Vaccination enquiry</option>
            <option>Prescribed injection</option>
            <option>Newborn examination</option>
            <option>Growth & milestone monitoring</option>
            <option>Pediatric home visit</option>
            <option>General enquiry</option>
          </select>
        </label>
        <label>
          Preferred date / time
          <input name="preferredTime" type="text" placeholder="Today evening / Tomorrow morning" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows="4" placeholder="Briefly describe the concern. Avoid sharing sensitive reports here."></textarea>
      </label>
      <label class="consent">
        <input name="consent" type="checkbox" required />
        I agree that this enquiry is not for emergencies and that the doctor may contact me using the details provided.
      </label>
      <button class="button button--primary" type="submit">Send enquiry</button>
      <p class="form-note">Free setup: works with Netlify Forms after deploying on Netlify. Replace with Formspree/Getform endpoint if preferred.</p>
    </form>
  `;
}

export function renderApp() {
  return `
    <main class="page-shell">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__content">
          <p class="eyebrow">Home-visit pediatric care • Pune</p>
          <h1 id="hero-title">Dr. Deepali D. Mahakal</h1>
          <p class="credentials">BAMS • PG Fellowship in Child Health, BVSS Pune - pursuing</p>
          <p class="hero__copy">
            Pediatric home-visit enquiries for newborn examination, growth and development
            monitoring, age-appropriate vaccination support, prescribed injections, and parent
            counselling in Bavdhan, Pune, and nearby locations.
          </p>
          <div class="notice" role="note">
            <strong>No clinic / no walk-ins:</strong> This service is for enquiry-based home visits
            only. Visit availability depends on location, timing, child condition, and medical suitability.
          </div>
          <div class="hero__actions" aria-label="Contact options">
            <a class="button button--primary js-track" data-event="click_call_primary" href="tel:${telHref(contact.phonePrimary)}">Call ${contact.phonePrimary}</a>
            <a class="button button--secondary js-track" data-event="click_whatsapp" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noreferrer">WhatsApp enquiry</a>
          </div>
        </div>
        <aside class="hero__card" aria-label="Service area details">
          <span class="card__label">Service area</span>
          <h2>Bavdhan & nearby Pune areas</h2>
          <p>Home visits are considered case-by-case for children and newborns, subject to availability.</p>
          <ul>
            <li>Vaccination record review</li>
            <li>Newborn and infant checks</li>
            <li>Growth, nutrition, and milestone guidance</li>
          </ul>
        </aside>
      </section>

      <section class="section" aria-labelledby="services-title">
        <div class="section__heading">
          <p class="eyebrow">Services</p>
          <h2 id="services-title">Pediatric support at your doorstep</h2>
          <p>Designed for parents who need safe, practical, and compassionate pediatric guidance without a clinic visit.</p>
        </div>
        <div class="service-grid">${serviceCards()}</div>
      </section>

      <section class="section split" aria-labelledby="experience-title">
        <div>
          <p class="eyebrow">Experience</p>
          <h2 id="experience-title">Clinical care backed by OPD, IPD, and newborn experience</h2>
        </div>
        <ul class="experience-list">${experienceItems()}</ul>
      </section>

      <section class="section enquiry" aria-labelledby="enquiry-title">
        <div class="section__heading">
          <p class="eyebrow">Book / enquire</p>
          <h2 id="enquiry-title">Request a home visit or vaccination enquiry</h2>
          <p>Share basic details and the doctor will respond when available. For urgent symptoms, do not wait for a form response.</p>
        </div>
        ${enquiryForm()}
      </section>

      <section class="section faq" aria-labelledby="faq-title">
        <div class="section__heading">
          <p class="eyebrow">FAQ</p>
          <h2 id="faq-title">Common questions from parents</h2>
        </div>
        <div class="faq-grid">${faqCards()}</div>
      </section>

      <section class="section disclaimer" aria-labelledby="safety-title">
        <div>
          <p class="eyebrow">Safety & privacy</p>
          <h2 id="safety-title">Important medical information</h2>
        </div>
        <div class="disclaimer__content">
          <p><strong>Emergency warning:</strong> This website is not an emergency service. For seizures, severe breathing difficulty, unconsciousness, severe dehydration, blue lips, or rapidly worsening symptoms, go to the nearest emergency department immediately.</p>
          <p><strong>Scope:</strong> Home visits, vaccinations, and injections are accepted only after appropriate review and depend on prescription, vaccine availability, cold-chain suitability, location, and child condition.</p>
          <p><strong>Privacy:</strong> Enquiry details are used only to respond to your request. Basic visitor analytics may be used to understand page visits and contact-button usage. Avoid submitting detailed medical reports through this form.</p>
        </div>
      </section>

      <section class="section contact" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">Speak with Dr. Deepali D. Mahakal</h2>
          <p>Please call, WhatsApp, or email with your child’s age, concern, location, and preferred visit time.</p>
        </div>
        <div class="contact-card">
          <a class="js-track" data-event="click_call_primary_footer" href="tel:${telHref(contact.phonePrimary)}">${contact.phonePrimary}</a>
          <a class="js-track" data-event="click_call_secondary_footer" href="tel:${telHref(contact.phoneSecondary)}">${contact.phoneSecondary}</a>
          <a class="js-track" data-event="click_whatsapp_footer" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noreferrer">WhatsApp enquiry</a>
          <a href="mailto:${contact.emailPrimary}">${contact.emailPrimary}</a>
          <a href="mailto:${contact.emailSecondary}">${contact.emailSecondary}</a>
          <p class="contact-card__note">${contact.address} • Home visits/enquiries only • No clinic or walk-in facility</p>
        </div>
      </section>

      <nav class="sticky-contact" aria-label="Quick contact">
        <a class="js-track" data-event="sticky_call" href="tel:${telHref(contact.phonePrimary)}">Call</a>
        <a class="js-track" data-event="sticky_whatsapp" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="#enquiry-title">Enquire</a>
      </nav>
    </main>
  `;
}

export function attachAppEvents() {
  document.querySelectorAll('.js-track').forEach((element) => {
    element.addEventListener('click', () => trackEvent(element.dataset.event));
  });

  const form = document.querySelector('.enquiry-form');
  form?.addEventListener('submit', () => trackEvent('submit_home_visit_enquiry'));
}

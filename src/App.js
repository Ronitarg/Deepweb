const services = [
  { icon: '🍼', title: 'Newborn care', description: 'Newborn wellness checks, feeding guidance, jaundice observations, and early postnatal support.' },
  { icon: '💉', title: 'Vaccination guidance', description: 'Vaccine-record review, age-appropriate vaccination guidance, and due-date reminders.' },
  { icon: '🌱', title: 'Growth & milestones', description: 'Weight, height, nutrition, and developmental milestone guidance as your child grows.' },
  { icon: '🩺', title: 'Pediatric consultation', description: 'Child-friendly assessment for common concerns and guidance on when further care is needed.' },
  { icon: '🧸', title: 'Child wellness', description: 'Practical support for everyday childhood health, prevention, and healthy routines.' },
  { icon: '💛', title: 'Parent counselling', description: 'Clear, reassuring guidance to help parents make informed decisions about their child’s care.' },
];

const faqs = [
  ['Where will the consultation take place?', 'Please discuss your child’s needs with the doctor. The consultation location or visit arrangement will be confirmed directly based on availability and medical suitability.'],
  ['Can vaccines be given at home?', 'Vaccination requests are reviewed based on the child’s age, vaccine record, availability, cold-chain suitability, and doctor assessment.'],
  ['Can injections be given without a prescription?', 'Injection support is considered only with a valid prescription or after appropriate medical review.'],
  ['How do I confirm an appointment?', 'Call or WhatsApp the doctor with your child’s age and concern. The doctor will discuss the suitable arrangement and confirm availability.'],
  ['What should I do in an emergency?', 'This website is not an emergency service. For severe breathing difficulty, seizures, unconsciousness, blue lips, or any emergency symptom, visit the nearest emergency facility immediately.'],
];

const contact = {
  phonePrimary: '+91 84118 11542',
  phoneSecondary: '+91 99231 07387',
  whatsapp: '918411811542',
  emailPrimary: 'deepamahakal60@gmail.com',
  emailSecondary: 'hhadker@gmail.com',
};

const heroPhoto = 'https://images.pexels.com/photos/5998458/pexels-photo-5998458.jpeg?auto=compress&dpr=1&h=750&w=1260';
const familyPhoto = 'https://images.pexels.com/photos/5998455/pexels-photo-5998455.jpeg?auto=compress&dpr=1&h=750&w=1260';

function telHref(phone) { return phone.replace(/[^+\\d]/g, ''); }
function serviceCards() {
  return services.map((s, i) => `
    <article class="service-card reveal" style="--card-index:${i}">
      <span class="service-icon" aria-hidden="true">${s.icon}</span>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <a href="#enquiry" class="text-link">Enquire <span aria-hidden="true">↗</span></a>
    </article>`).join('');
}
function faqCards() {
  return faqs.map(([q,a]) => `<details class="faq-card"><summary>${q}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('');
}
function enquiryForm() {
  return `
    <form class="enquiry-form" id="consultation-form">
      <div class="form-grid">
        <label>Parent / guardian name<input name="guardianName" autocomplete="name" placeholder="Your name" required /></label>
        <label>Mobile number<input name="mobile" type="tel" autocomplete="tel" placeholder="Your contact number" required /></label>
        <label>Child age<input name="childAge" placeholder="e.g. 6 months" required /></label>
        <label>Service needed<select name="serviceNeeded" required><option value="">Choose a service</option><option>Vaccination enquiry</option><option>Newborn examination</option><option>Growth & milestone monitoring</option><option>Pediatric consultation</option><option>Parent counselling</option><option>General enquiry</option></select></label>
        <label class="field-full">Preferred date / time<input name="preferredTime" placeholder="e.g. Tomorrow morning" /></label>
      </div>
      <label>How can the doctor help?<textarea name="message" rows="4" placeholder="Briefly describe your concern. Please do not share detailed medical reports here."></textarea></label>
      <label class="consent"><input name="consent" type="checkbox" required /> I understand this is an appointment enquiry, not an emergency service, and agree to be contacted about it.</label>
      <button class="button button--primary submit-button" type="submit">Send enquiry on WhatsApp <span>↗</span></button>
      <p class="form-note">Your WhatsApp app will open with the enquiry details ready to send. The doctor will confirm availability and the consultation arrangement.</p>
    </form>`;
}

export function renderApp() {
 return `
 <main class="page-shell">
  <header class="site-header">
   <a class="brand" href="#home" aria-label="Shree Dhanvantari Kids Care home">
    <span class="brand-mark">✿</span><span class="brand-copy"><strong>Shree Dhanvantari</strong><b>Kids <i>Care</i></b><small>Little smiles. Lifelong wellness.</small></span>
   </a>
   <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation"><span></span><span></span><span></span></button>
   <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
    <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#faq">FAQs</a><a href="#contact">Contact</a>
   </nav>
   <a class="header-cta" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener noreferrer"> <span>☏</span> WhatsApp</a>
  </header>

  <section class="hero" id="home">
   <div class="hero-bg-shape hero-bg-shape--one"></div><div class="hero-bg-shape hero-bg-shape--two"></div>
   <div class="hero-copy reveal">
    <p class="eyebrow"><span></span> CHILD HEALTH • PARENTAL CARE</p>
    <h1>Little smiles,<br/><em>big beginnings.</em></h1>
    <p class="hero-lead">Compassionate pediatric care and thoughtful guidance for every stage of your child’s growing years.</p>
    <div class="hero-credentials"><span class="credential-dot">✦</span><span><strong>Dr. Deepali D. Mahakal</strong><small>BAMS • FICH - Pediatrics</small></span></div>
    <div class="hero-actions"><a class="button button--primary" href="#enquiry">Request a consultation <span>→</span></a><a class="button button--quiet" href="#services">Explore services <span>↓</span></a></div>
    <div class="hero-note"><span>♡</span> Care that listens. Guidance that reassures.</div>
   </div>
   <div class="hero-visual reveal">
    <div class="photo-frame"><img src="${heroPhoto}" alt="Illustrative photograph of a pediatrician speaking warmly with a young child" fetchpriority="high"/><div class="photo-caption"><span class="caption-heart">♡</span><span><strong>A little care goes a long way</strong><small>For every child. For every family.</small></span></div></div>
    <span class="floating-sticker sticker--top">✦ Growing<br/>together</span><span class="floating-sticker sticker--bottom">♥</span>
    <div class="hero-orbit" aria-hidden="true">✧</div>
   </div>
   <div class="hero-bottom-wave" aria-hidden="true"></div>
  </section>

  <section class="trust-strip" aria-label="Care values"><div><span>♡</span><strong>Child-first approach</strong></div><div><span>✿</span><strong>Gentle communication</strong></div><div><span>✦</span><strong>Guidance for parents</strong></div><div><span>☼</span><strong>Growing well, together</strong></div></section>

  <section class="section intro-section" id="about">
   <div class="intro-photo reveal"><img src="${familyPhoto}" alt="Illustrative photograph of a doctor engaging with a child and parent" loading="lazy"/><span class="image-sparkle">✧</span></div>
   <div class="intro-copy reveal"><p class="eyebrow">A warm welcome</p><h2>Because every child deserves a <em>healthy start.</em></h2><p>Childhood is full of little milestones, new discoveries, and questions. Our aim is to make the healthcare journey feel clearer and more reassuring for both children and parents.</p><p>Connect with the doctor to discuss your child’s needs. The suitable consultation arrangement and availability will be confirmed directly.</p><a class="text-link" href="#contact">Get in touch <span>→</span></a></div>
  </section>

  <section class="section services-section" id="services">
   <div class="section-heading reveal"><p class="eyebrow">How we can help</p><h2>Care for every <em>little milestone.</em></h2><p>Thoughtful pediatric support, from the newborn days through the growing years.</p></div>
   <div class="service-grid">${serviceCards()}</div>
  </section>

  <section class="care-banner">
   <div class="banner-decoration" aria-hidden="true">✿</div><div><p class="eyebrow">A partnership with parents</p><h2>Healthy children.<br/><em>Happy tomorrows.</em></h2><p>Have a question about your child’s health? Start a conversation with the doctor.</p></div><a class="button button--light" href="#enquiry">Let's talk <span>→</span></a>
  </section>

  <section class="section enquiry-section" id="enquiry">
   <div class="section-heading reveal"><p class="eyebrow">Start a conversation</p><h2>Request a <em>consultation.</em></h2><p>Share a few details and the doctor will discuss your concern, availability, and suitable consultation arrangement.</p></div>
   ${enquiryForm()}
  </section>

  <section class="section faq-section" id="faq"><div class="section-heading reveal"><p class="eyebrow">Good to know</p><h2>Questions parents <em>often ask.</em></h2></div><div class="faq-grid">${faqCards()}</div></section>

  <section class="section contact-section" id="contact">
   <div class="contact-copy"><p class="eyebrow">We're here to listen</p><h2>Let’s talk about your <em>little one.</em></h2><p>Reach out by phone, WhatsApp, or email. The doctor will help you understand the next steps.</p><div class="contact-actions"><a class="button button--primary" href="tel:${telHref(contact.phonePrimary)}">Call the doctor <span>↗</span></a><a class="button button--outline" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp <span>↗</span></a></div></div>
   <div class="contact-card"><span class="contact-card-icon">✿</span><h3>Shree Dhanvantari Kids Care</h3><a href="tel:${telHref(contact.phonePrimary)}">${contact.phonePrimary}</a><a href="tel:${telHref(contact.phoneSecondary)}">${contact.phoneSecondary}</a><a href="mailto:${contact.emailPrimary}">${contact.emailPrimary}</a><a href="mailto:${contact.emailSecondary}">${contact.emailSecondary}</a><small>Consultation details and availability are confirmed directly with the doctor.</small></div>
  </section>

  <footer class="site-footer"><a class="footer-brand" href="#home">Shree Dhanvantari <strong>Kids Care</strong></a><p>Compassionate care for brighter beginnings.</p><div class="footer-bottom"><span>© <span id="current-year"></span> Shree Dhanvantari Kids Care</span><span>Dr. Deepali Ronit Hadke <i>·</i> Dr. Deepali D. Mahakal</span></div></footer>
  <a class="floating-whatsapp" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">☏</a>
 </main>`;
}

export function attachAppEvents() {
 const menu=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.primary-nav');
 menu?.addEventListener('click',()=>{
  const open=menu.getAttribute('aria-expanded')==='true';
  menu.setAttribute('aria-expanded',String(!open));
  menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');
  nav?.classList.toggle('is-open',!open);
 });
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');
 }));
 const form=document.querySelector('#consultation-form');
 form?.addEventListener('submit',event=>{
  event.preventDefault();
  const values=new FormData(form);
  const fields=[['Parent / guardian',values.get('guardianName')],['Mobile',values.get('mobile')],['Child age',values.get('childAge')],['Service',values.get('serviceNeeded')],['Preferred date / time',values.get('preferredTime')],['Message',values.get('message')]];
  const message='Consultation enquiry - Shree Dhanvantari Kids Care\\n'+fields.filter(([,v])=>v).map(([k,v])=>k+': '+v).join('\\n');
  window.open('https://wa.me/'+contact.whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
 });
 const year=document.querySelector('#current-year');if(year)year.textContent=new Date().getFullYear();
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
 }),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import EnquiryForm from './components/EnquiryForm.jsx';
import './styles.css';

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Trusted home paediatric support</p>
          <h1>Gentle child health visits for busy families.</h1>
          <p className="hero__lede">
            Book vaccination support, newborn visits, growth consultations, and general child-health enquiries with a caring local team.
          </p>
          <a className="hero__cta" href="#enquiry-form">Send an enquiry</a>
        </div>
      </section>

      <section className="services" aria-labelledby="services-heading">
        <h2 id="services-heading">How we can help</h2>
        <div className="service-grid">
          <article>
            <h3>Vaccinations & injections</h3>
            <p>Schedule routine vaccination or injection visits with clear preparation instructions.</p>
          </article>
          <article>
            <h3>Newborn visits</h3>
            <p>Get supportive checks and practical guidance during the first weeks at home.</p>
          </article>
          <article>
            <h3>Growth consultations</h3>
            <p>Discuss feeding, milestones, and growth concerns without sharing sensitive history online.</p>
          </article>
        </div>
      </section>

      <EnquiryForm />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

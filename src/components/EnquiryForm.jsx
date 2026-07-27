import { useState } from 'react';

const initialValues = {
  guardianName: '',
  childAge: '',
  phone: '',
  location: '',
  service: '',
  preferredDateTime: '',
  message: '',
};

const serviceOptions = [
  { value: 'vaccination', label: 'Vaccination' },
  { value: 'injection', label: 'Injection' },
  { value: 'newborn visit', label: 'Newborn visit' },
  { value: 'growth consultation', label: 'Growth consultation' },
  { value: 'general enquiry', label: 'General enquiry' },
];

export default function EnquiryForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const nextErrors = {};

    if (!formValues.guardianName.trim()) nextErrors.guardianName = 'Parent or guardian name is required.';
    if (!formValues.childAge.trim()) nextErrors.childAge = 'Child age is required.';
    if (!formValues.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formValues.location.trim()) nextErrors.location = 'Location or address area is required.';
    if (!formValues.service) nextErrors.service = 'Please choose the service needed.';
    if (!formValues.preferredDateTime.trim()) nextErrors.preferredDateTime = 'Preferred date and time is required.';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setStatus('success');
        setFormValues(initialValues);
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="enquiry" aria-labelledby="enquiry-heading">
      <div className="enquiry__intro">
        <p className="eyebrow">Contact us</p>
        <h2 id="enquiry-heading">Request a child health visit</h2>
        <p>
          Tell us what support you need and we will call back to confirm availability. Please do not include detailed medical history, test results, or other sensitive health information in this form.
        </p>
      </div>

      <form id="enquiry-form" className="enquiry-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            Parent/guardian name <span aria-hidden="true">*</span>
            <input name="guardianName" value={formValues.guardianName} onChange={handleChange} aria-invalid={Boolean(errors.guardianName)} required />
            {errors.guardianName && <span className="field-error">{errors.guardianName}</span>}
          </label>

          <label>
            Child age <span aria-hidden="true">*</span>
            <input name="childAge" value={formValues.childAge} onChange={handleChange} placeholder="e.g. 6 months" aria-invalid={Boolean(errors.childAge)} required />
            {errors.childAge && <span className="field-error">{errors.childAge}</span>}
          </label>

          <label>
            Phone number <span aria-hidden="true">*</span>
            <input name="phone" type="tel" value={formValues.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} required />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </label>

          <label>
            Location/address area <span aria-hidden="true">*</span>
            <input name="location" value={formValues.location} onChange={handleChange} placeholder="Neighborhood or city" aria-invalid={Boolean(errors.location)} required />
            {errors.location && <span className="field-error">{errors.location}</span>}
          </label>

          <label>
            Service needed <span aria-hidden="true">*</span>
            <select name="service" value={formValues.service} onChange={handleChange} aria-invalid={Boolean(errors.service)} required>
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            {errors.service && <span className="field-error">{errors.service}</span>}
          </label>

          <label>
            Preferred date/time <span aria-hidden="true">*</span>
            <input name="preferredDateTime" type="text" value={formValues.preferredDateTime} onChange={handleChange} placeholder="e.g. Tuesday morning" aria-invalid={Boolean(errors.preferredDateTime)} required />
            {errors.preferredDateTime && <span className="field-error">{errors.preferredDateTime}</span>}
          </label>
        </div>

        <label>
          Message
          <textarea name="message" value={formValues.message} onChange={handleChange} rows="5" placeholder="Share brief, non-sensitive details about your enquiry." />
        </label>

        <p className="privacy-note">
          Privacy note: this form is only for scheduling and general enquiries. Do not submit sensitive medical history unless a secure care pathway has been arranged.
        </p>

        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Submit enquiry'}
        </button>

        {status === 'success' && (
          <div className="form-alert form-alert--success" role="status">
            <strong>Thank you — your enquiry has been sent.</strong>
            <p>If this is an emergency or your child needs urgent medical attention, call emergency services immediately instead of waiting for a reply.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="form-alert form-alert--error" role="alert">
            We could not send the form right now. Please call us directly or try again later.
          </div>
        )}
      </form>
    </section>
  );
}

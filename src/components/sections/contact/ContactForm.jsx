import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';

const RECIPIENT_EMAIL = 'team@deshkaristudios.com';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

/*
 * Submission flow (Netlify Forms — no API keys, no packages):
 *   1. A static <form name="contact"> lives in index.html so Netlify's build bot
 *      detects the form during deploy.
 *   2. On submit, this React form POSTs URL-encoded data to "/" with form-name=contact.
 *   3. Netlify routes the submission to the "contact" form, then triggers the
 *      "Email notification" configured in the Netlify dashboard → Forms settings.
 *
 * Local dev: posting to "/" in `npm run dev` won't actually deliver email — the
 * fetch resolves successfully (Vite returns index.html) and the success state shows.
 * Real delivery happens only on the deployed Netlify site once a Forms email
 * notification has been added pointing to team@deshkaristudios.com.
 */
function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function ContactForm() {
  const { ref, controls } = useScrollReveal();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Local dev: Vite doesn't process Netlify Forms — preview the success state only.
    // Real email delivery happens on the deployed Netlify site.
    if (import.meta.env.DEV) {
      setTimeout(() => {
        setStatus('success');
        setForm(initialForm);
      }, 600);
      return;
    }

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', 'bot-field': '', ...form }),
      });
      if (!res.ok) throw new Error(`Network error ${res.status}`);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('Form submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-section border-t border-border">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionLabel>Any Questions?</SectionLabel>
            <h2
              className="text-heading font-rubik font-bold mb-5"
              style={{ fontSize: 42, lineHeight: 1.15 }}
            >
              Let's Talk
            </h2>
            <p className="text-body font-rubik" style={{ fontSize: 15, lineHeight: 1.75 }}>
              Whether you're an artist, a brand, a venue, a filmmaker or a collaborator —
              we'd love to hear from you. Fill out the form and we'll respond within
              48 working hours.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6"
            aria-label="Contact form"
          >
            {/* Required Netlify hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="cf-name" className="sr-only-label">Your Name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="sr-only-label">Your Email</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="cf-phone" className="sr-only-label">Your Phone</label>
              <input
                id="cf-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="Your Phone"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="cf-subject" className="sr-only-label">Subject</label>
              <input
                id="cf-subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Your Subject"
                required
                className="form-input"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-message" className="sr-only-label">Your Message</label>
              <textarea
                id="cf-message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Your Message"
                required
                rows={4}
                className="form-input resize-y"
                style={{ minHeight: 120 }}
              />
            </div>

            <div className="sm:col-span-2 mt-8 flex flex-col items-center gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
                showArrow={status !== 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p
                  role="status"
                  className="font-rubik text-sm w-full text-center"
                  style={{
                    background: '#f0fff4',
                    color: '#28a745',
                    padding: '12px 16px',
                    borderRadius: 4,
                  }}
                >
                  Message sent! We'll reply within 48 hours.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="font-rubik text-sm w-full text-center"
                  style={{
                    background: '#fff5f5',
                    color: '#dc3545',
                    padding: '12px 16px',
                    borderRadius: 4,
                  }}
                >
                  Something went wrong. Please email us directly at {RECIPIENT_EMAIL}.
                </p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

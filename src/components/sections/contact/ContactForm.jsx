import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const { ref, controls } = useScrollReveal();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Demo / dev fallback when EmailJS keys aren't set yet.
      setTimeout(() => {
        setStatus('success');
        formRef.current?.reset();
      }, 800);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg(err?.text || 'Something went wrong. Please try again or email us directly.');
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
            <h2 className="text-heading font-rubik font-bold mb-5" style={{ fontSize: 42, lineHeight: 1.15 }}>
              Let's Talk
            </h2>
            <p className="text-body font-rubik" style={{ fontSize: 15, lineHeight: 1.75 }}>
              Whether you're an artist, a brand, a venue, a filmmaker or a collaborator —
              we'd love to hear from you. Fill out the form and we'll respond within
              48 working hours.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="cf-name" className="sr-only-label">Your Name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
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
                onClick={undefined}
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
                  Your message has been sent! We'll respond within 48 hours.
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
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

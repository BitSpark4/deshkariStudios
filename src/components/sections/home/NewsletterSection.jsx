import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';

export default function NewsletterSection() {
  const { ref, controls } = useScrollReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setStatus('loading');
    // Stub: real integration plugs into the user's mailing platform.
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="bg-bg-light" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x text-center"
      >
        <h2 className="text-heading font-rubik font-bold mx-auto max-w-2xl" style={{ fontSize: 32, lineHeight: 1.25 }}>
          Do You Want To Update Every Latest<br />Event, Video or Release?
        </h2>

        <form
          onSubmit={onSubmit}
          className="mt-8 max-w-xl mx-auto flex items-end gap-2 border-b border-border"
          aria-label="Newsletter subscription"
        >
          <label htmlFor="newsletter-email" className="sr-only-label">Your email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email…"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input flex-1 border-b-0"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary"
            style={{ marginBottom: 4 }}
          >
            <span>{status === 'loading' ? 'Sending…' : 'Subscribe'}</span>
            <ArrowRight size={16} aria-hidden />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-green-700 font-rubik">
            Thank you! You're subscribed.
          </p>
        )}
      </motion.div>
    </section>
  );
}

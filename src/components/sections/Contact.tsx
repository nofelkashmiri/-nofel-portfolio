import React, { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const EarthCanvas = lazy(() => import('../canvas/Earth'));

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_STATE: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-nofel-47141038b/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nofelkashmiri/',
  },
];

const fields: Array<{
  name: keyof ContactForm;
  label: string;
  placeholder: string;
  autoComplete?: string;
  minLength: number;
}> = [
  {
    name: 'name',
    label: 'Your name',
    placeholder: "What's your name?",
    autoComplete: 'name',
    minLength: 2,
  },
  {
    name: 'email',
    label: 'Your email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
    minLength: 5,
  },
  {
    name: 'subject',
    label: 'Subject',
    placeholder: 'What would you like to discuss?',
    minLength: 3,
  },
  {
    name: 'message',
    label: 'Your message',
    placeholder: 'Tell me a little about your project or question.',
    minLength: 10,
  },
];

const Contact = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  const [form, setForm] = useState<ContactForm>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    let observer: IntersectionObserver | undefined;

    const updateGlobeVisibility = () => {
      observer?.disconnect();
      setShowGlobe(false);
      if (!mediaQuery.matches) return;

      const contactSection = document.getElementById('contact');
      if (!contactSection) return;

      if (!('IntersectionObserver' in window)) {
        setShowGlobe(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowGlobe(true);
            observer?.disconnect();
          }
        },
        { rootMargin: '400px 0px' }
      );
      observer.observe(contactSection);
    };

    updateGlobeVisibility();
    mediaQuery.addEventListener('change', updateGlobeVisibility);

    return () => {
      mediaQuery.removeEventListener('change', updateGlobeVisibility);
      observer?.disconnect();
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    setStatus(null);
  };

  const buildMailtoLink = (payload: ContactForm) => {
    const subject = encodeURIComponent(payload.subject.trim() || 'Portfolio inquiry');
    const body = encodeURIComponent(
      [
        `Name: ${payload.name.trim()}`,
        `Email: ${payload.email.trim()}`,
        '',
        payload.message.trim(),
      ].join('\n')
    );

    return `mailto:${config.html.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.subject || !trimmedForm.message) {
      setStatus({
        type: 'error',
        message: 'Please complete all fields before sending your message.',
      });
      return;
    }

    const mailtoLink = buildMailtoLink(trimmedForm);

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setStatus({
        type: 'success',
        message: 'Your email app is ready to send the message. Please confirm the draft.',
      });
      window.location.href = mailtoLink;
      setForm(INITIAL_STATE);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: trimmedForm.name,
          from_name: trimmedForm.name,
          to_name: config.html.fullName,
          from_email: trimmedForm.email,
          reply_to: trimmedForm.email,
          to_email: config.html.email,
          subject: trimmedForm.subject,
          message: trimmedForm.message,
        },
        emailjsConfig.publicKey
      );

      setStatus({
        type: 'success',
        message: 'Your message was sent successfully. Thank you for reaching out.',
      });
      setForm(INITIAL_STATE);
    } catch (error) {
      console.error('EmailJS failed to send the contact form.', error);
      setStatus({
        type: 'success',
        message: 'Your email app is ready to send the message. Please confirm the draft.',
      });
      window.location.href = mailtoLink;
      setForm(INITIAL_STATE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-w-0 flex-col gap-8 overflow-hidden xl:mt-12 xl:flex-row xl:items-stretch">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="min-w-0 flex-[0.75] rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.3)] sm:p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
          Have a project in mind? Let&apos;s build something meaningful.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          {fields.map(field => {
            const isMessage = field.name === 'message';
            const sharedProps = {
              id: field.name,
              name: field.name,
              value: form[field.name],
              onChange: handleChange,
              placeholder: field.placeholder,
              required: true,
              minLength: field.minLength,
              maxLength: isMessage ? 2000 : 120,
              'aria-describedby': `${field.name}-hint`,
              className:
                'min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950/75 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/25',
            };

            return (
              <label key={field.name} htmlFor={field.name} className="flex min-w-0 flex-col gap-2">
                <span className="font-medium text-slate-100">{field.label}</span>
                {isMessage ? (
                  <textarea {...sharedProps} rows={6} />
                ) : (
                  <input
                    {...sharedProps}
                    type={field.name === 'email' ? 'email' : 'text'}
                    autoComplete={field.autoComplete}
                    inputMode={field.name === 'email' ? 'email' : undefined}
                  />
                )}
                <span id={`${field.name}-hint`} className="sr-only">
                  {field.name === 'message'
                    ? 'Required, at least 10 characters and no more than 2000 characters.'
                    : `Required, at least ${field.minLength} characters.`}
                </span>
              </label>
            );
          })}

          <button
            type="submit"
            disabled={loading}
            className="cta-primary min-h-12 w-full disabled:cursor-wait disabled:opacity-60 sm:w-fit"
          >
            {loading ? 'Sending...' : 'Send message'}
          </button>

          {status && (
            <p
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live={status.type === 'error' ? 'assertive' : 'polite'}
              className={
                status.type === 'error'
                  ? 'text-sm leading-6 text-rose-300'
                  : 'text-sm leading-6 text-emerald-300'
              }
            >
              {status.message}
            </p>
          )}
        </form>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-400">Reach me directly</p>
          <a
            href={`mailto:${config.html.email}`}
            className="mt-2 inline-flex min-h-11 items-center break-all font-medium text-white transition-colors hover:text-[#7dd3fc]"
          >
            {config.html.email}
          </a>
          <div className="mt-3 flex flex-wrap gap-3">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-[#38BDF8]/60 hover:bg-[#38BDF8]/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {showGlobe && (
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative min-h-[360px] min-w-0 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/30 md:h-[420px] xl:h-auto xl:flex-1"
          aria-label="Interactive 3D globe"
        >
          <Suspense
            fallback={
              <div className="flex h-full min-h-[360px] items-center justify-center text-sm text-slate-400">
                3D globe preview
              </div>
            }
          >
            <EarthCanvas />
          </Suspense>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

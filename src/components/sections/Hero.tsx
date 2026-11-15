import { motion, useReducedMotion } from 'framer-motion';

import { config } from '../../constants/config';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-nofel-47141038b/',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nofelkashmiri/',
    external: true,
  },
  { label: 'Email', href: `mailto:${config.html.email}`, external: false },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="hero-section relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#080B12]"
    >
      <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-16 lg:py-24">
        <div className="min-w-0">
          <motion.p
            {...entrance()}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300 sm:text-sm"
          >
            <span className="h-px w-8 bg-sky-400" aria-hidden="true" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            {...entrance(0.08)}
            className="mt-5 max-w-[13ch] break-words text-[clamp(3rem,7.2vw,6rem)] font-bold leading-[0.96] tracking-[-0.055em] text-white"
          >
            Nofel <span className="text-sky-300">Kashmiri</span>
          </motion.h1>

          <motion.div {...entrance(0.16)} className="mt-6">
            <p className="text-lg font-semibold leading-snug text-slate-100 sm:text-xl">
              Digital Marketing &amp; E-commerce Specialist
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I work across digital marketing and e-commerce management, while continuing to
              develop my knowledge of web technologies.
            </p>
          </motion.div>

          <motion.div
            {...entrance(0.24)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a href="#projects" className="cta-primary min-h-12 w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="cta-secondary min-h-12 w-full sm:w-auto">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            {...entrance(0.32)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            role="group"
            aria-label="Social and email links"
          >
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="min-h-11 text-sm font-medium text-slate-400 transition-colors hover:text-sky-300 focus-visible:text-sky-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...entrance(0.12)}
          className="relative mx-auto w-full max-w-[28rem]"
        >
          <div className="hero-portrait-glow pointer-events-none absolute -inset-6 rounded-[3rem]" />
          <figure className="hero-portrait-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-sky-200/20 bg-slate-900 shadow-[0_32px_90px_rgba(0,0,0,0.48)]">
            <motion.img
              src="/images/nofel-profile.jpg"
              alt="Nofel Kashmiri"
              width={768}
              height={1024}
              loading="eager"
              decoding="async"
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="h-full w-full object-cover object-[center_18%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B12]/70 via-transparent to-sky-950/10"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-md sm:bottom-6 sm:left-6">
              Digital Marketing <span className="mx-1.5 text-sky-300">·</span> E-commerce
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

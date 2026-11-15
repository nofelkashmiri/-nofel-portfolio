import { lazy, Suspense, useEffect, useState } from 'react';
import { useMotionValue, useReducedMotion, useSpring, motion } from 'framer-motion';
import type { MouseEvent } from 'react';

import { styles } from '../../constants/styles';
import { config } from '../../constants/config';
import portraitImage from '../../assets/nofel-portrait.jpg';

const ComputersCanvas = lazy(() => import('../canvas/Computers'));

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-nofel-47141038b/' },
  { label: 'Instagram', href: 'https://www.instagram.com/nofelkashmiri/' },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [showDesktopModel, setShowDesktopModel] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1200px)').matches
  );
  const [isTouchDevice] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );
  const tiltX = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  });
  const tiltY = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    const updateDesktopModel = (event: MediaQueryListEvent) => {
      setShowDesktopModel(event.matches);
    };

    mediaQuery.addEventListener('change', updateDesktopModel);
    return () => mediaQuery.removeEventListener('change', updateDesktopModel);
  }, []);

  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    tiltX.set(-y * 20);
    tiltY.set(x * 20);
  };

  const resetPortraitTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="home"
      className="hero-section relative mx-auto min-h-[900px] w-full overflow-hidden pb-16 sm:min-h-[880px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.15),transparent_26%)]" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-2 text-sm text-[#dff3ff]"
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.65)]"
              />
              Digital marketing &amp; e-commerce professional
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.heroHeadText} break-words text-white lg:text-[clamp(3.25rem,6vw,5rem)] lg:leading-[1.08]`}
            >
              <span className="block text-[0.9em] text-slate-200">Hi, I'm</span>
              <span className="mt-2 block text-[#38BDF8]">{config.hero.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.heroSubText} mt-5 max-w-[42rem] text-slate-300`}
            >
              <span className="block text-white">{config.hero.p[0]}</span>
              <span className="mt-2 block text-base text-slate-300 sm:text-lg">
                {config.hero.p[1]}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="cta-primary">
                Explore My Work
              </a>
              <a href="#contact" className="cta-secondary">
                Let&apos;s Work Together
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700/80 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-[#38BDF8]/60 hover:bg-[#38BDF8]/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="relative mt-10 w-full max-w-[420px] lg:mt-0 lg:w-[38%]">
            <motion.div
              className="hero-3d-card"
              animate={
                reduceMotion || isTouchDevice
                  ? { y: 0, rotateX: 0, rotateY: 0 }
                  : {
                      y: [0, -12, 0],
                      rotateX: [8, 12, 8],
                      rotateY: [-12, 12, -12],
                    }
              }
              transition={{
                duration: 7,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              onMouseMove={handlePortraitMove}
              onMouseLeave={resetPortraitTilt}
            >
              <div className="hero-3d-glow" />
              <div className="hero-3d-ring hero-3d-ring-one" />
              <div className="hero-3d-ring hero-3d-ring-two" />
              <motion.div
                style={{
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformPerspective: 900,
                }}
                whileHover={{ scale: 1.035 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                className="hero-3d-inner"
              >
                <img
                  src={portraitImage}
                  alt="Muhammad Nofel"
                  width="768"
                  height="1024"
                  className="hero-3d-image"
                />
                <div className="hero-3d-shine" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[35%] min-[1200px]:block [&_canvas]:!pointer-events-auto"
      >
        {showDesktopModel && (
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        )}
      </div>

      <div className="absolute bottom-8 left-2 z-20 flex items-center justify-center sm:left-8">
        <a href="#about" aria-label="Scroll to about section">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="mb-1 h-3 w-3 rounded-full bg-[#38BDF8]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

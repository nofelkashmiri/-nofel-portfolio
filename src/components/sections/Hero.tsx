import { useMotionValue, useReducedMotion, useSpring, motion } from "framer-motion";
import type { MouseEvent } from "react";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import portraitImage from "../../assets/nofel-portrait.png";

const Hero = () => {
  const reduceMotion = useReducedMotion();
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
    <section className="relative mx-auto min-h-[940px] w-full overflow-hidden sm:min-h-[880px] xl:min-h-[900px]">
      <div className="relative z-20 mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 pt-32 sm:px-10 lg:px-16">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="min-w-0 flex-1 sm:flex-none sm:w-[55%] xl:w-[58%]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`${styles.heroHeadText} break-words text-white lg:text-[clamp(3.25rem,6vw,5rem)] lg:leading-[1.12]`}
          >
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${styles.heroSubText} mt-2 max-w-[42rem] text-white-100`}
          >
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </motion.p>
        </div>
      </div>

      <div className="absolute left-1/2 top-[560px] z-10 w-[200px] -translate-x-1/2 sm:left-auto sm:right-4 sm:top-36 sm:w-[200px] sm:translate-x-0 lg:right-8 lg:w-[220px] xl:right-[7%] xl:w-[250px]">
        <motion.div
          className="hero-3d-card"
          animate={
            reduceMotion
              ? { y: 0, rotateX: 0, rotateY: 0 }
              : {
                  y: [0, -12, 0],
                  rotateX: [8, 12, 8],
                  rotateY: [-12, 12, -12],
                }
          }
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
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
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="hero-3d-inner"
          >
            <img
              src={portraitImage}
              alt="Muhammad Nofel"
              className="hero-3d-image"
            />
            <div className="hero-3d-shine" />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[40%] md:block [&_canvas]:!pointer-events-auto">
        <ComputersCanvas />
      </div>

      <div className="xs:bottom-10 absolute bottom-12 left-2 z-20 flex items-center justify-center sm:bottom-8">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { services } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

interface IServiceCard {
  index: number;
  title: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, description }) => (
  <Tilt
    glareEnable={
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
    }
    tiltEnable={
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
    }
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    glareColor="#8bd3ff"
  >
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.12, 0.7)}
      className="group h-full w-full rounded-[24px] border border-slate-800/80 bg-slate-900/60 p-[1px] shadow-[0_20px_70px_rgba(15,23,42,0.6)]"
    >
      <div className="flex min-h-[240px] flex-col rounded-[23px] bg-[linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.78))] px-6 py-7">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-lg font-bold text-[#7dd3fc] transition-transform duration-300 group-hover:scale-105">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="text-[1.2rem] font-bold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
      >
        <div className="max-w-3xl">
          {config.sections.about.content.split('\n\n').map(paragraph => (
            <p key={paragraph} className="text-base leading-8 text-slate-300 sm:text-[17px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid w-full max-w-md gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {[
            'Digital Marketing',
            'E-commerce Operations',
            'Social Media Strategy',
            'Web & Digital Growth',
          ].map(item => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.45)]"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');

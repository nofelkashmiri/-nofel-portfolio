import { motion } from 'framer-motion';

import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="relative mt-10 space-y-8 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-gradient-to-b before:from-[#38BDF8] before:via-slate-700 before:to-transparent sm:before:left-[23px]">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.companyName}-${experience.date}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative ml-10 max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.28)] sm:ml-12 sm:p-8"
          >
            <span className="absolute -left-[39px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#080B12] bg-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.65)] sm:-left-[45px] sm:top-8 sm:h-5 sm:w-5" />
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7dd3fc]">
                  {experience.companyName}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">{experience.title}</h3>
              </div>
              <span className="w-fit rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-2 text-sm text-[#dff3ff]">
                {experience.date}
              </span>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {experience.points.map(point => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-white-100">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative ml-10 max-w-4xl rounded-2xl border border-slate-800 bg-[linear-gradient(140deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.62))] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.28)] sm:ml-12 sm:p-8"
        >
          <span className="absolute -left-[39px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#080B12] bg-indigo-400 shadow-[0_0_16px_rgba(129,140,248,0.55)] sm:-left-[45px] sm:top-8 sm:h-5 sm:w-5" />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a5b4fc]">
                Education
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Bachelor of Science in Information Technology
              </h3>
              <p className="mt-2 text-lg font-medium text-slate-200">University of the Punjab</p>
              <p className="mt-3 leading-7 text-slate-300">{config.sections.experience.content}</p>
            </div>
            <div className="flex flex-wrap gap-3 sm:max-w-[190px] sm:justify-end">
              <span className="rounded-full border border-indigo-300/25 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-100">
                5th Semester
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');

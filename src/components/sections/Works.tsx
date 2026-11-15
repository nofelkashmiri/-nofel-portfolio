import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { selectedExperience } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-base leading-8 text-slate-300 sm:text-[17px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-12 grid min-w-0 gap-6 md:grid-cols-2">
        {selectedExperience.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeIn('up', 'spring', index * 0.15, 0.7)}
            className="group min-w-0 overflow-hidden rounded-[24px] border border-slate-800/80 bg-[linear-gradient(180deg,_rgba(17,24,39,0.95),_rgba(15,23,42,0.75))] shadow-[0_20px_60px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40"
          >
            <div className="relative flex min-h-32 items-end overflow-hidden border-b border-slate-800/80 bg-[radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.18),transparent_48%),linear-gradient(125deg,_rgba(15,23,42,0.8),_rgba(30,41,59,0.8))] px-6 py-5 sm:px-7">
              <span className="pointer-events-none absolute -right-7 -top-14 h-40 w-40 rounded-full border border-[#38BDF8]/20 transition-transform duration-500 group-hover:scale-110" />
              <span className="pointer-events-none absolute -right-1 -top-8 h-28 w-28 rounded-full border border-indigo-400/20" />
              <div className="relative min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                  {item.subtitle}
                </p>
                <h3 className="mt-2 break-words text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-base leading-7 text-slate-300">{item.description}</p>

              <dl className="mt-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    My role
                  </dt>
                  <dd className="mt-1 break-words text-sm leading-6 text-slate-200">{item.role}</dd>
                </div>
              </dl>

              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Responsibilities & documented scope
                </h4>
                <ul className="mt-3 space-y-2">
                  {item.responsibilities.map(responsibility => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {item.tools.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Tools & platforms
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tools.map(tool => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1.5 text-sm text-[#dff3ff]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');

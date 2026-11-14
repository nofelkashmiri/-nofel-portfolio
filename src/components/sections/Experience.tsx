import { motion } from "framer-motion";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-10 space-y-6">
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
            className="max-w-4xl rounded-2xl border border-white/10 bg-tertiary p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#b69cff]">
                  {experience.companyName}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {experience.title}
                </h3>
              </div>
              <span className="w-fit rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10 px-4 py-2 text-sm text-[#d2c4ff]">
                {experience.date}
              </span>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {experience.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-6 text-white-100"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#915EFF]" />
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
          className="max-w-4xl rounded-2xl border border-white/10 bg-tertiary p-6 sm:p-8"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#915EFF] text-xl font-bold text-white">
            PU
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#b69cff]">
            Education
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            BS Information Technology
          </h3>
          <p className="mt-2 text-lg font-medium text-[#b69cff]">
            Punjab University
          </p>
          <p className="text-secondary mt-3 leading-7">
            {config.sections.experience.content}
          </p>
        </motion.article>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");

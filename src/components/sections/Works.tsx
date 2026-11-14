import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { selectedExperience } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {selectedExperience.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.7)}
            className="rounded-2xl border border-white/10 bg-tertiary p-7 transition-colors hover:border-[#915EFF]/50"
          >
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#b69cff]">
              {item.subtitle}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-secondary mt-4 leading-7">{item.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10 px-3 py-1.5 text-sm text-[#d2c4ff]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} p="What I do" h2="Skills & Expertise." />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {technologies.map((technology) => (
          <Tilt
            key={technology.name}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable
            glareColor="#aaa6c3"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-tertiary p-6">
              <h3 className="text-xl font-bold text-white">
                {technology.name}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {technology.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10 px-3 py-1.5 text-sm text-[#d2c4ff]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

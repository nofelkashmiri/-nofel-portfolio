import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { Header } from '../atoms/Header';

const Tech = () => {
  return (
    <>
      <Header useMotion={true} p="What I do" h2="Skills & Expertise." />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {technologies.map(technology => (
          <Tilt
            key={technology.name}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={
              typeof window !== 'undefined' &&
              window.matchMedia('(hover: hover) and (pointer: fine)').matches
            }
            tiltEnable={
              typeof window !== 'undefined' &&
              window.matchMedia('(hover: hover) and (pointer: fine)').matches
            }
            glareColor="#7dd3fc"
          >
            <div className="h-full rounded-[24px] border border-slate-800/80 bg-[linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.75))] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.32)]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-white">{technology.name}</h3>
                <span className="rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
                  Core
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {technology.skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-[#38BDF8]/50 hover:text-white"
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

export default SectionWrapper(Tech, 'tech');

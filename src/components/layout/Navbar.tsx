import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../constants/styles';
import { navLinks } from '../../constants';
import { config } from '../../constants/config';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';

const Navbar = () => {
  const [active, setActive] = useState<string | null>('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        if (!sectionId) return;

        const currentElement = current as HTMLElement;
        const sectionHeight = currentElement.offsetHeight;
        const sectionTop = currentElement.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      onKeyDown={event => {
        if (event.key === 'Escape') setToggle(false);
      }}
      className={`${
        styles.paddingX
      } fixed top-0 z-50 flex w-full items-center py-5 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/75 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-slate-950/35 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#38BDF8]/50 bg-[#38BDF8]/10 text-[0.7rem] font-bold text-[#38BDF8]">
            MN
          </div>
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            {config.html.fullName}
          </p>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-8 lg:flex">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? 'text-white' : 'text-slate-300'
              } text-[15px] font-medium transition-colors duration-200 hover:text-white`}
            >
              <a
                href={`#${nav.id}`}
                aria-current={active === nav.id ? 'location' : undefined}
                className="relative inline-flex min-h-11 items-center py-1.5"
              >
                <span className={active === nav.id ? 'nav-link-active' : 'nav-link'}>
                  {nav.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            onClick={() => setToggle(value => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/60"
          >
            <img src={toggle ? close : menu} alt="" className="h-[22px] w-[22px] object-contain" />
          </button>

          <div
            id="mobile-navigation"
            className={`${
              !toggle ? 'hidden' : 'flex'
            } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[180px] rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.id ? 'text-white' : 'text-slate-300'
                  } cursor-pointer text-[16px] font-medium`}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    aria-current={active === nav.id ? 'location' : undefined}
                    className="inline-flex min-h-11 items-center"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { config } from '../../constants/config';
import { navLinks } from '../../constants';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-nofel-47141038b/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nofelkashmiri/',
  },
];

const Footer = () => (
  <footer className="border-t border-slate-800/80 bg-slate-950/60">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-16">
      <div>
        <a href="#home" className="inline-flex min-h-11 items-center text-lg font-bold text-white">
          {config.html.fullName}
        </a>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
          Digital marketing, e-commerce operations, and a growing interest in web development and
          digital solutions.
        </p>
        <a
          href={`mailto:${config.html.email}`}
          className="mt-3 inline-flex min-h-11 items-center break-all text-sm font-medium text-slate-200 transition-colors hover:text-[#7dd3fc]"
        >
          {config.html.email}
        </a>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
          Explore
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="inline-flex min-h-11 items-center text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
          Connect
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-[#38BDF8]/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="border-t border-slate-800 pt-5 text-xs text-slate-500 lg:col-span-3">
        © {new Date().getFullYear()} {config.html.fullName}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

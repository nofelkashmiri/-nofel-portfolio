import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Tech from './components/sections/Tech';
import Works from './components/sections/Works';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { config } from './constants/config';

const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => {
  const [loadStars, setLoadStars] = useState(false);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    if (!('IntersectionObserver' in window)) {
      setLoadStars(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadStars(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="relative z-0 overflow-x-clip bg-[#080B12]">
          <Navbar />
          <main id="main-content">
            <div>
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <Suspense fallback={null}>{loadStars && <StarsCanvas />}</Suspense>
            </div>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;

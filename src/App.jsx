import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Education from './components/Education';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Setup interactive panels (spotlight + tilt)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resetPanel(panel) {
      panel.style.setProperty('--spotlight-x', '50%');
      panel.style.setProperty('--spotlight-y', '50%');
      panel.style.setProperty('--rotate-x', '0deg');
      panel.style.setProperty('--rotate-y', '0deg');
    }

    function handlePointerMove(e) {
      const panel = e.currentTarget;
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xRatio = x / rect.width;
      const yRatio = y / rect.height;

      panel.style.setProperty('--spotlight-x', `${(xRatio * 100).toFixed(2)}%`);
      panel.style.setProperty('--spotlight-y', `${(yRatio * 100).toFixed(2)}%`);

      if (panel.hasAttribute('data-tilt')) {
        panel.style.setProperty('--rotate-x', `${((0.5 - yRatio) * 8).toFixed(2)}deg`);
        panel.style.setProperty('--rotate-y', `${((xRatio - 0.5) * 10).toFixed(2)}deg`);
      }
    }

    function handlePointerLeave(e) { resetPanel(e.currentTarget); }

    function setupPanels() {
      const panels = document.querySelectorAll('.panel');
      panels.forEach(panel => {
        resetPanel(panel);
        if (!prefersReducedMotion) {
          panel.addEventListener('pointermove', handlePointerMove);
          panel.addEventListener('pointerleave', handlePointerLeave);
          panel.addEventListener('pointercancel', handlePointerLeave);
        }
      });
      return panels;
    }

    // Setup reveal on scroll
    function setupReveal() {
      const elements = [...document.querySelectorAll('[data-reveal]')];
      elements.forEach((el, i) => el.style.setProperty('--reveal-delay', `${Math.min(i * 80, 220)}ms`));

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('is-visible'));
        return null;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.01, rootMargin: '0px 0px -6% 0px' });

      elements.forEach(el => observer.observe(el));
      return observer;
    }

    // Delayed setup to ensure DOM is ready after route change
    const timeout = setTimeout(() => {
      const panels = setupPanels();
      const observer = setupReveal();

      return () => {
        panels.forEach(panel => {
          panel.removeEventListener('pointermove', handlePointerMove);
          panel.removeEventListener('pointerleave', handlePointerLeave);
          panel.removeEventListener('pointercancel', handlePointerLeave);
        });
        if (observer) observer.disconnect();
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ParticleCanvas />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { contactInfo } from './data';
import { useState, useEffect, ReactNode } from 'react';
import { Moon, Sun, ArrowUp, Menu, X } from 'lucide-react';

function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 transition-colors z-[90] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className={`flex flex-col w-full max-w-5xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 shadow-2xl overflow-hidden transition-all duration-300 ${isMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
        <div className="flex items-center justify-between px-5 py-3 md:px-6 md:py-3">
          <span className="font-display font-bold text-white text-base md:text-lg tracking-tight">
            {contactInfo.name.split(' ')[0]}<span className="text-indigo-400">.</span>
          </span>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 ml-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-neutral-800"
            >
              <div className="flex flex-col px-5 py-4 gap-4 text-sm font-medium text-neutral-400">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Skills</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Projects</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

function SectionWrapper({ children, id }: { children: ReactNode, id?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 md:py-20"
    >
      {children}
    </motion.section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <Hero />
        <SectionWrapper id="about-section">
          <About />
        </SectionWrapper>
        <SectionWrapper id="skills-section">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="projects-section">
          <Projects />
        </SectionWrapper>
        <SectionWrapper id="contact-section">
          <Contact />
        </SectionWrapper>
      </main>
      <footer className="text-center py-8 text-neutral-600 text-sm border-t border-neutral-900">
        © {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
      </footer>
    </div>
  );
}

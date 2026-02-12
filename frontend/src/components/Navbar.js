import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText, Moon, Sun, Languages } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme, language = 'es', toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isEnglish = language === 'en';
  const linkAbout = isEnglish ? 'About' : 'Sobre mí';
  const linkSkills = 'Skills';
  const linkProjects = isEnglish ? 'Projects' : 'Proyectos';
  const linkProcess = isEnglish ? 'Process' : 'Proceso';
  const openCvLabel = isEnglish ? 'Open CV' : 'Abrir CV';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCV = () => {
    window.open('cv/Resume.pdf', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}
      data-testid="navbar"
    >
      <div className="container-custom flex items-center justify-between gap-4">
        <motion.a
          href="#"
          className="font-heading text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          data-testid="nav-logo"
        >
          HL
        </motion.a>

        <div className="hidden lg:flex items-center gap-6 text-sm">
          <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
            {linkAbout}
          </a>
          <a href="#skills" className="text-text-secondary hover:text-text-primary transition-colors">
            {linkSkills}
          </a>
          <a href="#projects" className="text-text-secondary hover:text-text-primary transition-colors">
            {linkProjects}
          </a>
          <a href="#process" className="text-text-secondary hover:text-text-primary transition-colors">
            {linkProcess}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:bg-surface-highlight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="language-toggle"
          >
            <Languages size={16} />
            <span className="text-sm font-medium uppercase">{language}</span>
          </motion.button>

          <motion.button
            onClick={openCV}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="cv-button"
          >
            <FileText size={18} />
            <span>{openCvLabel}</span>
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-3 rounded-full glass hover:bg-surface-highlight transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            data-testid="theme-toggle"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={toggleLanguage}
            className="p-2.5 rounded-full glass"
            whileTap={{ scale: 0.9 }}
            data-testid="language-toggle-mobile"
          >
            <Languages size={18} />
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-full glass"
            whileTap={{ scale: 0.9 }}
            data-testid="theme-toggle-mobile"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full glass"
            whileTap={{ scale: 0.9 }}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass mt-3 mx-4 rounded-2xl p-4 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="#about" className="py-2 px-3 rounded-lg bg-surface-highlight text-text-secondary">
              {linkAbout}
            </a>
            <a href="#skills" className="py-2 px-3 rounded-lg bg-surface-highlight text-text-secondary">
              {linkSkills}
            </a>
            <a href="#projects" className="py-2 px-3 rounded-lg bg-surface-highlight text-text-secondary">
              {linkProjects}
            </a>
            <a href="#process" className="py-2 px-3 rounded-lg bg-surface-highlight text-text-secondary">
              {linkProcess}
            </a>
          </div>
          <button
            onClick={openCV}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-medium"
            data-testid="cv-button-mobile"
          >
            <FileText size={18} />
            <span>{openCvLabel}</span>
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

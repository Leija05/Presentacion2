import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('es');
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLanguage = localStorage.getItem('language') || 'es';
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
    document.documentElement.lang = savedLanguage;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  return (
    <div className="app" data-testid="app-container">
      <div className="grain-overlay" />
      
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      
      <main>
        <HeroSection openModal={openModal} language={language} />
        <AboutSection openModal={openModal} language={language} />
        <SkillsSection openModal={openModal} language={language} />
        <ProjectsSection openModal={openModal} language={language} />
        <ProcessSection language={language} />
      </main>
      
      <Footer language={language} />
      
      <ScrollToTop />
      
      <AnimatePresence>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            {modalContent}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

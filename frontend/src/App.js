import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
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
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection openModal={openModal} />
        <AboutSection openModal={openModal} />
        <SkillsSection openModal={openModal} />
        <ProjectsSection openModal={openModal} />
        <ProcessSection />
      </main>
      
      <Footer />
      
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
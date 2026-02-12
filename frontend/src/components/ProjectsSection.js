import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Pause } from 'lucide-react';

const data = {
  es: {
    title: 'Mis Proyectos',
    subtitle: 'Algunos de mis proyectos web y trabajos personales:',
    comingSoon: 'Próximo proyecto',
    inProgress: 'En desarrollo…',
    download: 'Descargar App',
    view: 'Ver proyecto',
    projects: [
      {
        id: 'restaurant',
        title: 'Página Web Restaurant',
        description: 'Sitio web de restaurante con galería, diseño responsivo y animaciones.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        video: '/videos/Restaurant.mp4',
        image: '/img/RestaurantProyect.png',
        linkDownload: 'https://github.com/Leija05/Restaurant',
        linkView:'https://leija05.github.io/Restaurant/#gallery',
      },
      {
        id: 'panaderia',
        title: 'Panadería Electron',
        description: 'Sistema de venta de panadería usando Electron.',
        tech: ['HTML', 'CSS', 'JS', 'Node', 'Electron', 'SQLite'],
        video: '/videos/Panaderia.mp4',
        image: '/img/PanaderiaElectron.png',
        linkDownload: 'https://github.com/Leija05/PanaderiaElectron/releases',
        linkView:'https://github.com/Leija05/PanaderiaElectron',
      },
      {
        id: 'jodify',
        title: 'Reproductor Mp3',
        description: 'Reproductor de música con Electron y Supabase.',
        tech: ['HTML', 'CSS', 'JS', 'Node', 'Electron', 'Supabase'],
        video: '/videos/Jodify.mp4',
        image: '/img/Jodify.png',
        linkDownload: 'https://github.com/Leija05/jodify/releases',
        linkView:'https://leija05.github.io/jodify/',
      },
    ],
  },
  en: {
    title: 'My Projects',
    subtitle: 'Some of my web projects and personal work:',
    comingSoon: 'Next project',
    inProgress: 'In progress…',
    download: 'Download App',
    view: 'View project',
    projects: [
      {
        id: 'restaurant',
        title: 'Restaurant Website',
        description: 'Restaurant website with gallery, responsive design and animations.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        video: '/videos/Restaurant.mp4',
        image: '/img/RestaurantProyect.png',
        linkDownload: 'https://github.com/Leija05/Restaurant',
        linkView:'https://leija05.github.io/Restaurant/#gallery',
      },
      {
        id: 'panaderia',
        title: 'Bakery Electron',
        description: 'Bakery sales system built with Electron.',
        tech: ['HTML', 'CSS', 'JS', 'Node', 'Electron', 'SQLite'],
        video: '/videos/Panaderia.mp4',
        image: '/img/PanaderiaElectron.png',
        linkDownload: 'https://github.com/Leija05/PanaderiaElectron/releases',
        linkView:'https://github.com/Leija05/PanaderiaElectron',
      },
      {
        id: 'jodify',
        title: 'Mp3 Player',
        description: 'Music player with Electron and Supabase.',
        tech: ['HTML', 'CSS', 'JS', 'Node', 'Electron', 'Supabase'],
        video: '/videos/Jodify.mp4',
        image: '/img/Jodify.png',
        linkDownload: 'https://github.com/Leija05/jodify/releases',
        linkView:'https://leija05.github.io/jodify/',
      },
    ],
  },
};

export const ProjectsSection = ({ openModal, language = 'es' }) => {
  const t = data[language] || data.es;
  const projects = t.projects;

  const handleProjectClick = (project) => {
    openModal(<ProjectModal project={project} labels={t} />);
  };

  return (
    <section id="projects" className="py-24 md:py-32" data-testid="projects-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="mt-4 text-text-secondary max-w-lg">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}

          <motion.div
            className="rounded-2xl glass p-6 flex flex-col items-center justify-center min-h-[320px] opacity-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-surface-highlight flex items-center justify-center mb-4">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="font-heading text-xl font-semibold">{t.comingSoon}</h3>
            <p className="text-text-secondary text-sm mt-2">{t.inProgress}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const techToShow = project.tech.slice(0, 3);
  const remainingTech = project.tech.length - 3;

  return (
    <motion.div
      className="group relative rounded-2xl glass overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {isHovered ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white" />}
        </motion.div>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techToShow.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full bg-surface-highlight text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 && (
            <span className="px-2.5 py-1 text-xs rounded-full bg-primary/20 text-primary">
              +{remainingTech}
            </span>
          )}
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-shadow duration-300"
        style={{
          boxShadow: isHovered ? '0 0 40px rgba(123, 44, 191, 0.3)' : 'none',
        }}
      />
    </motion.div>
  );
};

const ProjectModal = ({ project, labels }) => {
  const techList = project.tech || [];

  return (
    <div className="space-y-4" data-testid={`project-modal-${project.id}`}>
      <h3 className="font-heading text-2xl font-bold">{project.title}</h3>

      <div className="rounded-xl overflow-hidden">
        <video
          src={project.video}
          controls
          autoPlay
          className="w-full max-h-[300px] bg-black"
        />
      </div>

      <p className="text-text-secondary leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {techList.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-sm rounded-full bg-surface-highlight text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      <motion.a
        href={project.linkDownload}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="project-link"
      >
        <span>{labels.download}</span>
        <ExternalLink size={18} />
      </motion.a>
      <motion.a
        href={project.linkView}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="project-link"
      >
        <span>{labels.view}</span>
        <ExternalLink size={18} />
      </motion.a>
    </div>
  );
};

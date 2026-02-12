import React from 'react';
import { motion } from 'framer-motion';

const skillsByLanguage = {
  es: [
  {
    id: 'csharp',
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
    description: 'Lenguaje orientado a objetos para aplicaciones de escritorio, web y videojuegos con .NET.',
    level: 85,
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
    description: 'Lenguaje que estructura páginas web. Define títulos, textos, imágenes y secciones.',
    level: 95,
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
    description: 'Se encarga del diseño: colores, tamaños, animaciones y estilos visuales.',
    level: 90,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    description: 'Hace la página interactiva: botones, animaciones, ventanas y lógica.',
    level: 88,
  },
  ],
  en: [
    {
      id: 'csharp',
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
      description: 'Object-oriented language for desktop, web and game apps with .NET.',
      level: 85,
    },
    {
      id: 'html',
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      description: 'Language that structures web pages with titles, text, images and sections.',
      level: 95,
    },
    {
      id: 'css',
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
      description: 'Handles design: colors, sizes, animations and visual styles.',
      level: 90,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
      description: 'Makes pages interactive with buttons, animations and logic.',
      level: 88,
    },
  ],
};

const labels = {
  es: { title: 'Lo que domino', level: 'Nivel de dominio' },
  en: { title: 'What I master', level: 'Skill level' },
};

export const SkillsSection = ({ openModal, language = 'es' }) => {
  const skills = skillsByLanguage[language] || skillsByLanguage.es;
  const t = labels[language] || labels.es;

  const handleSkillClick = (skill) => {
    openModal(<SkillModal skill={skill} language={language} />);
  };

  return (
    <section id="skills" className="py-24 md:py-32" data-testid="skills-section">
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
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.button
              key={skill.id}
              onClick={() => handleSkillClick(skill)}
              className="group relative p-6 rounded-2xl glass overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`skill-${skill.id}`}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Border Animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-border-flow">
                  <div className="w-full h-full rounded-2xl bg-surface" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <span className="font-heading font-semibold text-lg">{skill.name}</span>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 mt-3 rounded-full bg-surface-highlight overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillModal = ({ skill, language = 'es' }) => (

  <div className="text-center space-y-4" data-testid={`skill-modal-${skill.id}`}>
    <motion.img
      src={skill.icon}
      alt={skill.name}
      className="w-20 h-20 mx-auto"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <h3 className="font-heading text-2xl font-bold">{skill.name}</h3>
    <p className="text-text-secondary leading-relaxed">{skill.description}</p>
    
    <div className="pt-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-text-secondary">{(labels[language] || labels.es).level}</span>
        <span className="text-primary font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-surface-highlight overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  </div>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Globe, MessageSquare, Trophy, Clock3 } from 'lucide-react';

const stats = [
  { label: 'Proyectos publicados', value: '3+', icon: Trophy },
  { label: 'Semestre actual', value: '6°', icon: Clock3 },
  { label: 'Disponibilidad', value: 'Freelance', icon: Briefcase },
];

const services = [
  {
    title: 'Landing pages modernas',
    description: 'Páginas rápidas, visualmente atractivas y enfocadas en conversión.',
    icon: Rocket,
  },
  {
    title: 'Apps de escritorio',
    description: 'Soluciones con Electron para ventas, gestión y productividad.',
    icon: Briefcase,
  },
  {
    title: 'Optimización UX/UI',
    description: 'Mejoras de navegación, claridad visual y experiencia responsiva.',
    icon: Globe,
  },
];

const roadmapIdeas = [
  'Agregar una sección de testimonios de clientes o profesores.',
  'Publicar estudios de caso por proyecto (problema → solución → resultado).',
  'Integrar versión bilingüe (ES/EN) para oportunidades internacionales.',
  'Crear formulario de contacto con validación y envío automático.',
];

export const ValueSection = () => {
  return (
    <section id="valor" className="py-24 md:py-32" data-testid="value-section">
      <div className="container-custom space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Cómo puedo aportar</span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="mt-4 text-text-secondary max-w-2xl">
            Estas son áreas en las que ya puedo ayudarte, junto con ideas que harían este portafolio todavía más sólido.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon size={20} className="text-primary mb-3" />
              <p className="font-heading text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="glass rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="text-secondary" />
            <h3 className="font-heading text-2xl font-semibold">Ideas para la siguiente versión</h3>
          </div>
          <ul className="space-y-2 text-text-secondary">
            {roadmapIdeas.map((idea) => (
              <li key={idea} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

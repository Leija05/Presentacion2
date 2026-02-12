import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code, CheckCircle } from 'lucide-react';

const stepsByLanguage = {
  es: [
  {
    icon: Lightbulb,
    title: 'Análisis',
    description: 'Entiendo la idea y el objetivo.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Palette,
    title: 'Diseño UI',
    description: 'Interfaces limpias y animadas.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Code,
    title: 'Desarrollo',
    description: 'Código claro y optimizado.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: CheckCircle,
    title: 'Entrega',
    description: 'Proyecto listo para producción.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  ],
  en: [
  { icon: Lightbulb, title: 'Analysis', description: 'I understand the idea and objective.', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
  { icon: Palette, title: 'UI Design', description: 'Clean and animated interfaces.', color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
  { icon: Code, title: 'Development', description: 'Clear and optimized code.', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { icon: CheckCircle, title: 'Delivery', description: 'Project ready for production.', color: 'text-green-500', bgColor: 'bg-green-500/10' },
  ],
};

const labels = {
  es: { title: 'Cómo trabajo', subtitle: 'Mi proceso está enfocado en crear experiencias visuales modernas, funcionales y bien optimizadas.' },
  en: { title: 'How I work', subtitle: 'My process is focused on creating modern, functional and well-optimized visual experiences.' },
};

export const ProcessSection = ({ language = 'es' }) => {
  const steps = stepsByLanguage[language] || stepsByLanguage.es;
  const t = labels[language] || labels.es;
  return (
    <section id="process" className="py-24 md:py-32" data-testid="process-section">
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
          <p className="mt-4 text-text-secondary max-w-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group relative p-6 rounded-2xl glass overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-testid={`process-step-${index}`}
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-highlight flex items-center justify-center">
                <span className="font-mono text-sm text-text-secondary">0{index + 1}</span>
              </div>

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center mb-5`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <step.icon size={28} className={step.color} />
              </motion.div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
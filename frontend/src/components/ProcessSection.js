import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code, CheckCircle } from 'lucide-react';

const steps = [
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
];

export const ProcessSection = () => {
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
            <span className="gradient-text">Cómo trabajo</span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="mt-4 text-text-secondary max-w-lg">
            Mi proceso está enfocado en crear experiencias visuales modernas, funcionales y bien optimizadas.
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
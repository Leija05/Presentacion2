import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Clock, Music, Mail, MapPin, Code } from 'lucide-react';

const bentoCards = [
  {
    id: 'sobreMi',
    title: 'Sobre mí',
    icon: User,
    size: 'col-span-2 row-span-2',
    gradient: 'from-primary/20 to-transparent',
  },
  {
    id: 'estudios',
    title: 'Estudios',
    icon: BookOpen,
    size: 'col-span-1 row-span-1',
    gradient: 'from-secondary/20 to-transparent',
  },
  {
    id: 'ubicacion',
    title: 'Ubicación',
    icon: MapPin,
    size: 'col-span-1 row-span-1',
    gradient: 'from-blue-500/20 to-transparent',
    content: 'Nuevo Laredo, México',
  },
  {
    id: 'timeline',
    title: 'Mi camino',
    icon: Clock,
    size: 'col-span-1 row-span-1',
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    id: 'musica',
    title: 'Música',
    icon: Music,
    size: 'col-span-1 row-span-1',
    gradient: 'from-pink-500/20 to-transparent',
  },
  {
    id: 'perfil',
    title: 'Perfil',
    icon: Code,
    size: 'col-span-1 row-span-1',
    gradient: 'from-indigo-500/20 to-transparent',
    content: 'Front-end, Electron y aprendizaje continuo',
  },
];

export const AboutSection = ({ openModal }) => {
  const handleCardClick = (cardId) => {
    const modalContent = getModalContent(cardId);
    if (modalContent) {
      openModal(modalContent);
    }
  };

  return (
    <section id="about" className="py-24 md:py-32" data-testid="about-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Conóceme</span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[120px] md:auto-rows-[140px]">
          {bentoCards.map((card, index) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`${card.size} relative rounded-2xl glass p-6 text-left overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid={`bento-card-${card.id}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-surface-highlight flex items-center justify-center">
                  <card.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold">{card.title}</h3>
                  {card.content && (
                    <p className="text-sm text-text-secondary mt-1">{card.content}</p>
                  )}
                </div>
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Modal Content Functions
const getModalContent = (type) => {
  switch (type) {
    case 'sobreMi':
      return <SobreMiModal />;
    case 'estudios':
      return <EstudiosModal />;
    case 'timeline':
      return <TimelineModal />;
    case 'musica':
      return <MusicaModal />;
    case 'ubicacion':
      return <UbicacionModal />;
    case 'perfil':
      return <PerfilModal />;
    default:
      return null;
  }
};

const SobreMiModal = () => (
  <div className="space-y-4" data-testid="sobre-mi-modal">
    <h3 className="font-heading text-2xl font-bold">Sobre mí</h3>
    <p className="text-text-secondary leading-relaxed">
      Mi nombre es{" "}
      <strong className="text-text-primary">
        Héctor Aarón Leija Zavala
      </strong>
      . Soy una persona curiosa a la que le gusta aprender cosas nuevas,
      especialmente en temas relacionados con la tecnología y los
      videojuegos.
    </p>
    <p className="text-text-secondary leading-relaxed">
      En mi tiempo libre disfruto jugar videojuegos y practicar deportes,
      en especial voleibol, un deporte que realmente me apasiona. También me
      gusta escuchar música, aprender programación y trabajar constantemente
      en mejorar mis habilidades.
    </p>
    <p className="text-text-secondary leading-relaxed">
      Me considero una persona responsable y creativa, con muchas ganas de
      seguir creciendo tanto en lo personal como en lo profesional.
    </p>
  </div>
);

const EstudiosModal = () => (
  <div className="space-y-4" data-testid="estudios-modal">
    <h3 className="font-heading text-2xl font-bold">Estudios</h3>
    <div className="p-4 rounded-xl bg-surface-highlight">
      <p className="text-sm text-secondary font-mono">2023</p>
      <p className="font-semibold mt-1">Técnico en Programación</p>
      <p className="text-sm text-text-secondary">CBTis 234</p>
    </div>
    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30">
      <p className="text-sm text-secondary font-mono">Actualmente</p>
      <p className="font-semibold mt-1">Ingeniería en Sistemas Computacionales</p>
      <p className="text-sm text-text-secondary">Instituto Tecnológico Nacional de Nuevo Laredo</p>
      <p className="text-sm text-primary mt-2">6to Semestre</p>
    </div>
    <p className="text-text-secondary text-sm leading-relaxed">
      Me estoy formando en áreas como desarrollo web,
      programación orientada a objetos y lógica de programación.
    </p>
  </div>
);

const TimelineModal = () => (
  <div className="space-y-6" data-testid="timeline-modal">
    <h3 className="font-heading text-2xl font-bold">Mi Camino</h3>
    <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
      <div className="relative">
        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
        <p className="text-secondary font-mono text-sm">2020</p>
        <h4 className="font-semibold mt-1">Inicio en Programación</h4>
        <p className="text-text-secondary text-sm mt-1">
          Primer contacto con la programación durante el bachillerato.
        </p>
      </div>
      <div className="relative">
        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
        <p className="text-secondary font-mono text-sm">2023</p>
        <h4 className="font-semibold mt-1">Técnico en Programación</h4>
        <p className="text-text-secondary text-sm mt-1">
          Graduado con habilidades para crear páginas web y aplicaciones.
        </p>
      </div>
      <div className="relative">
        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-secondary" />
        <p className="text-secondary font-mono text-sm">Presente</p>
        <h4 className="font-semibold mt-1">Ingeniería en Sistemas</h4>
        <p className="text-text-secondary text-sm mt-1">
          Cursando el 6to semestre, fortaleciendo conocimientos en redes,
          lenguajes y sistemas operativos.
        </p>
      </div>
    </div>
  </div>
);

const MusicaModal = () => (
  <div className="space-y-4" data-testid="musica-modal">
    <h3 className="font-heading text-2xl font-bold">Mi Música</h3>
    <p className="text-text-secondary">Disfruto de una variedad de géneros musicales:</p>
    <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
      {[
        '6HzREffgQ16b7Rlrr6BY0m',
        '609ItcFreOqmwRjmBbocds',
        '5bhTUxSNkAZ4H3uFjSJRTY',
        '4aDbrgm1ZaebS1Bb2dOXac',
        '5tZgkV8FTe3rtl8OcSeQAb',
        '2lTm559tuIvatlT1u0JYG2',
      ].map((trackId) => (
        <iframe
          key={trackId}
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={`Spotify Track ${trackId}`}
        />
      ))}
    </div>
  </div>
);


const PerfilModal = () => (
  <div className="space-y-4" data-testid="perfil-modal"> 
    <h3 className="font-heading text-2xl font-bold">Perfil profesional</h3>
    <p className="text-text-secondary leading-relaxed">
      Me enfoco en construir interfaces modernas, aplicaciones de escritorio con Electron y experiencias web responsivas.
    </p>
    <ul className="space-y-2 text-sm text-text-secondary">
      <li>• Buenas prácticas de UI y estructura de componentes.</li>
      <li>• Integración de APIs y manejo de datos en tiempo real.</li>
      <li>• Mejora continua en rendimiento y accesibilidad.</li>
    </ul>
  </div>
);

const UbicacionModal = () => (
  <div className="space-y-4" data-testid="ubicacion-modal">
    <h3 className="font-heading text-2xl font-bold">Ubicación</h3>
    <div className="p-6 rounded-xl bg-surface-highlight text-center">
      <MapPin size={48} className="mx-auto text-primary mb-4" />
      <p className="text-xl font-semibold">Nuevo Laredo</p>
      <p className="text-text-secondary">Tamaulipas, México</p>
    </div>
    <p className="text-text-secondary text-sm">
      Ubicado en la frontera norte de México, estudiando en el Instituto
      Tecnológico Nacional de Nuevo Laredo.
    </p>
  </div>
);
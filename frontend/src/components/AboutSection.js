import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Clock, Music, MapPin, Code } from 'lucide-react';

const bentoCardsByLanguage = {
  es: [
    { id: 'sobreMi', title: 'Sobre mí', icon: User, size: 'col-span-2 row-span-2', gradient: 'from-primary/20 to-transparent' },
    { id: 'estudios', title: 'Estudios', icon: BookOpen, size: 'col-span-1 row-span-1', gradient: 'from-secondary/20 to-transparent' },
    { id: 'ubicacion', title: 'Ubicación', icon: MapPin, size: 'col-span-1 row-span-1', gradient: 'from-blue-500/20 to-transparent', content: 'Nuevo Laredo, México' },
    { id: 'timeline', title: 'Mi camino', icon: Clock, size: 'col-span-1 row-span-1', gradient: 'from-green-500/20 to-transparent' },
    { id: 'musica', title: 'Música', icon: Music, size: 'col-span-1 row-span-1', gradient: 'from-pink-500/20 to-transparent' },
    { id: 'perfil', title: 'Perfil', icon: Code, size: 'col-span-1 row-span-1', gradient: 'from-indigo-500/20 to-transparent', content: 'Front-end, Electron y aprendizaje continuo' },
  ],
  en: [
    { id: 'sobreMi', title: 'About me', icon: User, size: 'col-span-2 row-span-2', gradient: 'from-primary/20 to-transparent' },
    { id: 'estudios', title: 'Education', icon: BookOpen, size: 'col-span-1 row-span-1', gradient: 'from-secondary/20 to-transparent' },
    { id: 'ubicacion', title: 'Location', icon: MapPin, size: 'col-span-1 row-span-1', gradient: 'from-blue-500/20 to-transparent', content: 'Nuevo Laredo, Mexico' },
    { id: 'timeline', title: 'My path', icon: Clock, size: 'col-span-1 row-span-1', gradient: 'from-green-500/20 to-transparent' },
    { id: 'musica', title: 'Music', icon: Music, size: 'col-span-1 row-span-1', gradient: 'from-pink-500/20 to-transparent' },
    { id: 'perfil', title: 'Profile', icon: Code, size: 'col-span-1 row-span-1', gradient: 'from-indigo-500/20 to-transparent', content: 'Front-end, Electron and continuous learning' },
  ],
};

const sectionLabels = {
  es: { title: 'Conóceme' },
  en: { title: 'Get to know me' },
};

export const AboutSection = ({ openModal, language = 'es' }) => {
  const bentoCards = bentoCardsByLanguage[language] || bentoCardsByLanguage.es;
  const t = sectionLabels[language] || sectionLabels.es;

  const handleCardClick = (cardId) => {
    const modalContent = getModalContent(cardId, language);
    if (modalContent) openModal(modalContent);
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
            <span className="gradient-text">{t.title}</span>
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
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-surface-highlight flex items-center justify-center">
                  <card.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold">{card.title}</h3>
                  {card.content && <p className="text-sm text-text-secondary mt-1">{card.content}</p>}
                </div>
              </div>

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

const getModalContent = (type, language = 'es') => {
  switch (type) {
    case 'sobreMi':
      return <SobreMiModal language={language} />;
    case 'estudios':
      return <EstudiosModal language={language} />;
    case 'timeline':
      return <TimelineModal language={language} />;
    case 'musica':
      return <MusicaModal language={language} />;
    case 'ubicacion':
      return <UbicacionModal language={language} />;
    case 'perfil':
      return <PerfilModal language={language} />;
    default:
      return null;
  }
};

const SobreMiModal = ({ language = 'es' }) => (
  <div className="space-y-4" data-testid="sobre-mi-modal">
    <h3 className="font-heading text-2xl font-bold">{language === 'es' ? 'Sobre mí' : 'About me'}</h3>
    {language === 'es' ? (
      <>
        <p className="text-text-secondary leading-relaxed">Mi nombre es <strong className="text-text-primary">Héctor Aarón Leija Zavala</strong>. Soy una persona curiosa a la que le gusta aprender cosas nuevas, especialmente en temas relacionados con la tecnología y los videojuegos.</p>
        <p className="text-text-secondary leading-relaxed">En mi tiempo libre disfruto jugar videojuegos y practicar deportes, en especial voleibol, un deporte que realmente me apasiona. También me gusta escuchar música, aprender programación y trabajar constantemente en mejorar mis habilidades.</p>
        <p className="text-text-secondary leading-relaxed">Me considero una persona responsable y creativa, con muchas ganas de seguir creciendo tanto en lo personal como en lo profesional.</p>
      </>
    ) : (
      <>
        <p className="text-text-secondary leading-relaxed">My name is <strong className="text-text-primary">Héctor Aarón Leija Zavala</strong>. I am a curious person who enjoys learning new things, especially topics related to technology and video games.</p>
        <p className="text-text-secondary leading-relaxed">In my free time I enjoy playing video games and practicing sports, especially volleyball, a sport I am truly passionate about. I also like listening to music, learning programming and constantly improving my skills.</p>
        <p className="text-text-secondary leading-relaxed">I consider myself a responsible and creative person, eager to keep growing both personally and professionally.</p>
      </>
    )}
  </div>
);

const EstudiosModal = ({ language = 'es' }) => (
  <div className="space-y-4" data-testid="estudios-modal">
    <h3 className="font-heading text-2xl font-bold">{language === 'es' ? 'Estudios' : 'Education'}</h3>
    <div className="p-4 rounded-xl bg-surface-highlight">
      <p className="text-sm text-secondary font-mono">2023</p>
      <p className="font-semibold mt-1">{language === 'es' ? 'Técnico en Programación' : 'Programming Technician'}</p>
      <p className="text-sm text-text-secondary">CBTis 234</p>
    </div>
    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30">
      <p className="text-sm text-secondary font-mono">{language === 'es' ? 'Actualmente' : 'Currently'}</p>
      <p className="font-semibold mt-1">{language === 'es' ? 'Ingeniería en Sistemas Computacionales' : 'Computer Systems Engineering'}</p>
      <p className="text-sm text-text-secondary">{language === 'es' ? 'Instituto Tecnológico Nacional de Nuevo Laredo' : 'National Technological Institute of Nuevo Laredo'}</p>
      <p className="text-sm text-primary mt-2">{language === 'es' ? '6to Semestre' : '6th Semester'}</p>
    </div>
    <p className="text-text-secondary text-sm leading-relaxed">{language === 'es' ? 'Me estoy formando en áreas como desarrollo web, programación orientada a objetos y lógica de programación.' : 'I am training in areas such as web development, object-oriented programming and programming logic.'}</p>
  </div>
);

const TimelineModal = ({ language = 'es' }) => (
  <div className="space-y-6" data-testid="timeline-modal">
    <h3 className="font-heading text-2xl font-bold">{language === 'es' ? 'Mi Camino' : 'My Path'}</h3>
    <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
      <div className="relative">
        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
        <p className="text-secondary font-mono text-sm">2020</p>
        <h4 className="font-semibold mt-1">{language === 'es' ? 'Inicio en Programación' : 'Started Programming'}</h4>
        <p className="text-text-secondary text-sm mt-1">{language === 'es' ? 'Primer contacto con la programación durante el bachillerato.' : 'First contact with programming during high school.'}</p>
      </div>
      <div className="relative">
        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
        <p className="text-secondary font-mono text-sm">2023</p>
        <h4 className="font-semibold mt-1">{language === 'es' ? 'Técnico en Programación' : 'Programming Technician'}</h4>
        <p className="text-text-secondary text-sm mt-1">{language === 'es' ? 'Graduado con habilidades para crear páginas web y aplicaciones.' : 'Graduated with skills to build websites and applications.'}</p>
      </div>
      <div className="relative">
        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-secondary" />
        <p className="text-secondary font-mono text-sm">{language === 'es' ? 'Presente' : 'Present'}</p>
        <h4 className="font-semibold mt-1">{language === 'es' ? 'Ingeniería en Sistemas' : 'Systems Engineering'}</h4>
        <p className="text-text-secondary text-sm mt-1">{language === 'es' ? 'Cursando el 6to semestre, fortaleciendo conocimientos en redes, lenguajes y sistemas operativos.' : 'Currently in the 6th semester, strengthening knowledge in networks, languages and operating systems.'}</p>
      </div>
    </div>
  </div>
);

const MusicaModal = ({ language = 'es' }) => (
  <div className="space-y-4" data-testid="musica-modal">
    <h3 className="font-heading text-2xl font-bold">{language === 'es' ? 'Mi Música' : 'My Music'}</h3>
    <p className="text-text-secondary">{language === 'es' ? 'Disfruto de una variedad de géneros musicales:' : 'I enjoy a variety of music genres:'}</p>
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

const PerfilModal = ({ language = 'es' }) => (
  <div className="space-y-4" data-testid="perfil-modal">
    <h3 className="font-heading text-2xl font-bold">{language === 'es' ? 'Perfil profesional' : 'Professional profile'}</h3>
    <p className="text-text-secondary leading-relaxed">{language === 'es' ? 'Me enfoco en construir interfaces modernas, aplicaciones de escritorio con Electron y experiencias web responsivas.' : 'I focus on building modern interfaces, desktop applications with Electron and responsive web experiences.'}</p>
    <ul className="space-y-2 text-sm text-text-secondary">
      <li>{language === 'es' ? '• Buenas prácticas de UI y estructura de componentes.' : '• UI best practices and solid component structure.'}</li>
      <li>{language === 'es' ? '• Integración de APIs y manejo de datos en tiempo real.' : '• API integration and real-time data handling.'}</li>
      <li>{language === 'es' ? '• Mejora continua en rendimiento y accesibilidad.' : '• Continuous improvement in performance and accessibility.'}</li>
    </ul>
  </div>
);

const UbicacionModal = ({ language = 'es' }) => (
  <div className="space-y-4" data-testid="ubicacion-modal">
    <h3 className="font-heading text-2xl font-bold">{language === 'es' ? 'Ubicación' : 'Location'}</h3>
    <div className="p-6 rounded-xl bg-surface-highlight text-center">
      <MapPin size={48} className="mx-auto text-primary mb-4" />
      <p className="text-xl font-semibold">Nuevo Laredo</p>
      <p className="text-text-secondary">{language === 'es' ? 'Tamaulipas, México' : 'Tamaulipas, Mexico'}</p>
    </div>
    <p className="text-text-secondary text-sm">{language === 'es' ? 'Ubicado en la frontera norte de México, estudiando en el Instituto Tecnológico Nacional de Nuevo Laredo.' : 'Located on the northern border of Mexico, studying at the National Technological Institute of Nuevo Laredo.'}</p>
  </div>
);

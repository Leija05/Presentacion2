import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Phone, ArrowDown, Sparkles } from 'lucide-react';

const content = {
  es: {
    role: 'Desarrollador en Formación',
    greeting: 'Hola, soy',
    subtitle: 'Estudiante de Ingeniería en Sistemas · Construyendo el futuro línea por línea',
    contact: 'Contáctame',
    explore: 'Explorar',
    modalTitle: 'Contacto',
    instagram: 'Instagram',
    discord: 'Discord',
    discordCopied: 'Discord copiado al portapapeles',
    online: 'En línea',
    idle: 'Ausente',
    dnd: 'No molestar',
    offline: 'Desconectado',
    noActivity: '💤 Sin actividad',
  },
  en: {
    role: 'Developer in Progress',
    greeting: "Hi, I'm",
    subtitle: 'Systems Engineering Student · Building the future line by line',
    contact: 'Contact me',
    explore: 'Explore',
    modalTitle: 'Contact',
    instagram: 'Instagram',
    discord: 'Discord',
    discordCopied: 'Discord copied to clipboard',
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do not disturb',
    offline: 'Offline',
    noActivity: '💤 No activity',
  },
};

export const HeroSection = ({ openModal, language = 'es' }) => {
  const t = content[language] || content.es;
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleContactClick = () => {
    openModal(<ContactModal language={language} />);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      data-testid="hero-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,44,191,0.3) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(204,255,0,0.2) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.3em] text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="inline w-4 h-4 mr-2" />
              {t.role}
            </motion.p>

            <motion.h1
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.greeting}{' '}
              <span className="gradient-text">Hector</span>
              <br />
              <span className="text-text-secondary">Leija</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-text-secondary max-w-md mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={handleContactClick}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-contact-button"
              >
                <Phone size={20} />
                <span>{t.contact}</span>
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="flex items-center gap-3 px-8 py-4 rounded-full glass text-text-primary font-semibold text-lg hover:bg-surface-highlight transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-explore-button"
              >
                <span>{t.explore}</span>
                <ArrowDown size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            ref={containerRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative cursor-pointer"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={handleContactClick}
              data-testid="hero-avatar"
            >
              {/* Outer Ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, var(--primary), var(--secondary), var(--primary))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Inner Ring */}
              <div className="absolute -inset-4 rounded-full bg-background" />
              
              {/* Dashed Ring */}
              <motion.div
                className="absolute -inset-10 rounded-full border-2 border-dashed border-primary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Avatar Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden neon-glow">
                <motion.img
                /*src="https://i.imgur.com/LrU9xcA.jpeg" */
                  src="https://i.imgur.com/vyyvk3W.png"
                  alt="Hector Leija"
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Glitch Overlay */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 mix-blend-overlay"
                    style={{
                      background: 'linear-gradient(45deg, var(--primary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%)',
                      backgroundSize: '4px 4px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                  />
                )}
              </div>

              {/* Contact Icon Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-secondary flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone size={24} className="text-black" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-text-secondary" />
      </motion.div>
    </section>
  );
};

// Contact Modal Content
const ContactModal = ({ language = 'es' }) => {
  const t = content[language] || content.es;
  const [discordProfile, setDiscordProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    loadDiscordProfile();
    const interval = setInterval(loadDiscordProfile, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadDiscordProfile = async () => {
    try {
      const res = await fetch('https://api.lanyard.rest/v1/users/883130361863868466');
      const json = await res.json();
      if (json.success) {
        setDiscordProfile(json.data);
      }
    } catch (e) {
      console.error('Discord load error:', e);
    } finally {
      setLoading(false);
    }
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText('_leija');
    alert(t.discordCopied);
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/leija.chi/', '_blank');
  };

  const timeSince = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    const min = Math.floor(seconds / 60);
    const hrs = Math.floor(min / 60);
    if (hrs > 0) return `${hrs}h ${min % 60}m`;
    return `${min}m`;
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const statusColors = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500'
  };

  const statusText = {
    online: t.online,
    idle: t.idle,
    dnd: t.dnd,
    offline: t.offline
  };

  return (
    <div className="space-y-5" data-testid="contact-modal">
      <h3 className="font-heading text-2xl font-bold">{t.modalTitle}</h3>
      
      {/* Social Links */}
      <div className="flex justify-center gap-5">
        <motion.a
          href="https://github.com/Leija05"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-surface-highlight flex items-center justify-center hover:scale-105 transition-transform duration-200"
          whileHover={{ y: -4 }}
          data-testid="github-link"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M12 2C6.47 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.16-1.11-1.47-1.11-1.47-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.1-.67.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.36 1.9-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.88-2.34 4.73-4.57 5 .36.32.68.94.68 1.9v2.8c0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
          </svg>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/hector-aaron-leija-zavala-3a96a23a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-surface-highlight flex items-center justify-center hover:scale-105 transition-transform duration-200"
          whileHover={{ y: -4 }}
          data-testid="linkedin-link"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h5v2.3h.07c.7-1.3 2.4-2.7 4.93-2.7 5.27 0 6.25 3.47 6.25 7.97V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8z"/>
          </svg>
        </motion.a>

        <motion.a
          href="mailto:leijahector@gmail.com"
          className="w-16 h-16 rounded-full bg-surface-highlight flex items-center justify-center hover:scale-105 transition-transform duration-200"
          whileHover={{ y: -4 }}
          data-testid="email-link"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current" strokeWidth="2">
            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round"/>
          </svg>
        </motion.a>
      </div>

      <div className="border-t border-border my-4 opacity-30" />

      {/* Instagram - Premium Style */}
      <div>
        <h4 className="font-semibold mb-3">{t.instagram}</h4>
        <motion.div
          onClick={openInstagram}
          className="ig-premium relative flex items-center gap-4 p-4 rounded-[22px] cursor-pointer overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(245,133,41,0.15), rgba(221,42,123,0.15), rgba(129,52,175,0.15))'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          data-testid="instagram-card"
        >
          {/* Animated Border */}
          <div 
            className="absolute inset-0 rounded-[22px] p-[2px] pointer-events-none"
            style={{
              background: 'linear-gradient(120deg, #f58529, #dd2a7b, #8134af, #f58529)',
              backgroundSize: '300% 300%',
              animation: 'igBorder 4s linear infinite',
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />
          
          {/* Avatar with Ring */}
          <div className="relative">
            <motion.div 
              className="w-[72px] h-[72px] p-[3px] rounded-full"
              style={{ background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)' }}
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(221,42,123,0.6)', '0 0 0 14px rgba(221,42,123,0)', '0 0 0 0 rgba(221,42,123,0)']
              }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              <img
                src="https://i.imgur.com/LrU9xcA.jpeg"
                alt="Instagram"
                className="w-full h-full rounded-full object-cover bg-black"
              />
            </motion.div>
          </div>
          
          <div className="relative z-10">
            <p className="font-semibold text-lg tracking-wide">@leija.chi</p>
            <p className="text-sm text-text-secondary opacity-80">Instagram</p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border my-4 opacity-30" />

      {/* Discord - Premium Style */}
      <div>
        <h4 className="font-semibold mb-3">{t.discord}</h4>
        {loading ? (
          <p className="text-text-secondary">Cargando perfil...</p>
        ) : discordProfile ? (
          <motion.div 
            className={`discord-premium relative rounded-[22px] p-5 overflow-hidden ${discordProfile.discord_status}`}
            style={{
              background: 'linear-gradient(135deg, rgba(88,101,242,0.18), rgba(88,101,242,0.08))'
            }}
            whileHover={{ scale: 1.02 }}
            data-testid="discord-card"
          >
            {/* Animated Border based on status */}
            <div 
              className="absolute inset-0 rounded-[22px] p-[2px] pointer-events-none"
              style={{
                background: `linear-gradient(120deg, transparent, ${
                  discordProfile.discord_status === 'online' ? '#22c55e' :
                  discordProfile.discord_status === 'idle' ? '#facc15' :
                  discordProfile.discord_status === 'dnd' ? '#ef4444' : '#6b7280'
                }, transparent)`,
                backgroundSize: '300% 300%',
                animation: 'discordBorder 3s linear infinite',
                WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }}
            />

            {/* Profile */}
            <div className="relative z-10 flex items-center gap-4">
              <motion.div className="relative">
                <motion.img
                  src={discordProfile.discord_user.avatar 
                    ? `https://cdn.discordapp.com/avatars/${discordProfile.discord_user.id}/${discordProfile.discord_user.avatar}.png?size=256`
                    : 'https://cdn.discordapp.com/embed/avatars/0.png'
                  }
                  alt="Discord Avatar"
                  className="w-[70px] h-[70px] rounded-full"
                  animate={{ 
                    boxShadow: [
                      `0 0 0 0 ${discordProfile.discord_status === 'online' ? '#22c55e' : discordProfile.discord_status === 'idle' ? '#facc15' : discordProfile.discord_status === 'dnd' ? '#ef4444' : '#6b7280'}`,
                      `0 0 0 14px transparent`,
                      `0 0 0 0 transparent`
                    ]
                  }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-[3px] border-surface ${statusColors[discordProfile.discord_status]}`} />
              </motion.div>
              <div>
                <p className="font-semibold text-lg">{discordProfile.discord_user.username}</p>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className={`w-3 h-3 rounded-full ${statusColors[discordProfile.discord_status]}`} />
                  {statusText[discordProfile.discord_status]}
                </div>
              </div>
            </div>

            {/* Activity */}
            {discordProfile.activities?.find(a => a.type === 0) && (
              <div className="relative z-10 mt-4 flex items-center gap-3 p-3 rounded-[14px] bg-white/5">
                {discordProfile.activities.find(a => a.type === 0).assets?.large_image && (
                  <img 
                    src={`https://cdn.discordapp.com/app-assets/${discordProfile.activities.find(a => a.type === 0).application_id}/${discordProfile.activities.find(a => a.type === 0).assets.large_image}.png`}
                    alt="Activity"
                    className="w-[60px] h-[60px] rounded-lg object-cover"
                  />
                )}
                <div>
                  <p className="font-medium">🎮 {discordProfile.activities.find(a => a.type === 0).name}</p>
                  <p className="text-sm text-text-secondary">{discordProfile.activities.find(a => a.type === 0).details || ''}</p>
                  {discordProfile.activities.find(a => a.type === 0).timestamps?.start && (
                    <p className="text-xs text-text-secondary opacity-70">⏱ {timeSince(discordProfile.activities.find(a => a.type === 0).timestamps.start)}</p>
                  )}
                </div>
              </div>
            )}

            {/* Spotify */}
            {discordProfile.spotify && (
              <motion.a
                href={`https://open.spotify.com/track/${discordProfile.spotify.track_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-box relative z-10 mt-4 flex items-center gap-3 p-3 rounded-[18px] overflow-hidden text-white no-underline"
                style={{ background: 'rgba(30, 215, 96, 0.18)' }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Album Art Background Blur */}
                <div 
                  className="absolute inset-[-30%] z-0"
                  style={{
                    backgroundImage: `url(${discordProfile.spotify.album_art_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(35px) brightness(0.65) saturate(1.4)',
                    animation: 'beatPulse 2s ease-in-out infinite'
                  }}
                />
                
                <img
                  src={discordProfile.spotify.album_art_url}
                  alt="Album"
                  className="relative z-10 w-[55px] h-[55px] rounded-lg"
                />
                <div className="relative z-10 flex-1 min-w-0">
                  <p className="font-semibold truncate">🎵 {discordProfile.spotify.song}</p>
                  <p className="text-sm opacity-85 truncate">{discordProfile.spotify.artist}</p>
                  {/* Progress Bar */}
                  <div className="mt-2">
                    <div className="flex justify-between text-xs opacity-85 mb-1">
                      <span>{formatTime(Math.min(Date.now() - discordProfile.spotify.timestamps.start, discordProfile.spotify.timestamps.end - discordProfile.spotify.timestamps.start))}</span>
                      <span>{formatTime(discordProfile.spotify.timestamps.end - discordProfile.spotify.timestamps.start)}</span>
                    </div>
                    <div className="h-[6px] bg-white/25 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full"
                        style={{ 
                          background: 'linear-gradient(90deg, #1ed760, #9cffc8)',
                          width: `${Math.min(100, ((Date.now() - discordProfile.spotify.timestamps.start) / (discordProfile.spotify.timestamps.end - discordProfile.spotify.timestamps.start)) * 100)}%`
                        }}
                        animate={{ filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
                {/* Equalizer */}
                <div className="relative z-10 flex gap-0.5 items-end h-5">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-green-400 rounded-full"
                      animate={{ height: ['4px', '16px', '4px'] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </motion.a>
            )}
            
            {!discordProfile.spotify && !discordProfile.activities?.find(a => a.type === 0) && (
              <p className="relative z-10 mt-3 text-sm text-text-secondary opacity-80">{t.noActivity}</p>
            )}
          </motion.div>
        ) : (
          <p className="text-text-secondary">⚠️ No se pudo cargar Discord</p>
        )}
        
        <motion.button
          onClick={copyDiscord}
          className="mt-4 w-full py-3 rounded-[14px] font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #5865f2, #4752c4)' }}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(88, 101, 242, 0.5)' }}
          whileTap={{ scale: 0.98 }}
          data-testid="copy-discord-button"
        >
          📋 Copiar Discord
        </motion.button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes igBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes discordBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes beatPulse {
          0% { transform: scale(1) rotate(0deg); opacity: 0.6; }
          25% { transform: scale(1.08) rotate(0.4deg); opacity: 0.85; }
          50% { transform: scale(1.15) rotate(-0.4deg); opacity: 1; }
          75% { transform: scale(1.08) rotate(0.3deg); opacity: 0.85; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};
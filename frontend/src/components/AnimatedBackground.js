import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(123, 44, 191, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 44, 191, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(123, 44, 191, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Animated Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(123, 44, 191, 0.4) 0%, rgba(123, 44, 191, 0) 70%)',
          filter: 'blur(60px)',
          top: '-10%',
          left: '-10%',
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(204, 255, 0, 0.25) 0%, rgba(204, 255, 0, 0) 70%)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(123, 44, 191, 0.3) 0%, transparent 70%)',
          filter: 'blur(50px)',
          top: '40%',
          left: '60%',
        }}
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              45deg,
              transparent 0%,
              rgba(123, 44, 191, 0.05) 25%,
              transparent 50%,
              rgba(204, 255, 0, 0.03) 75%,
              transparent 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? 'rgba(123, 44, 191, 0.6)' : 'rgba(204, 255, 0, 0.5)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(123, 44, 191, 0.8)' 
              : '0 0 10px rgba(204, 255, 0, 0.6)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting Stars */}
      <motion.div
        className="absolute w-32 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(204, 255, 0, 0.8), transparent)',
          top: '20%',
          left: '-10%',
          transform: 'rotate(-45deg)',
        }}
        animate={{
          x: [0, window.innerWidth + 200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeOut',
        }}
      />

      <motion.div
        className="absolute w-24 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(123, 44, 191, 0.9), transparent)',
          top: '60%',
          left: '-5%',
          transform: 'rotate(-35deg)',
        }}
        animate={{
          x: [0, window.innerWidth + 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 12,
          delay: 4,
          ease: 'easeOut',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 5, 0.4) 100%)',
        }}
      />
    </div>
  );
};

// Light theme background
export const AnimatedBackgroundLight = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 79, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 79, 0, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated Orbs - Light */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 0, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '-5%',
          right: '10%',
        }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 80, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '20%',
          left: '5%',
        }}
        animate={{
          x: [0, 60, 30, 0],
          y: [0, -40, -80, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles - Light */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: 'rgba(255, 79, 0, 0.4)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

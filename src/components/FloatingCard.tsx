'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  color?: 'blue' | 'orange' | 'dark' | 'lavender';
  rotation?: string; // e.g. "-12deg", "6deg"
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  children?: React.ReactNode;
  delay?: number;
  floatingDelay?: number;
  className?: string;
}

export default function FloatingCard({
  color = 'blue',
  rotation = '0deg',
  icon: Icon,
  label,
  children,
  delay = 0,
  floatingDelay = 0,
  className = '',
}: FloatingCardProps) {
  // Map color presets to the exact solid hex styles from the reference image
  const colorMap = {
    blue: 'bg-[#2563eb] text-white shadow-lg shadow-blue-600/10 border-none',
    orange: 'bg-[#e07a2c] text-white shadow-lg shadow-orange-600/10 border-none',
    dark: 'bg-[#222131] text-[#e07b22] shadow-lg shadow-black/20 border-none',
    lavender: 'bg-[#a2b5ea] text-[#1e2d4d] shadow-lg shadow-indigo-600/10 border-none',
  };

  const selectedColorClass = colorMap[color];

  // Parse numerical rotation for hover reduction
  const numericRotation = parseFloat(rotation.replace('deg', '')) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: floatingDelay,
        }}
      >
        <motion.div
          style={{ rotate: rotation }}
          whileHover={{
            scale: 1.04,
            rotate: `${numericRotation * 0.25}deg`,
            y: -6,
            boxShadow: '0 15px 30px -10px rgba(0,0,0,0.15)',
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 22,
          }}
          className={`px-8 py-4.5 rounded-full flex items-center gap-3.5 select-none transition-all duration-300 ${selectedColorClass}`}
        >
          {Icon && (
            <Icon className="w-[26px] h-[26px] stroke-[2.25] shrink-0" />
          )}
          
          {label && (
            <span className="font-bold text-[22px] tracking-tight whitespace-nowrap">
              {label}
            </span>
          )}

          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


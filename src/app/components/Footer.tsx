import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#252525] to-[#1a1a1a] border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#51e9d6]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-16">

        {/* Divider */}
        <motion.div 
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Copyright Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-['Nunito_Sans'] text-[14px] text-gray-500">
            © {currentYear} Yihui Fang. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
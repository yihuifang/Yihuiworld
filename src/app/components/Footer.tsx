import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
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
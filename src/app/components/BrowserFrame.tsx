import React from 'react';
import { motion } from 'motion/react';

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ children, className = '' }: BrowserFrameProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-white/10 bg-[#2a2a2a] ${className}`}>
      {/* Browser Header */}
      <div className="h-12 bg-[#3a3a3a] border-b border-white/10 flex items-center px-4 gap-2">
        {/* macOS window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        
        {/* Address bar */}
        <div className="flex-1 ml-4">
          <div className="bg-[#2a2a2a] rounded-md px-4 py-1.5 text-white/40 text-sm font-['Nunito_Sans']">
            <span className="text-white/30">🔒</span> http://www.coohom.com
          </div>
        </div>
      </div>
      
      {/* Browser Content */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
}
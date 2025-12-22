import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FlipCardProps {
  title: string;
  summary: string;
  details: React.ReactNode;
}

export function FlipCard({ title, summary, details }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[280px] min-w-[320px] cursor-pointer perspective-1000 snap-center flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-[#1a2a24]/30 border border-white/[0.06] rounded-2xl p-8 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
          animate={{
            borderColor: isHovered && !isFlipped ? "rgba(81, 233, 214, 0.3)" : "rgba(255, 255, 255, 0.06)",
            backgroundColor: isHovered && !isFlipped ? "rgba(26, 42, 36, 0.4)" : "rgba(26, 42, 36, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-[#51e9d6]/60 font-['Nunito_Sans'] font-bold text-[14px] mb-3">
            {title}
          </h4>
          <p className="text-text-body/70 font-['Nunito_Sans'] font-semibold text-[20px] leading-snug flex-1">
            {summary}
          </p>
          
          {/* View More Button - Shows on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered && !isFlipped ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-white/40 font-['Nunito_Sans'] font-semibold text-[14px] mt-4"
          >
            <span>View more</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-[#1a2a24]/30 border border-white/[0.06] rounded-2xl p-8 overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-[#51e9d6] font-['Nunito_Sans'] font-bold text-[16px] tracking-[0.1em] mb-4">
            {title}
          </h4>
          <div className="text-text-body/80 font-['Nunito_Sans'] font-light text-[17px] leading-relaxed">
            {details}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
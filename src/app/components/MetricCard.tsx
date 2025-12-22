import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { TrendingUp } from "lucide-react";

interface MetricCardProps {
  from: number;
  to: number;
  suffix?: string;
  label: string;
  bgColor: string;
  textColor: string;
}

export function MetricCard({ from, to, suffix = "", label, bgColor, textColor }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(from, {
    stiffness: 60,
    damping: 15,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (latest) => {
    return Math.round(latest);
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(to);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, springValue, to]);

  const handleHover = () => {
    springValue.set(from);
    setTimeout(() => {
      springValue.set(to);
    }, 50);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleHover}
      className={`${bgColor} ${textColor} rounded-3xl p-8 w-[280px] h-[240px] flex flex-col justify-between shadow-lg cursor-pointer`}
    >
      <div>
        <div className="flex items-baseline gap-1">
          <motion.span className="text-6xl font-['Nunito_Sans'] font-black">
            {displayValue}
          </motion.span>
          <span className="text-6xl font-['Nunito_Sans'] font-black">{suffix}</span>
        </div>
        <p className="mt-4 text-base font-['Nunito_Sans'] leading-snug opacity-80">
          {label}
        </p>
      </div>
      <div className="flex justify-end">
        <TrendingUp className="w-6 h-6 opacity-60" />
      </div>
    </motion.div>
  );
}
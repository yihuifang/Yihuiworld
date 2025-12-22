import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function SubtleGlow() {
  // 初始化为屏幕中心位置
  const [mousePosition, setMousePosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 流光球1 - 青色 - 跟随鼠标 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(81, 233, 214, 0.25) 0%, rgba(81, 233, 214, 0.12) 40%, transparent 70%)',
          filter: 'blur(60px)',
          left: -200,
          top: -200,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.5
        }}
      />

      {/* 流光球2 - 紫色调 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(120, 119, 198, 0.12) 0%, rgba(120, 119, 198, 0.04) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: ['80%', '70%', '80%'],
          y: ['30%', '50%', '30%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '80%', y: '30%' }}
      />

      {/* 流光球3 - 淡青色 */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(81, 233, 214, 0.1) 0%, rgba(81, 233, 214, 0.03) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: ['40%', '55%', '40%'],
          y: ['60%', '70%', '60%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '40%', y: '60%' }}
      />
    </div>
  );
}
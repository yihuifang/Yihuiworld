import React, { useState, useEffect } from 'react';

export function LeafVeinBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // 计算鼠标相对于 hero section 元素本身的位置
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseenter', handleMouseEnter);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      {/* 叶子脉络图层 - 只在鼠标照亮区域显示 */}
      <div 
        className="absolute inset-0 z-0 opacity-50 transition-opacity duration-300"
        style={{
          backgroundImage: `url('https://test.fukit.cn/autoupload/f/GG6hOLlW8q9jJ4fYFvWrH7KXl_QqVl-bpSwqP4fJO68/20251231/Zg7Q/leaf.avif/webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.28) contrast(1.3)',
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0, 0, 0, 1) 0%, 
            rgba(0, 0, 0, 0.8) 60%, 
            rgba(0, 0, 0, 0) 100%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0, 0, 0, 1) 0%, 
            rgba(0, 0, 0, 0.8) 60%, 
            rgba(0, 0, 0, 0) 100%)`,
        }}
      />

      {/* 鼠标光晕效果 - 增强照亮感 */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.6 : 0,
          background: `radial-gradient(circle 170px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(81, 233, 214, 0.15) 0%, 
            rgba(81, 233, 214, 0.08) 50%, 
            transparent 100%)`,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}

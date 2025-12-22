import { motion } from 'motion/react';

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 主网格 - 大格子 */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(81, 233, 214, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(81, 233, 214, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* 辅助网格 - 小格子 */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(81, 233, 214, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(81, 233, 214, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* 渐变遮罩 - 中心亮，边缘暗 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(46, 46, 46, 0.4) 50%, rgba(46, 46, 46, 0.8) 100%)',
        }}
      />

      {/* 顶部渐变遮罩 */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#2e2e2e] to-transparent pointer-events-none" />
    </div>
  );
}
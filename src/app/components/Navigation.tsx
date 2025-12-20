import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 从URL中提取项目ID（如果在项目详情页）
  const projectId = location.pathname.match(/^\/project\/(\d+)$/)?.[1];

  useEffect(() => {
    const handleScroll = () => {
      // 当滚动超过200px时，显示背景
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed z-50 top-[30px] left-1/2 -translate-x-1/2 flex gap-[12px] items-center px-[16px] py-[10px] rounded-[100px] transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#2e2e2e]/80 backdrop-blur-lg shadow-xl shadow-black/20 border border-white/10' 
          : 'bg-transparent'
      }`}
      data-name="Navigation"
    >
      <NavLink
        to={projectId ? `/?scrollTo=${projectId}` : "/"}
        end
        className={({ isActive }) =>
          `flex h-[36px] items-center justify-center px-[20px] py-[8px] rounded-[100px] transition-all duration-300 ${
            isActive
              ? 'bg-[#51e9d6] text-black shadow-lg shadow-[#51e9d6]/20'
              : 'text-white hover:bg-white/10'
          }`
        }
      >
        <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-normal text-nowrap">
          Work
        </p>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex h-[36px] items-center justify-center px-[20px] py-[8px] rounded-[100px] transition-all duration-300 ${
            isActive
              ? 'bg-[#51e9d6] text-black shadow-lg shadow-[#51e9d6]/20'
              : 'text-white hover:bg-white/10'
          }`
        }
      >
        <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-normal text-nowrap">
          About
        </p>
      </NavLink>
    </nav>
  );
}
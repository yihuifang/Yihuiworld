import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectPage } from './pages/ProjectPage';

function AppContent() {
  const location = useLocation();

  // Set background gradient based on route
  const getBackgroundClass = () => {
    if (location.pathname === '/about') {
      return 'bg-gradient-to-br from-[#242424] via-[#1a1a1a] to-[#1a2020]';
    } else if (location.pathname.startsWith('/project/')) {
      return 'bg-gradient-to-br from-[#1a2e2a] via-[#2e2e2e] to-[#2a2e2e]';
    } else {
      return 'bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#252525]';
    }
  };

  return (
    <div className={`min-h-screen w-full relative font-['Nunito_Sans'] overscroll-none ${getBackgroundClass()}`}>
      <ScrollToTop />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
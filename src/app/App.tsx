import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

function AppContent() {
const location = useLocation();
return (
<div className="bg-[#1a1a1a] min-h-screen w-full relative font-['Nunito_Sans'] overscroll-none">
<ScrollToTop />
<Navigation />
<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
<Route path="/" element={<WorkPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/project/:id" element={<ProjectDetailPage />} />
</Routes>
</AnimatePresence>
<Footer />
</div>
);
}

export default function App() {
return (
<BrowserRouter basename="/Yihuiworld">
<AppContent />
</BrowserRouter>
);
}

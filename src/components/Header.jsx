import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

export const Header = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // GPU-Accelerated Butter-Smooth Scroll Progress (Zero React re-renders)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Family Visa', path: '/family-visa' },
    { label: 'Golden Visa', path: '/golden-visa', badge: '10-Yr' },
    { label: 'Visa Calculator', path: '/visa-calculator' },
    { label: 'Medical Finder', path: '/medical-finder' },
    { label: 'Passport Services', path: '/passport-services' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
          : isHome
          ? 'bg-transparent py-5 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Left: BrightLink Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-[#B8864B]/30 group-hover:scale-105 transition-transform duration-200">
            BT
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                isTransparent ? 'text-white' : 'text-[#222222]'
              }`}
            >
              Bright<span className={isTransparent ? 'text-[#F5D7A1]' : 'text-[#B8864B]'}>Link</span>
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider font-semibold mt-0.5 transition-colors ${
                isTransparent ? 'text-neutral-300' : 'text-neutral-500'
              }`}
            >
              Typing & Consulting
            </span>
          </div>
        </Link>

        {/* Center: Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative py-1 flex items-center gap-1.5 cursor-pointer ${
                  isTransparent
                    ? isActive
                      ? 'text-[#F5D7A1] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F5D7A1]'
                      : 'text-white/90 hover:text-[#F5D7A1] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F5D7A1] hover:after:w-full after:transition-all'
                    : isActive
                    ? 'text-[#B8864B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B8864B]'
                    : 'text-[#444444] hover:text-[#B8864B] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8864B] hover:after:w-full after:transition-all'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`px-1.5 py-0.2 text-[10px] font-bold rounded-sm transition-colors ${
                      isTransparent
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'bg-[#F5F1EB] text-[#B8864B]'
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Actions (Consultation button only, no WhatsApp button) */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#B8864B] hover:bg-[#9F7038] rounded-xl shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Free Consultation</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger (No calculator icon button) */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-lg cursor-pointer transition-colors ${
              isTransparent ? 'text-white hover:text-[#F5D7A1]' : 'text-[#222222] hover:text-[#B8864B]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-3.5 text-sm font-semibold text-[#333333]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-1.5 border-b border-neutral-100 flex items-center justify-between ${
                      isActive ? 'text-[#B8864B] font-bold' : 'hover:text-[#B8864B]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                );
              })}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 text-sm font-bold text-white bg-[#B8864B] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth GPU-Accelerated Golden Scroll Progress Bar under header */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5985B] via-[#F3D7A4] to-[#976A36] origin-left pointer-events-none z-50 shadow-xs"
      />
    </header>
  );
};

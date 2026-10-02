import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, 
  X, 
  ChevronRight,
  Calculator,
  Stethoscope,
  PhoneCall
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Header = ({ 
  onOpenConsultation, 
  onOpenCalculator, 
  onOpenMedicalFinder 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const progressBarRef = useRef(null);

  // GSAP ScrollTrigger Progress Bar
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            start: "top top",
            end: "max",
            scrub: 0.25
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Navbar scroll and active section observer
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          
          // Determine current section in viewport
          const sections = ['hero', 'about', 'services', 'process', 'testimonials', 'faq', 'contact'];
          for (const sec of sections) {
            const el = document.getElementById(sec);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 140 && rect.bottom >= 140) {
                setActiveSection(sec);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !scrolled;

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Process', target: 'process' },
    { 
      label: 'Fee Calculator', 
      isAction: true, 
      action: onOpenCalculator,
      badge: 'Tool'
    },
    { 
      label: 'Medical Finder', 
      isAction: true, 
      action: onOpenMedicalFinder,
      badge: 'DHA'
    },
    { label: 'Reviews', target: 'testimonials' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Left: BrightLink Logo */}
        <button 
          onClick={() => scrollTo('hero')} 
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
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
        </button>

        {/* Center: Single Page Section Nav */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold">
          {navItems.map((item, idx) => {
            const isActive = !item.isAction && activeSection === item.target;
            
            if (item.isAction) {
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className={`transition-colors relative py-1 flex items-center gap-1.5 cursor-pointer ${
                    isTransparent
                      ? 'text-white/90 hover:text-[#F5D7A1]'
                      : 'text-[#444444] hover:text-[#B8864B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`px-1.5 py-0.2 text-[9px] font-bold rounded-sm ${
                        isTransparent
                          ? 'bg-white/15 text-[#F5D7A1] border border-white/20'
                          : 'bg-[#F5F1EB] text-[#B8864B]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => scrollTo(item.target)}
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
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation('Free Initial Consultation')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#B8864B] hover:bg-[#9F7038] rounded-xl shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Free Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
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
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-2xl overflow-hidden animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-[#333333]">
            {navItems.map((item, idx) => {
              if (item.isAction) {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      item.action();
                    }}
                    className="py-2 border-b border-neutral-100 flex items-center justify-between text-left text-[#B8864B] cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 text-[9px] font-bold rounded-sm bg-[#F5F1EB] text-[#B8864B]">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </button>
                );
              }

              const isActive = activeSection === item.target;
              return (
                <button
                  key={idx}
                  onClick={() => scrollTo(item.target)}
                  className={`py-2 border-b border-neutral-100 flex items-center justify-between text-left cursor-pointer ${
                    isActive ? 'text-[#B8864B] font-bold' : 'hover:text-[#B8864B]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
              );
            })}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Free Initial Consultation');
                }}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-[#B8864B] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Get Free Consultation</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* GSAP ScrollTrigger Gold Progress Bar under header */}
      <div
        ref={progressBarRef}
        style={{ transform: 'scaleX(0)' }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5985B] via-[#F3D7A4] to-[#976A36] origin-left pointer-events-none z-50 shadow-xs will-change-transform"
      />
    </header>
  );
};

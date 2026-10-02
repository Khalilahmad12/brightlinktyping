import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck,
  Linkedin
} from 'lucide-react';

export const Footer = ({
  onOpenConsultation,
  onOpenService,
  onOpenCalculator,
  onOpenMedicalFinder
}) => {
  const scrollTo = (id) => {
    if (id === 'hero' || id === 'top') {
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

  return (
    <footer className="bg-[#1A1A1A] text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Section 1: Company Information (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => scrollTo('hero')} 
              className="flex items-center gap-2.5 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                BT
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Bright<span className="text-[#B8864B]">Link</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 mt-0.5">
                  Typing & Consulting
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Brightlink Consulting provides professional UAE visa and government service assistance, helping individuals and businesses complete their official documentation with clear guidance, full legal compliance, and reliable support.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
              <span>GDRFA • ICP • BLS • MOHRE Accredited</span>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-[#25D366] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <a
                href="tel:+971566556645"
                aria-label="Phone"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-[#B8864B] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@brightlinkconsulting.ae"
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-[#B8864B] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-[#0077B5] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('hero')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('about')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('services')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  All Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('process')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCalculator} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Fee Calculator</span>
                  <span className="text-[9px] bg-[#B8864B]/20 text-[#E5B77E] px-1 py-0.2 rounded">Tool</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenMedicalFinder} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Medical Centers</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded">DHA</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('testimonials')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('faq')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="hover:text-[#B8864B] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Section 3: Popular Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenService('golden-visa')}
                  className="hover:text-[#B8864B] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  <span>10-Year Golden Visa</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('family-visa')}
                  className="hover:text-[#B8864B] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  <span>Family Visa Sponsorship</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('business-visa')}
                  className="hover:text-[#B8864B] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  <span>Business & Partner Visa</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('passport-services')}
                  className="hover:text-[#B8864B] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  <span>BLS Indian Passport Renewal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('medical-visa')}
                  className="hover:text-[#B8864B] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  <span>VIP Medical Fitness Typing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('business-setup')}
                  className="hover:text-[#B8864B] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  <span>Mainland & Freezone Setup</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Information (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-white font-medium tabular-nums">+971 56 655 6645</p>
                  <p className="text-neutral-400 tabular-nums">+971 56 655 6645</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8864B] shrink-0" />
                <a href="mailto:info@brightlinkconsulting.ae" className="text-white hover:underline break-all">
                  info@brightlinkconsulting.ae
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Monday – Saturday: 9 AM – 6 PM</p>
                  <p className="text-neutral-500">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <p className="text-neutral-300 leading-relaxed">
                  Office M08-27, M1 Floor, Crystal Tower, Millennium Central Same Building, Al Asayel St, Business Bay, Dubai, U.A.E — PO Box: 554552
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 BrightLink Consulting. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Government Accredited Center</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import video from "../assets/images/bg.mp4";
import { 
  ArrowRight, 
  Calculator, 
  Award, 
  Users, 
  ShieldCheck, 
  Landmark
} from 'lucide-react';
import { CountUp } from './CountUp.jsx';

export const HeroSection = ({
  onOpenConsultation,
  onOpenCalculator
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const statCards = [
    {
      targetNumber: 20,
      suffix: '+',
      label: 'Years Experience',
      desc: 'Established presence in Dubai',
      icon: <Award className="w-5 h-5 text-[#B8864B]" />
    },
    {
      targetNumber: 10000,
      suffix: '+',
      label: 'Clients Served',
      desc: 'Expatriates, families & investors',
      icon: <Users className="w-5 h-5 text-[#B8864B]" />
    },
    {
      targetNumber: 98,
      suffix: '%',
      label: 'Success Rate',
      desc: '5-Star verified client satisfaction',
      icon: <ShieldCheck className="w-5 h-5 text-[#B8864B]" />
    },
    {
      targetNumber: 15,
      suffix: '+',
      label: 'Govt Accreditations',
      desc: 'GDRFA • ICP • BLS • MOHRE Portals',
      icon: <Landmark className="w-5 h-5 text-[#B8864B]" />
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#0F0E0D] text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transform scale-[1.03]"
        >
          <source src={video} type="video/mp4" />
          <img
            src={video}
            alt="Dubai Skyline"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Cinematic Vignette & Readability Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0F0E0D]" />

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B8864B]/15 blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content with Top Spacing for Floating Navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-40 lg:pt-48 pb-24 lg:pb-32">
        <div className="max-w-3xl space-y-6">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-md"
          >
            Fast & Reliable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCEFD5] via-[#E2B77A] to-[#C5985B]">
              UAE Visa & Passport
            </span> Services
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="text-base sm:text-lg text-neutral-100 leading-relaxed max-w-2xl font-normal drop-shadow-md"
          >
            Authorized assistance for 10-Year Golden Visas, Family Sponsorship, Emirates ID, BLS Indian Passport Renewals, and Business Setup in Dubai. Transparent pricing, legal auditing, and express same-day submission.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] to-[#976A36] hover:from-[#D4A76A] hover:to-[#A77945] text-white font-semibold text-sm shadow-xl shadow-[#B8864B]/35 hover:shadow-2xl hover:shadow-[#B8864B]/50 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenCalculator}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-black/50 hover:bg-black/70 text-white border border-white/30 backdrop-blur-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shadow-md"
            >
              <Calculator className="w-4 h-4 text-[#F5D7A1]" />
              <span>Visa Fee Calculator</span>
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Stats Counter Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-xl hover:shadow-2xl hover:border-[#B8864B]/50 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B]/15 text-[#B8864B] flex items-center justify-center shrink-0 transition-colors shadow-xs">
                {stat.icon}
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-extrabold text-[#222222] tracking-tight flex items-baseline">
                  <CountUp 
                    end={stat.targetNumber} 
                    duration={2000} 
                    suffix={stat.suffix} 
                  />
                </div>
                <h4 className="text-sm font-bold text-[#333333]">
                  {stat.label}
                </h4>
                <p className="text-xs text-[#777777] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Transition Divider */}
      <div className="h-16 bg-gradient-to-b from-transparent to-[#FFFFFF]" />
    </section>
  );
};

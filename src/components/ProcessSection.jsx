import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FileCheck2, 
  SendHorizontal, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import processBg from '../assets/images/process_bg_skyline_1790959277672.jpg';

export const ProcessSection = ({ onOpenConsultation }) => {
  const containerRef = useRef(null);

  // Parallax tracking bound to the section's viewport entry and exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // 0.50x relative scroll speed translation (moves smoothly as user scrolls)
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const steps = [
    {
      step: '01',
      title: 'Document Preparation',
      subtitle: 'Attestation & Drafting',
      desc: 'We assist with MOFA document attestation, certified legal Arabic translation, photo compliance, and consular drafting.',
      duration: '1 - 2 Days',
      icon: <FileCheck2 className="w-5 h-5" />
    },
    {
      step: '02',
      title: 'Portal Typing',
      subtitle: 'Official Submission',
      desc: 'Our authorized typing center submits your application directly through GDRFA, ICP, BLS, and MOHRE government systems.',
      duration: 'Same-Day',
      icon: <SendHorizontal className="w-5 h-5" />
    },
    {
      step: '03',
      title: 'Residency Issuance',
      subtitle: 'Visa & Emirates ID',
      desc: 'Following VIP medical testing and biometrics, your electronic visa is issued and your physical Emirates ID is dispatched.',
      duration: '24 - 48 Hours',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="py-24 bg-neutral-900 relative overflow-hidden"
    >
      {/* Parallax Background Image at 0.50x Scroll Speed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -top-[25%] -bottom-[25%] left-0 right-0 w-full will-change-transform"
        >
          <img
            src={processBg}
            alt="Dubai Business Bay and Government District Architecture"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Lightweight translucent overlay so the skyline image is clearly visible */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-neutral-950/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[#E5B77E]/50 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B77E]" />
            <span className="text-xs font-bold text-[#E5B77E] uppercase tracking-wider">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
            Streamlined 3-Step Process
          </h2>

          <p className="text-sm sm:text-base text-neutral-100 font-medium leading-relaxed drop-shadow">
            A transparent roadmap engineered to minimize paperwork and eliminate immigration delays from start to finish.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              onClick={() => onOpenConsultation(`Process Step ${item.step}: ${item.title}`)}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/60 hover:border-[#B8864B] shadow-xl hover:shadow-2xl hover:shadow-[#B8864B]/20 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F1EB] text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-[#B8864B]/35 group-hover:text-[#B8864B]/80 transition-colors tabular-nums">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-neutral-500">
                  <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>{item.duration}</span>
                </span>
                <span className="text-[#B8864B] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  <span>Get Started</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

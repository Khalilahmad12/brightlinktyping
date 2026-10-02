import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, Shield, HeartHandshake, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const WhyChooseUsSection = ({ onOpenConsultation }) => {
  const cards = [
    {
      id: 'professionals',
      title: 'Experienced Professionals',
      desc: 'Our certified specialists navigate UAE government procedures with legal precision, clear guidance, and personal care.',
      image: '/src/assets/images/why_experienced_team_1790842362837.jpg',
      icon: <UserCheck className="w-5 h-5 text-[#B8864B]" />,
      points: ['Direct GDRFA/ICP typists', '20+ years Dubai presence', 'Legal compliance audit']
    },
    {
      id: 'fast-process',
      title: 'Fast & Hassle-Free Process',
      desc: 'We eliminate delays and paperwork headaches with express typing, same-day portal submissions, and live tracking.',
      image: '/src/assets/images/why_fast_process_1790842377870.jpg',
      icon: <Zap className="w-5 h-5 text-[#B8864B]" />,
      points: ['Same-day electronic submission', 'Express 24h & VIP tracks', 'Direct SMS update alerts']
    },
    {
      id: 'transparent-service',
      title: 'Reliable & Transparent Service',
      desc: 'We provide upfront ministerial fee breakdowns and complete cost transparency with zero unexpected charges.',
      image: '/src/assets/images/service_golden_visa_1790842391749.jpg',
      icon: <Shield className="w-5 h-5 text-[#B8864B]" />,
      points: ['Upfront government rate sheet', 'Zero hidden typing charges', 'Official receipts provided']
    },
    {
      id: 'customer-support',
      title: 'Customer-Focused Support',
      desc: 'Receive dedicated 1-on-1 assistance from application review to Emirates ID delivery with direct WhatsApp updates.',
      image: '/src/assets/images/about_visa_consultant_1790842347102.jpg',
      icon: <HeartHandshake className="w-5 h-5 text-[#B8864B]" />,
      points: ['Dedicated case manager', 'Direct WhatsApp support', 'Post-stamping guidance']
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white border-t border-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight"
          >
            Why Thousands Trust BrightLink
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto"
          >
            Helping individuals, families, and businesses complete UAE government procedures with absolute confidence.
          </motion.p>
        </div>

        {/* 4 Balanced Cards with Medium Text Length */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Zoom on Hover */}
                <div className="h-44 w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content with Medium Paragraph Length */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F1EB] group-hover:bg-[#B8864B]/15 transition-colors flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="pt-2 border-t border-neutral-100 space-y-1.5">
                    {card.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#8C6230] bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>Consult an Expert</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

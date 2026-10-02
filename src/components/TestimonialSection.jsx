import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/servicesData.js';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#FCFAF8] relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Client Reviews
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-xl mx-auto"
          >
            Real feedback from individuals, families, and business leaders who secured their UAE visas and residency through BrightLink.
          </motion.p>
        </div>

        {/* 4 Premium Review Cards in a Responsive Grid with Medium Paragraph Length */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/80 hover:border-[#B8864B]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Top Row: 5 Stars & Decorative Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#F5F1EB] group-hover:bg-[#B8864B]/15 transition-colors flex items-center justify-center text-[#B8864B]">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Review Text with Medium Length */}
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center gap-3">
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#B8864B]/30 group-hover:ring-[#B8864B] group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-0.5 truncate min-w-0">
                  <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#666666] truncate">
                    {item.role} · <span className="font-medium text-[#222222]">{item.country}</span>
                  </p>
                  <span className="inline-block text-[10px] font-bold text-[#8C6230] uppercase tracking-wide">
                    {item.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

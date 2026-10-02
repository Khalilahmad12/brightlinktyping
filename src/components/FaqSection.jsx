import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../data/servicesData.js';
import { Plus, Minus } from 'lucide-react';

export const FaqSection = () => {
  // All closed by default to keep the section compact and short
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header - Clean, compact, no buttons above */}
        <div className="text-center space-y-2 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-lg mx-auto"
          >
            Clear answers to common questions regarding UAE visas, family sponsorship, and passport services.
          </motion.p>
        </div>

        {/* Compact Modern Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: 'easeOut' }}
                className="bg-[#FCFAF8] rounded-xl border border-neutral-200/80 hover:border-[#B8864B]/40 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-100/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-[#222222] leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Icon with smooth transition */}
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isOpen 
                      ? 'bg-[#B8864B] text-white shadow-xs' 
                      : 'bg-[#F5F1EB] text-[#8C6230]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-neutral-200/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

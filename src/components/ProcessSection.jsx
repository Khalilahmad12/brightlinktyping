import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck2, 
  SendHorizontal, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ProcessSection = ({ onOpenConsultation }) => {
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
    <section id="process" className="py-20 sm:py-24 bg-[#FCFAF8] relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Streamlined 3-Step Process
          </h2>

          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
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
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 hover:border-[#B8864B]/60 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F1EB] text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-[#B8864B]/30 group-hover:text-[#B8864B]/70 transition-colors tabular-nums">
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

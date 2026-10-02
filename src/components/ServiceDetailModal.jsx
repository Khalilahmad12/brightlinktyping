import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, FileText, ArrowRight, MessageSquare } from 'lucide-react';

export const ServiceDetailModal = ({
  service,
  onClose,
  onOpenConsultation
}) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello BrightLink, I would like to inquire about the ${service.title} service. Could you please guide me on requirements and timeline?`);
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Header Image */}
        <div className="relative h-40 w-full overflow-hidden rounded-t-2xl bg-neutral-100">
          <img 
            src={service.image} 
            alt={service.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body with Compact Padding */}
        <div className="p-5 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                {service.category}
              </span>
              <span className="text-xs font-bold text-[#B8864B]">
                From {service.startingFee}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mt-0.5">
              {service.title}
            </h2>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 gap-3 p-3 bg-[#F5F1EB] rounded-xl border border-[#B8864B]/15 text-xs">
            <div>
              <p className="text-neutral-500 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B8864B]" /> Processing Time
              </p>
              <p className="font-bold text-[#222222] mt-0.5">{service.processingTime}</p>
            </div>
            <div>
              <p className="text-neutral-500 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" /> Validity
              </p>
              <p className="font-bold text-[#222222] mt-0.5">{service.validity}</p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wider mb-1">Service Overview</h3>
            <p className="text-xs text-[#555555] leading-relaxed">{service.overview}</p>
          </div>

          {/* Eligibility */}
          <div>
            <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" /> Eligibility
            </h3>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {service.eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div>
            <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#B8864B]" /> Required Documents
            </h3>
            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-neutral-200">
              <ul className="space-y-1.5 text-xs text-[#555555]">
                {service.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B] mt-1.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-neutral-100 flex gap-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(service.title);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

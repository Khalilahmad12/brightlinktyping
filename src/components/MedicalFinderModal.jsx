import React from 'react';
import { X, Stethoscope, MapPin, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MEDICAL_CENTERS } from '../data/servicesData.js';

export const MedicalFinderModal = ({
  isOpen,
  onClose,
  onBookMedical
}) => {
  if (!isOpen) return null;

  const handleWhatsAppBooking = (centerName) => {
    const text = encodeURIComponent(`Hello BrightLink, I would like to book a VIP Medical Fitness appointment at ${centerName}. Please assist with typing and express slot.`);
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#B8864B]/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#222222]">Dubai Medical Fitness Centers & Finder</h2>
              <p className="text-xs text-[#666666]">DHA & ICP Authorized Medical Testing Typing with 4-Hour Express Results</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Explanation Alert */}
          <div className="p-4 bg-[#F5F1EB] rounded-2xl border border-[#B8864B]/20 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#444444] leading-relaxed">
              <p className="font-bold text-[#222222] text-sm">Need VIP Medical Typing with Zero Waiting Queues?</p>
              <p className="mt-1">
                BrightLink pre-types your DHA application, arranges express blood test and chest X-ray appointments at premier smart centers in Dubai, and pushes certificates directly to the GDRFA residency system.
              </p>
            </div>
          </div>

          {/* Centers List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider">
              Recommended DHA Certified Centers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MEDICAL_CENTERS.map((center) => (
                <div
                  key={center.id}
                  className="p-5 rounded-2xl border border-neutral-200 hover:border-[#B8864B] bg-white transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                        {center.type}
                      </span>
                      <span className="text-xs font-bold text-[#B8864B]">{center.fee}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#222222]">{center.name}</h4>

                    <p className="text-xs text-[#666666] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                      <span>{center.location}</span>
                    </p>

                    <p className="text-xs text-[#666666] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Turnaround: <strong className="text-[#222222]">{center.resultTime}</strong></span>
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {center.features.map((feat, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-sm bg-neutral-100 text-[#555555] text-[10px] font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100 flex gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onBookMedical('Medical Visa');
                      }}
                      className="flex-1 py-2 text-center text-xs font-bold rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white transition-colors cursor-pointer"
                    >
                      Book Center Slot
                    </button>
                    <button
                      onClick={() => handleWhatsAppBooking(center.name)}
                      className="px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors cursor-pointer"
                      title="Quick WhatsApp Booking"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Checklist for Medical */}
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs text-[#555555] space-y-2">
            <p className="font-bold text-[#222222] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" /> Required for Medical Fitness Examination:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Original valid passport & copy of UAE entry permit or visa cancellation</li>
              <li>2 passport-sized photographs on white background</li>
              <li>BrightLink pre-typed DHA medical fitness application with barcode</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

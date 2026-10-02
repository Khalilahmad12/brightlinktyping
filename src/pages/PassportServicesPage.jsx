import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  MessageSquare,
  Globe,
  Camera,
  Calendar,
  Send
} from 'lucide-react';
import axios from 'axios';

export const PassportServicesPage = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    nationality: 'Indian (BLS Center)',
    passportType: 'Normal Renewal (36 Pages)',
    serviceSpeed: 'Standard (7 - 10 Days)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: `Passport Services (${formData.nationality} - ${formData.passportType})`,
        urgency: formData.serviceSpeed.includes('Tatkal') ? 'emergency' : 'high',
        preferredTime: 'Morning',
        notes: `Speed: ${formData.serviceSpeed}. ${formData.notes}`
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello BrightLink, I need assistance with my Passport Renewal (BLS / Consular Services). Can you please guide me on documentation and appointment booking?');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
              <Globe className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                BLS Indian Passport & Global Consular Typing
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              Passport Renewal & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
                Consular Services
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              Complete online typing, annexure drafting, appointment booking, and photo compliance for Indian Passport (BLS), Pakistani Consulate, Philippine Consulate, and European missions in Dubai.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation('Passport Renewal Service')}
                className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
              >
                Book Passport Typing
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Instant BLS Guidance</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        
        {/* Services Spectrum */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
              Passport & Consular Typing Services
            </h2>
            <p className="text-sm text-[#666666]">
              Authorized application typing conforming to exact embassy formatting rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200 hover:border-[#B8864B]/50 transition-all shadow-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-[#B8864B] text-white text-[10px] font-bold uppercase">
                High Demand
              </span>
              <h3 className="text-lg font-bold text-[#222222] mt-3">Indian Passport Renewal</h3>
              <p className="text-xs text-[#666666] mt-1 mb-4">BLS International Center Typing in Dubai</p>

              <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Normal Renewal (36 pages) & Jumbo (60 pages)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Tatkal Express Service:</strong> 2 to 3 days turnaround</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Name addition/deletion, spouse endorsement</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200 hover:border-[#B8864B]/50 transition-all shadow-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[10px] font-bold uppercase">
                Family & Minors
              </span>
              <h3 className="text-lg font-bold text-[#222222] mt-3">Minor Child Passports</h3>
              <p className="text-xs text-[#666666] mt-1 mb-4">Newborn registration & child renewal</p>

              <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Annexure D & C drafting with parent signatures</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Consular birth registration within 1 year</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Valid for 5 years or until child reaches 18</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200 hover:border-[#B8864B]/50 transition-all shadow-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[10px] font-bold uppercase">
                Global Travel
              </span>
              <h3 className="text-lg font-bold text-[#222222] mt-3">PCC & Damage Replacement</h3>
              <p className="text-xs text-[#666666] mt-1 mb-4">Police Clearance Certificate & Lost Cases</p>

              <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Police Clearance Certificate (PCC) for migration</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Lost or damaged passport police report guidance</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Annexure F legal declaration typing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Photo Specifications & Guidelines */}
        <section className="bg-[#FCFAF8] p-8 sm:p-10 rounded-3xl border border-neutral-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#222222]">Strict Photo Compliance Guidelines</h3>
              <p className="text-xs text-[#666666]">Over 40% of DIY passport applications are delayed by non-compliant photos.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#222222] block mb-1">Exact 51 x 51 mm (2x2 Inches)</span>
              <p className="text-[#555555]">Dimensions must strictly measure 2x2 inches with 75% to 80% face coverage.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#222222] block mb-1">Pure White Background</span>
              <p className="text-[#555555]">No off-white, cream, or shaded background. Both ears must be clearly visible.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#222222] block mb-1">Dark Clothing Recommended</span>
              <p className="text-[#555555]">Wear dark colored clothing for sharp contrast against the pure white background.</p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Application Desk</span>
                <h3 className="text-2xl font-bold text-[#222222] mt-1">Book Passport Services</h3>
                <p className="text-xs text-[#666666] mt-1">We prepare your official forms, book BLS/consular slots, and verify all papers.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Full Name as per Current Passport *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Nationality / Center</label>
                  <select
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  >
                    <option value="Indian (BLS Center)">Indian (BLS Center)</option>
                    <option value="Pakistani Consulate">Pakistani Consulate</option>
                    <option value="Philippine Consulate">Philippine Consulate</option>
                    <option value="UK / European Embassy">UK / European Embassy</option>
                    <option value="Other Nationality">Other Nationality</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Passport Requirement</label>
                  <select
                    value={formData.passportType}
                    onChange={(e) => setFormData({ ...formData, passportType: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  >
                    <option value="Normal Renewal (36 Pages)">Normal Renewal (36 Pages)</option>
                    <option value="Jumbo Booklet (60 Pages)">Jumbo Booklet (60 Pages)</option>
                    <option value="Minor Child Passport">Minor Child Passport</option>
                    <option value="Police Clearance Certificate (PCC)">Police Clearance Certificate (PCC)</option>
                    <option value="Lost or Damaged Passport">Lost or Damaged Passport</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Service Speed Required</label>
                <select
                  value={formData.serviceSpeed}
                  onChange={(e) => setFormData({ ...formData, serviceSpeed: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                >
                  <option value="Standard (7 - 10 Days)">Standard (7 - 10 Days)</option>
                  <option value="Tatkal Urgent (2 - 3 Days)">Tatkal Urgent (2 - 3 Days)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? <span>Reviewing Passport Submission...</span> : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Passport Service Request</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#222222]">Passport Service Booked!</h3>
              <p className="text-xs text-[#555555] max-w-xs mx-auto">
                Thank you, {formData.name}. Our consular typist in Business Bay will contact you via WhatsApp with the required checklist and slot timings.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-bold text-neutral-700 hover:bg-neutral-200"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

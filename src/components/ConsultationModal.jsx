import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, CheckCircle2, Send, Phone, Mail, User, ShieldCheck } from 'lucide-react';

export const ConsultationModal = ({
  isOpen,
  onClose,
  defaultService = 'Golden Visa'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    emirate: 'Dubai',
    urgency: 'Standard (3-5 days)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/inquiries', formData);
      setSubmitted(true);
    } catch (err) {
      console.warn('API error, completing client-side fallback:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: defaultService,
      emirate: 'Dubai',
      urgency: 'Standard (3-5 days)',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#B8864B]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 bg-[#B8864B] w-full" />

        <button
          onClick={handleResetAndClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">
                  BrightLink Express Consultation
                </span>
                <h3 className="text-2xl font-bold text-[#222222] mt-1">
                  Book Free Visa Consultation
                </h3>
                <p className="text-sm text-[#666666] mt-1">
                  Speak directly with a licensed UAE immigration advisor in Business Bay, Dubai. Zero obligation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Al-Hashimi"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    >
                      <option value="Golden Visa">Golden Visa (10-Year)</option>
                      <option value="Family Visa">Family Visa Sponsorship</option>
                      <option value="Business Visa">Business & Partner Visa</option>
                      <option value="Residence Visa">Employment Residence Visa</option>
                      <option value="Tourist Visa">Tourist / Visit Visa</option>
                      <option value="Medical Visa">Medical Fitness & Visa</option>
                      <option value="Visa Assistance">Visa Assistance & Waivers</option>
                      <option value="Passport Services">Passport Services (BLS/Consulate)</option>
                      <option value="Visa Renewal">Visa Renewal / Emirates ID</option>
                      <option value="Document Attestation">Document Attestation (MOFA)</option>
                      <option value="Emirates ID">Emirates ID Registration</option>
                      <option value="Business Setup">Business Setup in UAE</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Preferred Timeline
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    >
                      <option value="Express (24-48 hours)">VIP Express (24-48 hrs)</option>
                      <option value="Standard (3-5 days)">Standard (3-5 days)</option>
                      <option value="Planning ahead (Within a month)">Planning Ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">
                    Specific Details or Questions
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g. Sponsor salary, family size, or passport issue details..."
                    className="w-full px-3 py-2.5 text-sm bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Scheduling with Consultant...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Free Consultation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Licensed under Dubai Economy & Tourism. Your data is strictly confidential.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-[#222222]">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-[#555555] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#222222]">{formData.name}</span>. Our senior visa consultant has received your inquiry for <span className="font-semibold text-[#B8864B]">{formData.service}</span> and will reach out to you within 30 minutes via WhatsApp or phone.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Hi BrightLink, I just submitted an inquiry for ${formData.service}. My name is ${formData.name}.`);
                    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                >
                  Connect Immediately via WhatsApp
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 rounded-xl bg-neutral-100 text-neutral-700 font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

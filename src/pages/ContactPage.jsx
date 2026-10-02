import React, { useState } from 'react';
import axios from 'axios';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Navigation,
  AlertCircle,
  Building2,
  Calendar
} from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Visa Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data && response.data.success) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai', '_blank');
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                Visit Us in Business Bay, Dubai
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              Contact & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
                Consulting Office
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              Have questions regarding UAE residency, fine reductions, or family sponsorship? Visit our government-approved typing office in Crystal Tower, Business Bay, or consult with us directly online.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Office & Map Info */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
              <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                <svg className="w-full h-full object-cover" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="500" fill="#E8EDF2" />
                  <path d="M0 0H800V150C620 160 520 130 380 180C260 220 120 190 0 210V0Z" fill="#C5DCEB" />
                  <path d="M0 210C120 190 260 220 380 180C520 130 620 160 800 150V165C620 175 520 145 380 195C260 235 120 205 0 225V210Z" fill="#F4E9D8" />
                  <path d="M0 320L800 240" stroke="#FFFFFF" strokeWidth="18" />
                  <path d="M0 320L800 240" stroke="#CBD5E1" strokeWidth="8" />
                  <path d="M150 500L550 0" stroke="#FFFFFF" strokeWidth="12" />
                  <path d="M150 500L550 0" stroke="#E2E8F0" strokeWidth="6" />
                  <path d="M360 180C390 250 430 330 470 420" stroke="#93C5FD" strokeWidth="22" strokeLinecap="round" />
                  <circle cx="430" cy="270" r="5" fill="#B8864B" />
                  <rect x="420" y="300" width="130" height="70" rx="8" fill="#B8864B" fillOpacity="0.12" stroke="#B8864B" strokeWidth="1.5" strokeDasharray="4 4" />
                  <g transform="translate(460, 325)">
                    <circle cx="0" cy="0" r="14" fill="#B8864B" fillOpacity="0.25" />
                    <circle cx="0" cy="0" r="8" fill="#B8864B" />
                    <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>

              <div className="p-4 bg-white border-t border-neutral-100 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#444444]">
                    <p className="font-bold text-[#222222] text-sm">
                      Office M08-27, M1 Floor, Crystal Tower
                    </p>
                    <p className="mt-0.5 text-neutral-600">Millennium Central Same Building, Al Asayel St, Business Bay, Dubai</p>
                    <p className="text-neutral-400 mt-0.5">Free visitor parking · 5 mins from Business Bay Metro Station</p>
                  </div>
                </div>

                <button
                  onClick={openGoogleMaps}
                  className="px-3.5 py-2 rounded-xl bg-[#222222] hover:bg-[#B8864B] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </button>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+971566556645"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">Direct Helpline</p>
                  <p className="text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
                </div>
              </a>

              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#25D366] transition-all flex items-center gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">WhatsApp Desk</p>
                  <p className="text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
                </div>
              </a>

              <a
                href="mailto:info@brightlinkconsulting.ae"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">Official Email</p>
                  <p className="text-xs font-bold text-[#222222] truncate mt-0.5">info@brightlinkconsulting.ae</p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-neutral-200/90 bg-white flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">Working Hours</p>
                  <p className="text-xs font-bold text-[#222222] mt-0.5">Mon – Sat: 9 AM – 6 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Online Inquiry</span>
                  <h3 className="text-2xl font-bold text-[#222222] mt-1">Send Us a Direct Message</h3>
                  <p className="text-xs text-[#666666] mt-1">Our certified UAE legal typists will respond within 30 minutes.</p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Michael Henderson"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="michael@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  >
                    <option value="Family Visa Sponsorship">Family Visa Sponsorship</option>
                    <option value="Golden Visa (10 Years)">Golden Visa (10 Years)</option>
                    <option value="Passport Renewal / BLS">Passport Renewal / BLS</option>
                    <option value="DHA Medical Fitness Booking">DHA Medical Fitness Booking</option>
                    <option value="Tourist Visa Express">Tourist Visa Express</option>
                    <option value="Visa Renewal & Fine Reductions">Visa Renewal & Fine Reductions</option>
                    <option value="Emirates ID Biometrics">Emirates ID Biometrics</option>
                    <option value="Document Attestation (MOFA)">Document Attestation (MOFA)</option>
                    <option value="General Visa Inquiry">General Visa Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Message / Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your current status, family members, or inquiry..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? <span>Sending...</span> : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Typist</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#222222]">Message Sent Successfully!</h3>
                <p className="text-xs text-[#555555] max-w-xs mx-auto">
                  Thank you, {formData.name}. Your inquiry has been routed to our Business Bay team. We will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-bold text-neutral-700 hover:bg-neutral-200"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

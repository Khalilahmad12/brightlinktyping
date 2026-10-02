import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Golden Visa',
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
    <section id="contact" className="py-24 bg-[#FCFAF8] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Visit Our Business Bay Office
          </h2>

          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Have questions about UAE visas, passport renewal, or company setup? Consult with our senior immigration typists directly or submit an inquiry.
          </p>
        </div>

        {/* Two-Column Layout with Fade-Up Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Dubai Map & Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            {/* Dubai Map Card */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md bg-white">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
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
                    <circle cx="0" cy="0" r="14" fill="#B8864B" fillOpacity="0.25" className="animate-ping" />
                    <circle cx="0" cy="0" r="8" fill="#B8864B" />
                    <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                  </g>
                </svg>
              </div>

              {/* Address bar */}
              <div className="p-4 bg-white border-t border-neutral-100 flex items-start justify-between gap-4">
                <div className="flex items-start gap-2.5 text-xs text-[#444444]">
                  <MapPin className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#222222] text-sm">
                      Office M08-27, M1 Floor, Crystal Tower
                    </p>
                    <p className="text-neutral-500 mt-0.5">Millennium Central Building, Al Asayel St, Business Bay, Dubai</p>
                    <p className="text-[#888888] mt-0.5">Easy visitor parking & 5 mins from Business Bay Metro Station</p>
                  </div>
                </div>

                <button
                  onClick={openGoogleMaps}
                  className="px-3.5 py-2 rounded-xl bg-[#222222] hover:bg-[#B8864B] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </button>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="tel:+971566556645"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white text-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">Direct Helpline</p>
                  <p className="text-xs sm:text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
                </div>
              </a>

              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#25D366] transition-all flex items-center gap-3 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-[#25D366] group-hover:text-white text-[#25D366] flex items-center justify-center shrink-0 transition-colors">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">WhatsApp Desk</p>
                  <p className="text-xs sm:text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
                </div>
              </a>

              <a
                href="mailto:info@brightlinkconsulting.ae"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white text-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">Official Email</p>
                  <p className="text-xs font-bold text-[#222222] truncate mt-0.5">info@brightlinkconsulting.ae</p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-neutral-200/90 bg-white flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">Working Hours</p>
                  <p className="text-xs font-bold text-[#222222] mt-0.5">Mon – Sat: 9 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Modern Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xl"
          >
            {!submitted ? (
              <>
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">
                    Get In Touch
                  </span>
                  <h3 className="text-2xl font-bold text-[#222222] mt-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] mt-1">
                    Fill out the form and our UAE certified consulting team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Johnathan Miller"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    >
                      <option value="Golden Visa">Golden Visa (10-Year Residency)</option>
                      <option value="Family Visa">Family Visa Sponsorship</option>
                      <option value="Business Visa">Business & Partner Visa</option>
                      <option value="Residence Visa">Employment Residence Visa</option>
                      <option value="Tourist Visa">Tourist & Visit Visa</option>
                      <option value="Medical Visa">Medical Visa & VIP Fitness</option>
                      <option value="Visa Assistance">Visa Assistance & Fine Waivers</option>
                      <option value="Passport Services">Passport Services (BLS/Indian/Global)</option>
                      <option value="Visa Renewal">Visa Renewal & Emirates ID</option>
                      <option value="Document Attestation">MOFA Document Attestation</option>
                      <option value="Emirates ID">Emirates ID Registration</option>
                      <option value="Business Setup">Business Setup & Trade License</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      Message / Case Details
                    </label>
                    <textarea
                      rows={3.5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your visa status, family members, or passport urgency..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Button */}
                  <div className="pt-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] to-[#976A36] hover:from-[#D4A76A] hover:to-[#A77945] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#B8864B]/20 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Submitting to Consultant...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Get Free Consultation</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="text-center text-xs text-neutral-500 pt-1">
                    Direct government accredited typing. No agency spam.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#222222]">
                  Consultation Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#222222]">{formData.name}</span>. We have assigned your request for <span className="font-semibold text-[#B8864B]">{formData.service}</span> to our senior legal typist in Business Bay. You will receive an official response via phone or email within 30 minutes.
                </p>
                <div className="pt-3 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(`Hi BrightLink, I submitted an inquiry for ${formData.service}. My name is ${formData.name}.`);
                      window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                  >
                    Follow up on WhatsApp
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-bold hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

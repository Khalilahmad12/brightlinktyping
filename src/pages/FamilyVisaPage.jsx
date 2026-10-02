import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  AlertCircle,
  Building,
  Heart,
  Calendar,
  Send
} from 'lucide-react';
import axios from 'axios';

export const FamilyVisaPage = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    sponsorName: '',
    phone: '',
    email: '',
    relationship: 'Spouse (Wife/Husband)',
    dependentsCount: '1',
    salaryRange: 'AED 4,000 - 10,000',
    insideUAE: 'Yes',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', {
        name: formData.sponsorName,
        phone: formData.phone,
        email: formData.email,
        service: `Family Visa (${formData.relationship} - ${formData.dependentsCount} Dependents)`,
        urgency: 'high',
        preferredTime: 'Anytime',
        notes: `Salary: ${formData.salaryRange}, Inside UAE: ${formData.insideUAE}. ${formData.notes}`
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello BrightLink, I would like to sponsor my family members in Dubai. Can you please guide me on the salary criteria and document checklist?');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
              <Users className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                GDRFA & ICP Authorized Family Typing
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              UAE Family Visa <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
                Sponsorship Services
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              Bring your spouse, children, and parents to the UAE smoothly. Our senior typists handle file opening, MOFA relationship attestation, DHA medical testing, and 2-year residence visa stamping.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation('Family Visa Sponsorship')}
                className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
              >
                Start Family Sponsorship
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        
        {/* Eligibility Criteria Cards */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
              Eligibility & Salary Requirements
            </h2>
            <p className="text-sm text-[#666666]">
              Federal UAE guidelines for sponsoring dependents in Dubai and the Northern Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/50 transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#222222]">Spouse (Wife or Husband)</h3>
              <p className="text-xs text-[#666666] mt-1 mb-4">Sponsoring husband or wife residency</p>
              
              <div className="space-y-2.5 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Minimum Salary:</strong> AED 4,000 or AED 3,000 + company accommodation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Attested legal marriage certificate in Arabic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Valid Ejari tenancy registered under sponsor</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/50 transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#222222]">Children (Sons & Daughters)</h3>
              <p className="text-xs text-[#666666] mt-1 mb-4">Sponsoring biological or legally adopted children</p>
              
              <div className="space-y-2.5 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Sons:</strong> Sponsored up to age 25 years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Daughters:</strong> Unmarried daughters sponsored at any age</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Attested birth certificates matching sponsor name</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/50 transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#222222]">Parents (Mother & Father)</h3>
              <p className="text-xs text-[#666666] mt-1 mb-4">Sponsoring both parents simultaneously</p>
              
              <div className="space-y-2.5 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Minimum Salary:</strong> AED 20,000 (or AED 19,000 + 2-bedroom Ejari)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Both parents must be sponsored together (unless deceased/divorced)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>Dependency certificate attested from home consulate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="bg-[#FCFAF8] p-8 sm:p-10 rounded-3xl border border-neutral-200/80">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">The 5-Step Family Sponsorship Flow</h2>
            <p className="text-xs sm:text-sm text-[#666666]">From document verification to receiving physical Emirates IDs at your doorstep.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'File Opening', desc: 'Sponsor residency file activation with GDRFA/ICP systems.' },
              { num: '02', title: 'Entry Permit', desc: 'Electronic e-visa issued for entry or status change inside UAE.' },
              { num: '03', title: 'Medical Fitness', desc: 'DHA blood test & chest X-ray for dependents aged 18+.' },
              { num: '04', title: 'Emirates ID', desc: 'Biometric fingerprinting at ICP federal registration center.' },
              { num: '05', title: 'Visa Stamping', desc: 'Digital residency permit sticker approved & card couriered.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-4.5 rounded-xl border border-neutral-200 shadow-xs">
                <span className="text-xl font-black text-[#B8864B]">{step.num}</span>
                <h4 className="text-sm font-bold text-[#222222] mt-2 mb-1">{step.title}</h4>
                <p className="text-xs text-[#666666] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents Checklist & Lead Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Document Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Required Checklist</span>
              <h2 className="text-2xl font-bold text-[#222222] mt-1">Documents to Prepare</h2>
              <p className="text-xs text-[#666666] mt-1">Bring these documents or send clear digital scans on WhatsApp for immediate pre-check.</p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Sponsor Documents', desc: 'Original Passport, valid UAE Residence Visa copy, Emirates ID card, and MOHRE Labor Contract.' },
                { title: 'Salary Proof', desc: 'Official Salary Certificate in Arabic (Freezone or Mainland) and latest 3 months bank statements.' },
                { title: 'Accommodation Proof', desc: 'Registered Ejari Tenancy Certificate and recent Dubai Electricity & Water Authority (DEWA) bill.' },
                { title: 'Marriage Certificate', desc: 'Legally attested by UAE Embassy in home country & MOFA UAE with certified Arabic legal translation.' },
                { title: 'Birth Certificates', desc: 'Attested by Ministry of Foreign Affairs (MOFA) for all sponsored children.' },
                { title: 'Dependents Passports & Photos', desc: 'Passports with minimum 6 months validity and white background passport photographs.' }
              ].map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#222222]">{doc.title}</h4>
                    <p className="text-xs text-[#555555] mt-0.5">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Direct Application</span>
                  <h3 className="text-xl font-bold text-[#222222] mt-0.5">Family Visa Sponsorship Inquiry</h3>
                  <p className="text-xs text-[#666666] mt-1">Receive an exact fee quotation and document checklist within 15 minutes.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Sponsor Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.sponsorName}
                    onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">WhatsApp / Phone *</label>
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
                      placeholder="tariq@example.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">Who Are You Sponsoring?</label>
                    <select
                      value={formData.relationship}
                      onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                    >
                      <option value="Spouse (Wife/Husband)">Spouse (Wife/Husband)</option>
                      <option value="Children Only">Children Only</option>
                      <option value="Spouse + Children">Spouse + Children</option>
                      <option value="Parents (Mother & Father)">Parents (Mother & Father)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">Are Dependents in the UAE?</label>
                    <select
                      value={formData.insideUAE}
                      onChange={(e) => setFormData({ ...formData, insideUAE: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                    >
                      <option value="Yes - On Tourist/Visit Visa">Yes - On Tourist/Visit Visa</option>
                      <option value="No - Outside the UAE">No - Outside the UAE</option>
                      <option value="Yes - On Cancelled Residence Visa">Yes - On Cancelled Visa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Monthly Salary Bracket</label>
                  <select
                    value={formData.salaryRange}
                    onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  >
                    <option value="AED 4,000 - 10,000">AED 4,000 - 10,000</option>
                    <option value="AED 10,000 - 20,000">AED 10,000 - 20,000</option>
                    <option value="AED 20,000+ (Eligible for Parents)">AED 20,000+ (Eligible for Parents)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1">Additional Notes</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your visa status or any specific urgency..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? <span>Reviewing with Typist...</span> : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Family Visa Request</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#222222]">Request Received!</h3>
                <p className="text-xs text-[#555555] max-w-xs mx-auto">
                  Thank you, {formData.sponsorName}. Our senior legal typing desk in Business Bay is reviewing your family case. We will call you within 15 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-bold text-neutral-700 hover:bg-neutral-200"
                >
                  Submit Another
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

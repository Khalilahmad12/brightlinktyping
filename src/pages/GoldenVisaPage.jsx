import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  FileCheck2,
  Send
} from 'lucide-react';
import axios from 'axios';

export const GoldenVisaPage = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Real Estate Investor (Property AED 2M+)',
    currentStatus: 'UAE Resident',
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
        service: `Golden Visa 10-Year (${formData.category})`,
        urgency: 'high',
        preferredTime: 'Immediate',
        notes: `Status: ${formData.currentStatus}. ${formData.notes}`
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello BrightLink, I would like to check my eligibility for the 10-Year UAE Golden Visa. Can you please assist me with the document audit?');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Golden Visa Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF6EE] via-[#FCFAF5] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-[#B8864B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8864B]/10 border border-[#B8864B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                10-Year Long-Term UAE Residency
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              UAE 10-Year <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#C99958] to-[#976A36]">
                Golden Visa Services
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              Secure 10-year independent residency in Dubai without needing a national sponsor or employer. Full family sponsorship, 100% company ownership, and VIP fast-track stamping.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation('Golden Visa 10-Year')}
                className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
              >
                Check Golden Visa Eligibility
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        
        {/* Categories Section */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
              Eligible Categories for the 10-Year Visa
            </h2>
            <p className="text-sm text-[#666666]">
              Select your qualification pathway under the latest UAE immigration cabinet regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/60 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#222222]">Real Estate Investor</h3>
                <p className="text-xs text-[#666666] mt-1 mb-3">Property Owners & Off-Plan Buyers</p>
                <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-3">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Real estate value of minimum <strong>AED 2,000,000</strong></span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Mortgaged properties accepted with bank NOC</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Multiple properties can be combined</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-[#8C6230]">Timeline: 3 - 5 Days</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/60 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#222222]">Skilled Professionals</h3>
                <p className="text-xs text-[#666666] mt-1 mb-3">Executives, Managers & Specialists</p>
                <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-3">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Monthly basic salary <strong>AED 30,000+</strong></span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Attested Bachelor's degree certificate</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>MOHRE Level 1 or 2 job classification</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-[#8C6230]">Timeline: 4 - 7 Days</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/60 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#222222]">Entrepreneurs</h3>
                <p className="text-xs text-[#666666] mt-1 mb-3">Startup Founders & Partners</p>
                <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-3">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Own or partner in enterprise in the UAE</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Audited annual revenue AED 1,000,000+</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Approval from certified UAE incubator</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-[#8C6230]">Timeline: 5 - 10 Days</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/90 hover:border-[#B8864B]/60 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#222222]">Exceptional Talents</h3>
                <p className="text-xs text-[#666666] mt-1 mb-3">Doctors, Scientists, Artists & Athletes</p>
                <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-3">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Specialized healthcare & DHA licensed doctors</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Emirates Scientists Council recommendation</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>Culture & Arts ministry recognition</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-[#8C6230]">Timeline: Case Specific</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Key Benefits */}
        <section className="bg-[#FAF7F0] p-8 sm:p-12 rounded-3xl border border-[#B8864B]/20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Privileges</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">Top Golden Visa Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '100% Self-Sponsorship', desc: 'No local sponsor, employer, or national service partner required.' },
              { title: 'Stay Outside UAE Freedom', desc: 'No 6-month stay cancellation rule; travel abroad freely with active visa.' },
              { title: 'Family Sponsorship with No Limits', desc: 'Sponsor spouse and children of any age under your 10-year residency.' },
              { title: 'Sponsor Unlimited Domestic Staff', desc: 'Hire and sponsor drivers, housekeepers, and personal assistants.' },
              { title: 'Family Protection Guarantee', desc: 'In case of primary holder demise, dependents remain on residency till term ends.' },
              { title: 'Esaad Privilege Discount Card', desc: 'Access exclusive discounts on luxury hotels, airlines, schools, and medical.' }
            ].map((b, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-[#B8864B]/20 shadow-xs">
                <h4 className="text-sm font-bold text-[#222222] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                  <span>{b.title}</span>
                </h4>
                <p className="text-xs text-[#555555] mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form */}
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">VIP Assessment</span>
                <h3 className="text-2xl font-bold text-[#222222] mt-1">Get Pre-Approved for Golden Visa</h3>
                <p className="text-xs text-[#666666] mt-1">Our certified typists audit your title deeds, degrees, and salary contracts.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Alexander Vance"
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
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Golden Visa Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                >
                  <option value="Real Estate Investor (Property AED 2M+)">Real Estate Investor (Property AED 2M+)</option>
                  <option value="Skilled Professional (Salary AED 30,000+)">Skilled Professional (Salary AED 30,000+)</option>
                  <option value="Entrepreneur / Business Owner">Entrepreneur / Business Owner</option>
                  <option value="Doctor / Specialized Healthcare">Doctor / Specialized Healthcare</option>
                  <option value="Scientist / Researcher">Scientist / Researcher</option>
                  <option value="Outstanding Student / University Graduate">Outstanding Student / University Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Current Residency Status</label>
                <select
                  value={formData.currentStatus}
                  onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
                >
                  <option value="Current UAE Resident (Employment / Partner Visa)">Current UAE Resident (Employment / Partner Visa)</option>
                  <option value="Outside UAE (Tourist / International Investor)">Outside UAE (Tourist / International Investor)</option>
                  <option value="Visit Visa Holder inside UAE">Visit Visa Holder inside UAE</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#333333] mb-1">Notes / Property or Job Details</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Own 2 apartments in Downtown Dubai totaling AED 2.4M..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? <span>Analyzing Eligibility...</span> : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Golden Visa Application</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#222222]">Nomination Audit Requested!</h3>
              <p className="text-xs text-[#555555] max-w-xs mx-auto">
                Thank you, {formData.name}. Our specialized Golden Visa typist in Business Bay will contact you directly to request documentation scans.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-bold text-neutral-700 hover:bg-neutral-200"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

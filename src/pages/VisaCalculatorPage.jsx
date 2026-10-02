import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Zap,
  Building
} from 'lucide-react';

export const VisaCalculatorPage = ({ onOpenConsultation }) => {
  const [visaType, setVisaType] = useState('family-spouse');
  const [insideCountry, setInsideCountry] = useState(true);
  const [includeVipMedical, setIncludeVipMedical] = useState(false);
  const [includeExpressEid, setIncludeExpressEid] = useState(false);
  const [dependents, setDependents] = useState(1);

  const calculateEstimate = () => {
    let govtFee = 0;
    let typingFee = 350;
    let medicalFee = 320;
    let eidFee = 370;
    let statusChangeFee = 0;
    let processingDays = '3 - 5 Working Days';

    switch (visaType) {
      case 'family-spouse':
        govtFee = 1150 * dependents;
        typingFee = 450 * dependents;
        medicalFee = (includeVipMedical ? 750 : 320) * dependents;
        eidFee = (includeExpressEid ? 520 : 370) * dependents;
        statusChangeFee = insideCountry ? 650 * dependents : 0;
        processingDays = '3 - 5 Days';
        break;

      case 'family-child':
        govtFee = 950 * dependents;
        typingFee = 350 * dependents;
        medicalFee = 0; // children under 18 no medical
        eidFee = 270 * dependents;
        statusChangeFee = insideCountry ? 650 * dependents : 0;
        processingDays = '2 - 4 Days';
        break;

      case 'family-parents':
        govtFee = 2800 * dependents; // includes deposit
        typingFee = 550 * dependents;
        medicalFee = (includeVipMedical ? 750 : 320) * dependents;
        eidFee = 470 * dependents;
        statusChangeFee = insideCountry ? 650 * dependents : 0;
        processingDays = '5 - 7 Days';
        break;

      case 'golden-visa':
        govtFee = 3850;
        typingFee = 950;
        medicalFee = includeVipMedical ? 750 : 320;
        eidFee = 1070; // 10 years Emirates ID
        statusChangeFee = insideCountry ? 650 : 0;
        processingDays = '3 - 7 Days';
        break;

      case 'residence-employment':
        govtFee = 1850;
        typingFee = 450;
        medicalFee = includeVipMedical ? 750 : 320;
        eidFee = 370;
        statusChangeFee = insideCountry ? 650 : 0;
        processingDays = '4 - 6 Days';
        break;

      case 'tourist-30':
        govtFee = 350 * dependents;
        typingFee = 150 * dependents;
        medicalFee = 0;
        eidFee = 0;
        statusChangeFee = 0;
        processingDays = '24 - 48 Hours';
        break;

      case 'tourist-60':
        govtFee = 650 * dependents;
        typingFee = 200 * dependents;
        medicalFee = 0;
        eidFee = 0;
        statusChangeFee = 0;
        processingDays = '24 - 48 Hours';
        break;

      case 'renewal-residence':
        govtFee = 1250 * dependents;
        typingFee = 350 * dependents;
        medicalFee = (includeVipMedical ? 750 : 320) * dependents;
        eidFee = 370 * dependents;
        statusChangeFee = 0;
        processingDays = '2 - 3 Days';
        break;

      default:
        govtFee = 1150;
    }

    const total = govtFee + typingFee + medicalFee + eidFee + statusChangeFee;
    return {
      govtFee,
      typingFee,
      medicalFee,
      eidFee,
      statusChangeFee,
      total,
      processingDays
    };
  };

  const estimate = calculateEstimate();

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello BrightLink, I calculated my visa fees online:\nType: ${visaType}\nDependents: ${dependents}\nInside Country: ${insideCountry ? 'Yes' : 'No'}\nEstimated Total: AED ${estimate.total.toLocaleString()}\nCan you please confirm this quotation and initiate typing?`
    );
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
              <Calculator className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                Instant UAE Government Fee Simulator
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              UAE Visa Fee & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
                Timeline Calculator
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              Calculate official GDRFA, ICP, Medical Fitness, and Emirates ID fee estimates upfront. Zero hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#FCFAF8] p-6 sm:p-8 rounded-3xl border border-neutral-200/90 space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#222222] mb-3">
                1. Select Visa Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'family-spouse', label: 'Family Visa (Spouse)', desc: '2-Year Residence' },
                  { id: 'family-child', label: 'Family Visa (Children)', desc: 'Under 18 / 25 yrs' },
                  { id: 'family-parents', label: 'Parents Sponsorship', desc: '1-Year Renewable' },
                  { id: 'golden-visa', label: 'Golden Visa (10-Year)', desc: 'Investor / Executive' },
                  { id: 'residence-employment', label: 'Employment Residence', desc: 'Mainland / Freezone' },
                  { id: 'renewal-residence', label: 'Visa Renewal & EID', desc: 'Inside Country' },
                  { id: 'tourist-30', label: '30-Day Express Tourist', desc: 'Single Entry' },
                  { id: 'tourist-60', label: '60-Day Express Tourist', desc: 'Extendable Entry' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setVisaType(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      visaType === item.id
                        ? 'border-[#B8864B] bg-white ring-2 ring-[#B8864B]/20 shadow-xs'
                        : 'border-neutral-200 bg-white/70 hover:bg-white hover:border-neutral-300'
                    }`}
                  >
                    <p className={`text-xs font-bold ${visaType === item.id ? 'text-[#B8864B]' : 'text-[#222222]'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Dependents Counter (if applicable) */}
            {!visaType.includes('golden') && !visaType.includes('residence-employment') && (
              <div>
                <label className="block text-sm font-bold text-[#222222] mb-2">
                  2. Number of Applicants / Dependents
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setDependents(num)}
                      className={`w-11 h-11 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        dependents === num
                          ? 'bg-[#B8864B] text-white shadow-sm'
                          : 'bg-white border border-neutral-200 text-[#444444] hover:bg-neutral-50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* In-Country or Outside */}
            <div>
              <label className="block text-sm font-bold text-[#222222] mb-2">
                3. Current Location of Applicants
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setInsideCountry(true)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    insideCountry
                      ? 'border-[#B8864B] bg-white ring-2 ring-[#B8864B]/20 shadow-xs'
                      : 'border-neutral-200 bg-white/70'
                  }`}
                >
                  <p className="text-xs font-bold text-[#222222]">Inside UAE</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Includes status change typing</p>
                </button>

                <button
                  onClick={() => setInsideCountry(false)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    !insideCountry
                      ? 'border-[#B8864B] bg-white ring-2 ring-[#B8864B]/20 shadow-xs'
                      : 'border-neutral-200 bg-white/70'
                  }`}
                >
                  <p className="text-xs font-bold text-[#222222]">Outside UAE</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Entry permit issued for travel</p>
                </button>
              </div>
            </div>

            {/* Express Add-ons */}
            {!visaType.includes('tourist') && (
              <div className="pt-2 space-y-3">
                <label className="block text-sm font-bold text-[#222222]">
                  4. Optional VIP Express Add-ons
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-neutral-200 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeVipMedical}
                      onChange={(e) => setIncludeVipMedical(e.target.checked)}
                      className="w-4 h-4 text-[#B8864B] rounded border-neutral-300 focus:ring-[#B8864B]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#222222] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#B8864B]" />
                        <span>VIP Smart Salem 4-Hour Express Medical Test</span>
                      </p>
                      <p className="text-[11px] text-neutral-500">Results within 4 hours instead of 48 hours</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8C6230]">+AED 430</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-neutral-200 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeExpressEid}
                      onChange={(e) => setIncludeExpressEid(e.target.checked)}
                      className="w-4 h-4 text-[#B8864B] rounded border-neutral-300 focus:ring-[#B8864B]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#222222] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                        <span>Fast-Track Emirates ID Urgent Processing</span>
                      </p>
                      <p className="text-[11px] text-neutral-500">Card printed & couriered within 24 hours</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8C6230]">+AED 150</span>
                </label>
              </div>
            )}
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#B8864B]/30 shadow-xl space-y-6 sticky top-28">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8864B]">Estimated Breakdown</span>
              <h3 className="text-xl font-bold text-[#222222] mt-0.5">Government & Typing Cost</h3>
              <p className="text-xs text-neutral-500 mt-1">Estimations based on official 2026 Dubai immigration rate schedules.</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-neutral-100">
                <span className="text-[#555555]">Government Immigration Fee</span>
                <span className="font-bold text-[#222222] tabular-nums">AED {estimate.govtFee.toLocaleString()}</span>
              </div>

              {estimate.statusChangeFee > 0 && (
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-[#555555]">In-Country Status Change Typing</span>
                  <span className="font-bold text-[#222222] tabular-nums">AED {estimate.statusChangeFee.toLocaleString()}</span>
                </div>
              )}

              {estimate.medicalFee > 0 && (
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-[#555555]">DHA Medical Fitness Examination</span>
                  <span className="font-bold text-[#222222] tabular-nums">AED {estimate.medicalFee.toLocaleString()}</span>
                </div>
              )}

              {estimate.eidFee > 0 && (
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-[#555555]">Federal Emirates ID Registration</span>
                  <span className="font-bold text-[#222222] tabular-nums">AED {estimate.eidFee.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between py-1.5 border-b border-neutral-100">
                <span className="text-[#555555]">Authorized Legal Typing & Auditing</span>
                <span className="font-bold text-[#222222] tabular-nums">AED {estimate.typingFee.toLocaleString()}</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-neutral-500">Total Estimated Cost</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#B8864B] tabular-nums">
                    AED {estimate.total.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-neutral-400">Processing Time</span>
                  <p className="text-xs font-bold text-[#222222] flex items-center gap-1 justify-end">
                    <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                    <span>{estimate.processingDays}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => onOpenConsultation(`Visa Quote: ${visaType} (AED ${estimate.total})`)}
                className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book This Visa Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Confirm Quote on WhatsApp</span>
              </button>
            </div>

            <div className="p-3 bg-[#FCFAF8] rounded-xl border border-neutral-200 text-[11px] text-neutral-500 leading-relaxed">
              Fees are subject to specific passport nationality checks, applicant age, and prevailing ministry exchange rates.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

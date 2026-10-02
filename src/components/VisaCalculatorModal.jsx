import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Sparkles } from 'lucide-react';

export const VisaCalculatorModal = ({
  isOpen,
  onClose,
  onSelectServiceConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState('family');
  
  // Family calculator state
  const [dependentsCount, setDependentsCount] = useState(2);
  const [includeVipMedical, setIncludeVipMedical] = useState(true);
  const [isInsideCountry, setIsInsideCountry] = useState(true);

  // Golden visa state
  const [goldenCategory, setGoldenCategory] = useState('property');
  const [goldenFamilyMembers, setGoldenFamilyMembers] = useState(1);

  // Tourist visa state
  const [touristDays, setTouristDays] = useState('30');
  const [touristEntries, setTouristEntries] = useState('single');
  const [isExpressTourist, setIsExpressTourist] = useState(false);

  // Passport state
  const [passportType, setPassportType] = useState('standard');
  const [passportPages, setPassportPages] = useState('36');

  if (!isOpen) return null;

  // Calculation logic
  const calculateTotals = () => {
    let govtFees = 0;
    let typingAndService = 0;
    let medicalAndBiometrics = 0;

    if (activeCategory === 'family') {
      const basePerPersonGovt = isInsideCountry ? 1150 : 850;
      const basePerPersonTyping = 450;
      const medicalCost = includeVipMedical ? 750 : 350;
      
      govtFees = basePerPersonGovt * dependentsCount;
      typingAndService = basePerPersonTyping * dependentsCount;
      medicalAndBiometrics = medicalCost * Math.min(dependentsCount, 2) + (170 * dependentsCount);
    } else if (activeCategory === 'golden') {
      govtFees = goldenCategory === 'property' ? 2850 : 2550;
      typingAndService = 1200;
      medicalAndBiometrics = 850 + (goldenFamilyMembers * 1450);
    } else if (activeCategory === 'tourist') {
      const base = touristDays === '30' ? (touristEntries === 'single' ? 380 : 750) : (touristEntries === 'single' ? 690 : 1150);
      govtFees = base;
      typingAndService = isExpressTourist ? 180 : 90;
      medicalAndBiometrics = 0;
    } else if (activeCategory === 'renewal') {
      govtFees = 850;
      typingAndService = 350;
      medicalAndBiometrics = 450 + 270;
    } else if (activeCategory === 'passport') {
      govtFees = passportType === 'tatkal' ? 620 : (passportType === 'damaged' ? 550 : 310);
      if (passportPages === '60') govtFees += 95;
      typingAndService = 120;
      medicalAndBiometrics = 0;
    }

    const total = govtFees + typingAndService + medicalAndBiometrics;
    return { govtFees, typingAndService, medicalAndBiometrics, total };
  };

  const { govtFees, typingAndService, medicalAndBiometrics, total } = calculateTotals();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#B8864B]/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#222222]">UAE Visa Fee & Processing Estimator</h2>
              <p className="text-xs text-[#666666]">Instant estimate of official GDRFA/ICP government fees and typing charges</p>
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

        {/* Tab Navigation */}
        <div className="px-6 pt-4">
          <div className="flex items-center gap-1.5 p-1 bg-[#F5F1EB] rounded-xl overflow-x-auto text-xs font-semibold">
            {[
              { id: 'family', label: 'Family Visa' },
              { id: 'golden', label: '10-Yr Golden Visa' },
              { id: 'tourist', label: 'Tourist Visa' },
              { id: 'renewal', label: 'Visa Renewal' },
              { id: 'passport', label: 'Passport Services' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#B8864B] shadow-sm font-bold'
                    : 'text-[#555555] hover:text-[#222222]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Body and Result */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Options Side */}
          <div className="md:col-span-7 space-y-4">
            {activeCategory === 'family' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    Number of Dependents (Spouse / Children)
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setDependentsCount(num)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          dependentsCount === num
                            ? 'bg-[#B8864B] text-white border-[#B8864B]'
                            : 'bg-neutral-50 text-[#444444] border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {num} {num === 1 ? 'Person' : 'People'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 cursor-pointer">
                    <span className="text-xs font-medium text-[#222222]">Inside UAE Status Change Required</span>
                    <input
                      type="checkbox"
                      checked={isInsideCountry}
                      onChange={(e) => setIsInsideCountry(e.target.checked)}
                      className="w-4 h-4 text-[#B8864B] rounded accent-[#B8864B]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 cursor-pointer">
                    <div className="text-xs">
                      <p className="font-medium text-[#222222]">Include VIP Express DHA Medical Typing</p>
                      <p className="text-[11px] text-[#666666]">Results delivered within 4 hours</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={includeVipMedical}
                      onChange={(e) => setIncludeVipMedical(e.target.checked)}
                      className="w-4 h-4 text-[#B8864B] rounded accent-[#B8864B]"
                    />
                  </label>
                </div>
              </>
            )}

            {activeCategory === 'golden' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    Golden Visa Category
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'property', title: 'Real Estate Investor', desc: 'Property value ≥ AED 2 Million' },
                      { id: 'executive', title: 'Specialized Professional / Executive', desc: 'Attested degree & salary ≥ AED 30,000/mo' },
                      { id: 'entrepreneur', title: 'Entrepreneur / Business Owner', desc: 'SME project valuation / capital requirement' }
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setGoldenCategory(item.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          goldenCategory === item.id
                            ? 'border-[#B8864B] bg-[#FAF6F0]'
                            : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100'
                        }`}
                      >
                        <p className="font-bold text-[#222222]">{item.title}</p>
                        <p className="text-[#666666] text-[11px] mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    Family Members Included in Golden Visa
                  </label>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGoldenFamilyMembers(num)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          goldenFamilyMembers === num
                            ? 'bg-[#B8864B] text-white border-[#B8864B]'
                            : 'bg-neutral-50 text-[#444444] border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {num === 0 ? 'Primary Only' : `+${num}`}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeCategory === 'tourist' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">Duration</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['30', '60'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setTouristDays(d)}
                        className={`py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          touristDays === d
                            ? 'bg-[#B8864B] text-white border-[#B8864B]'
                            : 'bg-neutral-50 text-[#444444] border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {d} Days Visit Visa
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">Entry Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'single', label: 'Single Entry' },
                      { id: 'multiple', label: 'Multiple Entry' }
                    ].map((entry) => (
                      <button
                        key={entry.id}
                        type="button"
                        onClick={() => setTouristEntries(entry.id)}
                        className={`py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          touristEntries === entry.id
                            ? 'bg-[#B8864B] text-white border-[#B8864B]'
                            : 'bg-neutral-50 text-[#444444] border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {entry.label}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 cursor-pointer">
                  <div className="text-xs">
                    <p className="font-medium text-[#222222]">24-Hour VIP Fast-Track Clearance</p>
                    <p className="text-[11px] text-[#666666]">Priority immigration queue processing</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={isExpressTourist}
                    onChange={(e) => setIsExpressTourist(e.target.checked)}
                    className="w-4 h-4 text-[#B8864B] rounded accent-[#B8864B]"
                  />
                </label>
              </>
            )}

            {activeCategory === 'renewal' && (
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-neutral-200 text-xs space-y-2 text-[#444444]">
                <p className="font-semibold text-[#222222]">Standard 2-Year Residency Renewal includes:</p>
                <ul className="space-y-1 pl-1">
                  <li>• GDRFA Residency Sticker & Digital Stamping</li>
                  <li>• Medical Fitness typing with DHA booking</li>
                  <li>• Federal ICP 2-Year Emirates ID issuance</li>
                  <li>• Fine verification and status validation</li>
                </ul>
              </div>
            )}

            {activeCategory === 'passport' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">Service Speed & Nature</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standard', label: 'Normal Renewal' },
                      { id: 'tatkal', label: 'Tatkal Express' },
                      { id: 'damaged', label: 'Damaged / Lost' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPassportType(p.id)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          passportType === p.id
                            ? 'bg-[#B8864B] text-white border-[#B8864B]'
                            : 'bg-neutral-50 text-[#444444] border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">Passport Booklet Pages</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: '36', label: '36 Pages (Standard)' },
                      { id: '60', label: '60 Pages (Jumbo Booklet)' }
                    ].map((pg) => (
                      <button
                        key={pg.id}
                        type="button"
                        onClick={() => setPassportPages(pg.id)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          passportPages === pg.id
                            ? 'bg-[#B8864B] text-white border-[#B8864B]'
                            : 'bg-neutral-50 text-[#444444] border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {pg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-xs text-amber-900">
              <Sparkles className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>Government fees are subject to official ministerial tariff schedules. All typing includes compliance check.</span>
            </div>
          </div>

          {/* Pricing Summary Card */}
          <div className="md:col-span-5 bg-[#F5F1EB] p-5 rounded-2xl border border-[#B8864B]/20 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8864B]">
                Estimated Quote
              </span>
              <h3 className="text-lg font-bold text-[#222222] mt-0.5">Summary of Fees</h3>

              <div className="mt-4 space-y-2.5 text-xs text-[#555555]">
                <div className="flex justify-between items-center py-1 border-b border-[#B8864B]/10">
                  <span>Official Government Fees</span>
                  <span className="font-semibold text-[#222222] tabular-nums">AED {govtFees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#B8864B]/10">
                  <span>Medical & Biometrics / ID</span>
                  <span className="font-semibold text-[#222222] tabular-nums">AED {medicalAndBiometrics.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#B8864B]/10">
                  <span>BrightLink Typing & Documenting</span>
                  <span className="font-semibold text-[#222222] tabular-nums">AED {typingAndService.toLocaleString()}</span>
                </div>

                <div className="pt-3 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-[#666666]">Estimated Total</span>
                    <p className="text-2xl font-bold text-[#B8864B] tabular-nums">
                      AED {total.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-[11px] text-neutral-400">incl. 5% VAT</span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onSelectServiceConsultation(
                    activeCategory === 'golden' ? 'Golden Visa' :
                    activeCategory === 'family' ? 'Family Visa' :
                    activeCategory === 'tourist' ? 'Tourist Visa' :
                    activeCategory === 'renewal' ? 'Visa Renewal' : 'Passport Services'
                  );
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-xs shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Proceed with This Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  const text = encodeURIComponent(`Hi BrightLink, I calculated an estimate of AED ${total.toLocaleString()} for ${activeCategory} service. Could you please review and confirm?`);
                  window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
                }}
                className="w-full text-center text-xs font-semibold text-[#25D366] hover:underline py-1 cursor-pointer"
              >
                Chat on WhatsApp about this quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

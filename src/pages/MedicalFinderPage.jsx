import React, { useState } from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  Zap, 
  Phone, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';

export const MedicalFinderPage = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeed, setSelectedSpeed] = useState('all');

  const medicalCenters = [
    {
      id: 'smart-salem-citywalk',
      name: 'Smart Salem VIP Medical Fitness Center',
      location: 'City Walk, Al Safa, Dubai',
      zone: 'Downtown & Jumeirah',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Thu: 7:00 AM – 9:30 PM | Fri: 7:30 AM – 8:00 PM | Sun: 9:00 AM – 6:00 PM',
      services: ['Autonomous AI Blood Sampling', 'Rapid Chest X-Ray', 'VIP Hospitality Lounge', 'Emirates ID Biometrics Inside'],
      phone: '+971 4 290 8989',
      isPopular: true
    },
    {
      id: 'smart-salem-difc',
      name: 'Smart Salem Index Tower',
      location: 'Index Tower, DIFC, Dubai',
      zone: 'DIFC & Business Bay',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Fri: 8:00 AM – 8:00 PM',
      services: ['Paperless Fast-Track', 'Exclusive Executive Suites', 'Same-Day DHA Certificate Issuance'],
      phone: '+971 4 290 8989',
      isPopular: true
    },
    {
      id: 'smart-salem-knowledge',
      name: 'Smart Salem Knowledge Park',
      location: 'Dubai Knowledge Park, Block 19',
      zone: 'Marina & JLT',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Thu: 8:00 AM – 8:00 PM | Fri: 8:00 AM – 12:00 PM',
      services: ['Rapid DHA Medical Certification', 'Digital Health Record Integration', 'Zero Wait Time Escort'],
      phone: '+971 4 290 8989',
      isPopular: false
    },
    {
      id: 'muhaisnah-center',
      name: 'Al Muhaisnah Medical Fitness Center',
      location: 'Al Muhaisnah 2, Dubai',
      zone: 'Deira & North Dubai',
      speed: '24/7 Regular & Express (24h)',
      speedTag: 'express',
      hours: 'Open 24 Hours / 7 Days a Week',
      services: ['Round-the-Clock Emergency Typing', 'Female Dedicated Wings', 'High-Volume Corporate Processing'],
      phone: '+971 4 502 2400',
      isPopular: false
    },
    {
      id: 'al-yulayis',
      name: 'Al Yulayis Medical Fitness Center',
      location: 'Dubai Investment Park (DIP) 2',
      zone: 'DIP & Dubai South',
      speed: 'Express 24h & Regular 48h',
      speedTag: 'express',
      hours: 'Mon – Thu: 7:00 AM – 8:00 PM | Fri: 7:30 AM – 12:00 PM',
      services: ['Industrial & Freezone Staff Exams', 'Large Fleet Testing Facility', 'Convenient Highway Parking'],
      phone: '+971 4 502 2400',
      isPopular: false
    },
    {
      id: 'al-baraha',
      name: 'Al Baraha Smart Medical Center',
      location: 'Al Baraha, Deira, Dubai',
      zone: 'Deira & Old Dubai',
      speed: 'Regular (24 - 48h)',
      speedTag: 'regular',
      hours: 'Mon – Thu: 7:30 AM – 3:30 PM | Fri: 7:30 AM – 12:00 PM',
      services: ['DHA Government Staff Dedicated', 'Vaccination Services', 'Senior Citizen Express Windows'],
      phone: '+971 4 502 2400',
      isPopular: false
    }
  ];

  const filteredCenters = medicalCenters.filter((center) => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpeed = selectedSpeed === 'all' || center.speedTag === selectedSpeed;
    return matchesSearch && matchesSpeed;
  });

  const handleWhatsAppBooking = (centerName) => {
    const text = encodeURIComponent(`Hello BrightLink, I would like to book a VIP Medical Fitness appointment at ${centerName}. Can you please assist with typing and slot booking?`);
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
              <Stethoscope className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                DHA & MOHAP Certified Medical Centers
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              Dubai Medical Fitness <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
                Center Directory
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              Find authorized Dubai Health Authority (DHA) medical fitness screening centers. Book VIP 30-minute AI testing or 24/7 express centers across Business Bay, Downtown, DIFC, and Marina.
            </p>
          </div>
        </div>
      </section>

      {/* Directory & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        
        {/* Search & Filter Bar */}
        <div className="bg-[#FCFAF8] p-4 sm:p-6 rounded-2xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by center name, area or zone..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Centers' },
              { id: 'vip', label: 'VIP Smart Salem (30m - 4h)' },
              { id: 'express', label: 'Express (24h)' },
              { id: 'regular', label: 'Standard (48h)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSpeed(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedSpeed === tab.id
                    ? 'bg-[#B8864B] text-white shadow-xs'
                    : 'bg-white border border-neutral-200 text-[#555555] hover:text-[#222222]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-[#B8864B]/50 hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1EB] text-[10px] font-bold text-[#8C6230] uppercase">
                    {center.zone}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#222222]">{center.name}</h3>

                <div className="space-y-1.5 text-xs text-[#555555]">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                    <span>{center.location}</span>
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold text-[#8C6230]">
                    <Zap className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                    <span>Turnaround: {center.speed}</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-neutral-400">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{center.hours}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 space-y-1">
                  {center.services.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3 h-3 text-[#B8864B] shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-100 flex gap-2">
                <button
                  onClick={() => onOpenConsultation(`Medical Appointment: ${center.name}`)}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-colors cursor-pointer text-center"
                >
                  Book Slot
                </button>
                <button
                  onClick={() => handleWhatsAppBooking(center.name)}
                  className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Medical Test Guide */}
        <section className="bg-[#FAF7F0] p-8 sm:p-10 rounded-3xl border border-[#B8864B]/20">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Mandatory Health Screening</span>
            <h3 className="text-xl font-bold text-[#222222] mt-1">What to Bring for Your Medical Test</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#B8864B] text-sm block mb-1">01. Passport Copy</span>
              <p className="text-[#555555]">Original Passport or clear color passport copy with valid entry permit or visa copy.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#B8864B] text-sm block mb-1">02. Medical Application</span>
              <p className="text-[#555555]">Typed official DHA application form with government barcode and receipt.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#B8864B] text-sm block mb-1">03. Digital Photo</span>
              <p className="text-[#555555]">Two passport-sized photographs on a clean white background.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <span className="font-bold text-[#B8864B] text-sm block mb-1">04. Fasting Rules</span>
              <p className="text-[#555555]">Fasting is NOT required for regular visa medical fitness tests in Dubai.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

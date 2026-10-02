// BrightLink UAE Services Dataset - All 12 Government & Visa Services

export const SERVICES_DATA = [
  {
    id: 'golden-visa',
    title: 'Golden Visa',
    shortDesc: 'Prestigious 10-year residency for property owners (≥ AED 2M), public investors, executives, and specialized talents.',
    iconName: 'Award',
    image: '/src/assets/images/service_golden_visa_1790842391749.jpg',
    category: 'Residency',
    popular: true,
    processingTime: '3 - 7 Working Days',
    validity: '10 Years (Self-Sponsored)',
    overview: 'The UAE Golden Visa provides self-sponsored long-term residency without requiring a local employer or national sponsor. BrightLink assists with nominations, real estate deed clearance, and end-to-end processing across all Emirates.',
    eligibility: [
      'Real Estate Investors (Property value ≥ AED 2 Million, mortgages permitted with NOC)',
      'Public Investment & Business Owners (Capital ≥ AED 2 Million)',
      'Exceptional Talents & Specialized Professionals (Doctors, Engineers, Senior Executives earning ≥ AED 30,000/mo)',
      'High-performing university graduates and school toppers'
    ],
    documentsRequired: [
      'Valid Passport copy (min 6 months validity)',
      'Dubai Land Department (DLD) Title Deed / Real Estate Valuation',
      'Attested Degree Equivalency Certificate',
      'Bank Statements (last 6 months with official stamp)',
      'High-resolution biometric passport photographs'
    ],
    features: [
      '100% foreign business ownership privileges',
      'Sponsor family members and unlimited domestic staff',
      'No stay restriction: remain outside UAE for > 6 months without visa cancellation',
      'VIP medical and priority biometric escort service'
    ],
    startingFee: 'AED 3,850'
  },
  {
    id: 'family-visa',
    title: 'Family Visa',
    shortDesc: 'Turnkey sponsorship for spouse, children, and parents with VIP medical fitness and Emirates ID biometrics typing.',
    iconName: 'Users',
    image: '/src/assets/images/about_visa_consultant_1790842347102.jpg',
    category: 'Family',
    popular: true,
    processingTime: '2 - 5 Working Days',
    validity: '1 - 3 Years (Matches Sponsor)',
    overview: 'Bring your family to live with you in Dubai and the UAE. BrightLink handles the entire sponsorship process from entry permit issuance to VIP medical fitness typing, biometrics, and Emirates ID delivery.',
    eligibility: [
      'Employed residents with minimum monthly salary of AED 4,000 or AED 3,000 + accommodation',
      'Valid UAE Residence Visa & Emirates ID of sponsor',
      'Attested marriage certificate for spouse sponsorship',
      'Attested birth certificates for children sponsorship'
    ],
    documentsRequired: [
      'Sponsor Passport, Visa & Emirates ID copies',
      'Original Attested Marriage Certificate (MOFA attested)',
      'Original Attested Birth Certificate(s) of children',
      'Salary Certificate / Employment Contract / Trade License',
      'Ejari Tenancy Contract & Electricity (DEWA) Bill',
      'Sponsor 3 months bank statement with IBAN'
    ],
    features: [
      'Spouse and dependent daughters sponsorship (any age if unmarried)',
      'Male children sponsorship up to age 25',
      'Parents sponsorship assistance with humanitarian clearance',
      'Express VIP Medical fitness test booking'
    ],
    startingFee: 'AED 1,650'
  },
  {
    id: 'business-visa',
    title: 'Business Visa',
    shortDesc: 'Investor and partner visas, Green Visas, and company formation support for mainland and freezone enterprises.',
    iconName: 'Building2',
    image: '/src/assets/images/why_experienced_team_1790842362837.jpg',
    category: 'Corporate',
    processingTime: '3 - 5 Working Days',
    validity: '2 - 5 Years',
    overview: 'Designed for entrepreneurs, business owners, and corporate executives establishing a commercial presence in Dubai. We coordinate with DED, Freezone authorities, and GDRFA for swift partner visa issuance.',
    eligibility: [
      'Shareholders & Partners in UAE LLC or Freezone companies',
      'Commercial Trade License holders in Dubai, Abu Dhabi & Sharjah',
      'Freelancers & Self-employed individuals under UAE Green Visa criteria'
    ],
    documentsRequired: [
      'Trade License copy and Memorandum of Association (MOA)',
      'Partners list / Share certificate',
      'Valid Passport copy and immigration establishment card',
      'Recent high-resolution studio photographs'
    ],
    features: [
      'Right to live, invest, and conduct business across the UAE',
      'Corporate bank account opening guidance',
      'Sponsorship rights for immediate family members',
      'Fast-track VIP establishment card clearance'
    ],
    startingFee: 'AED 2,450'
  },
  {
    id: 'residence-visa',
    title: 'Residence Visa',
    shortDesc: 'Reliable employment, freelance, and private residence visa application and document management.',
    iconName: 'Home',
    image: '/src/assets/images/hero_dubai_skyline_1790842330436.jpg',
    category: 'Residency',
    processingTime: '3 - 5 Working Days',
    validity: '2 Years (Renewable)',
    overview: 'Complete residency processing for corporate employees, remote workers, and specialized domestic personnel. We ensure flawless typing adhering to MOHRE and ICP regulations.',
    eligibility: [
      'Individuals with valid UAE employment offer or private residence eligibility',
      'Remote workers earning minimum USD $3,500/month for UAE Digital Nomad Visa',
      'Valid passport with at least 6 months validity'
    ],
    documentsRequired: [
      'Signed MOHRE Employment Offer Letter & Contract',
      'Passport copy & current visa status (Tourist/Visit/Cancelled)',
      'Attested educational qualification (for high-skill designations)',
      'Passport size photographs on white background'
    ],
    features: [
      'Quota approval & MOHRE electronic work permit',
      'In-country change of status without travel',
      'VIP Preventive Medicine appointment scheduling',
      'Guaranteed courier delivery of physical Emirates ID'
    ],
    startingFee: 'AED 1,850'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    shortDesc: 'Quick approval 30-day and 60-day single and multiple entry UAE visit visas for tourists, families, and business visitors.',
    iconName: 'Plane',
    image: '/src/assets/images/why_fast_process_1790842377870.jpg',
    category: 'Travel',
    processingTime: '24 - 48 Hours',
    validity: '30 / 60 Days (Extendable)',
    overview: 'Experience the magic of Dubai and the UAE with seamless entry permits. BrightLink offers same-day submission and express 24-hour turnaround for individuals and group travelers.',
    eligibility: [
      'Tourists, visitors, and relatives from all eligible international destinations',
      'No local sponsor required for standard visitor visa categories'
    ],
    documentsRequired: [
      'Color copy of clear passport bio page (valid min 6 months)',
      'Recent passport-sized photograph with white background',
      'Return flight ticket reservation (optional for submission)',
      'National ID copy (where applicable)'
    ],
    features: [
      '30-Day Single Entry & 60-Day Multiple Entry options',
      'Instant extension available inside the country without airport run',
      'Comprehensive mandatory medical travel insurance included',
      'High approval rate with real-time status tracking'
    ],
    startingFee: 'AED 390'
  },
  {
    id: 'medical-visa',
    title: 'Medical Visa & VIP Fitness',
    shortDesc: 'VIP express typing for mandatory UAE medical fitness tests (DHA/EHS) and specialized medical treatment entry permits.',
    iconName: 'Stethoscope',
    image: '/src/assets/images/about_visa_consultant_1790842347102.jpg',
    category: 'Health',
    processingTime: 'Same Day / 24 Hours',
    validity: 'Single / Multiple Entry or Annual Fitness',
    overview: 'Fast-track your residency medical fitness examination with zero queues. BrightLink arranges VIP and 4-hour express medical appointments across Dubai Health Authority (DHA) and ICP centers.',
    eligibility: [
      'Patients seeking healthcare treatment in certified UAE hospitals',
      'All newly applied or renewing UAE residence visa holders requiring medical tests'
    ],
    documentsRequired: [
      'Original Passport and Visa Application copy',
      'Certified Medical Report from recognized hospital (for medical treatment visa)',
      'Proof of financial solvency or hospital admission confirmation'
    ],
    features: [
      '4-Hour VIP Express Medical Fitness Typing',
      'DHA & EHS appointment booking with lounge access',
      'Blood test and chest X-ray tracking and digital certificate delivery',
      'Patient and medical escort companion visa processing'
    ],
    startingFee: 'AED 450'
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    shortDesc: 'Expert guidance for legal visa status correction, absconding clearance, and fines reduction before immigration authorities.',
    iconName: 'HelpCircle',
    image: '/src/assets/images/why_experienced_team_1790842362837.jpg',
    category: 'Legal',
    processingTime: '1 - 3 Working Days',
    validity: 'Immediate Relief',
    overview: 'Resolve complex immigration complications with professional typing representation. We represent clients before GDRFA legal committees to secure fine waivers and normalize status.',
    eligibility: [
      'Individuals with pending immigration issues or overstay penalties',
      'Applicants seeking advice on visa rejection appeals and resubmissions'
    ],
    documentsRequired: [
      'Passport copy and visa cancellation copy',
      'Fine breakdown receipt from immigration system',
      'Humanitarian or medical justification letters (if applicable)'
    ],
    features: [
      'Official immigration fine reduction petition drafting',
      'Absconding case resolution and legal clearance',
      'Status amendment without country exit',
      'One-on-one consultation with senior legal advisor'
    ],
    startingFee: 'AED 650'
  },
  {
    id: 'passport-services',
    title: 'Passport Services',
    shortDesc: 'Comprehensive consulate services for Indian (BLS), Pakistani, Philippine, UK, and global passport renewal, lost passport & Tatkal.',
    iconName: 'FileCheck',
    image: '/src/assets/images/service_golden_visa_1790842391749.jpg',
    category: 'Consular',
    popular: true,
    processingTime: '3 - 10 Working Days',
    validity: '5 - 10 Years',
    overview: 'Specialized assistance for consulate applications across Dubai and Northern Emirates. Authorized typing for BLS (India), VFS Global, Pakistan Consulate, and international diplomatic missions.',
    eligibility: [
      'Expatriate residents in UAE needing passport renewal, address change, or child passport issuance',
      'Lost, mutilated, or damaged passport recovery with police clearances'
    ],
    documentsRequired: [
      'Current original passport & copies of first, last, and visa pages',
      'UAE residence visa and original Emirates ID',
      'Consulate application form typed by BrightLink authorized agents',
      'Police lost report (in case of lost passports)'
    ],
    features: [
      'Fast-track BLS Indian Passport Tatkal typing & appointment',
      'Newborn baby birth registration & first passport processing',
      'Name addition / change, marital status endorsement & address updates',
      'Consulate document attestation & apostille service'
    ],
    startingFee: 'AED 290'
  },
  {
    id: 'visa-renewal',
    title: 'Visa Renewal',
    shortDesc: 'Stress-free renewal of residence visas, Emirates ID, work permits, and legal overstay fine reduction solutions.',
    iconName: 'RefreshCw',
    image: '/src/assets/images/why_fast_process_1790842377870.jpg',
    category: 'Renewal',
    processingTime: '2 - 3 Working Days',
    validity: '1 - 3 Years',
    overview: 'Avoid penalties and legal interruptions. BrightLink handles your complete visa renewal cycle up to 6 months before expiry, including medical fitness, health insurance updates, and Emirates ID card replacement.',
    eligibility: [
      'All active UAE residence visa holders approaching expiry or within the grace period',
      'Individuals seeking renewal for family members or company employees'
    ],
    documentsRequired: [
      'Original Passport and Existing Emirates ID card',
      'Active Health Insurance card / Certificate',
      'Valid Ejari certificate / Tenancy contract',
      'Sponsor / Company Trade license & Salary certificate'
    ],
    features: [
      'Renewal initiated while remaining legally inside the UAE',
      'Legal plea preparation for overstay fine discounts & waivers',
      'Immediate Emirates ID digital receipt with active biometrics',
      'Doorstep passport and card delivery service'
    ],
    startingFee: 'AED 1,250'
  },
  {
    id: 'document-attestation',
    title: 'Document Attestation',
    shortDesc: 'Official MOFA, Embassy, Apostille, and Ministry of Justice certified legal translation and attestation across 120+ countries.',
    iconName: 'ShieldCheck',
    image: '/src/assets/images/about_visa_consultant_1790842347102.jpg',
    category: 'Legal',
    processingTime: '3 - 5 Working Days',
    validity: 'Lifetime Validity',
    overview: 'Ensure your foreign certificates are 100% legally recognized in the UAE. We manage verification from home country notary, foreign affairs, UAE Embassy, and Ministry of Foreign Affairs (MOFA).',
    eligibility: [
      'Educational degrees, diplomas, and school transfer certificates',
      'Personal certificates: Marriage, Birth, Death, and Police Clearances',
      'Commercial documents: Power of Attorney (POA), MOA, Invoices & Board Resolutions'
    ],
    documentsRequired: [
      'Original Certificate to be attested',
      'Passport copy of document owner',
      'Authorization letter (prepared by BrightLink)'
    ],
    features: [
      'End-to-end doorstep collection and delivery worldwide',
      'Certified legal Arabic translation approved by UAE Ministry of Justice',
      'MOFA electronic stamp and QR verification code',
      'Urgent express 48-hour attestation option'
    ],
    startingFee: 'AED 350'
  },
  {
    id: 'emirates-id',
    title: 'Emirates ID Services',
    shortDesc: 'Federal ICP registration, biometrics appointment scheduling, express card replacement, and address updates.',
    iconName: 'CreditCard',
    image: '/src/assets/images/why_fast_process_1790842377870.jpg',
    category: 'Residency',
    processingTime: '24 Hours - 3 Days',
    validity: 'Synced with Visa',
    overview: 'The mandatory National Identity Card of the UAE. BrightLink handles new registrations, renewals, lost card replacements, and urgent biometrics scheduling across all Federal ICP centers.',
    eligibility: [
      'All UAE citizens, GCC nationals, and expatriate residency holders'
    ],
    documentsRequired: [
      'Original Passport and current residency entry permit / visa',
      'Old Emirates ID (for renewal / replacement cases)',
      'Digital passport size photo adhering to ICP specifications'
    ],
    features: [
      'Instant digital Emirates ID generation on ICP App',
      'VIP biometrics appointment with zero waiting',
      'Urgent replacement within 24 hours for lost or damaged cards',
      'Courier tracking and doorstep card handover'
    ],
    startingFee: 'AED 270'
  },
  {
    id: 'business-setup',
    title: 'Business Setup in UAE',
    shortDesc: 'Full corporate formation for Mainland (DED), Freezone (IFZA, Meydan, DMCC), and Offshore licenses with corporate banking.',
    iconName: 'Briefcase',
    image: '/src/assets/images/why_experienced_team_1790842362837.jpg',
    category: 'Corporate',
    popular: true,
    processingTime: '3 - 7 Working Days',
    validity: '1 Year (Annual License)',
    overview: 'Launch your dream enterprise in the world’s business hub. BrightLink provides complete commercial trade licensing, trade name reservation, initial approvals, MOA drafting, and corporate bank account introduction.',
    eligibility: [
      'Global entrepreneurs, investors, freelancers, and foreign corporations'
    ],
    documentsRequired: [
      'Passport copies of all shareholders and managers',
      'Three proposed business trade names in order of preference',
      'Selected business activities list',
      'Entry stamp or current UAE visa copy'
    ],
    features: [
      '100% foreign company ownership without local national partner',
      'Virtual office (Ejari) and physical flexi-desk lease options',
      'Corporate bank account opening coordination',
      'Investor & employee visa quota allocation'
    ],
    startingFee: 'AED 5,900'
  }
];

export const FAQ_DATA = [
  {
    question: 'What are the main requirements for the UAE 10-Year Golden Visa?',
    answer: 'The UAE Golden Visa is granted to real estate investors who own properties valued at AED 2 Million or more (including mortgaged properties with bank NOC), high-skilled professionals (Doctors, Engineers, Senior Executives) with a monthly salary of at least AED 30,000 and an attested degree, entrepreneurs with certified SME projects, and outstanding university graduates.',
    category: 'Golden Visa'
  },
  {
    question: 'What salary is required to sponsor a Family Visa in Dubai?',
    answer: 'To sponsor your spouse and children in Dubai, the primary sponsor must have a minimum monthly salary of AED 4,000, or AED 3,000 plus company-provided accommodation. You must also have a registered Ejari tenancy contract in your name.',
    category: 'Family Visa'
  },
  {
    question: 'How long does the UAE residence visa process typically take?',
    answer: 'With BrightLink express typing and VIP medical fitness, the entire process—from entry permit issuance to medical test, biometrics, and electronic residence visa stamping—is typically finalized within 3 to 5 business days.',
    category: 'Processing Time'
  },
  {
    question: 'Can BrightLink assist with Indian Passport Renewal and Tatkal service?',
    answer: 'Yes! BrightLink is a premier specialist for Indian passport services in Dubai. We handle BLS online forms, document collation, Tatkal expedited appointment booking, photo compliance, and police verification formalities for renewals, damaged passports, or newborn registrations.',
    category: 'Passport Renewal'
  },
  {
    question: 'How does VIP Medical Fitness test typing work in Dubai?',
    answer: 'Every resident over 18 requires a blood test and chest X-ray. BrightLink books VIP priority slots at DHA Salem Smart centers (e.g., City Walk, Business Bay, Al Muhaisnah). Results and medical fitness certificates are issued within 4 to 24 hours directly to the immigration system.',
    category: 'Medical Visa'
  },
  {
    question: 'What documents are required for UAE Document Attestation?',
    answer: 'For educational or personal documents (Degrees, Marriage or Birth certificates), we require the original certificate, a copy of the passport, and authorization. BrightLink coordinates home country Ministry verification, UAE Embassy stamp, and local MOFA electronic attestation.',
    category: 'Required Documents'
  },
  {
    question: 'Can I renew my UAE visa or change status without leaving the country?',
    answer: 'Yes. You can complete an inside-country "Change of Status" without exiting the UAE. BrightLink processes the status change directly through GDRFA and ICP portals, eliminating costly border runs.',
    category: 'Residence Visa'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Rajesh & Priya Sharma',
    role: 'Tech Director & Family',
    country: 'India',
    location: 'Dubai Marina',
    service: 'Golden Visa (Real Estate)',
    rating: 5,
    date: 'September 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    review: 'BrightLink handled our family Golden Visa seamlessly. From title deed verification to VIP medical, our Emirates IDs arrived in 4 days!'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Managing Partner, Apex Capital',
    country: 'United Kingdom',
    location: 'DIFC, Dubai',
    service: 'Business & Partner Visa',
    rating: 5,
    date: 'August 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    review: 'Fast investor visas and establishment cards for our 6 executives. Complete transparency, zero delays, and truly corporate-grade service.'
  },
  {
    id: '3',
    name: 'Fatima Al-Mansoor',
    role: 'Architectural Consultant',
    country: 'Lebanon',
    location: 'Business Bay, Dubai',
    service: 'Family Sponsorship Visa',
    rating: 5,
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
    review: 'Exceptional support for my family residency and document attestation. Clear communication and stress-free approval from day one.'
  },
  {
    id: '4',
    name: 'Alexander Lindqvist',
    role: 'Founder, Nordic Creative',
    country: 'Sweden',
    location: 'Downtown Dubai',
    service: 'Business Setup & Residence',
    rating: 5,
    date: 'September 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
    review: 'Handled trade license approvals, MOA drafting, and my investor visa effortlessly. Transparent costs and swift turnaround.'
  }
];

export const MEDICAL_CENTERS = [
  {
    id: 'salem-citywalk',
    name: 'Smart Salem VIP Medical Center - City Walk',
    location: 'City Walk, Al Wasl, Dubai',
    type: 'VIP AI-Driven Express',
    resultTime: '30 Minutes - 2 Hours',
    features: ['Robotic Blood Drawing', 'No Queues', 'VIP Lounge', 'Smart Biometrics'],
    fee: 'AED 820'
  },
  {
    id: 'salem-difc',
    name: 'Smart Salem VIP - Index Tower DIFC',
    location: 'DIFC, Downtown Dubai',
    type: 'Corporate Executive VIP',
    resultTime: '2 Hours',
    features: ['Direct DIFC Access', 'Executive Hospitality', 'Same-Day ICP Sync'],
    fee: 'AED 820'
  },
  {
    id: 'muhaisnah',
    name: 'Al Muhaisnah Medical Fitness Center',
    location: 'Al Muhaisnah 2, Dubai',
    type: 'Standard & Express 24/7',
    resultTime: '24 Hours / 48 Hours',
    features: ['24/7 Service', 'High Capacity', 'DHA Certified'],
    fee: 'AED 350 - AED 480'
  },
  {
    id: 'al-karama',
    name: 'Al Karama Medical Fitness Center',
    location: 'Al Karama, Dubai',
    type: 'Family & Female Only Section',
    resultTime: '24 Hours',
    features: ['Dedicated Family Lounge', 'Easy Metro Access', 'Express Typing Desk'],
    fee: 'AED 380'
  }
];

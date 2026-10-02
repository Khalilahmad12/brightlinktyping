// BrightLink Data Store (Contact submissions, Service Inquiries, Admin credentials)

export const contactsStore = [
  {
    id: 'ct-1',
    name: 'Ahmed Al-Falasi',
    email: 'ahmed.falasi@example.ae',
    phone: '+971 50 882 1290',
    service: 'Golden Visa',
    message: 'Inquiring about 10-year Golden Visa requirements for real estate investor (property valued at AED 2.8M).',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'ct-2',
    name: 'Sarah Jenkins',
    email: 'sarah.j@techflow.io',
    phone: '+971 55 491 8832',
    service: 'Family Visa',
    message: 'Need urgent sponsorship for my husband and 2 children before current visit visa expires next week.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 3600000 * 20).toISOString()
  },
  {
    id: 'ct-3',
    name: 'Rajiv Malhotra',
    email: 'rajiv.malhotra@zenith.in',
    phone: '+971 56 312 9044',
    service: 'Passport Services',
    message: 'Tatkal Indian passport renewal assistance needed with emergency consular appointment.',
    status: 'Completed',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

export const inquiriesStore = [
  {
    id: 'inq-1',
    name: 'Michael DuPont',
    email: 'm.dupont@elysee.fr',
    phone: '+971 52 771 9081',
    service: 'Business Setup',
    emirate: 'Dubai',
    urgency: 'Express (24-48 hours)',
    message: 'Opening LLC branch in Business Bay with 3 partner visas and company trade license.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  }
];

export const adminUser = {
  id: 'usr-1',
  username: 'admin',
  email: 'admin@brightlinkconsulting.ae',
  // standard hashed or default demo password
  password: 'adminPassword2026',
  role: 'Administrator',
  name: 'BrightLink Head of Operations'
};

export interface PillarPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string | string[];
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

export const pillarPages: Record<string, PillarPageData> = {
  'rrb-staff-nurse-notification': {
    slug: '/rrb-staff-nurse-notification',
    title: 'RRB Staff Nurse Notification 2026',
    description: 'Latest RRB Staff Nurse Notification 2026 details including important dates, post information, and official recruitment updates.',
    h1: 'RRB Staff Nurse Notification 2026',
    content: {
      intro: 'The Railway Recruitment Board (RRB) releases the Staff Nurse notification through a Centralized Employment Notice (CEN). Candidates should verify dates, eligibility, vacancy distribution, and application instructions only from official notices.',
      sections: [
        {
          heading: 'Latest Notification Highlights',
          content: 'Use this page as an information summary and always cross-check with the official PDF before applying.',
          table: {
            headers: ['Particular', 'Details'],
            rows: [
              ['Recruitment Body', 'Railway Recruitment Board (RRB)'],
              ['Post', 'Staff Nurse / Nursing Superintendent (as notified)'],
              ['Mode of Exam', 'Computer Based Test (CBT)'],
              ['Application Mode', 'Online'],
              ['Official Source', 'indianrailways.gov.in and regional RRB websites']
            ]
          }
        }
      ],
      faqs: [
        { question: 'Where can I download the RRB Staff Nurse notification?', answer: 'You can download it from the official Railway and regional RRB recruitment portals when released.' },
        { question: 'Does one notification cover all regions?', answer: 'A centralized notice is issued, while vacancies are distributed region-wise.' }
      ]
    }
  },
  'rrb-staff-nurse-vacancy': {
    slug: '/rrb-staff-nurse-vacancy',
    title: 'RRB Staff Nurse Vacancy 2026',
    description: 'Check expected and announced RRB Staff Nurse vacancy details with category-wise and region-wise understanding.',
    h1: 'RRB Staff Nurse Vacancy 2026',
    content: {
      intro: 'RRB vacancy details are published in the official notification. Seats are usually distributed across regions and reservation categories.',
      sections: [
        {
          heading: 'How Vacancy Is Reported',
          content: [
            'RRB provides vacancy details by region and category.',
            'Final vacancy can be revised by the board based on administrative requirements.',
            'Candidates should apply carefully for their preferred region as transfer policy is limited.'
          ]
        }
      ],
      faqs: [
        { question: 'Are vacancies same every year?', answer: 'No. Vacancy count depends on staffing requirements in railway hospitals and units.' },
        { question: 'Can vacancy numbers change after notification?', answer: 'Yes, RRB may revise numbers depending on official needs.' }
      ]
    }
  },
  'rrb-staff-nurse-eligibility': {
    slug: '/rrb-staff-nurse-eligibility',
    title: 'RRB Staff Nurse Eligibility 2026',
    description: 'RRB Staff Nurse Eligibility 2026 including qualification, age criteria, nationality, medical standards, and required documents.',
    h1: 'RRB Staff Nurse Eligibility 2026',
    content: {
      intro: 'Before applying, candidates must satisfy educational, age, nationality, and medical conditions mentioned in the official recruitment notice.',
      sections: [
        { heading: 'Educational Qualification', content: 'Candidates are generally required to hold BSc Nursing or GNM with valid nursing council registration as specified in the notification.' },
        { heading: 'Age Limit', content: 'The usual age bracket is announced in the notification and may include upper-age relaxation for reserved categories according to government norms.' },
        { heading: 'Nationality Requirements', content: 'Applicants must satisfy nationality criteria prescribed for central government recruitment examinations.' },
        { heading: 'Medical Standards', content: 'Candidates must meet medical fitness standards applicable for railway medical staff posts.' },
        { heading: 'Reservation Rules', content: 'Age and category benefits are applied as per prevailing reservation guidelines and submitted certificates.' },
        { heading: 'Important Documents Required', content: ['Educational certificates', 'Nursing registration proof', 'Category certificate (if applicable)', 'Identity proof and date of birth certificate'] }
      ],
      faqs: [
        { question: 'Is GNM eligible for RRB Staff Nurse?', answer: 'Yes, GNM candidates with valid registration are generally eligible when allowed in the notification.' },
        { question: 'Is registration mandatory?', answer: 'Yes, nursing council registration is typically mandatory.' }
      ]
    }
  },
  'rrb-staff-nurse-age-limit': {
    slug: '/rrb-staff-nurse-age-limit',
    title: 'RRB Staff Nurse Age Limit 2026',
    description: 'Understand RRB Staff Nurse age limit, category relaxation, and age calculation rules for 2026 recruitment.',
    h1: 'RRB Staff Nurse Age Limit 2026',
    content: {
      intro: 'RRB publishes minimum and maximum age criteria in the notification along with category-wise relaxations.',
      sections: [
        {
          heading: 'Age Relaxation Overview',
          content: 'Reserved category candidates are generally eligible for age relaxation as per central government recruitment policy.',
          table: {
            headers: ['Category', 'Typical Relaxation'],
            rows: [['OBC', 'Up to 3 years'], ['SC/ST', 'Up to 5 years'], ['PwBD and others', 'As per notification rules']]
          }
        }
      ],
      faqs: [
        { question: 'How is age calculated?', answer: 'Age is calculated based on the cut-off date specified in the recruitment notification.' }
      ]
    }
  },
  'rrb-staff-nurse-exam-pattern': {
    slug: '/rrb-staff-nurse-exam-pattern',
    title: 'RRB Staff Nurse Exam Pattern 2026',
    description: 'RRB Staff Nurse Exam Pattern 2026 with CBT format, total questions, duration, negative marking, and subject overview.',
    h1: 'RRB Staff Nurse Exam Pattern 2026',
    content: {
      intro: 'The Railway Recruitment Board conducts a Computer Based Test (CBT) for staff nurse recruitment.',
      sections: [
        {
          heading: 'RRB Staff Nurse Exam Pattern',
          content: 'The exam is objective in nature and evaluates both nursing and general aptitude areas.',
          table: {
            headers: ['Parameter', 'Details'],
            rows: [
              ['Exam mode', 'Online (CBT)'],
              ['Total questions', '100'],
              ['Exam duration', '90 minutes'],
              ['Negative marking', '1/3rd mark deduction for each wrong answer']
            ]
          }
        },
        {
          heading: 'Subjects Included',
          content: ['Professional Nursing', 'General Awareness', 'General Arithmetic', 'General Intelligence']
        }
      ],
      faqs: [
        { question: 'Is there negative marking in RRB Staff Nurse CBT?', answer: 'Yes, one-third mark is deducted for each incorrect answer.' }
      ]
    }
  },
  'rrb-staff-nurse-salary': {
    slug: '/rrb-staff-nurse-salary',
    title: 'RRB Staff Nurse Salary',
    description: 'RRB Staff Nurse salary structure with Level 7 pay scale, basic pay, and major allowances.',
    h1: 'RRB Staff Nurse Salary',
    content: {
      intro: 'Railway staff nurses are generally placed under Level 7 pay structure with additional government allowances.',
      sections: [
        {
          heading: 'Salary Structure',
          content: 'Basic salary starts at ₹44,900 with admissible allowances.',
          table: {
            headers: ['Component', 'Details'],
            rows: [['Pay Level', 'Level 7'], ['Basic Salary', '₹44,900'], ['Allowances', 'DA, HRA, Transport Allowance, Medical Benefits']]
          }
        }
      ],
      faqs: [
        { question: 'What is the basic pay of RRB Staff Nurse?', answer: 'The basic salary is generally ₹44,900 under Level 7.' }
      ]
    }
  },
  'rrb-staff-nurse-selection-process': {
    slug: '/rrb-staff-nurse-selection-process',
    title: 'RRB Staff Nurse Selection Process',
    description: 'Know the RRB Staff Nurse selection stages including CBT, document verification, and medical examination.',
    h1: 'RRB Staff Nurse Selection Process',
    content: {
      intro: 'Candidates are shortlisted and selected through clearly defined stages announced in the official notification.',
      sections: [
        {
          heading: 'Selection Stages',
          content: ['1. Computer Based Test (CBT)', '2. Document Verification', '3. Medical Examination', 'Candidates must qualify each stage to be considered for final appointment.']
        }
      ],
      faqs: [
        { question: 'Is there an interview in RRB Staff Nurse recruitment?', answer: 'Typically, selection is based on CBT followed by verification and medical fitness, as notified.' }
      ]
    }
  },
  'rrb-staff-nurse-application-process': {
    slug: '/rrb-staff-nurse-application-process',
    title: 'RRB Staff Nurse Application Process',
    description: 'Step-by-step RRB Staff Nurse application process including registration, form filling, upload, and fee payment.',
    h1: 'RRB Staff Nurse Application Process',
    content: {
      intro: 'The RRB Staff Nurse application process is completed online through official recruitment portals.',
      sections: [
        {
          heading: 'How to Apply Online',
          content: ['Register with valid mobile number and email ID.', 'Complete personal and educational details carefully.', 'Upload required documents in prescribed format.', 'Pay application fee and keep a copy of confirmation page.']
        }
      ],
      faqs: [
        { question: 'Can I edit application form after final submission?', answer: 'RRB may provide a correction window for specific fields as per official instructions.' }
      ]
    }
  },
  'rrb-staff-nurse-admit-card': {
    slug: '/rrb-staff-nurse-admit-card',
    title: 'RRB Staff Nurse Admit Card',
    description: 'Get updates on RRB Staff Nurse admit card release, download steps, and exam day instructions.',
    h1: 'RRB Staff Nurse Admit Card',
    content: {
      intro: 'Admit card download links are released on official regional RRB websites before the CBT.',
      sections: [
        {
          heading: 'How to Download Admit Card',
          content: ['Visit your regional RRB website.', 'Open the admit card login link.', 'Enter registration credentials and download the hall ticket.', 'Verify details such as exam date, shift, and reporting time.']
        }
      ],
      faqs: [
        { question: 'When is admit card usually released?', answer: 'It is generally issued a few days before the exam date as per official schedule.' }
      ]
    }
  },
  'rrb-staff-nurse-faq': {
    slug: '/rrb-staff-nurse-faq',
    title: 'RRB Staff Nurse FAQ',
    description: 'Frequently asked questions on RRB Staff Nurse qualification, recruitment cycle, eligibility, and exam process.',
    h1: 'RRB Staff Nurse FAQ',
    content: {
      intro: 'This FAQ page answers common queries about RRB Staff Nurse recruitment and official process-related details.',
      sections: [
        {
          heading: 'Common Questions',
          content: ['What is the qualification for RRB staff nurse?', 'Candidates must have BSc Nursing or GNM with registration.', 'Is RRB staff nurse exam conducted yearly?', 'Recruitment depends on vacancy notifications released by RRB.']
        }
      ],
      faqs: [
        { question: 'What is the qualification for RRB staff nurse?', answer: 'Candidates must have BSc Nursing or GNM with valid registration.' },
        { question: 'Is RRB staff nurse exam conducted yearly?', answer: 'Recruitment frequency depends on vacancy notifications released by the Railway Recruitment Board.' }
      ]
    }
  }
};

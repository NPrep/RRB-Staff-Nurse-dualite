// This file acts as a CMS for the static pillar pages to ensure content consistency and easy updates.

export interface PillarPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string | string[]; // Paragraphs or HTML string
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
  "rrb-staff-nurse-notification": {
    slug: "/rrb-staff-nurse-notification",
    title: "RRB Staff Nurse Notification 2025 PDF Download",
    description: "Download RRB Staff Nurse Notification 2025 PDF. Check vacancy details, important dates, and official CEN recruitment updates for Railway Staff Nurse posts.",
    h1: "RRB Staff Nurse Notification 2025 – Download PDF, Vacancy & Details",
    content: {
      intro: "The Railway Recruitment Boards (RRB) release the RRB Staff Nurse Notification to recruit eligible candidates for paramedical categories in Indian Railways. This is one of the most sought-after government nursing exams in India. Candidates awaiting the CEN (Centralized Employment Notice) for Staff Nurse and Nursing Superintendent posts can find all official details here.",
      sections: [
        {
          heading: "RRB Staff Nurse Notification 2025: Key Highlights",
          content: "The official notification contains critical information regarding the recruitment process. Below is a summary of the expected details for the upcoming cycle.",
          table: {
            headers: ["Particulars", "Details"],
            rows: [
              ["Recruitment Authority", "Railway Recruitment Boards (RRB)"],
              ["Post Name", "Staff Nurse, Nursing Superintendent"],
              ["Exam Date", "10th March to 13th March 2025"],
              ["Mode of Application", "Online"],
              ["Selection Process", "CBT (Computer Based Test) + Document Verification"],
              ["Official Website", "indianrailways.gov.in"]
            ]
          }
        },
        {
          heading: "Vacancy Details for RRB Staff Nurse",
          content: "Vacancies are distributed across various Railway Zones (RRB Mumbai, RRB Patna, RRB Chennai, etc.). The notification specifies the exact number of seats available for General, OBC, SC, ST, and EWS categories."
        },
        {
          heading: "How to Download the Official Notification PDF",
          content: [
            "1. Visit the official website: indianrailways.gov.in",
            "2. Navigate to the 'Recruitment' section.",
            "3. Select your respective RRB Region.",
            "4. Click on 'CEN Paramedical Recruitment' and download the PDF."
          ]
        }
      ],
      faqs: [
        {
          question: "When is the RRB Staff Nurse Exam 2025?",
          answer: "The exam is scheduled to be held from 10th March to 13th March 2025."
        },
        {
          question: "What is the age limit mentioned in the notification?",
          answer: "Generally, the age limit is between 20 to 40 years, with age relaxations for reserved categories as per government rules."
        },
        {
          question: "How many vacancies are expected?",
          answer: "While the exact number is yet to be released in the CEN, expectations are high for over 200+ posts specifically for Nursing Superintendent and Staff Nurse combined."
        },
        {
          question: "Is the notification released for all zones together?",
          answer: "Yes, the Centralized Employment Notice (CEN) is released centrally, but vacancies are distributed zone-wise."
        },
        {
          question: "Where can I find the official syllabus?",
          answer: "The official syllabus is included in the notification PDF. You can also view the detailed syllabus on our Syllabus page."
        }
      ]
    }
  },
  "rrb-staff-nurse-syllabus": {
    slug: "/rrb-staff-nurse-syllabus",
    title: "RRB Staff Nurse Syllabus 2025 & Exam Pattern",
    description: "Detailed RRB Staff Nurse Syllabus 2025 and Exam Pattern. Topic-wise breakdown for Professional Ability, General Science, Arithmetic, and General Awareness.",
    h1: "RRB Staff Nurse Syllabus 2025 & Exam Pattern (Subject Wise)",
    content: {
      intro: "To crack the RRB Staff Nurse exam, a thorough understanding of the syllabus is mandatory. The exam primarily tests Professional Nursing Ability, along with General Awareness, Arithmetic, and General Science. A strategic approach to these topics is essential for securing a high rank.",
      sections: [
        {
          heading: "RRB Staff Nurse Exam Pattern 2025",
          content: "The examination is a Computer Based Test (CBT) with multiple-choice questions. There is negative marking for incorrect answers.",
          table: {
            headers: ["Subject", "No. of Questions", "Marks"],
            rows: [
              ["Professional Ability (Nursing)", "70", "70"],
              ["General Awareness", "10", "10"],
              ["General Arithmetic, General Intelligence & Reasoning", "10", "10"],
              ["General Science", "10", "10"],
              ["Total", "100", "100"]
            ]
          }
        },
        {
          heading: "Detailed Syllabus: Professional Ability",
          content: "This section carries the maximum weightage (70 marks). Topics include Anatomy, Physiology, Nutrition, Biochemistry, Nursing Foundations, Medical-Surgical Nursing, Midwifery, Child Health Nursing, Community Health Nursing, and Mental Health Nursing. For comprehensive study material, many aspirants rely on <a href='https://nprep.in' target='_blank' rel='noopener noreferrer'>NPrep</a>."
        },
        {
          heading: "General Awareness & Science Syllabus",
          content: "Focus on Current Affairs, Indian Geography, History, Physics, Chemistry, and Life Sciences (Standard 10th level)."
        }
      ],
      faqs: [
        {
          question: "Is there negative marking in the RRB Staff Nurse exam?",
          answer: "Yes, 1/3rd of the marks allotted for each question are deducted for every wrong answer."
        },
        {
          question: "What is the duration of the exam?",
          answer: "The exam duration is typically 90 minutes."
        },
        {
          question: "Which subject has the highest weightage?",
          answer: "Professional Ability (Nursing) has the highest weightage with 70 marks out of 100."
        },
        {
          question: "Is Mathematics part of the syllabus?",
          answer: "Yes, General Arithmetic is part of the 10-mark section combined with General Intelligence & Reasoning."
        }
      ]
    }
  },
  "rrb-staff-nurse-eligibility": {
    slug: "/rrb-staff-nurse-eligibility",
    title: "RRB Staff Nurse Eligibility Criteria 2025: Age, Qualification",
    description: "Check RRB Staff Nurse Eligibility Criteria 2025. Know the Age Limit, Educational Qualification (GNM/B.Sc Nursing), and Medical Standards required.",
    h1: "RRB Staff Nurse Eligibility Criteria 2025 – Age Limit & Qualification",
    content: {
      intro: "Before applying, candidates must ensure they meet the specific eligibility criteria set by the Railway Recruitment Boards. Ineligibility at any stage leads to immediate disqualification.",
      sections: [
        {
          heading: "Educational Qualification",
          content: "Candidates must possess:",
          table: {
            headers: ["Requirement", "Details"],
            rows: [
              ["Basic Qualification", "Certificate as Registered Nurse and Midwife having passed 3 years course in General Nursing and Midwifery (GNM) from a school of Nursing or other institution recognized by the Indian Nursing Council."],
              ["Alternative Qualification", "B.Sc. (Nursing) from a recognized university/institution."]
            ]
          }
        },
        {
          heading: "Age Limit",
          content: "The standard age limit is usually 20 to 40 years. However, age relaxation is applicable for SC/ST (5 years), OBC-NCL (3 years), and PwBD candidates as per government norms."
        }
      ],
      faqs: [
        {
          question: "Can final year nursing students apply?",
          answer: "No, candidates must have the final degree/diploma certificate and registration certificate on the closing date of the application."
        },
        {
          question: "Is experience required for RRB Staff Nurse?",
          answer: "Generally, experience is not mandatory for the Staff Nurse post, but it may be required for higher posts like Nursing Superintendent."
        },
        {
          question: "Is GNM eligible for RRB Staff Nurse?",
          answer: "Yes, GNM candidates who are registered as Nurse and Midwife are eligible."
        },
        {
          question: "What is the upper age limit for OBC candidates?",
          answer: "OBC candidates typically get a 3-year relaxation, making the upper age limit 43 years (if base is 40)."
        }
      ]
    }
  },
  "rrb-staff-nurse-exam-date": {
    slug: "/rrb-staff-nurse-exam-date",
    title: "RRB Staff Nurse Exam Date 2025",
    description: "Check the latest RRB Staff Nurse Exam Date 2025. Stay updated on the CBT schedule and admit card release dates.",
    h1: "RRB Staff Nurse Exam Date 2025 – CBT Schedule & Updates",
    content: {
      intro: "The RRB Staff Nurse Exam Date is a crucial milestone for aspirants. The exam is typically conducted in multiple shifts across the country.",
      sections: [
        {
          heading: "Exam Schedule 2025",
          content: "The Railway Recruitment Board has scheduled the Computer Based Test (CBT) for the following dates.",
          table: {
            headers: ["Event", "Date"],
            rows: [
              ["Exam Start Date", "10th March 2025"],
              ["Exam End Date", "13th March 2025"],
              ["Admit Card Release", "4 days prior to exam date"]
            ]
          }
        }
      ],
      faqs: [
        { question: "When is the exam?", answer: "The exam is scheduled from 10th March to 13th March 2025." },
        { question: "Will the exam be in single shift?", answer: "No, due to the large number of applicants, it is usually conducted in multiple shifts." },
        { question: "When will the city intimation slip be released?", answer: "City intimation is usually released 10 days before the exam date." }
      ]
    }
  },
  "rrb-staff-nurse-application-form": {
    slug: "/rrb-staff-nurse-application-form",
    title: "RRB Staff Nurse Application Form 2025 - Apply Online",
    description: "Step-by-step guide to fill RRB Staff Nurse Application Form 2025. Fee details, document requirements, and direct apply link.",
    h1: "RRB Staff Nurse Application Form 2025 – Online Registration Steps",
    content: {
      intro: "The application process for RRB Staff Nurse is entirely online. Candidates must register through the official RRB regional websites or the central application portal.",
      sections: [
        {
          heading: "How to Apply",
          content: [
            "1. Go to the official application portal: rrbapply.gov.in",
            "2. Register with your Mobile Number and Email ID.",
            "3. Fill in the detailed application form.",
            "4. Upload scanned photograph and signature.",
            "5. Pay the application fee."
          ]
        },
        {
          heading: "Application Fee",
          content: "Fee details are generally Rs. 500 for General/OBC and Rs. 250 for SC/ST/Ex-Servicemen/Female/Minorities/EBC.",
          table: {
            headers: ["Category", "Fee"],
            rows: [["General/OBC", "Rs. 500"], ["SC/ST/PwBD/Female", "Rs. 250"]]
          }
        }
      ],
      faqs: [
        { question: "Can I apply to multiple RRBs?", answer: "No, you can only apply to one RRB for a specific post." },
        { question: "Is the application fee refundable?", answer: "For candidates appearing in the CBT, a portion of the fee is refunded (Rs. 400 for Gen/OBC, Rs. 250 for others) after bank charges deduction." },
        { question: "Can I modify my application after submission?", answer: "Yes, a modification window is usually provided with a fee of Rs. 250, but only for specific fields." }
      ]
    }
  },
   "rrb-staff-nurse-admit-card": {
    slug: "/rrb-staff-nurse-admit-card",
    title: "RRB Staff Nurse Admit Card 2025 Download",
    description: "Download RRB Staff Nurse Admit Card 2025. Direct link for Hall Ticket, exam city intimation, and shift timings.",
    h1: "RRB Staff Nurse Admit Card 2025 – Download Hall Ticket",
    content: {
      intro: "The Admit Card is mandatory for entry into the examination hall. It is usually released 4 days prior to the CBT date.",
      sections: [{ heading: "How to Download", content: "Visit your applied RRB website (e.g., indianrailways.gov.in), login with Registration Number and DOB, and download the E-Call Letter." }],
      faqs: [
        { question: "Will admit card be sent by post?", answer: "No, it is only available online." },
        { question: "What ID proof is required with Admit Card?", answer: "Original valid photo ID like Aadhaar Card, Voter Card, PAN Card, etc." },
        { question: "Can I change my exam center?", answer: "No, the exam center allotted by RRB is final." }
      ]
    }
  },
  "rrb-staff-nurse-cut-off": {
    slug: "/rrb-staff-nurse-cut-off",
    title: "RRB Staff Nurse Cut Off Marks (Previous Years)",
    description: "Check RRB Staff Nurse Cut Off marks for previous years. Category-wise expected cut off for 2025 recruitment.",
    h1: "RRB Staff Nurse Cut Off Marks – Previous Year & Expected",
    content: {
      intro: "Cut off marks vary by RRB zone and category. Understanding previous trends helps in setting a target score.",
      sections: [{ heading: "Factors Affecting Cut Off", content: "Number of vacancies, difficulty level of exam, and number of candidates appearing." }],
      faqs: [
        { question: "Is there sectional cut off?", answer: "No, there is usually an overall qualifying mark (e.g., 40% for UR)." },
        { question: "Does cut off vary by zone?", answer: "Yes, each RRB zone has its own cut off based on local competition and vacancies." },
        { question: "When is the cut off released?", answer: "It is released along with the result." }
      ]
    }
  },
  "rrb-staff-nurse-result": {
    slug: "/rrb-staff-nurse-result",
    title: "RRB Staff Nurse Result 2025 - Merit List",
    description: "Check RRB Staff Nurse Result 2025. Download Merit List PDF and score card for the computer-based test.",
    h1: "RRB Staff Nurse Result 2025 – Merit List & Score Card",
    content: {
      intro: "Results are published on official RRB websites as a PDF of roll numbers of shortlisted candidates.",
      sections: [{ heading: "After Result", content: "Shortlisted candidates are called for Document Verification and Medical Examination." }],
      faqs: [
        { question: "How to check result?", answer: "Download the PDF from the official site (indianrailways.gov.in) and search for your roll number." },
        { question: "Is there a waiting list?", answer: "Yes, RRBs often maintain a standby list for candidates." },
        { question: "What is the next stage after CBT result?", answer: "Document Verification (DV) followed by Medical Examination." }
      ]
    }
  },
  "rrb-nursing-superintendent-recruitment": {
    slug: "/rrb-nursing-superintendent-recruitment",
    title: "RRB Nursing Superintendent Recruitment 2025",
    description: "RRB Nursing Superintendent Recruitment 2025 details. Eligibility, pay scale, and exam process for senior nursing posts in Railways.",
    h1: "RRB Nursing Superintendent Recruitment 2025",
    content: {
      intro: "Nursing Superintendent is a senior-level post in Indian Railways with higher responsibilities and pay scale compared to Staff Nurse.",
      sections: [{ heading: "Eligibility Difference", content: "Usually requires extensive experience along with B.Sc Nursing/M.Sc Nursing." }],
      faqs: [
        { question: "Is the exam same as Staff Nurse?", answer: "The syllabus is similar but the difficulty level and competition may vary." },
        { question: "What is the Pay Level?", answer: "Nursing Superintendent is typically a Level-7 or higher post depending on the exact grade." },
        { question: "Can freshers apply?", answer: "Usually, this post requires experience. Freshers are eligible for Staff Nurse posts." }
      ]
    }
  }
};

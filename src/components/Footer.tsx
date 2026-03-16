import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const resourceLinks = [
    { name: 'Notification', path: '/rrb-staff-nurse-notification' },
    { name: 'Vacancy', path: '/rrb-staff-nurse-vacancy' },
    { name: 'Eligibility', path: '/rrb-staff-nurse-eligibility' },
    { name: 'Exam Pattern', path: '/rrb-staff-nurse-exam-pattern' },
    { name: 'Salary', path: '/rrb-staff-nurse-salary' },
    { name: 'Selection Process', path: '/rrb-staff-nurse-selection-process' },
    { name: 'Application Process', path: '/rrb-staff-nurse-application-process' },
    { name: 'Admit Card', path: '/rrb-staff-nurse-admit-card' },
    { name: 'FAQ', path: '/rrb-staff-nurse-faq' }
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-white text-lg font-bold mb-4 border-l-4 border-rrb-red pl-3 mt-0">RRBStaffNurse.in</h3>
        <p className="text-sm text-slate-300 mb-6 leading-relaxed max-w-3xl">
          RRB Staff Nurse recruitment information portal. This website provides notification, vacancy, eligibility, exam pattern, salary, selection process, application process, and admit card updates.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-none p-0 m-0">
          {resourceLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-slate-300 hover:text-white hover:underline text-sm">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-500 flex flex-col gap-2">
          <p>&copy; {new Date().getFullYear()} RRBStaffNurse.in. All rights reserved.</p>
          <p>
            Disclaimer: rrbstaffnurse.in is not associated with Indian Railways or RRB. Refer official portals for final recruitment data.
          </p>
        </div>
      </div>
    </footer>
  );
}

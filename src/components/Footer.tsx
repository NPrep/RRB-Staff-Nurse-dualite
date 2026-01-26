import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'Notification', path: '/rrb-staff-nurse-notification' },
    { name: 'Exam Date', path: '/rrb-staff-nurse-exam-date' },
    { name: 'Syllabus', path: '/rrb-staff-nurse-syllabus' },
    { name: 'Eligibility', path: '/rrb-staff-nurse-eligibility' },
  ];

  const resultLinks = [
    { name: 'Admit Card', path: '/rrb-staff-nurse-admit-card' },
    { name: 'Cut Off', path: '/rrb-staff-nurse-cut-off' },
    { name: 'Result', path: '/rrb-staff-nurse-result' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/' }, // Placeholder
    { name: 'Terms of Service', path: '/' }, // Placeholder
  ];

  return (
    <footer className="bg-slate-900 text-white mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4 border-l-4 border-rrb-red pl-3 mt-0">RRBStaffNurse.in</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              The definitive authority hub for RRB Staff Nurse and Nursing Superintendent recruitment. We decode notifications, analyze patterns, and deliver the fastest updates.
            </p>
            <div className="text-xs text-slate-400 bg-slate-800 p-3 rounded border border-slate-700 leading-relaxed">
              <strong>Disclaimer:</strong> rrbstaffnurse.in is neither associated with Indian Railways nor with Railway Recruitment Board (RRB). The Official website of RRB Application is rrbapply.gov.in. rrbstaffnurse.in is a job portal sharing the Latest Vacancy Notification, Eligibility, Application Process, Exam Date of RRB Nursing Superintendent Exam Syllabus, Exam Date & Admit Cards & Results.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 mt-0">Quick Access</h3>
            <ul className="space-y-2 list-none pl-0 ml-0">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white hover:underline transition-all text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Resources */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 mt-0">Resources</h3>
            <ul className="space-y-2 list-none pl-0 ml-0">
              {resultLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white hover:underline transition-all text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 mt-0">Company</h3>
            <ul className="space-y-2 list-none pl-0 ml-0">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-white hover:underline transition-all text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-slate-800">
                <span className="block text-xs text-slate-400 mb-1">Helpline Number:</span>
                <a href="tel:+916377639169" className="text-rrb-red font-bold hover:text-white transition-colors">
                  +91 6377 6391 69
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} RRBStaffNurse.in. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <span>Designed for Aspirants</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

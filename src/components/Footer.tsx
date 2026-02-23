import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const resourceLinks = [
    { name: 'Syllabus', path: '/rrb-staff-nurse-syllabus' },
    { name: 'Eligibility', path: '/rrb-staff-nurse-eligibility' },
    { name: 'Success Stories', path: '/success-stories' },
  ];

  return (
    <footer className="bg-slate-900 text-white mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4 border-l-4 border-rrb-red pl-3 mt-0">RRBStaffNurse.in</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              The definitive authority hub for RRB Staff Nurse and Nursing Superintendent recruitment. We decode notifications, analyze patterns, and deliver the fastest updates.
            </p>
            <div className="text-xs text-slate-400 bg-slate-800 p-3 rounded border border-slate-700 leading-relaxed">
              <strong>Disclaimer:</strong> rrbstaffnurse.in is neither associated with Indian Railways nor with Railway Recruitment Board (RRB). The Official website of RRB Application is rrbapply.gov.in. rrbstaffnurse.in is a job portal sharing the Latest Vacancy Notification, Eligibility, Application Process, and Exam Date of RRB Nursing Superintendent Exam Syllabus.
            </div>
          </div>

          {/* Exam Resources */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 mt-0">Resources</h3>
            <ul className="space-y-2 list-none pl-0 ml-0">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white hover:underline transition-all text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 mt-0">Contact Us</h3>
            <ul className="space-y-2 list-none pl-0 ml-0">
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white hover:underline transition-all text-sm">
                  Contact Us
                </Link>
              </li>
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
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>&copy; {new Date().getFullYear()} RRBStaffNurse.in. All rights reserved.</p>
            <span className="hidden md:inline text-slate-700">|</span>
            <p className="flex items-center gap-1">
              In association with{' '}
              <a
                href="https://nprep.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-400 hover:text-white transition-colors"
              >
                NPrep
              </a>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Designed for Aspirants</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function NPrepCTA() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-900 rounded-2xl p-8 md:p-10 my-16 text-center shadow-xl mx-4 md:mx-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Start your RRB preparation today</h2>
        <p className="text-emerald-100 mb-7">Join structured courses, test series, and revision plans built for RRB nursing exams.</p>

        <a
          href="https://nprep.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors no-underline"
        >
          Explore Courses on NPrep <span className="mx-2 text-emerald-300">|</span> External link <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

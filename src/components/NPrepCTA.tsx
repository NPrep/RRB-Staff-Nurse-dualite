import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function NPrepCTA() {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 my-16 text-center relative overflow-hidden shadow-2xl mx-4 md:mx-0">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rrb-red via-slate-900 to-slate-900"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Start your RRB Staff Nurse preparation with <span className="text-rrb-red">NPrep</span>
        </h2>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Don't just read about the exam—master it. Join thousands of nursing officers who trust NPrep for their daily practice, mock tests, and comprehensive video lectures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://nprep.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-rrb-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/30 no-underline"
          >
            Download App <ExternalLink size={20} className="ml-2" />
          </a>
          <a 
            href="https://gold.nprep.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all no-underline"
          >
            Explore Courses
          </a>
        </div>
        
        <p className="mt-6 text-sm text-slate-500 font-medium">
          Available on Android & iOS • 4.8/5 Star Rating
        </p>
      </div>
    </div>
  );
}

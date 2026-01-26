import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Priya S.", text: "NPrep's Test Series was a game changer for my RRB prep. The explanations are top-notch!", exam: "RRB Staff Nurse" },
  { name: "Rahul K.", text: "Cleared NORCET thanks to the GOLD course. The 100-hour revision is gold indeed.", exam: "NORCET Rank 145" },
  { name: "Anjali M.", text: "Best platform for nursing exams. The daily tests kept me consistent.", exam: "ESIC Staff Nurse" },
  { name: "Vikram R.", text: "The clinical scenario questions in the QBank are exactly what comes in the exam.", exam: "RRB Aspirant" },
  { name: "Sneha G.", text: "Rapid Revision 2.0 helped me cover the entire syllabus in just 2 weeks.", exam: "CHO Selection" },
];

export default function ReviewMarquee() {
  return (
    <div className="bg-slate-900 py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Student Success Stories</h2>
        <p className="text-slate-400">Trusted by thousands of nursing officers across India</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex space-x-6 px-4">
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="inline-block w-80 bg-slate-800 p-6 rounded-xl border border-slate-700 whitespace-normal flex-shrink-0"
            >
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm">{review.name}</span>
                <span className="text-xs text-rrb-red bg-red-900/30 px-2 py-1 rounded border border-red-900/50">
                  {review.exam}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient Fade for edges */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
    </div>
  );
}

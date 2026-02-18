import React from 'react';
import SEOHead from '../components/SEOHead';
import NPrepCTA from '../components/NPrepCTA';
import { generateOrganizationSchema } from '../utils/schema';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const schema = generateOrganizationSchema();

  const feedbacks = [
    {
      name: 'Anjali Verma',
      rank: 'Selected in RRB Mumbai',
      quote: "Consistency is the key. NPrep's daily tests kept me on track.",
      feedback:
        'I was working full-time while preparing, so I followed a strict routine with short study blocks. Solving mock tests regularly helped me improve speed and confidence.'
    },
    {
      name: 'Rahul Sharma',
      rank: 'Nursing Superintendent',
      quote: "Don't ignore the non-nursing section. It's the rank decider.",
      feedback:
        'I dedicated daily time to General Awareness and Arithmetic along with nursing subjects. Accuracy-first strategy made a huge difference in my final score.'
    },
    {
      name: 'Priya Menon',
      rank: 'Selected in RRB Chennai',
      quote: 'Previous year questions are your best friend.',
      feedback:
        'After a study gap, I restarted preparation with previous year papers. In the final month, I focused on mocks and analysis, which boosted my confidence.'
    },
    {
      name: 'Vikram Singh',
      rank: 'Selected in RRB Ajmer',
      quote: "Believe in yourself even when others don't.",
      feedback:
        'I shifted to a focused revision strategy and followed a structured plan. Staying consistent every day helped me crack the exam in my next attempt.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Success Stories - RRB Staff Nurse Selected Candidates"
        description="Read inspiring success stories of candidates who cracked the RRB Staff Nurse exam. Learn their strategies, study plans, and tips for success."
        canonicalUrl="/success-stories"
        schema={schema}
      />

      <div className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Student Feedbacks</h1>
          <p className="text-slate-600 text-lg">Real preparation feedback from successful aspirants.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {feedbacks.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 left-6 text-red-100" size={44} />
              <div className="relative z-10">
                <p className="text-lg font-serif text-slate-800 italic mb-5">"{item.quote}"</p>
                <p className="text-slate-600 leading-relaxed mb-6">{item.feedback}</p>
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-slate-900 m-0">{item.name}</h3>
                  <p className="text-sm text-rrb-red font-semibold mt-1 mb-0">{item.rank}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <NPrepCTA />
      </div>
    </>
  );
}

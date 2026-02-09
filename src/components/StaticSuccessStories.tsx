import React from 'react';
import { Quote } from 'lucide-react';

export default function StaticSuccessStories() {
  const stories = [
    { name: "Anjali V.", achievement: "Selected in RRB Mumbai (2019)", quote: "NPrep's daily tests were the key to my consistency." },
    { name: "Rahul S.", achievement: "Nursing Superintendent Rank 14", quote: "Cleared concepts in Medical-Surgical Nursing effortlessly." },
    { name: "Priya M.", achievement: "RRB Chennai Selection", quote: "Solved 50+ Previous Year Papers on the app." },
    { name: "Vikram R.", achievement: "RRB Ajmer - First Attempt", quote: "The Rapid Revision course saved my preparation time." }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Success Stories</h2>
          <p className="text-slate-500 mt-2">Real results from determined aspirants.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg border border-gray-100 hover:border-rrb-red/30 transition-colors">
              <Quote size={24} className="text-rrb-red/20 mb-4" />
              <p className="text-slate-700 font-medium mb-4 text-sm leading-relaxed">"{story.quote}"</p>
              <div className="mt-auto pt-4 border-t border-gray-200/60">
                <h4 className="font-bold text-slate-900 text-sm">{story.name}</h4>
                <p className="text-xs text-rrb-red font-semibold mt-1">{story.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

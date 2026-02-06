import React from 'react';
import SEOHead from '../components/SEOHead';
import NPrepCTA from '../components/NPrepCTA';
import { generateOrganizationSchema } from '../utils/schema';
import { Quote, Star } from 'lucide-react';

export default function SuccessStories() {
  const schema = generateOrganizationSchema();

  const stories = [
    {
      name: "Anjali Verma",
      rank: "Selected in RRB Mumbai",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "Consistency is the key. NPrep's daily tests kept me on track.",
      story: "I was working a full-time job at a private hospital while preparing. My biggest challenge was time management. I used to study for 2 hours before my morning shift and 2 hours after. The NPrep app was a lifesaver because I could solve questions during my commute. I focused heavily on the 'High Yield' topics mentioned in the syllabus guide. Clearing RRB was a dream come true for my family."
    },
    {
      name: "Rahul Sharma",
      rank: "Nursing Superintendent",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "Don't ignore the non-nursing section. It's the rank decider.",
      story: "Most nursing students ignore Math and GK. I made sure to give 30 minutes daily to General Awareness. I used the NPrep GOLD course for my nursing subjects, which cleared my concepts in Medical-Surgical Nursing. For the exam, my strategy was simple: accuracy over attempts. I attempted 85 questions with 90% accuracy."
    },
    {
      name: "Priya Menon",
      rank: "Selected in RRB Chennai",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "Previous Year Questions are your best friend.",
      story: "I had a 3-year gap after my GNM. Getting back into study mode was hard. I started by solving all previous year papers of RRB (2015 & 2019). This gave me confidence. I realized that questions often repeat or are framed similarly. I dedicated my last month entirely to mock tests on NPrep, analyzing every wrong answer."
    },
    {
      name: "Vikram Singh",
      rank: "Selected in RRB Ajmer",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "Believe in yourself even when others don't.",
      story: "I failed AIIMS NORCET twice. I was devastated. But I shifted my focus to RRB because of the slightly different syllabus. I liked that RRB has a balanced pattern. I used the NPrep Rapid Revision course to cover the vast syllabus quickly. The structured approach helped me stay focused and finally crack the exam."
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
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Hall of Fame</h1>
          <p className="text-slate-600 text-lg">Real stories of determination, hard work, and success.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mt-2">
                  {story.rank}
                </span>
                <div className="flex mt-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              
              <div className="w-full md:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <Quote className="absolute top-6 left-6 text-red-100" size={48} />
                <div className="relative z-10">
                  <p className="text-xl font-serif text-slate-800 italic mb-6">"{story.quote}"</p>
                  <p className="text-slate-600 leading-relaxed">
                    {story.story}
                  </p>
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

import React from 'react';

export default function NPrepCTA() {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-12">
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-emerald-900 mt-0 mb-3">Prepare for RRB Staff Nurse Exam with NPrep</h2>
        <ul className="text-emerald-900 space-y-2 mb-6">
          <li>• RRB level mock tests</li>
          <li>• nursing MCQ practice</li>
          <li>• structured study plan</li>
          <li>• previous year papers</li>
        </ul>
        <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 text-white px-5 py-2.5 rounded-md no-underline font-semibold hover:bg-emerald-800 transition-colors">
          Start preparation →
        </a>
      </div>
    </section>
  );
}

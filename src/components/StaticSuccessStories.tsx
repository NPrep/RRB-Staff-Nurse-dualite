import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function StaticSuccessStories() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">Success Stories</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Hear from real students</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Read verified preparation journeys, strategy breakdowns, and selection experiences shared by nursing aspirants on the NPrep blog.
          </p>
          <a
            href="https://nprep.in/blog/category/success-stories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors no-underline"
          >
            View NPrep Success Stories <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

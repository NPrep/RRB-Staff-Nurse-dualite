import React from 'react';
import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema } from '../utils/schema';

export default function SuccessStories() {
  const schema = generateOrganizationSchema();

  return (
    <>
      <SEOHead
        title="Success Stories - RRB Staff Nurse Selected Candidates"
        description="Read inspiring success stories of candidates who cracked the RRB Staff Nurse exam."
        canonicalUrl="/success-stories"
        schema={schema}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[var(--bg-light)] p-12 text-center rounded-2xl border border-[var(--border)]">
          <h1 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Hear from real students</h1>
          <a
            href="https://nprep.in/blogs?filter=NORCET+Success+Story"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent-hover)]"
          >
            Read verified success stories on NPrep
          </a>
        </div>
      </section>
    </>
  );
}

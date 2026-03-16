import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/schema';

const sections = [
  {
    title: 'Latest RRB Staff Nurse Notification',
    path: '/rrb-staff-nurse-notification',
    description: 'Official notice highlights, recruitment authority details, and where to verify the latest CEN release.'
  },
  {
    title: 'RRB Staff Nurse Vacancy',
    path: '/rrb-staff-nurse-vacancy',
    description: 'Category-wise and region-wise vacancy overview with guidance on how seats are published and revised.'
  },
  {
    title: 'RRB Staff Nurse Eligibility',
    path: '/rrb-staff-nurse-eligibility',
    description: 'Qualification, nationality, medical standards, and key document requirements in one place.'
  },
  {
    title: 'RRB Staff Nurse Exam Pattern',
    path: '/rrb-staff-nurse-exam-pattern',
    description: 'CBT format, total questions, duration, and negative marking details for quick reference.'
  },
  {
    title: 'RRB Staff Nurse Salary',
    path: '/rrb-staff-nurse-salary',
    description: 'Level 7 pay structure, basic salary and common allowances applicable to the post.'
  },
  {
    title: 'RRB Staff Nurse Application Process',
    path: '/rrb-staff-nurse-application-process',
    description: 'Step-by-step online application flow including registration, uploads, and fee submission.'
  }
];

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const webSchema = generateWebsiteSchema();

  return (
    <>
      <SEOHead
        title="RRB Staff Nurse Recruitment 2026"
        description="RRB Staff Nurse recruitment information portal with notification, vacancy, eligibility, exam pattern, salary, and application process updates."
        canonicalUrl="/"
        schema={[orgSchema, webSchema]}
      />

      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-rrb-red mb-2">RRB Staff Nurse Recruitment Information Portal</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">RRB Staff Nurse Recruitment 2026</h1>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Get streamlined recruitment updates focused on official process information only — notification, vacancy,
              eligibility, exam pattern, salary, selection flow, application process, admit card, and FAQs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/rrb-staff-nurse-notification" className="bg-rrb-red text-white px-4 py-2 rounded-md no-underline font-semibold hover:bg-red-700 transition-colors">
                View Notification
              </Link>
              <Link to="/rrb-staff-nurse-eligibility" className="border border-slate-300 text-slate-800 px-4 py-2 rounded-md no-underline font-semibold hover:border-slate-400 transition-colors">
                Check Eligibility
              </Link>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mt-0 mb-3">Quick Recruitment Snapshot</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">Exam Mode</span><span className="font-semibold text-slate-900">CBT (Online)</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">Questions</span><span className="font-semibold text-slate-900">100</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">Duration</span><span className="font-semibold text-slate-900">90 Minutes</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">Negative Marking</span><span className="font-semibold text-slate-900">1/3rd</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Pay Level</span><span className="font-semibold text-slate-900">Level 7 (₹44,900)</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section, index) => (
            <Link
              key={section.path}
              to={section.path}
              className="block no-underline border border-slate-200 rounded-lg p-4 hover:border-rrb-red hover:shadow-sm transition"
            >
              <p className="text-xs text-slate-500 m-0">Section {index + 1}</p>
              <h2 className="text-lg font-bold text-slate-900 mt-1 mb-2">{section.title}</h2>
              <p className="text-sm text-slate-600 m-0 leading-relaxed">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

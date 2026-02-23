import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FeatureGrid from '../components/FeatureGrid';
import SEONursingContent from '../components/SEONursingContent';
import StaticSuccessStories from '../components/StaticSuccessStories';
import NPrepCTA from '../components/NPrepCTA';
import { ArrowRight } from 'lucide-react';
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/schema';

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const webSchema = generateWebsiteSchema();

  return (
    <>
      <SEOHead
        title="RRB Staff Nurse Exam 2026 - Notification, Syllabus & Updates"
        description="Official portal guide for RRB Staff Nurse Exam 2026. Get latest notification updates, syllabus, eligibility, and important exam dates."
        canonicalUrl="/"
        schema={[orgSchema, webSchema]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-30 [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px]"></div>

        <div className="relative z-10 py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900 tracking-tight">
                RRB Staff Nurse Exam 2026
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                The definitive authority hub for Indian Railways recruitment. Access complete notifications, syllabus, eligibility, and latest exam updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/rrb-staff-nurse-notification" className="inline-flex items-center justify-center bg-rrb-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors no-underline">
                  Latest Notification
                </Link>
                <Link to="/free-tests" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold border border-slate-300 hover:border-slate-400 transition-colors no-underline">
                  Start Free Practice
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-7">
              <p className="text-sm font-semibold text-rrb-red uppercase tracking-wider mb-4">CEN 03/2025 Quick Stats</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-600">Posts</span>
                  <span className="font-semibold text-slate-900">200+</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-600">Pay Level</span>
                  <span className="font-semibold text-slate-900">7 (₹44,900)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-600">Exam</span>
                  <span className="font-semibold text-slate-900">CBT Mode</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Duration</span>
                  <span className="font-semibold text-slate-900">90 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <FeatureGrid />

        {/* Clean Layout - Removed Sidebar for less clutter */}
        <div className="mt-16 max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Recruitment Updates</h2>
            <div className="w-16 h-1 bg-rrb-red mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <Link to="/rrb-staff-nurse-notification" className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-rrb-red hover:shadow-md transition-all no-underline">
              <div className="flex justify-between items-center">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-bold bg-red-100 text-red-800 rounded mb-2">New</span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rrb-red transition-colors m-0">CEN Paramedical Notification 2025</h3>
                  <p className="text-slate-600 mt-1">Check vacancy distribution and official PDF.</p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-rrb-red transition-colors" size={24} />
              </div>
            </Link>

            <Link to="/rrb-nursing-superintendent-recruitment" className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-rrb-red hover:shadow-md transition-all no-underline">
              <div className="flex justify-between items-center">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-bold bg-purple-100 text-purple-800 rounded mb-2">Senior Post</span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rrb-red transition-colors m-0">Nursing Superintendent Recruitment</h3>
                  <p className="text-slate-600 mt-1">Eligibility and pay scale details.</p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-rrb-red transition-colors" size={24} />
              </div>
            </Link>
          </div>

        </div>

        {/* Strong CTA Section */}
        <NPrepCTA />
      </div>

      {/* Static Success Stories */}
      <StaticSuccessStories />

      {/* SEO Content Block */}
      <SEONursingContent />
    </>
  );
}

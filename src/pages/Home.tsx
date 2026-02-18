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
        title="RRB Staff Nurse Exam 2025 - Notification, Syllabus & Updates"
        description="Official portal guide for RRB Staff Nurse Exam 2025. Get latest notification updates, syllabus, eligibility, and important exam dates."
        canonicalUrl="/"
        schema={[orgSchema, webSchema]}
      />

      {/* Hero Section */}
      <div className="relative bg-rrb-red overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2070&auto=format&fit=crop"
            alt="Indian Railways Train Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rrb-red via-red-800 to-red-900 opacity-90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-sm">
            RRB Staff Nurse Exam
          </h1>
          <p className="text-xl text-red-100 mb-0 font-medium max-w-2xl mx-auto">
            The definitive authority hub for Indian Railways recruitment. Access complete notifications, syllabus, eligibility, and latest exam updates.
          </p>
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

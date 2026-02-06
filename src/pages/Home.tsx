import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FeatureGrid from '../components/FeatureGrid';
import SEONursingContent from '../components/SEONursingContent';
import ReviewMarquee from '../components/ReviewMarquee';
import NPrepCTA from '../components/NPrepCTA';
import { ArrowRight, FileText, Calendar, BookOpen } from 'lucide-react';
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/schema';

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const webSchema = generateWebsiteSchema();

  return (
    <>
      <SEOHead 
        title="RRB Staff Nurse Exam 2025 - Apply Online, Admit Card & Result" 
        description="Official portal guide for RRB Staff Nurse Exam 2025. Direct links to Apply Online, Download Admit Card, Check Results, and view latest Notification." 
        canonicalUrl="/" 
        schema={[orgSchema, webSchema]}
      />

      {/* Hero Section - Red Theme with Train Background */}
      <div className="relative bg-rrb-red overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2070&auto=format&fit=crop" 
            alt="Indian Railways Train Background" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-rrb-red via-red-800 to-red-900 opacity-90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight drop-shadow-sm">
              RRB Staff Nurse Exam <br/>
              <span className="text-red-100">Application, Admit Card & Results</span>
            </h1>
            <p className="text-lg md:text-xl text-red-50 mb-8 font-medium leading-relaxed drop-shadow-sm">
              The definitive authority hub for Indian Railways Staff Nurse recruitment. Access direct application links, hall tickets, and merit lists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/rrb-staff-nurse-application-form" className="bg-white text-rrb-red px-6 py-3 rounded-md font-bold hover:bg-red-50 transition-colors shadow-lg shadow-red-900/20 no-underline">
                Apply Online
              </Link>
              <Link 
                to="/rrb-staff-nurse-notification" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-bold transition-colors hover:bg-white hover:text-rrb-red no-underline"
              >
                Download Notification
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* New Focus: Apply, Admit, Result, Syllabus */}
        <FeatureGrid />

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            
            {/* Intro Section */}
            <section className="prose prose-slate max-w-none mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="lead text-lg text-slate-800">
                The <strong>RRB Staff Nurse Exam</strong> is the premier gateway for nursing professionals to join the Indian Railways. With high job security and Level-7 Pay Scale, it is the ultimate career goal for thousands.
              </p>
              <p>
                This portal serves as your direct gateway. We simplify the process from <strong>Online Application</strong> to <strong>Final Result</strong>, ensuring you never miss a deadline.
              </p>
            </section>

            {/* Latest Updates Section - Refined to avoid duplication */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-rrb-red pl-3 pb-0 border-b-0">
                Recruitment News
              </h2>
              <div className="grid gap-4">
                <Link to="/rrb-staff-nurse-notification" className="group block bg-white border border-gray-200 rounded-lg p-5 hover:border-rrb-red hover:shadow-md transition-all no-underline">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded mb-2">Notification</span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-rrb-red transition-colors mt-0">CEN Paramedical Notification 2025</h3>
                      <p className="text-sm text-slate-600 mt-1">Official PDF release expected soon. Check zone-wise vacancy distribution.</p>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-rrb-red transition-colors" size={20} />
                  </div>
                </Link>

                <Link to="/rrb-nursing-superintendent-recruitment" className="group block bg-white border border-gray-200 rounded-lg p-5 hover:border-rrb-red hover:shadow-md transition-all no-underline">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded mb-2">Senior Post</span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-rrb-red transition-colors mt-0">Nursing Superintendent Recruitment</h3>
                      <p className="text-sm text-slate-600 mt-1">Eligibility, pay scale, and exam process for the senior nursing cadre.</p>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-rrb-red transition-colors" size={20} />
                  </div>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* Exam Overview Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-slate-800 font-bold text-base m-0">Exam Overview</h3>
              </div>
              <div className="p-5">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <th className="py-2 text-slate-500 font-medium">Recruiter</th>
                      <td className="py-2 text-slate-900 font-semibold pl-2">Railway Recruitment Boards</td>
                    </tr>
                    <tr>
                      <th className="py-2 text-slate-500 font-medium">Post Name</th>
                      <td className="py-2 text-slate-900 font-semibold pl-2">Staff Nurse</td>
                    </tr>
                    <tr>
                      <th className="py-2 text-slate-500 font-medium">Exam Date</th>
                      <td className="py-2 text-rrb-red font-semibold pl-2">10-13 March 2025</td>
                    </tr>
                    <tr>
                      <th className="py-2 text-slate-500 font-medium">Official Site</th>
                      <td className="py-2 text-rrb-red font-semibold pl-2">
                        <a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">indianrailways.gov.in</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Links Widget */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <h3 className="text-slate-800 font-bold text-base mb-4 border-l-4 border-rrb-red pl-2">Essential Links</h3>
              <ul className="space-y-3 list-none pl-0">
                <li>
                  <Link to="/rrb-staff-nurse-application-form" className="flex items-center group no-underline">
                    <MousePointerClick size={18} className="text-slate-400 mr-3 group-hover:text-rrb-red transition-colors" />
                    <span className="text-slate-700 font-medium text-sm group-hover:text-rrb-red transition-colors">Apply Online</span>
                  </Link>
                </li>
                <li>
                  <Link to="/rrb-staff-nurse-admit-card" className="flex items-center group no-underline">
                    <ClipboardList size={18} className="text-slate-400 mr-3 group-hover:text-rrb-red transition-colors" />
                    <span className="text-slate-700 font-medium text-sm group-hover:text-rrb-red transition-colors">Download Admit Card</span>
                  </Link>
                </li>
                <li>
                  <Link to="/rrb-staff-nurse-result" className="flex items-center group no-underline">
                    <CheckCircle size={18} className="text-slate-400 mr-3 group-hover:text-rrb-red transition-colors" />
                    <span className="text-slate-700 font-medium text-sm group-hover:text-rrb-red transition-colors">Check Result</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Strong CTA Section */}
        <NPrepCTA />
      </div>

      {/* Reviews Section */}
      <ReviewMarquee />

      {/* SEO Content Block */}
      <SEONursingContent />
    </>
  );
}

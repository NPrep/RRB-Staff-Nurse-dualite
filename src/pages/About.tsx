import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema } from '../utils/schema';

export default function About() {
  const schema = generateOrganizationSchema();

  return (
    <>
      <SEOHead 
        title="About Us - RRB Staff Nurse Exam Authority Portal" 
        description="Learn about the team behind RRBStaffNurse.in. We are dedicated to providing accurate, timely, and comprehensive information for Railway Nursing aspirants." 
        canonicalUrl="/about"
        schema={schema}
      />
      
      <div className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-slate-600 text-lg">Empowering Nursing Aspirants with Truth & Clarity</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-xl text-slate-800 font-medium">
            Welcome to <strong>RRBStaffNurse.in</strong>, the dedicated informational hub for Indian Railway nursing recruitment exams.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Government exam notifications can be complex, scattered, and confusing. Our mission is to decode the official "Centralized Employment Notices" (CEN) and present them in a structured, easy-to-understand format. We bridge the gap between official bureaucratic documents and the aspirant's need for clarity.
          </p>

          <h2>What We Provide</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Instant Updates:</strong> Real-time alerts on Notification releases, Exam Dates, and Results.</li>
            <li><strong>Simplified Data:</strong> Complex eligibility criteria and syllabus breakdowns presented in clean tables.</li>
            <li><strong>Archive Access:</strong> A repository of previous year question trends and exam insights.</li>
            <li><strong>Expert Guidance:</strong> Strategic advice on how to tackle the 70:30 syllabus split effectively.</li>
          </ul>

          <h2>Who We Are</h2>
          <p>
            We are a team of education analysts and tech enthusiasts passionate about the healthcare sector. We understand the importance of the Staff Nurse role in Indian Railways and strive to help deserving candidates secure this prestigious position.
          </p>

          <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-8">
            <h3 className="text-lg font-bold text-rrb-red mt-0">Disclaimer</h3>
            <p className="mb-0 text-sm leading-relaxed">
              rrbstaffnurse.in is neither associated with Indian Railways nor with Railway Recruitment Board (RRB). The Official website of RRB Application is rrbapply.gov.in. rrbstaffnurse.in is a job portal sharing the Latest Vacancy Notification, Eligibility, Application Process, Exam Date of RRB Nursing Superintendent Exam Syllabus and latest updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

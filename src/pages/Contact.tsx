import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema } from '../utils/schema';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const schema = generateOrganizationSchema();

  return (
    <>
      <SEOHead 
        title="Contact Us - RRB Staff Nurse Exam Portal" 
        description="Get in touch with the RRB Staff Nurse Portal team for queries, feedback, or advertising opportunities." 
        canonicalUrl="/contact"
        schema={schema}
      />
      
      <div className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600 text-lg">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            
            <div className="flex items-start mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4 text-rrb-red">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Helpline Number</h3>
                <p className="text-slate-600 text-sm mb-1">Student Guidance & Support:</p>
                <a href="tel:+916377639169" className="text-rrb-red font-bold text-lg hover:underline">+91 6377 6391 69</a>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4 text-rrb-red">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Email Us</h3>
                <p className="text-slate-600 text-sm mb-1">For general queries:</p>
                <a href="mailto:contact@rrbstaffnurse.in" className="text-rrb-red font-medium hover:underline">contact@rrbstaffnurse.in</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4 text-rrb-red">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Registered Office</h3>
                <p className="text-slate-600 text-sm">
                  RRB Staff Nurse Portal Team<br />
                  Digital Education Hub,<br />
                  New Delhi, India - 110001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="font-medium cursor-pointer text-slate-800 hover:text-rrb-red">How can I advertise on your site?</summary>
                <p className="text-sm text-slate-600 mt-2 pl-4">Please email us with the subject line "Advertising Inquiry" for our media kit.</p>
              </details>
              <details className="group">
                <summary className="font-medium cursor-pointer text-slate-800 hover:text-rrb-red">Do you provide coaching?</summary>
                <p className="text-sm text-slate-600 mt-2 pl-4">No, we are an informational portal. We recommend NPrep Nursing for coaching.</p>
              </details>
              <details className="group">
                <summary className="font-medium cursor-pointer text-slate-800 hover:text-rrb-red">Report an error?</summary>
                <p className="text-sm text-slate-600 mt-2 pl-4">We strive for accuracy. If you find an error, please email us with the URL and details.</p>
              </details>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

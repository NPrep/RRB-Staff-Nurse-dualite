import { BookOpen, CheckCircle, Star, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { generateOrganizationSchema } from '../utils/schema';

export default function Courses() {
  const schema = generateOrganizationSchema();

  const courses = [
    {
      title: "Test Series",
      icon: CheckCircle,
      features: [
        "30,000+ Questions - QBank (Topic Wise)",
        "Each Question with Explanation",
        "Subject Wise Tests",
        "Daily Test Series",
        "Previous Year Question Papers",
        "IBQs, Clinical Scenario Questions"
      ]
    },
    {
      title: "Rapid Revision 2.0",
      exams: "RRB / NORCET / CHO / BTSC / KGMU - All Covered",
      icon: Zap,
      features: [
        "Complete Nursing Syllabus in 100 Hours",
        "Previous Year Papers - with Explanations",
        "Daily Test Series",
        "30,000+ Questions - QBank (Topic Wise)",
        "Subject Wise Tests"
      ]
    },
    {
      title: "GOLD",
      exams: "RRB / NORCET 10 & 11 / CHO / BTSC / KGMU - All Covered",
      icon: Star,
      highlight: true,
      features: [
        "900 Hours - Basic to Advanced Theory (with Clinicals)",
        "100 Hrs - Rapid Revision 2.0",
        "30,000 Questions - QBank (Topic Wise)",
        "Daily Test Series",
        "Previous Year Papers",
        "Subject Wise Papers"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Nursing Courses - RRB Staff Nurse, NORCET & CHO Prep" 
        description="Explore our premium nursing courses: Test Series, Rapid Revision 2.0, and GOLD. Comprehensive preparation for RRB Staff Nurse, NORCET, and other govt nursing exams." 
        canonicalUrl="/courses"
        schema={schema}
      />
      
      <div className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Premium Courses</h1>
          <p className="text-slate-600 text-lg">Expert-Led Preparation for RRB, NORCET, and State Nursing Exams</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`
                rounded-xl p-8 border transition-all duration-300 hover:shadow-lg flex flex-col
                ${course.highlight 
                  ? 'bg-red-50 border-red-200 ring-1 ring-red-100 relative overflow-hidden' 
                  : 'bg-white border-gray-200 hover:border-red-200'}
              `}
            >
              {course.highlight && (
                <div className="absolute top-0 right-0 bg-rrb-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}

              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl ${course.highlight ? 'bg-rrb-red text-white' : 'bg-slate-100 text-slate-700'}`}>
                  <course.icon size={28} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-xl leading-tight m-0">{course.title}</h2>
                </div>
              </div>

              {course.exams && (
                <div className="mb-6 bg-white/50 p-3 rounded-lg border border-gray-100">
                  <p className="text-xs font-bold text-rrb-red uppercase tracking-wide leading-relaxed m-0">
                    {course.exams}
                  </p>
                </div>
              )}
              
              <ul className="space-y-4 mb-8 flex-grow">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <CheckCircle size={16} className="text-rrb-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a 
                  href="https://nprep.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`
                    block w-full text-center py-4 rounded-lg text-base font-bold transition-all transform hover:-translate-y-1
                    ${course.highlight 
                      ? 'bg-rrb-red text-white hover:bg-red-700 shadow-md hover:shadow-xl shadow-red-900/10' 
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'}
                  `}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure which course is right for you?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our academic counselors can help you choose the perfect plan based on your target exam and preparation level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contact Support
            </a>
            <a href="tel:+916377639169" className="inline-block bg-transparent border border-slate-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Helpline: +91 6377 6391 69
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

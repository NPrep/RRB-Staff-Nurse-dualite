import { CheckCircle, Star, Zap } from 'lucide-react';

interface Course {
  title: string;
  exams?: string;
  icon: React.ElementType;
  features: string[];
  highlight?: boolean;
}

export default function CoursesMenu() {
  const courses: Course[] = [
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
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`
                rounded-lg p-5 border transition-all hover:shadow-md
                ${course.highlight 
                  ? 'bg-red-50 border-red-100 ring-1 ring-red-200' 
                  : 'bg-white border-gray-200 hover:border-red-100'}
              `}
            >
              <div className="flex items-start space-x-3 mb-3">
                <div className={`p-2 rounded-lg ${course.highlight ? 'bg-rrb-red text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <course.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{course.title}</h3>
                  {course.exams && (
                    <p className="text-xs font-semibold text-rrb-red mt-1 uppercase tracking-wide">
                      {course.exams}
                    </p>
                  )}
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-gray-100/50">
                <a 
                  href="https://nprep.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`
                    block w-full text-center py-2 rounded-md text-sm font-bold transition-colors
                    ${course.highlight 
                      ? 'bg-rrb-red text-white hover:bg-red-700' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}
                  `}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function QuickNavTable() {
  const links = [
    { title: 'Notification PDF', path: '/rrb-staff-nurse-notification' },
    { title: 'Exam Date', path: '/rrb-staff-nurse-exam-date' },
    { title: 'Syllabus & Pattern', path: '/rrb-staff-nurse-syllabus' },
    { title: 'Eligibility Check', path: '/rrb-staff-nurse-eligibility' },
    { title: 'Cut Off Marks', path: '/rrb-staff-nurse-cut-off' },
    { title: 'Check Result', path: '/rrb-staff-nurse-result' },
    { title: 'Apply Online', path: '/rrb-staff-nurse-application-form' },
    { title: 'Admit Card', path: '/rrb-staff-nurse-admit-card' },
  ];

  return (
    <div className="my-8 bg-white rounded-lg shadow-card overflow-hidden border border-gray-200">
      <div className="bg-rrb-red px-6 py-4">
        <h3 className="text-white font-bold text-lg m-0">
          Quick Navigation
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0">
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.path}
            className={`
              flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 hover:bg-rrb-light hover:text-rrb-red transition-colors text-center
              md:border-r border-gray-100 last:border-r-0
            `}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

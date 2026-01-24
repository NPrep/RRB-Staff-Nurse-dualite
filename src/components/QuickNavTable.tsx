import { Link } from 'react-router-dom';

export default function QuickNavTable() {
  const links = [
    { name: 'Notification', path: '/rrb-staff-nurse-notification' },
    { name: 'Exam Date', path: '/rrb-staff-nurse-exam-date' },
    { name: 'Syllabus', path: '/rrb-staff-nurse-syllabus' },
    { name: 'Eligibility', path: '/rrb-staff-nurse-eligibility' },
    { name: 'Admit Card', path: '/rrb-staff-nurse-admit-card' },
    { name: 'Cut Off', path: '/rrb-staff-nurse-cut-off' },
    { name: 'Result', path: '/rrb-staff-nurse-result' },
    { name: 'Apply Online', path: '/rrb-staff-nurse-application-form' },
  ];

  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-gray-200 text-sm">
        <tbody>
          <tr className="grid grid-cols-2 md:grid-cols-4">
            {links.map((link) => (
              <td key={link.path} className="border border-gray-200 p-0 block">
                <Link 
                  to={link.path} 
                  className="block w-full h-full p-3 text-center text-slate-700 hover:bg-red-50 hover:text-rrb-red font-medium transition-colors no-underline"
                >
                  {link.name}
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

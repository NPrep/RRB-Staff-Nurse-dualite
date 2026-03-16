import { Link } from 'react-router-dom';

export default function QuickNavTable() {
  const links = [
    { name: 'Notification', path: '/rrb-staff-nurse-notification' },
    { name: 'Vacancy', path: '/rrb-staff-nurse-vacancy' },
    { name: 'Eligibility', path: '/rrb-staff-nurse-eligibility' },
    { name: 'Exam Pattern', path: '/rrb-staff-nurse-exam-pattern' },
    { name: 'Salary', path: '/rrb-staff-nurse-salary' },
    { name: 'Admit Card', path: '/rrb-staff-nurse-admit-card' }
  ];

  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-gray-200 text-sm">
        <tbody>
          <tr className="grid grid-cols-2 md:grid-cols-3">
            {links.map((link) => (
              <td key={link.path} className="border border-gray-200 p-0 block">
                <Link to={link.path} className="block w-full h-full p-3 text-center text-slate-700 hover:bg-red-50 hover:text-rrb-red font-medium transition-colors no-underline">
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

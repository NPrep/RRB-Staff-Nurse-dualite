import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ClipboardList, CheckCircle, MousePointerClick } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    { 
      title: 'Apply Online', 
      icon: MousePointerClick, 
      path: '/rrb-staff-nurse-application-form',
      desc: 'Direct Link & Steps',
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      title: 'Admit Card', 
      icon: ClipboardList, 
      path: '/rrb-staff-nurse-admit-card',
      desc: 'Download Hall Ticket',
      color: 'bg-yellow-50 text-yellow-600'
    },
    { 
      title: 'Check Result', 
      icon: CheckCircle, 
      path: '/rrb-staff-nurse-result',
      desc: 'Merit List PDF',
      color: 'bg-green-50 text-green-600'
    },
    { 
      title: 'Syllabus', 
      icon: FileText, 
      path: '/rrb-staff-nurse-syllabus',
      desc: 'Latest Pattern',
      color: 'bg-purple-50 text-purple-600'
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {features.map((item, index) => (
        <Link 
          key={index} 
          to={item.path}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-rrb-red transition-all group no-underline text-center flex flex-col items-center"
        >
          <div className={`p-4 rounded-full mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
            <item.icon size={28} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-rrb-red transition-colors m-0">
            {item.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wide">
            {item.desc}
          </p>
        </Link>
      ))}
    </div>
  );
}

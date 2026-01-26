import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Bell, ClipboardCheck } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    { 
      title: 'Courses', 
      icon: BookOpen, 
      path: '/courses',
      desc: 'Premium Prep Batches',
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      title: 'Syllabus', 
      icon: FileText, 
      path: '/rrb-staff-nurse-syllabus',
      desc: 'Updated Exam Pattern',
      color: 'bg-green-50 text-green-600'
    },
    { 
      title: 'Notification', 
      icon: Bell, 
      path: '/rrb-staff-nurse-notification',
      desc: 'Download PDF',
      color: 'bg-yellow-50 text-yellow-600'
    },
    { 
      title: 'PYQ & Tests', 
      icon: ClipboardCheck, 
      path: '/free-tests',
      desc: 'Practice Papers',
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

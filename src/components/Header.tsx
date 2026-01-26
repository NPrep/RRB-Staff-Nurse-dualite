import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, TrainFront } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Notification', path: '/rrb-staff-nurse-notification' },
    { name: 'Syllabus', path: '/rrb-staff-nurse-syllabus' },
    { name: 'PYQs', path: '/free-tests' },
    { name: 'Blogs', path: '/blog' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 no-underline z-50 relative">
            <div className="bg-rrb-red p-2 rounded-lg text-white">
              <TrainFront size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl text-slate-900 leading-none">
                RRB <span className="text-rrb-red">Staff Nurse</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                Exam Prep Portal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 items-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-md font-medium text-sm transition-colors no-underline text-slate-700 hover:bg-rrb-light hover:text-rrb-red"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-rrb-red transition-colors z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-full max-h-[90vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 text-base font-medium rounded-md no-underline text-slate-700 hover:text-rrb-red hover:bg-rrb-light"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

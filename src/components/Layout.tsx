import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NPrepCTA from './NPrepCTA';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Header />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <NPrepCTA />
      <Footer />
    </div>
  );
}

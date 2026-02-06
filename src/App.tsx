import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import PillarPage from './pages/PillarPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import FreeTests from './pages/FreeTests';
import SuccessStories from './pages/SuccessStories';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* Static Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/free-tests" element={<FreeTests />} />
            <Route path="/success-stories" element={<SuccessStories />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Dynamic Route for Pillar Pages - Placed last to avoid conflict */}
            <Route path="/:slug" element={<PillarPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PillarPage from './pages/PillarPage';
import ScrollToTop from './components/ScrollToTop';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<PillarPage />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './src/components/ui/Chatbot';
import { useAnalytics } from './src/hooks/useAnalytics';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const WorkflowReview = lazy(() => import('./pages/WorkflowReview'));

// Simple loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppContent: React.FC = () => {
  useAnalytics();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/workflow-review" element={<WorkflowReview />} />
        </Routes>
      </Suspense>
      <Footer />
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;

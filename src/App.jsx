import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';

import HeuristicsLayout from './layouts/HeuristicsLayout';

const HeuristicsList = React.lazy(() => import('./pages/Heuristics/HeuristicsList'));
const HeuristicDetail = React.lazy(() => import('./pages/Heuristics/HeuristicDetail'));
const LawsLayout = React.lazy(() => import('./layouts/LawsLayout'));
const LawDetail = React.lazy(() => import('./pages/Laws/LawDetail'));
const QuizEngine = React.lazy(() => import('./pages/Quiz/QuizEngine'));
const ComingSoon = React.lazy(() => import('./pages/ComingSoon'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div className="p-8">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* Heuristics Module with Master-Detail Layout */}
            <Route path="heuristics" element={<HeuristicsLayout />}>
              <Route index element={<Navigate to="visibility-of-system-status" replace />} />
              <Route path=":id" element={<HeuristicDetail />} />
            </Route>

            {/* UX Laws Module */}
            <Route path="laws" element={<LawsLayout />}>
              <Route index element={<Navigate to="aesthetic-usability-effect" replace />} />
              <Route path=":id" element={<LawDetail />} />
            </Route>
            {/* Other Modules */}
            <Route path="ai-design" element={<ComingSoon title="AI & Design" subtitle="Exploring the intersection of generative AI and user interface design." icon="sparkles" />} />
            <Route path="behavioral-design" element={<ComingSoon title="Behavioral Design" subtitle="Understanding the psychology behind user decisions and habits." icon="brain" />} />
            <Route path="top-tools" element={<ComingSoon title="Top Tools" subtitle="A curated collection of the best tools for modern product design." icon="wrench" />} />

            <Route path="quiz" element={<QuizEngine />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;

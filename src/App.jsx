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
const Learning = React.lazy(() => import('./pages/Learning'));
const ComingSoon = React.lazy(() => import('./pages/ComingSoon'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div className="p-8">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* New Learning Dashboard */}
            <Route path="learning" element={<Learning />} />

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

            {/* New Placeholder Pages */}
            <Route path="ai-design" element={<ComingSoon title="AI & Design" subtitle="Exploring the intersection of generative AI and user interface design." icon={React.lazy(() => import('lucide-react').then(module => ({ default: module.Sparkles })))} />} />
            <Route path="jobs" element={<ComingSoon title="Design Jobs" subtitle="Find your next role at top design-driven companies." icon={React.lazy(() => import('lucide-react').then(module => ({ default: module.Briefcase })))} />} />
            <Route path="mentorship" element={<ComingSoon title="Mentorship" subtitle="Connect with industry experts and grow your career." icon={React.lazy(() => import('lucide-react').then(module => ({ default: module.Users })))} />} />
            <Route path="shop" element={<ComingSoon title="Shop" subtitle="Digital assets, prints, and merch for designers." icon={React.lazy(() => import('lucide-react').then(module => ({ default: module.ShoppingBag })))} />} />
            <Route path="more" element={<ComingSoon title="Coming Soon" subtitle="More exciting features are on the way." icon={React.lazy(() => import('lucide-react').then(module => ({ default: module.MoreHorizontal })))} />} />

            <Route path="quiz" element={<QuizEngine />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;

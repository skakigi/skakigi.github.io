import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import PhotographyPage from './pages/PhotographyPage.jsx';
import EngineeringPage from './pages/EngineeringPage.jsx';
import PhotoDetailPage from './pages/PhotoDetailPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photography" element={<PhotographyPage />} />
      <Route path="/engineering" element={<EngineeringPage />} />
      <Route path="/photography/:slug" element={<PhotoDetailPage />} />
    
    </Routes>
  );
}
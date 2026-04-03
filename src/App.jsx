import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import PhotographyPage from './pages/PhotographyPage.jsx';
import EngineeringPage from './pages/EngineeringPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photography" element={<PhotographyPage />} />
      <Route path="/engineering" element={<EngineeringPage />} />
    </Routes>
  );
}
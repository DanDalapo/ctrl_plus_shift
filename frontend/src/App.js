import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import LandingPage from './pages/Landing';
import ProfileSettings from './pages/ProfileSettings'; // 1. Import Profile Settings

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page is the default entry point */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Main Dashboard */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Settings Page */}
        <Route path="/settings" element={<ProfileSettings />} />

        {/* Placeholders for pages we haven't built yet */}
        <Route path="/candidates" element={<div>Candidates Page (Coming Soon)</div>} />
        <Route path="/vote" element={<div>Vote Page (Coming Soon)</div>} />
        <Route path="/results" element={<div>Results Page (Coming Soon)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
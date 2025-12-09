import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import LandingPage from './pages/Landing';
import ProfileSettings from './pages/ProfileSettings';
import AccountSettings from './pages/AccountSettings';
import NotificationSettings from './pages/NotificationSettings';
import SecuritySettings from './pages/SecuritySettings';
import CandidatesPage from './pages/Candidates';
import ApplyCandidacy from './pages/ApplyCandidacy';
import VotePage from './pages/Vote';
import ResultsPage from './pages/Results'; // Import the new Results Page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page is the default entry point ("/") */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Main Dashboard */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Settings Pages */}
        <Route path="/settings" element={<ProfileSettings />} />
        <Route path="/settings/account" element={<AccountSettings />} />
        <Route path="/settings/notifications" element={<NotificationSettings />} />
        <Route path="/settings/security" element={<SecuritySettings />} />

        {/* Feature Pages */}
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/apply-candidacy" element={<ApplyCandidacy />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/results" element={<ResultsPage />} /> {/* New Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
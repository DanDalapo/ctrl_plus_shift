import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/landing.css';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType) => {
    navigate('/register', { state: { userType } });
  }

  return (
      <div className="landing-container">
        {/* Main Header Section */}
        <header className="landing-header">
          <h1>Welcome to BotoTeknoy</h1>
          <p>Your voice matters. Shape the future of our student community through democratic participation.</p>
        </header>

        {/* "Get Started" Section */}
        <section className="get-started-section">
          <h2>Get Started</h2>
          <p>Choose how you'd like to participate in student elections</p>
        </section>

        {/* Cards Container */}
        <div className="landing-cards-container">
          
          {/* Candidate Card (Left) */}
          <div className="landing-card candidate-card">
            <div className="card-icon-wrapper candidate-icon-wrapper">
              {/* White Circle with Gold Star */}
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white" />
                <path 
                  d="M12 15.4L8.24 17.66 9.24 13.38 5.92 10.51 10.3 10.13 12 6.1 13.7 10.13 18.08 10.51 14.76 13.38 15.76 17.66z" 
                  fill="#d4af37" 
                />
              </svg>
            </div>
            <h2>I'm a Candidate</h2>
            <p className="card-subtitle">Run for office and lead your peers</p>
            
            <ul className="benefit-list">
              <li>
                <span className="check-icon candidate-check">✓</span>
                Create and manage your campaign profile
              </li>
              <li>
                <span className="check-icon candidate-check">✓</span>
                Share your platform and vision
              </li>
              <li>
                <span className="check-icon candidate-check">✓</span>
                Monitor your campaign progress
              </li>
              <li>
                <span className="check-icon candidate-check">✓</span>
                Engage with voters and answer questions
              </li>
            </ul>
            
            <button 
              onClick={() => handleUserTypeSelection('CANDIDATE')} 
              className="card-button candidate-button"
              style={{border: 'none', cursor: 'pointer'}}
            >
              Continue as Candidate
            </button>
          </div>

          {/* Vertical Divider */}
          <div className="card-divider"></div>

          {/* Voter Card (Right) */}
          <div className="landing-card voter-card">
            <div className="card-icon-wrapper voter-icon-wrapper">
              {/* Single Person Icon */}
              <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2>I'm a Voter</h2>
            <p className="card-subtitle">Cast your vote and make your voice heard</p>
            
            <ul className="benefit-list">
              <li>
                <span className="check-icon voter-check">✓</span>
                View all candidates and their platforms
              </li>
              <li>
                <span className="check-icon voter-check">✓</span>
                Participate in all active elections
              </li>
              <li>
                <span className="check-icon voter-check">✓</span>
                Track results in real-time
              </li>
              <li>
                <span className="check-icon voter-check">✓</span>
                Get notified about new elections
              </li>
            </ul>
            
            <button 
              onClick={() => handleUserTypeSelection('VOTER')} 
              className="card-button voter-button"
              style={{border: 'none', cursor: 'pointer'}}
            >
              Continue as Voter
            </button>
          </div>

        </div>
      </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

const NEWS_IMAGE_URL = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"; 

export default class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Guest',
      lastName: '',
      email: 'Please log in'
    };
  }

  // 2. Load Data when page opens
  componentDidMount() {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
        this.setState({
          firstName: userObj.firstName,
          lastName: userObj.lastName,
          email: userObj.email
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        
        <aside className="sidebar">
          <div className="user-profile">
            <div className="avatar-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            {/* 3. Display Dynamic Data Here */}
            <div className="user-info">
              <h3 className="user-name">
                {this.state.firstName} {this.state.lastName}
              </h3>
              <p className="user-email">{this.state.email}</p>
            </div>

            <button className="profile-arrow">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M15 18l-6-6 6-6"/>
               </svg>
            </button>
          </div>

          {/* Navigation Links (Red) */}
          <nav className="nav-menu">
            <Link to="/home" className="nav-item active">
              Home
            </Link>
            <Link to="/candidates" className="nav-item">
              Candidates
            </Link>
            <Link to="/vote" className="nav-item">
              Vote
            </Link>
            <Link to="/results" className="nav-item">
              Results
            </Link>
            <Link to="/settings" className="nav-item">
              Settings
            </Link>
          </nav>

          {/* Sign Out (Bottom) */}
          <div className="sidebar-footer">
            <Link 
              to="/login" 
              className="nav-item sign-out"
              onClick={() => {
                localStorage.removeItem('user');
                sessionStorage.removeItem('user');
              }}
            >
              Sign Out
            </Link>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="main-content">
          
          <header className="top-header">
            {/* Empty header as requested */}
          </header>

          <div className="content-scrollable">
            
            {/* 1. Welcome Banner */}
            <section className="welcome-banner">
              <h2>Welcome to Student Elections 2025</h2>
              <p>Your voice matters. Participate in shaping the future of our student community.</p>
              
              <div className="feature-cards">
                <div className="feature-card">
                  <div className="f-icon">🛡️</div>
                  <div className="f-text">
                    <h4>Secure Voting</h4>
                    <span>End-to-end encrypted</span>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="f-icon">📈</div>
                  <div className="f-text">
                    <h4>Live Results</h4>
                    <span>Real-time updates</span>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="f-icon">👤</div>
                  <div className="f-text">
                    <h4>Anonymous</h4>
                    <span>Your vote is private</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Countdown Timer Section */}
            <section className="timer-section">
              <div className="timer-header">
                <span className="timer-icon">🕒</span>
                <h3>Voting Ends In</h3>
              </div>

              <div className="countdown-grid">
                <div className="time-box">
                  <span className="time-val">0</span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-box">
                  <span className="time-val">0</span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-box">
                  <span className="time-val">0</span>
                  <span className="time-label">Mins</span>
                </div>
                <div className="time-box">
                  <span className="time-val">0</span>
                  <span className="time-label">Secs</span>
                </div>
              </div>

              <div className="timer-warning">
                <span className="warning-icon">⚠️</span>
                <span>Don't miss your chance to vote! Elections close on October 20, 2025 at 11:59 PM.</span>
              </div>
            </section>

            {/* 3. News & Updates Section */}
            <section className="news-section">
              <div className="news-header-title">
                <span className="news-icon">📰</span>
                <h3>Latest News & Updates</h3>
              </div>

              {/* News Card 1 */}
              <div className="news-card">
                <div className="news-image" style={{backgroundImage: `url(${NEWS_IMAGE_URL})`}}></div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="tag announcement">Announcement</span>
                    <span className="date">Oct 30, 2025</span>
                  </div>
                  <h4 className="news-headline">
                    'Above the Rules?': University President Sparks Outrage Over Alleged Unpaid Debts to Students
                  </h4>
                  <p className="news-excerpt">
                    Sources claim Student President Mark "The Banker" Jennings laughed off requests for repayment, as students demand answers and accountability...
                  </p>
                  <a href="#" className="read-more">Read more &gt;</a>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    );
  }
}
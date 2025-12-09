import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.updateTimer();
    this.timerInterval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  updateTimer = () => {
    const eventDate = new Date("October 20, 2025 23:59:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
      this.setState({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    } else {
      clearInterval(this.timerInterval);
    }
  };

  handlePlaceholderClick = (e) => {
    e.preventDefault();
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    const newsItems = [
      {
        id: 1,
        title: "𝗖𝗜𝗧–𝗨 𝗔𝗧 𝟳𝟵",
        date: "Dec 09, 2025",
        tag: "University",
        image: "/79 CIT.png", 
        excerpt: "Today, the Technologian community celebrates the 79th Founder's Day of the institution, honoring the legacy of the late and former University President Nicholas G. Escario Sr. Established in 1946, in the wake of a war, Cebu Institute of Technology–University (CIT–U) sprang as a gear of hope with the leadership of Dr. Escario Sr."
      },
      {
        id: 2,
        title: "𝗡𝗘𝗪𝗦 𝗨𝗣𝗗𝗔𝗧𝗘: CIT–U BAGS 3 WINS IN 10TH HUAWEI ICT COMPETITION",
        date: "Dec 05, 2025",
        tag: "Achievement",
        image: "/News Update.png",
        excerpt: "Dominating the tech contest for three consecutive years, the Cebu Institute of Technology–University (CIT–U) won three awards at the 10th Huawei ICT Competition, with the awarding ceremony held today, December 5. Three teams represented CIT–U in different categories, competing against various universities across the country."
      }
    ];

    return (
      <div className="dashboard-container">
    
        <aside className="sidebar">
          <div className="sidebar-brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <span className="brand-text">BotoTeknoy</span>
          </div>

          <div className="user-profile-compact">
            <div className="avatar-circle">
              <span className="initials">JD</span>
            </div>
            <div className="user-info-compact">
              <h4 className="user-name">John Doe</h4>
              <span className="user-role">Student Voter</span>
            </div>
          </div>

          <nav className="nav-menu">
            <Link to="/home" className="nav-item active">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Home
            </Link>
            <Link to="/candidates" className="nav-item">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Candidates
            </Link>
            <Link to="/vote" className="nav-item">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              Vote
            </Link>
            <Link to="/results" className="nav-item">
                <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                Results
            </Link>
            {/* FIXED SETTINGS ICON */}
            <Link to="/settings" className="nav-item">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Settings
            </Link>
          </nav>

          <div className="sidebar-footer">
            <Link to="/login" className="nav-item sign-out">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Sign Out
            </Link>
          </div>
        </aside>

        <main className="main-content">
          
          <div className="content-scrollable">
            
            <section className="welcome-banner">
              <div className="banner-text">
                <h1>Welcome back, John</h1>
                <p>The 2025 Student Council Elections are fast approaching. Make sure you're informed and ready to vote.</p>
              </div>
              
              <div className="feature-stats">
                <div className="stat-item">
                  <span className="stat-val">12</span>
                  <span className="stat-label">Candidates</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-val">3</span>
                  <span className="stat-label">Positions</span>
                </div>
              </div>
            </section>

            <div className="dashboard-grid">
              
              <div className="grid-column-left">
                
                <section className="dashboard-card timer-card">
                  <div className="card-header">
                    <h3>
                      <svg className="section-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Election Countdown
                    </h3>
                  </div>
                  <div className="countdown-display">
                    <div className="time-unit">
                      <span className="unit-value">{days}</span>
                      <span className="unit-label">Days</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                      <span className="unit-value">{hours}</span>
                      <span className="unit-label">Hrs</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                      <span className="unit-value">{minutes}</span>
                      <span className="unit-label">Mins</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                      <span className="unit-value">{seconds}</span>
                      <span className="unit-label">Secs</span>
                    </div>
                  </div>
                  <div className="timer-footer">
                    Voting closes on <strong>Oct 20, 2025</strong>
                  </div>
                </section>

                 <section className="quick-actions">
                    <div className="action-pill">
                      <span className="pill-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      </span> Secure
                    </div>
                    <div className="action-pill">
                      <span className="pill-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                      </span> Live Results
                    </div>
                    <div className="action-pill">
                      <span className="pill-icon">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </span> Anonymous
                    </div>
                 </section>
              </div>

              <div className="grid-column-right">
                <section className="dashboard-card news-section">
                  <div className="card-header">
                    <h3>
                      <svg className="section-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                      Latest News
                    </h3>
                    <a href="#" onClick={this.handlePlaceholderClick} className="view-all-link">View All</a>
                  </div>

                  <div className="news-list">
                    {newsItems.map(item => (
                      <div className="news-item" key={item.id}>
                        <div className="news-image" style={{backgroundImage: `url('${item.image}')`}}></div>
                        <div className="news-details">
                          <div className="news-tags">
                            <span className="tag-pill announcement">{item.tag}</span>
                            <span className="news-date">{item.date}</span>
                          </div>
                          <h4 className="news-title">{item.title}</h4>
                          <p className="news-excerpt">
                            {item.excerpt}
                          </p>
                          <a href="#" onClick={this.handlePlaceholderClick} className="read-more-link">Read full story →</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

            </div>
          </div>
        </main>
      </div>
    );
  }
}
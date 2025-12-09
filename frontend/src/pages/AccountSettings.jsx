import React from 'react';
import { Link } from 'react-router-dom';
import './css/account_settings.css';
import './css/home.css'; // Import shared dashboard styles

export default class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    
    // Get user data from localStorage or sessionStorage
    const userData = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || '{}');
    
    this.state = {
      userData: userData,
      fullName: `${userData.firstname || ''} ${userData.lastName || ''}`.trim() || 'John Doe',
      email: userData.email || 'student@cit.edu',
      studentID: userData.strStudentID || '00-0000-000',
      userType: userData.userType || 'VOTER'
    };
  }

  getInitials = () => {
    const { firstname, lastName } = this.state.userData;
    const firstInitial = (firstname || '').charAt(0).toUpperCase();
    const lastInitial = (lastName || '').charAt(0).toUpperCase();
    return firstInitial + lastInitial || 'JD';
  }

  render() {
    return (
      <div className="dashboard-container">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <span className="brand-text">BotoTeknoy</span>
          </div>

          <div className="user-profile-compact">
            <div className="avatar-circle">
              <span className="initials">{this.getInitials()}</span>
            </div>
            <div className="user-info-compact">
              <h4 className="user-name">{this.state.fullName}</h4>
              <span className="user-role">{this.state.userType === 'CANDIDATE' ? 'Candidate' : 'Student Voter'}</span>
            </div>
          </div>

          <nav className="nav-menu">
            <Link to="/home" className="nav-item">
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
            <Link to="/settings" className="nav-item active">
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

        {/* MAIN SETTINGS CONTENT */}
        <main className="main-content">
          <div className="content-scrollable">
            
            <div className="settings-header-block">
              <h1>Settings</h1>
              <p>Manage your personal information and preferences.</p>
            </div>

            {/* Navigation Tabs - Updated to use Links */}
            <div className="settings-tabs">
              <Link to="/settings" className="tab-button">Profile</Link>
              <Link to="/settings/account" className="tab-button active">Account</Link>
              <Link to="/settings/notifications" className="tab-button">Notifications</Link>
              <Link to="/settings/security" className="tab-button">Security</Link>
            </div>

            {/* Account Content Card */}
            <div className="dashboard-card settings-card">
              <div className="account-section">
                <div className="section-header">
                  <h2>Account Details</h2>
                  <p className="section-description">View your account information and student ID status.</p>
                </div>

                <div className="account-details-grid">
                  {/* Student ID */}
                  <div className="detail-item">
                    <label>Student ID</label>
                    <div className="detail-value">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', color: 'var(--text-muted)'}}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {this.state.studentID}
                    </div>
                  </div>

                  {/* Account Status */}
                  <div className="detail-item">
                    <label>Account Status</label>
                    <div className="detail-value status-active">
                      <span className="status-dot"></span>
                      Active
                    </div>
                  </div>

                  {/* Elections Participated */}
                  <div className="detail-item full-width">
                    <label>Elections Participated</label>
                    <div className="detail-value">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', color: 'var(--text-muted)'}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      2 Elections
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
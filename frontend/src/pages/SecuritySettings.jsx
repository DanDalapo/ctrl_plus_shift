import React from 'react';
import { Link } from 'react-router-dom';
import './css/profile_settings.css'; 
import './css/account_settings.css'; 
import './css/security_settings.css'; // Import the new styles
import './css/home.css';

export default class SecuritySettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="dashboard-container">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="user-profile">
             <div className="avatar-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="user-info">
              <h3 className="user-name">John Doe</h3>
              <p className="user-email">john.doe@cit.edu</p>
            </div>
          </div>

          <nav className="nav-menu">
            <Link to="/home" className="nav-item">Home</Link>
            <Link to="/candidates" className="nav-item">Candidates</Link>
            <Link to="/vote" className="nav-item">Vote</Link>
            <Link to="/results" className="nav-item">Results</Link>
            <Link to="/settings" className="nav-item active">Settings</Link>
          </nav>

          <div className="sidebar-footer">
            <Link to="/login" className="nav-item sign-out">Sign Out</Link>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content settings-wrapper">
          
          <div className="top-yellow-header"></div>
          
          <div className="settings-container">
            <div className="settings-header">
              <h1>Settings</h1>
            </div>

            {/* TABS */}
            <div className="settings-tabs">
              <Link to="/settings" className="tab-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Profile
              </Link>
              
              <Link to="/settings/account" className="tab-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Account
              </Link>
              
              <Link to="/settings/notifications" className="tab-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                   <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Notifications
              </Link>
              
              {/* Security Tab - Active */}
              <Link to="/settings/security" className="tab-link active">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Security
              </Link>
            </div>

            {/* Security Content Card */}
            <div className="settings-content-card">
              <div className="security-section">
                <h2>Security Settings</h2>
                <p className="section-description">Manage your password and security preferences</p>

                <h3 className="security-subhead">Change Password</h3>

                <div className="password-form">
                  <div className="form-group-security">
                    <label>Current Password</label>
                    <input 
                      type="password" 
                      name="currentPassword" 
                      className="security-input"
                      value={this.state.currentPassword}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group-security">
                    <label>New Password</label>
                    <input 
                      type="password" 
                      name="newPassword" 
                      className="security-input"
                      value={this.state.newPassword}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group-security">
                    <label>Confirm New Password</label>
                    <input 
                      type="password" 
                      name="confirmPassword" 
                      className="security-input"
                      value={this.state.confirmPassword}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <button className="update-pass-btn">Update Password</button>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
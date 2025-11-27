import React from 'react';
import { Link } from 'react-router-dom';
import './css/profile_settings.css';
import './css/home.css';

export default class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'profile',
      fullName: 'student name',
      email: 'assdqweqwe@cit.edu',
      phone: '(032) 000 123 1458',
      dob: 'mm/dd/yy',
      bio: '',
      bioCharCount: 0
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
    if (name === 'bio') {
      this.setState({ bioCharCount: value.length });
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div className="dashboard-container">
        
        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* Top Yellow Section (Logo/Profile placeholder to match header) */}
          <div className="user-profile">
            {/* You can replace this with the BotoTeknoy Logo if you want it exactly like the screenshot, 
                but keeping the user profile for now to match Home.jsx structure */}
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

          {/* Navigation Links (No Emojis, Bold as per Home style) */}
          <nav className="nav-menu">
            <Link to="/home" className="nav-item">
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
            <Link to="/settings" className="nav-item active">
              Settings
            </Link>
          </nav>

          {/* Sign Out */}
          <div className="sidebar-footer">
            <Link to="/login" className="nav-item sign-out">
              Sign Out
            </Link>
          </div>
        </aside>

        {/* MAIN SETTINGS CONTENT */}
        <main className="main-content settings-wrapper">
          
          {/* NEW: Yellow Header Extension */}
          <div className="top-yellow-header"></div>
          
          <div className="settings-container">
            <div className="settings-header">
              <h1>Settings</h1>
            </div>

            {/* Tabs (No Emojis, Bold) */}
            <div className="settings-tabs">
              <button 
                className={`tab-button ${this.state.activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => this.handleTabClick('profile')}
              >
                Profile
              </button>
              <button 
                className={`tab-button ${this.state.activeTab === 'account' ? 'active' : ''}`}
                onClick={() => this.handleTabClick('account')}
              >
                Account
              </button>
              <button 
                className={`tab-button ${this.state.activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => this.handleTabClick('notifications')}
              >
                Notifications
              </button>
              <button 
                className={`tab-button ${this.state.activeTab === 'security' ? 'active' : ''}`}
                onClick={() => this.handleTabClick('security')}
              >
                Security
              </button>
            </div>

            {/* Content Card */}
            <div className="settings-content-card">
              <div className="profile-section">
                <h2>Profile Information</h2>
                <p className="section-description">Update your profile picture and personal information</p>

                {/* Profile Picture */}
                <div className="profile-picture-section">
                  <h3>Profile Picture</h3>
                  <div className="picture-upload">
                    <div className="picture-preview">
                      <svg className="default-avatar" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="picture-actions">
                      <button className="change-picture-btn">
                        <span className="camera-icon">📷</span> Change Picture
                      </button>
                      <p className="picture-hint">Choose from default avatars or enter a custom URL</p>
                    </div>
                  </div>
                </div>

                <hr className="divider" />

                {/* Form Fields */}
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={this.state.fullName} 
                      onChange={this.handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={this.state.email} 
                      onChange={this.handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="text" 
                      name="phone" 
                      value={this.state.phone} 
                      onChange={this.handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input 
                      type="text" 
                      name="dob" 
                      value={this.state.dob} 
                      onChange={this.handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group bio-group">
                    <label>Bio</label>
                    <textarea 
                      name="bio" 
                      placeholder="tell us about yourself..." 
                      value={this.state.bio}
                      onChange={this.handleInputChange}
                      maxLength="500"
                      className="form-input"
                    ></textarea>
                    <div className="char-count">{this.state.bioCharCount} / 500 characters</div>
                  </div>
                </div>

                <hr className="divider" />

                <div className="form-actions">
                  <button className="save-btn">
                    Save Changes
                  </button>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
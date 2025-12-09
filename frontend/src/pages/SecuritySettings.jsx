import React from 'react';
import { Link } from 'react-router-dom';
import './css/profile_settings.css'; // Re-use form styles
import './css/security_settings.css';
import './css/home.css';

export default class SecuritySettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    toggleVisibility = (field) => {
        this.setState(prevState => ({
        [field]: !prevState[field]
        }));
    }

    render() {
        return (
        <div className="dashboard-container">
            
            {/* SIDEBAR START */}
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
            {/* SIDEBAR END (Correctly Closed) */}

            {/* MAIN CONTENT */}
            <main className="main-content">
            <div className="content-scrollable">
                
                <div className="settings-header-block">
                <h1>Settings</h1>
                <p>Manage your personal information and preferences.</p>
                </div>

                {/* Tabs */}
                <div className="settings-tabs">
                <Link to="/settings" className="tab-button">Profile</Link>
                <Link to="/settings/account" className="tab-button">Account</Link>
                <Link to="/settings/notifications" className="tab-button">Notifications</Link>
                <Link to="/settings/security" className="tab-button active">Security</Link>
                </div>

                <div className="dashboard-card settings-card">
                <div className="security-section">
                    
                    <div className="section-header">
                    <h2>Security Settings</h2>
                    <p className="section-description">Manage your password and account security.</p>
                    </div>

                    <div className="password-form">
                    <h3 className="security-subhead">Change Password</h3>
                    
                    {/* Current Password */}
                    <div className="form-group">
                        <label>Current Password</label>
                        <div className="password-input-wrapper">
                        <input 
                            type={this.state.showCurrentPassword ? 'text' : 'password'} 
                            name="currentPassword" 
                            className="form-input"
                            value={this.state.currentPassword}
                            onChange={this.handleInputChange}
                        />
                        <button 
                            className="password-toggle-btn" 
                            onClick={() => this.toggleVisibility('showCurrentPassword')}
                            type="button"
                            title={this.state.showCurrentPassword ? "Hide password" : "Show password"}
                        >
                            {this.state.showCurrentPassword ? 
                            /* If Visible -> Show OPEN EYE (without slash) */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            : 
                            /* If Hidden -> Show SLASHED EYE */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            }
                        </button>
                        </div>
                    </div>

                    {/* New Password */}
                    <div className="form-group">
                        <label>New Password</label>
                        <div className="password-input-wrapper">
                        <input 
                            type={this.state.showNewPassword ? 'text' : 'password'} 
                            name="newPassword" 
                            className="form-input"
                            value={this.state.newPassword}
                            onChange={this.handleInputChange}
                        />
                        <button 
                            className="password-toggle-btn" 
                            onClick={() => this.toggleVisibility('showNewPassword')}
                            type="button"
                            title={this.state.showNewPassword ? "Hide password" : "Show password"}
                        >
                            {this.state.showNewPassword ? 
                            /* Visible -> Open Eye */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            : 
                            /* Hidden -> Slashed Eye */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            }
                        </button>
                        </div>
                    </div>

                    {/* Confirm New Password */}
                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <div className="password-input-wrapper">
                        <input 
                            type={this.state.showConfirmPassword ? 'text' : 'password'} 
                            name="confirmPassword" 
                            className="form-input"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                        />
                        <button 
                            className="password-toggle-btn" 
                            onClick={() => this.toggleVisibility('showConfirmPassword')}
                            type="button"
                            title={this.state.showConfirmPassword ? "Hide password" : "Show password"}
                        >
                            {this.state.showConfirmPassword ? 
                            /* Visible -> Open Eye */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            : 
                            /* Hidden -> Slashed Eye */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            }
                        </button>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button className="save-btn">Update Password</button>
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
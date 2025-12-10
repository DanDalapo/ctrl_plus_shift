import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/profile_settings.css';
import './css/security_settings.css';
import './css/home.css';

export default function SecuritySettings() {
    const [currentUser, setCurrentUser] = useState(null);
    const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
    const [visibility, setVisibility] = useState({ current: false, new: false, confirm: false });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || '{}');
        if (userData.userID) {
            setCurrentUser(userData);
        }
    }, []);

    const toggleVisibility = (field) => {
        setVisibility(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = async () => {
        if (!currentUser || !currentUser.userID) {
            setMessage({ type: 'error', text: 'User not found. Please log in again.' });
            return;
        }

        if (!passwords.current || !passwords.new || !passwords.confirm) {
            setMessage({ type: 'error', text: 'Please fill in all fields.' });
            return;
        }
        if (passwords.new !== passwords.confirm) {
            setMessage({ type: 'error', text: 'New passwords do not match.' });
            return;
        }
        if (passwords.new.length < 6) {
            setMessage({ type: 'error', text: 'New password must be at least 6 characters.' });
            return;
        }
        if (passwords.current !== currentUser.password) {
            setMessage({ type: 'error', text: 'Current password is incorrect.' });
            return;
        }
        
        setIsLoading(true);
        try {
            const API_URL = "http://localhost:8080";
            const response = await fetch(`${API_URL}/users/${currentUser.userID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...currentUser,
                    password: passwords.new
                })
            });

            if (response.ok) {
                const updated = await response.json();
                setCurrentUser(updated);
                // Update localStorage/sessionStorage
                if (localStorage.getItem('user')) {
                    localStorage.setItem('user', JSON.stringify(updated));
                }
                if (sessionStorage.getItem('user')) {
                    sessionStorage.setItem('user', JSON.stringify(updated));
                }
                setMessage({ type: 'success', text: 'Password updated successfully.' });
                setPasswords({ current: '', new: '', confirm: '' });
            } else {
                throw new Error('Update failed');
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to update password.' });
        } finally {
            setIsLoading(false);
        }
    };

    const getInitials = (first, last) => {
        if (!first || !last) return "??";
        return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    };

    // Helper to render the eye icon based on visibility state
    const renderEyeIcon = (isVisible) => {
        return isVisible ? (
            // Open Eye Icon (Visible)
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        ) : (
            // Slashed Eye Icon (Hidden)
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
        );
    };

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
                        <span className="initials">
                            {currentUser ? getInitials(currentUser.firstname, currentUser.lastName) : '...'}
                        </span>
                    </div>
                    <div className="user-info-compact">
                        <h4 className="user-name">
                            {currentUser ? `${currentUser.firstname || ''} ${currentUser.lastName || ''}`.trim() : 'Loading...'}
                        </h4>
                        <span className="user-role">
                            {currentUser ? (currentUser.userType === 'CANDIDATE' ? 'Candidate' : 'Student Voter') : ''}
                        </span>
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
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        Settings
                    </Link>
                </nav>

                <div className="sidebar-footer">
                    <Link to="/" className="nav-item sign-out">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="main-content">
                
                {/* Modals */}
                {message.text && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-icon" style={{color: message.type === 'error' ? '#ef4444' : '#16a34a'}}>
                                {message.type === 'error' ? '⚠️' : '🎉'}
                            </div>
                            <h3 className="modal-title">{message.type === 'error' ? 'Error' : 'Success'}</h3>
                            <p className="modal-message">{message.text}</p>
                            <button onClick={() => setMessage({ type: '', text: '' })} className="modal-button">Close</button>
                        </div>
                    </div>
                )}

                <div className="content-scrollable">
                    <div className="settings-header-block">
                        <h1>Settings</h1>
                        <p>Manage your personal information and preferences.</p>
                    </div>

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
                                            type={visibility.current ? 'text' : 'password'} 
                                            name="current" 
                                            className="form-input" 
                                            value={passwords.current} 
                                            onChange={handleInputChange} 
                                        />
                                        <button 
                                            className="password-toggle-btn" 
                                            type="button"
                                            onClick={() => toggleVisibility('current')}
                                        >
                                            {renderEyeIcon(visibility.current)}
                                        </button>
                                    </div>
                                </div>

                                {/* New Password */}
                                <div className="form-group">
                                    <label>New Password</label>
                                    <div className="password-input-wrapper">
                                        <input 
                                            type={visibility.new ? 'text' : 'password'} 
                                            name="new" 
                                            className="form-input" 
                                            value={passwords.new} 
                                            onChange={handleInputChange} 
                                        />
                                        <button 
                                            className="password-toggle-btn" 
                                            type="button"
                                            onClick={() => toggleVisibility('new')}
                                        >
                                            {renderEyeIcon(visibility.new)}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label>Confirm New Password</label>
                                    <div className="password-input-wrapper">
                                        <input 
                                            type={visibility.confirm ? 'text' : 'password'} 
                                            name="confirm" 
                                            className="form-input" 
                                            value={passwords.confirm} 
                                            onChange={handleInputChange} 
                                        />
                                        <button 
                                            className="password-toggle-btn" 
                                            type="button"
                                            onClick={() => toggleVisibility('confirm')}
                                        >
                                            {renderEyeIcon(visibility.confirm)}
                                        </button>
                                    </div>
                                </div>

                                <div className="form-actions">
                                    <button 
                                        className="save-btn" 
                                        onClick={handlePasswordChange}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Updating...' : 'Update Password'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
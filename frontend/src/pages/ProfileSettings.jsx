import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/profile_settings.css';
import './css/home.css';

export default function ProfileSettings() {
    // State
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        idNumber: '',
        dob: '',
        bio: ''
    });
    
    // UI States
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Fetch User Data from storage
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || '{}');
        if (userData.userID) {
            setCurrentUser(userData);
            setFormData({
                fullName: `${userData.firstname || ''} ${userData.lastName || ''}`.trim(),
                email: userData.email || '',
                idNumber: userData.strStudentID || '',
                dob: userData.dateOfBirth || '',
                bio: userData.bio || ''
            });
        }
    }, []);

    const getInitials = (first, last) => {
        if (!first || !last) return "??";
        return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async () => {
        if (!currentUser || !currentUser.userID) {
            setErrorMessage('User not found. Please log in again.');
            setShowError(true);
            return;
        }

        if (formData.bio.length > 500) {
            setErrorMessage('Bio cannot exceed 500 characters.');
            setShowError(true);
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
                    bio: formData.bio,
                  
                }),
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
                setShowSuccess(true);
            } else {
                throw new Error("Update failed");
            }
        } catch (error) {
            setErrorMessage('Failed to update profile.');
            setShowError(true);
        } finally {
            setIsLoading(false);
        }
    };    return (
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
                        <span className="initials">{currentUser ? getInitials(currentUser.firstname, currentUser.lastName) : '...'}</span>
                    </div>
                    <div className="user-info-compact">
                        <h4 className="user-name">{currentUser ? `${currentUser.firstname || ''} ${currentUser.lastName || ''}`.trim() : 'Loading...'}</h4>
                        <span className="user-role">{currentUser ? (currentUser.userType === 'CANDIDATE' ? 'Candidate' : 'Student Voter') : ''}</span>
                    </div>
                </div>

                <nav className="nav-menu">
                    <Link to="/home" className="nav-item">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                    </Link>
                    <Link to="/candidates" className="nav-item">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Candidates
                    </Link>
                    <Link to="/vote" className="nav-item">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> Vote
                    </Link>
                    <Link to="/results" className="nav-item">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Results
                    </Link>
                    <Link to="/settings" className="nav-item active">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings
                    </Link>
                </nav>

                <div className="sidebar-footer">
                    <Link to="/" className="nav-item sign-out">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Sign Out
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="main-content">
                {/* Modals for Success/Error */}
                {showError && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-icon" style={{color: '#ef4444'}}>⚠️</div>
                            <h3 className="modal-title">Error</h3>
                            <p className="modal-message">{errorMessage}</p>
                            <button onClick={() => setShowError(false)} className="modal-button">Try Again</button>
                        </div>
                    </div>
                )}
                {showSuccess && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-icon" style={{color: '#16a34a'}}>🎉</div>
                            <h3 className="modal-title">Success</h3>
                            <p className="modal-message">Profile updated successfully.</p>
                            <button onClick={() => setShowSuccess(false)} className="modal-button">Close</button>
                        </div>
                    </div>
                )}

                <div className="content-scrollable">
                    <div className="settings-header-block">
                        <h1>Settings</h1>
                        <p>Manage your personal information and preferences.</p>
                    </div>

                    <div className="settings-tabs">
                        <Link to="/settings" className="tab-button active">Profile</Link>
                        <Link to="/settings/account" className="tab-button">Account</Link>
                        <Link to="/settings/notifications" className="tab-button">Notifications</Link>
                        <Link to="/settings/security" className="tab-button">Security</Link>
                    </div>

                    <div className="dashboard-card settings-card">
                        <div className="profile-section">
                            <div className="profile-picture-section">
                                <div className="picture-preview">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                </div>
                                <div className="picture-info">
                                    <h3>Profile Picture</h3>
                                    <p className="picture-hint">Choose a photo that helps identify you.</p>
                                    <button className="change-picture-btn">Change Photo</button>
                                </div>
                            </div>
                            <hr className="divider" />
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>ID Number</label>
                                    <input type="text" name="idNumber" value={formData.idNumber} onChange={handleInputChange} className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} className="form-input" />
                                </div>
                                <div className="form-group bio-group">
                                    <label>Bio</label>
                                    <textarea name="bio" placeholder="Tell us about yourself..." value={formData.bio} onChange={handleInputChange} maxLength="500" className="form-input"></textarea>
                                    <div className="char-count">{formData.bio.length} / 500 characters</div>
                                </div>
                            </div>
                            <hr className="divider" />
                            <div className="form-actions">
                                <button className="save-btn" onClick={handleSaveChanges} disabled={isLoading}>
                                    {isLoading ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
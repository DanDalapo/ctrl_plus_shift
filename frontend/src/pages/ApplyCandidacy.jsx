import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/apply_candidacy.css';
import './css/home.css';
import './css/profile_settings.css';

export default function ApplyCandidacy() {
    const navigate = useNavigate();
    const API_URL = "http://localhost:8080";
    const userId = 1;

    const [currentUser, setCurrentUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        position: '',
        partyName: '',
        platformTitle: '',
        platformDescription: '',
        selectedFile: null
    });

    useEffect(() => {
        fetch(`${API_URL}/users/${userId}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
            .catch(err => console.error("Failed to load user", err));
    }, []);

    const getInitials = (first, last) => {
        if (!first || !last) return "??";
        return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // This function is now correctly used in the input below
    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, selectedFile: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <span className="brand-text">BotoTeknoy</span>
                </div>
                <div className="user-profile-compact">
                    <div className="avatar-circle">
                        <span className="initials">{currentUser ? getInitials(currentUser.firstName, currentUser.lastName) : '...'}</span>
                    </div>
                    <div className="user-info-compact">
                        <h4 className="user-name">{currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Loading...'}</h4>
                        <span className="user-role">{currentUser ? (currentUser.userType || 'Student Voter') : ''}</span>
                    </div>
                </div>
                <nav className="nav-menu">
                    <Link to="/home" className="nav-item">Home</Link>
                    <Link to="/candidates" className="nav-item active">Candidates</Link>
                    <Link to="/vote" className="nav-item">Vote</Link>
                    <Link to="/results" className="nav-item">Results</Link>
                    <Link to="/settings" className="nav-item">Settings</Link>
                </nav>
            </aside>

            <main className="main-content">
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Congratulations!</h3>
                            <p>Your application has been sent.</p>
                            <button onClick={() => navigate('/candidates')} className="modal-button">Okay</button>
                        </div>
                    </div>
                )}
                <div className="content-scrollable">
                    <div className="settings-header-block apply-header-spacing">
                        <h1>Apply for Candidacy</h1>
                        <p>Fill out the form below to run for a student council position.</p>
                    </div>
                    
                    <div className="dashboard-card application-card">
                        <form onSubmit={handleSubmit} className="application-form">
                            
                            {/* 1. Position Selection */}
                            <h3 className="form-section-title">Campaign Details</h3>
                            <div className="form-grid loose-grid">
                                <div className="form-group loose-group">
                                    <label>Position to Run For</label>
                                    <select 
                                        name="position" 
                                        className="form-input select-input" 
                                        value={formData.position} 
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select a position...</option>
                                        <option value="President">President</option>
                                        <option value="Vice President">Vice President</option>
                                        <option value="Secretary">Secretary</option>
                                        <option value="Treasurer">Treasurer</option>
                                        <option value="Auditor">Auditor</option>
                                        <option value="P.R.O.">Public Relations Officer</option>
                                    </select>
                                </div>
                                <div className="form-group loose-group">
                                    <label>Party / Partylist Name</label>
                                    <input 
                                        type="text" 
                                        name="partyName" 
                                        className="form-input" 
                                        placeholder="e.g. Makabayan, Independent"
                                        value={formData.partyName} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                            </div>

                            {/* 2. Platform Section (Restored) */}
                            <h3 className="form-section-title">Platform & Vision</h3>
                            <div className="form-group loose-group">
                                <label>Platform Title</label>
                                <input 
                                    type="text" 
                                    name="platformTitle" 
                                    className="form-input"
                                    placeholder="e.g. Service for All"
                                    value={formData.platformTitle}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group loose-group bio-spacing">
                                <label>Platform Description / Bio</label>
                                <textarea 
                                    name="platformDescription" 
                                    className="form-input text-area-large"
                                    placeholder="Describe your goals..."
                                    value={formData.platformDescription}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            {/* 3. File Upload Section (Restored & Uses handleFileChange) */}
                            <h3 className="form-section-title">Campaign Poster</h3>
                            <div className="upload-container">
                                <div className="upload-box">
                                    <input 
                                        type="file" 
                                        id="file-upload" 
                                        className="file-input-hidden" 
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                    <label htmlFor="file-upload" className="upload-label">
                                        <div className="upload-icon">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </div>
                                        <span className="upload-text">
                                            {formData.selectedFile ? formData.selectedFile.name : "Click to upload your campaign poster"}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <hr className="divider loose-divider" />

                            <div className="form-actions">
                                <button type="button" className="cancel-btn" onClick={() => navigate('/candidates')}>Cancel</button>
                                <button type="submit" className="save-btn submit-application-btn">Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
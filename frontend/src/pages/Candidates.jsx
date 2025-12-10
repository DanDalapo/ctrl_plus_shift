import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/candidates.css';
import './css/home.css'; // Shared dashboard styles

export default function CandidatesPage() {
    // State for User Data
    const [currentUser, setCurrentUser] = useState(null);

    // State for Candidates - will be loaded from database
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        // Get user from localStorage or sessionStorage
        const userData = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || '{}');
        if (userData.userID) {
            setCurrentUser(userData);
        }

        // Fetch candidates from database and merge with demo data
        fetch('http://localhost:8080/candidates')
            .then(res => res.json())
            .then(data => {
                // Filter to only include candidates who have applied with complete data
                const actualCandidates = data.filter(c => 
                    c.candidateID && 
                    c.user && 
                    c.positionName && 
                    c.platformTitle
                );
                
                // Transform database candidates to match display format
                const dbCandidates = actualCandidates.map(c => ({
                    id: c.candidateID,
                    name: `${c.user?.firstname || c.user?.firstName || ''} ${c.user?.lastName || ''}`.trim(),
                    image: "/default-avatar.png", // Default image for DB candidates
                    description: c.platformDescription || 'No description provided',
                    position: c.positionName || 'N/A',
                    platform: c.platformTitle || 'N/A',
                    votes: 0, // Default votes for new candidates
                    isDemo: false
                }));
                
                // Replace demo data with database data (don't merge to avoid duplicates)
                setCandidates(dbCandidates);
            })
            .catch(err => console.error("Failed to load candidates from database", err));
    }, []);

    // Helper to generate initials
    const getInitials = (first, last) => {
        if (!first || !last) return "??";
        return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
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

                {/* DYNAMIC USER PROFILE */}
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
                    <Link to="/candidates" className="nav-item active">
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
                    <Link to="/settings" className="nav-item">
                        <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
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
                <div className="content-scrollable">
                    
                    {/* Header with Title */}
                    <div className="candidates-header-row">
                        <div className="header-text-block">
                            <h1>Meet the Candidates</h1>
                            <p>Learn more about the candidates running for student council positions. Get to know their backgrounds, platforms, and vision.</p>
                        </div>
                        {/* Show Apply button only for candidates */}
                        {currentUser && currentUser.userType === 'CANDIDATE' && (
                            <Link to="/apply-candidacy" className="apply-candidacy-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                                Apply Candidacy
                            </Link>
                        )}
                    </div>

                    {/* Candidates List */}
                    <div className="candidates-list">
                        {candidates.map(candidate => (
                            <div key={candidate.id} className="candidate-card-long">
                                <div className="candidate-image" style={{backgroundImage: `url('${candidate.image}')`}}></div>
                                <div className="candidate-details">
                                    <h2 className="candidate-name">{candidate.name}</h2>
                                    <p className="candidate-desc">{candidate.description}</p>
                                    
                                    <div className="candidate-stats-row">
                                        {/* Position */}
                                        <div className="stat-group">
                                            <div className="stat-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                            <div className="stat-text">
                                                <span className="stat-value">{candidate.position}</span>
                                                <span className="stat-label">Running Position</span>
                                            </div>
                                        </div>

                                        {/* Platform */}
                                        <div className="stat-group">
                                            <div className="stat-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                                            </div>
                                            <div className="stat-text">
                                                <span className="stat-value">{candidate.platform}</span>
                                                <span className="stat-label">Running Platform</span>
                                            </div>
                                        </div>

                                        {/* Voters */}
                                        <div className="stat-group">
                                            <div className="stat-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                            </div>
                                            <div className="stat-text">
                                                <span className="stat-value">{candidate.votes.toLocaleString()}</span>
                                                <span className="stat-label">No. of Voters</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
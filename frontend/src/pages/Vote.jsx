import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/vote.css';
import './css/home.css'; // Shared dashboard styles

export default function VotePage() {
    // Mock Data for Election Positions and Candidates
    const electionData = [
        {
            id: 'pos_president',
            title: 'Student Government President',
            candidates: [
                { id: 1, name: 'Manuel Quezon', detail: '4th year | Political Science', initials: 'MQ' },
                { id: 2, name: 'Brent Micheal Tolentino', detail: '3rd year | Computer Science', initials: 'BT' },
                { id: 3, name: 'Leni Robredo', detail: '2nd year | Political Science', initials: 'LR' }
            ]
        },
        {
            id: 'pos_dept_rep',
            title: 'Department Representative',
            candidates: [
                { id: 4, name: 'Mark Jennings', detail: '3rd year | Business Administration', initials: 'MJ' },
                { id: 5, name: 'Sarah Walker', detail: '2nd year | Marketing', initials: 'SW' }
            ]
        }
    ];

    // State to track selected candidate ID for each position
    // Format: { pos_president: 1, pos_dept_rep: null }
    const [selections, setSelections] = useState({});

    const handleVote = (positionId, candidateId) => {
        setSelections(prev => ({
            ...prev,
            [positionId]: candidateId
        }));
    };

    const handleSubmit = (positionId, positionTitle) => {
        const selectedCandidateId = selections[positionId];
        if (!selectedCandidateId) {
            alert(`Please select a candidate for ${positionTitle} first.`);
            return;
        }
        console.log(`Submitting vote for ${positionTitle}: Candidate ID ${selectedCandidateId}`);
        // Add submission logic here (e.g., API call)
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
                    <Link to="/vote" className="nav-item active">
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

            {/* MAIN CONTENT */}
            <main className="main-content">
                <div className="content-scrollable">
                    
                    <div className="settings-header-block">
                        <h1>Cast Your Vote</h1>
                        <p>Select your preferred candidate for each position below.</p>
                    </div>

                    <div className="voting-container">
                        {electionData.map((position) => (
                            <div key={position.id} className="vote-card">
                                <h2 className="position-title">{position.title}</h2>
                                
                                <div className="candidates-group">
                                    {position.candidates.map((candidate) => {
                                        const isSelected = selections[position.id] === candidate.id;
                                        
                                        return (
                                            <div 
                                                key={candidate.id} 
                                                className={`candidate-vote-row ${isSelected ? 'selected' : ''}`}
                                                onClick={() => handleVote(position.id, candidate.id)}
                                            >
                                                <div className="candidate-info-left">
                                                    <div className="candidate-avatar-small">
                                                        {candidate.initials}
                                                    </div>
                                                    <div className="candidate-text">
                                                        <h3 className="vote-candidate-name">{candidate.name}</h3>
                                                        <span className="vote-candidate-detail">{candidate.detail}</span>
                                                    </div>
                                                </div>
                                                <button 
                                                    className={`vote-btn ${isSelected ? 'voted' : ''}`}
                                                >
                                                    {isSelected ? 'SELECTED' : 'VOTE'}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="vote-footer">
                                    <div className="warning-box">
                                        <span className="warning-icon">⚠️</span>
                                        <p><strong>Important:</strong> Once you submit your vote, it cannot be changed. Please review your selection carefully.</p>
                                    </div>
                                    <button 
                                        className="submit-position-btn"
                                        onClick={() => handleSubmit(position.id, position.title)}
                                    >
                                        Submit Vote for {position.title}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
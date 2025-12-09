import React from 'react';
import { Link } from 'react-router-dom';
import './css/candidates.css';
import './css/home.css'; // Shared dashboard styles

export default class CandidatesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        candidates: [
            {
            id: 1,
            name: "Alexa Rhyz R. Paires",
            // Image from public folder
            image: "/alexa.jpg",
            description: "A dedicated leader committed to transparency and student welfare. With a vision for inclusive growth, I aim to empower every Technologian to achieve their full potential. Together, let's innovate and elevate our campus community through service and integrity.",
            position: "President",
            platform: "Visionary", 
            votes: 1091
            },
            {
            id: 2,
            name: "Jayz R. Olimba",
            image: "/jayz.png", 
            description: "An advocate for student empowerment and academic excellence. I strive to build a campus environment where every voice is heard and every student thrives. Let's work together to create meaningful change and a brighter future for our university.",
            position: "President",
            platform: "Empowerment",
            votes: 9999
            },
            {
            id: 3,
            name: "Dan Erik Dalapo",
            image: "/dan.png", 
            description: "Driven by a passion for service and innovation, I aim to bridge the gap between students and administration. My goal is to foster a collaborative community where ideas turn into action. Together, we can build a more connected and progressive campus.",
            position: "President",
            platform: "Progressive",
            votes: 2500
            }
        ]
        };
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
                
                {/* Header with Title and Button */}
                <div className="candidates-header-row">
                <div className="header-text-block">
                    <h1>Meet the Candidates</h1>
                    <p>Learn more about the candidates running for student council positions. Get to know their backgrounds, platforms, and vision.</p>
                </div>
                
                {/* UPDATED: Changed button to Link for navigation */}
                <Link to="/apply-candidacy" className="apply-candidacy-btn" style={{textDecoration: 'none'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    Apply for Candidacy
                </Link>
                </div>

                {/* Candidates List */}
                <div className="candidates-list">
                {this.state.candidates.map(candidate => (
                    <div key={candidate.id} className="candidate-card-long">
                    <div className="candidate-image" style={{backgroundImage: `url('${candidate.image})`}}></div>
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
}
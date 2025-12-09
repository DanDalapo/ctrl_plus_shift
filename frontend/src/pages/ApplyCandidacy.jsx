import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/apply_candidacy.css';
import './css/home.css';
import './css/profile_settings.css';

export default function ApplyCandidacy() {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false); // State for success modal
	const [formData, setFormData] = useState({
		position: '',
		partyName: '',
		platformTitle: '',
		platformDescription: '',
		selectedFile: null
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleFileChange = (e) => {
		setFormData(prevState => ({
			...prevState,
			selectedFile: e.target.files[0]
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Application Submitted", formData);
		// Instead of navigating immediately, show the success modal
		setShowModal(true);
	};

	const handleCancel = () => {
		navigate('/candidates');
	};

	const handleModalClose = () => {
		setShowModal(false);
		navigate('/candidates'); // Redirect after clicking Okay
	};

	return (
		<div className="dashboard-container">
			
			{/* --- SUCCESS MODAL --- */}
			{showModal && (
				<div className="modal-overlay">
					<div className="modal-content">
						<div className="modal-icon">🎉</div>
						<h3 className="modal-title">Congratulations!</h3>
						<p className="modal-message">
							Your application has been sent and is ready to be reviewed.
						</p>
						<button onClick={handleModalClose} className="modal-button">
							Okay
						</button>
					</div>
				</div>
			)}

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
					
					{/* Updated Header */}
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

							{/* 2. Platform */}
							<h3 className="form-section-title">Platform & Vision</h3>
							<div className="form-group loose-group">
								<label>Platform Title</label>
								<input 
									type="text" 
									name="platformTitle" 
									className="form-input"
									placeholder="e.g. Service for All, Student First"
									value={formData.platformTitle}
									onChange={handleInputChange}
								/>
							</div>

							<div className="form-group loose-group bio-spacing">
								<label>Platform Description / Bio</label>
								<textarea 
									name="platformDescription" 
									className="form-input text-area-large"
									placeholder="Describe your goals, vision, and why students should vote for you..."
									value={formData.platformDescription}
									onChange={handleInputChange}
								></textarea>
							</div>

							{/* 3. Campaign Material Upload */}
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
										<span className="upload-hint">SVG, PNG, JPG or GIF (MAX. 5MB)</span>
									</label>
								</div>
							</div>

							<hr className="divider loose-divider" />

							<div className="form-actions">
								<button type="button" className="cancel-btn" onClick={handleCancel}>
									Cancel
								</button>
								<button type="submit" className="save-btn submit-application-btn">
									Submit Application
								</button>
							</div>

						</form>
					</div>

				</div>
			</main>
		</div>
	);
}
import React from 'react';
import { Link } from 'react-router-dom'; // <--- Ensure this is imported
import axios from 'axios'; 
import './css/profile_settings.css';
import './css/home.css';

export default class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null, 
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      stuID: '',
      dob: '',
      bio: '',
      bioCharCount: 0,
      activeTab: 'profile'
    };
  }

  componentDidMount() {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
        this.setState({
          userID: userObj.userID, 
          firstName: userObj.firstName || '',
          lastName: userObj.lastName || '',
          fullName: `${userObj.firstName || ''} ${userObj.lastName || ''}`.trim(), 
          email: userObj.email || '',
          stuID: userObj.strStudentID || '', 
          dob: userObj.dateOfBirth || '',
          bio: userObj.bio || '',
          bioCharCount: (userObj.bio || '').length
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
    if (name === 'bio') {
      this.setState({ bioCharCount: value.length });
    }
  }


  handleSave = async () => {
    const { userID, stuID, bio } = this.state; 

    if (!userID) {
      alert("Error: User ID missing. Please log in again.");
      return;
    }

    try {
      const updatePayload = {
        strStudentID: stuID,
        bio: bio
      };

      const response = await axios.put(`http://localhost:8080/users/${userID}`, updatePayload);

      if (response.status === 200) {
        alert("Profile Updated Successfully!");
        
        const updatedUser = response.data;
        const storageKey = localStorage.getItem('user') ? 'user' : null;
        if(storageKey) {
             localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
             sessionStorage.setItem('user', JSON.stringify(updatedUser));
        }
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update. Check console for errors.");
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        
        <aside className="sidebar">
          <div className="user-profile">
             <div className="avatar-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="user-info">
              <h3 className="user-name">{this.state.fullName || 'Guest'}</h3>
              <p className="user-email">{this.state.email || 'Please log in'}</p>
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

        <main className="main-content settings-wrapper">
          <div className="top-yellow-header"></div>
          
          <div className="settings-container">
            <div className="settings-header"><h1>Settings</h1></div>

            {/* === THIS IS THE FIX: LINKS instead of Buttons === */}
            <div className="settings-tabs">
              {/* Profile is active because we are ON the Profile page */}
              <Link to="/settings" className="tab-button active">
                Profile
              </Link>
              
              <Link to="/settings/account" className="tab-button">
                Account
              </Link>
              
              <Link to="/settings/notifications" className="tab-button">
                Notifications
              </Link>
              
              <Link to="/settings/security" className="tab-button">
                Security
              </Link>
            </div>
            {}

            <div className="settings-content-card">
              <div className="profile-section">
                <h2>Profile Information</h2>
                <p className="section-description">Update your profile picture and personal information</p>

                <div className="profile-picture-section">
                  <h3>Profile Picture</h3>
                  <div className="picture-upload">
                    <div className="picture-preview">
                        <svg className="default-avatar" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div className="picture-actions">
                      <button className="change-picture-btn"><span className="camera-icon">📷</span> Change Picture</button>
                      <p className="picture-hint">Choose from default avatars or enter a custom URL</p>
                    </div>
                  </div>
                </div>

                <hr className="divider" />

                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={this.state.fullName} className="form-input" disabled />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={this.state.email} className="form-input" disabled />
                  </div>

                  <div className="form-group">
                    <label>Student Number</label>
                    <input type="text" name="stuID" value={this.state.stuID} className="form-input" disabled />
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text" name="dob" value={this.state.dob} className="form-input" disabled />
                  </div>

                  <div className="form-group bio-group">
                    <label>Bio</label>
                    <textarea name="bio" placeholder="tell us about yourself..." value={this.state.bio} onChange={this.handleInputChange} maxLength="500" className="form-input"></textarea>
                    <div className="char-count">{this.state.bioCharCount} / 500 characters</div>
                  </div>
                </div>

                <hr className="divider" />

                <div className="form-actions">
                  <button className="save-btn" onClick={this.handleSave}>
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
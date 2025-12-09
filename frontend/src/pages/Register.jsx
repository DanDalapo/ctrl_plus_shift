import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/register.css';

export default function RegisterPage() {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // State for UI toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // State for Modals
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); // New Success State

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  // Error Modal Helpers
  const triggerError = (message) => {
    setErrorMessage(message);
    setShowError(true);
  }

  const closeError = () => {
    setShowError(false);
  }

  // Success Modal Handler
  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/login'); // Redirect to Login Page
  }

  const handlePlaceholderClick = (e) => {
    e.preventDefault();
  }

  const handleSubmit = () => {
    const { firstName, lastName, dob, email, phoneNumber, password, confirmPassword, agreeTerms } = formData;
    
    // 1. Check if any text field is empty
    if (!firstName || !lastName || !dob || !email || !phoneNumber || !password || !confirmPassword) {
      triggerError('Please fill in all fields.');
      return;
    }

    // 2. Check if terms are agreed
    if (!agreeTerms) {
      triggerError('You must agree to the Terms and Privacy Policy.');
      return;
    }

    // 3. Check if passwords match
    if (password !== confirmPassword) {
      triggerError('Passwords do not match.');
      return;
    }

    // Validation passed - Show Success Modal
    console.log('Register submitted:', formData);
    setShowSuccess(true);
  }

  return (
    <div className="register-container">
      
      {/* ERROR MODAL */}
      {showError && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon" style={{color: '#ef4444'}}>⚠️</div>
            <h3 className="modal-title">Attention</h3>
            <p className="modal-message">{errorMessage}</p>
            <button onClick={closeError} className="modal-button">
              Okay, Got it
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL (Registration Complete) */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon" style={{color: '#7f1d1d'}}>
              {/* Checkmark SVG */}
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="modal-title">Registration Complete</h3>
            <p className="modal-message">
              Your account has been successfully created. You can now login.
            </p>
            <button onClick={handleSuccessClose} className="modal-button">
              Go to Login
            </button>
          </div>
        </div>
      )}

      <div className="register-form-panel">
        <div className="register-content-wrapper">
          <h1 className="register-title">Create Account</h1>

          <div className="form-row-split">
            <div className="input-wrapper">
              <label className="input-label">First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="register-input"
              />
            </div>
            <div className="input-wrapper">
              <label className="input-label">Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="register-input"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label className="input-label">Date of Birth</label>
            <div className="input-icon-container">
              <svg className="input-icon-left" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <input
              type="text"
              name="dob"
              placeholder="mm/dd/yy"
              value={formData.dob}
              onChange={handleInputChange}
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => {
                if (!e.target.value) {
                   e.target.type = 'text';
                }
              }}
              className="register-input has-icon-left"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label className="input-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Student ID</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your student id number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label">Password</label>
            <div className="input-icon-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleInputChange}
                className="register-input"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="register-password-toggle"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                )}
              </button>
            </div>
          </div>

          <div className="input-wrapper">
            <label className="input-label">Re-enter Password</label>
            <div className="input-icon-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="register-input"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="register-password-toggle"
                title={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                )}
              </button>
            </div>
          </div>

          <div className="terms-container">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="terms-checkbox"
            />
            <label htmlFor="agreeTerms" className="terms-label">
              I agree with <button type="button" onClick={handlePlaceholderClick} className="link-red" style={{background:'none', border:'none', cursor:'pointer', padding:0, font:'inherit'}}>Terms</button> and <button type="button" onClick={handlePlaceholderClick} className="link-red" style={{background:'none', border:'none', cursor:'pointer', padding:0, font:'inherit'}}>Privacy Policy</button>
            </label>
          </div>

          <button onClick={handleSubmit} className="register-submit-btn">
            Create Account
          </button>

          <div className="register-divider">
            <div className="line"></div>
            <span className="or-text">or</span>
            <div className="line"></div>
          </div>

          <div className="register-footer">
            <span className="footer-text">Already have an account? </span>
            <Link to="/login" className="link-red footer-link">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="register-welcome-panel">
        <div className="welcome-content">
          <h1 className="welcome-headline">
            Let's<br />Get<br />Started!
          </h1>
        </div>
      </div>
    </div>
  );
}
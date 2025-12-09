import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/login.css';

export default function LoginPage() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    setKeepLoggedIn(e.target.checked);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const triggerError = (message) => {
    setErrorMessage(message);
    setShowError(true);
  }

  const closeError = () => {
    setShowError(false);
  }

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password clicked");
  }

  const handleSubmit = async () => {
    if (!email || !password) {
      triggerError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log('Login successful:', user);
        
        // Store user data in localStorage if "keep logged in" is checked
        if (keepLoggedIn) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          sessionStorage.setItem('user', JSON.stringify(user));
        }
        
        navigate('/home');
      } else {
        const errorText = await response.text();
        triggerError(errorText || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      triggerError('Unable to connect to server. Please try again later.');
    }
  }

  return (
    <div className="login-container">
      {/* ERROR MODAL */}
      {showError && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon" style={{color: '#ef4444'}}>⚠️</div>
            <h3 className="modal-title">Login Failed</h3>
            <p className="modal-message">{errorMessage}</p>
            <button onClick={closeError} className="modal-button">
              Try Again
            </button>
          </div>
        </div>
      )}

      <div className="welcome-panel">
        <h1 className="welcome-title">
          Welcome<br />Back!
        </h1>
      </div>

      <div className="login-panel">
        <div className="login-form-container">
          <h2 className="login-heading">Login</h2>
          <p className="login-subheading">please enter you login details</p>

          <form autoComplete="off" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
                className="input-field"
                autoComplete="off"
                name="email_login_field" // Unique name to prevent auto-fill collision
              />
            </div>

            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
                autoComplete="new-password" // Often prevents the "Save Password" prompt
                name="password_login_field"
              />
              <button
                onClick={togglePasswordVisibility}
                className="password-toggle"
                type="button" 
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  /* Visible -> Open Eye */
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                ) : (
                  /* Hidden -> Slashed Eye */
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                )}
              </button>
            </div>

            <div className="forgot-password-container">
              <button onClick={handleForgotPassword} className="forgot-password-link" style={{background:'none', border:'none', cursor:'pointer', padding:0}}>
                Forgot password?
              </button>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={handleCheckboxChange}
                className="checkbox-input"
              />
              <label htmlFor="keepLoggedIn" className="checkbox-label">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>
          </form>

          <div className="divider-container">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          <div className="create-account-container">
            <span className="create-account-text">Don't have an account? </span>
            <Link to="/register" className="create-account-link">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
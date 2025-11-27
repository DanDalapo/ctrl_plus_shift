import React from 'react';
import { Link, Navigate } from 'react-router-dom'; // 1. Import Navigate
import './css/login.css';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      keepLoggedIn: true,
      showPassword: false,
      showError: false,
      errorMessage: '',
      isLoggedIn: false // 2. Add this new state for redirection
    };
  }
 
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
 
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }
 
  handleCheckboxChange = (e) => {
    this.setState({ keepLoggedIn: e.target.checked });
  }
 
  togglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }
  
  triggerError = (message) => {
    this.setState({ showError: true, errorMessage: message });
  }

  closeError = () => {
    this.setState({ showError: false });
  }
 
  handleSubmit = () => {
    // Validation
    if (!this.state.email || !this.state.password) {
      this.triggerError('Please enter both email and password.');
      return;
    }

    console.log('Login submitted:', {
      email: this.state.email,
      password: this.state.password,
      keepLoggedIn: this.state.keepLoggedIn
    });

    // 3. Set isLoggedIn to true to trigger the redirect
    this.setState({ isLoggedIn: true });
  }
 
  render() {
    // 4. Check if logged in. If yes, redirect to Home ("/")
    if (this.state.isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
      <div className="login-container">
        {/* CUSTOM POP-UP MODAL */}
        {this.state.showError && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-icon">⚠️</div>
              <h3 className="modal-title">Attention</h3>
              <p className="modal-message">{this.state.errorMessage}</p>
              <button onClick={this.closeError} className="modal-button">
                Okay, Got it
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
 
            <div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  className="input-field"
                />
              </div>
 
              <div className="input-group">
                <input
                  type={this.state.showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="input-field"
                />
                <button
                  type="button"
                  onClick={this.togglePasswordVisibility}
                  className="password-toggle"
                >
                  {this.state.showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
 
              <div className="forgot-password-container">
                <a href="#" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>
 
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  checked={this.state.keepLoggedIn}
                  onChange={this.handleCheckboxChange}
                  className="checkbox-input"
                />
                <label htmlFor="keepLoggedIn" className="checkbox-label">
                  Keep me logged in
                </label>
              </div>
 
              <button
                onClick={this.handleSubmit}
                className="login-button"
              >
                Login
              </button>
            </div>
 
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
}
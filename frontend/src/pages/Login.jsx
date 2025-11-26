import React from 'react';
import './css/login.css';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      keepLoggedIn: true,
      showPassword: false
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

  handleSubmit = () => {
    console.log('Login submitted:', {
      email: this.state.email,
      password: this.state.password,
      keepLoggedIn: this.state.keepLoggedIn
    });
  }

  render() {
    return (
      <div className="login-container">
        {/* Left Panel - Welcome Section */}
        <div className="welcome-panel">
          <h1 className="welcome-title">
            Welcome<br />Back!
          </h1>
        </div>

        {/* Right Panel - Login Form */}
        <div className="login-panel">
          <div className="login-form-container">
            <h2 className="login-heading">Login</h2>
            <p className="login-subheading">please enter you login details</p>

            <div>
              {/* Email Input */}
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  className="input-field"
                />
              </div>

              {/* Password Input */}
              <div className="input-group">
                <input
                  type={this.state.showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="input-field"
                />
                <button
                  onClick={this.togglePasswordVisibility}
                  className="password-toggle"
                >
                  {this.state.showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="forgot-password-container">
                <a href="#" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>

              {/* Keep me logged in Checkbox */}
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

              {/* Login Button */}
              <button
                onClick={this.handleSubmit}
                className="login-button"
              >
                Login
              </button>
            </div>

            {/* Divider */}
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            {/* Create Account Link */}
            <div className="create-account-container">
              <span className="create-account-text">Don't have an account? </span>
              <a href="#" className="create-account-link">
                Create account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
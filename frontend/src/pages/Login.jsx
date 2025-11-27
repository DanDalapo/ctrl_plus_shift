import React from 'react';
import axios from 'axios'; // <--- IMPT: Ensure you have run 'npm install axios'
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

  handleSubmit = async () => {
    const { email, password } = this.state;

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email: email,
        password: password
      });

      // 3. Handle Success (Status Code 200)
      console.log('Login Success:', response.data);
      alert(`Login Successful! Welcome, ${response.data.firstName || 'User'}`);
      
      // OPTIONAL: Save user data to session/local storage
      if(this.state.keepLoggedIn) {
        localStorage.setItem('user', JSON.stringify(response.data));
      } else {
        sessionStorage.setItem('user', JSON.stringify(response.data));
      }

      // 4. Redirect (Uncomment and change path as needed)
      window.location.href = "/Home";

    } catch (error) {
      // 5. Handle Errors
      console.error('Login Error:', error);

      if (error.response && error.response.status === 401) {
        alert("Login Failed: Incorrect email or password.");
      } else if (error.code === "ERR_NETWORK") {
        alert("Cannot connect to server. Is your Spring Boot backend running?");
      } else {
        alert("An unexpected error occurred.");
      }
    }
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
            <p className="login-subheading">please enter your login details</p>

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
                  type="button" // Add type button to prevent form submission
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
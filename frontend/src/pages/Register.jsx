import React from 'react';
import { Link } from 'react-router-dom';
import './css/register.css';

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      strStudentID: '',
      password: '',
      confirmPassword: '',
      userType: 'Voter', 
      agreeTerms: false,
      showPassword: false,
      showConfirmPassword: false,
      showError: false,
      errorMessage: ''
    };
  }

  componentDidMount() {
    const savedType = localStorage.getItem('selectedUserType');
    if (savedType) {
      this.setState({ userType: savedType });
    }
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  togglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  toggleConfirmPasswordVisibility = () => {
    this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
  }

  triggerError = (message) => {
    this.setState({ showError: true, errorMessage: message });
  }

  closeError = () => {
    this.setState({ showError: false });
  }

  handleSubmit = async () => {
    const { firstName, lastName, dob, email, strStudentID, password, confirmPassword, agreeTerms, userType } = this.state;
    
    if (!firstName || !lastName || !dob || !email || !strStudentID || !password || !confirmPassword) {
      this.triggerError('Please fill in all fields.');
      return;
    }

    if (!agreeTerms) {
      this.triggerError('You must agree to the Terms and Privacy Policy.');
      return;
    }

    if (password !== confirmPassword) {
      this.triggerError('Passwords do not match.');
      return;
    }

    const userData = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dob,  
      email: email,
      password: password,
      userType: userType,
      strStudentID: strStudentID,
      bio: "" 
    };

    console.log("Sending data:", userData);

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Success!
        console.log('User registered successfully');
        alert('Registration Successful!');
      } else {
        this.triggerError('Registration failed. Server returned: ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      this.triggerError('Cannot connect to server. Ensure Spring Boot is running.');
    }
  }

  render() {
    return (
      <div className="register-container">
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

        <div className="register-form-panel">
          <div className="register-content-wrapper">
            <h1 className="register-title">Create {this.state.userType} Account</h1>

            <div className="form-row-split">
              <div className="input-wrapper">
                <label className="input-label">First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  className="register-input"
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
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
                value={this.state.dob}
                onChange={this.handleInputChange}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
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
                value={this.state.email}
                onChange={this.handleInputChange}
                className="register-input"
              />
            </div>

            <div className="input-wrapper">
              <label className="input-label">Student Number</label>
              <input
                type="tel"
                name="strStudentID"
                placeholder="Enter your student number"
                value={this.state.strStudentID}
                onChange={this.handleInputChange}
                className="register-input"
              />
            </div>

            <div className="input-wrapper">
              <label className="input-label">Password</label>
              <div className="input-icon-container">
                <input
                  type={this.state.showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="register-input"
                />
                <button
                  type="button"
                  onClick={this.togglePasswordVisibility}
                  className="register-password-toggle"
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
            </div>

            <div className="input-wrapper">
              <label className="input-label">Re-enter Password</label>
              <div className="input-icon-container">
                <input
                  type={this.state.showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  className="register-input"
                />
                <button
                  type="button"
                  onClick={this.toggleConfirmPasswordVisibility}
                  className="register-password-toggle"
                >
                  {this.state.showConfirmPassword ? (
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
            </div>

            <div className="terms-container">
              <input
                type="checkbox"
                name="agreeTerms"
                id="agreeTerms"
                checked={this.state.agreeTerms}
                onChange={this.handleInputChange}
                className="terms-checkbox"
              />
              <label htmlFor="agreeTerms" className="terms-label">
                I agree with <a href="#" className="link-red">Terms</a> and <a href="#" className="link-red">Privacy Policy</a>
              </label>
            </div>

            <button onClick={this.handleSubmit} className="register-submit-btn">
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
}
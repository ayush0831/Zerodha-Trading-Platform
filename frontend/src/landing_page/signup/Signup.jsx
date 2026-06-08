import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Loading and message state
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Validation rules
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Full name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Full name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;

      case 'mobile':
        if (!value) {
          newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors.mobile = 'Mobile number must be 10 digits';
        } else {
          delete newErrors.mobile;
        }
        break;

      case 'password':
        if (!value) {
          newErrors.password = 'Password is required';
        } else if (value.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])/.test(value)) {
          newErrors.password = 'Password must contain lowercase letters';
        } else if (!/(?=.*[A-Z])/.test(value)) {
          newErrors.password = 'Password must contain uppercase letters';
        } else if (!/(?=.*\d)/.test(value)) {
          newErrors.password = 'Password must contain numbers';
        } else {
          delete newErrors.password;
        }
        break;

      case 'confirmPassword':
        if (!value) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (value !== formData.password) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      case 'agreeTerms':
        if (!value) {
          newErrors.agreeTerms = 'You must agree to the Terms & Conditions';
        } else {
          delete newErrors.agreeTerms;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let fieldValue = type === 'checkbox' ? checked : value;

    // Format mobile number to only allow 10 digits
    if (name === 'mobile') {
      fieldValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
    setErrorMessage('');
  };

  // Handle blur for validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.mobile &&
      formData.password &&
      formData.confirmPassword &&
      formData.agreeTerms &&
      Object.keys(errors).length === 0
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Final validation
    if (!isFormValid()) {
      setErrorMessage('Please fix all errors before submitting');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3002/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
      });

      setSuccessMessage('Signup successful! Redirecting to home...');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
      });

      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Signup failed. Please try again.';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-card">
          {/* Header */}
          <div className="signup-header">
            <h1 className="signup-title">Create Your Account</h1>
            <p className="signup-subtitle">Join us to start your trading journey</p>
          </div>

          {/* Messages */}
          {successMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Success!</strong> {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Error!</strong> {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                disabled={loading}
                aria-label="Full Name"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <div id="name-error" className="form-error">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                disabled={loading}
                aria-label="Email Address"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <div id="email-error" className="form-error">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Mobile Number */}
            <div className="form-group mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter 10-digit mobile number"
                disabled={loading}
                maxLength="10"
                aria-label="Mobile Number"
                aria-describedby={errors.mobile ? 'mobile-error' : undefined}
              />
              {errors.mobile && (
                <div id="mobile-error" className="form-error">
                  {errors.mobile}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password <span className="required">*</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Minimum 8 characters"
                  disabled={loading}
                  aria-label="Password"
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <div id="password-error" className="form-error">
                  {errors.password}
                </div>
              )}
              <small className="form-text text-muted d-block mt-2">
                Must contain uppercase, lowercase, numbers, and be at least 8 characters.
              </small>
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password <span className="required">*</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Re-enter your password"
                  disabled={loading}
                  aria-label="Confirm Password"
                  aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={loading}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <div id="confirm-password-error" className="form-error">
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className={`form-check-input ${errors.agreeTerms ? 'is-invalid' : ''}`}
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                disabled={loading}
                aria-label="I agree to the Terms & Conditions and Privacy Policy"
                aria-describedby={errors.agreeTerms ? 'terms-error' : undefined}
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the{' '}
                <a href="#terms" className="terms-link">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#privacy" className="terms-link">
                  Privacy Policy
                </a>
                <span className="required">*</span>
              </label>
              {errors.agreeTerms && (
                <div id="terms-error" className="form-error d-block">
                  {errors.agreeTerms}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-signup w-100 mb-3"
              disabled={!isFormValid() || loading}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="signup-footer-text">
                Already have an account?{' '}
                <Link to="/login" className="login-link">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Side Info (for larger screens) */}
        <div className="signup-info d-none d-lg-flex">
          <div className="info-content">
            <h2>Why Join Us?</h2>
            <ul className="info-list">
              <li>
                <span className="info-icon">🚀</span>
                <strong>Fast Trading</strong>
                <p>Execute trades in milliseconds</p>
              </li>
              <li>
                <span className="info-icon">🔒</span>
                <strong>Secure</strong>
                <p>Bank-level security for your data</p>
              </li>
              <li>
                <span className="info-icon">📊</span>
                <strong>Advanced Tools</strong>
                <p>Professional-grade analysis tools</p>
              </li>
              <li>
                <span className="info-icon">💰</span>
                <strong>Low Fees</strong>
                <p>Transparent and competitive pricing</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
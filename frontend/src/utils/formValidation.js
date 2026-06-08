/**
 * Form Validation Utilities
 * Reusable validation functions for form fields
 */

export const validationRules = {
  // Validate full name
  validateName: (name) => {
    if (!name.trim()) {
      return 'Full name is required';
    }
    if (name.trim().length < 2) {
      return 'Full name must be at least 2 characters';
    }
    return '';
  },

  // Validate email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  },

  // Validate mobile number
  validateMobile: (mobile) => {
    if (!mobile) {
      return 'Mobile number is required';
    }
    const digitsOnly = mobile.replace(/\D/g, '');
    if (!/^\d{10}$/.test(digitsOnly)) {
      return 'Mobile number must be 10 digits';
    }
    return '';
  },

  // Validate password
  validatePassword: (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Password must contain lowercase letters';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password must contain uppercase letters';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Password must contain numbers';
    }
    return '';
  },

  // Validate password match
  validatePasswordMatch: (password, confirmPassword) => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  },

  // Validate terms agreement
  validateTermsAgreement: (agreed) => {
    if (!agreed) {
      return 'You must agree to the Terms & Conditions';
    }
    return '';
  },

  // Check if all fields are valid
  validateAllFields: (formData, errors) => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.mobile &&
      formData.password &&
      formData.confirmPassword &&
      formData.agreeTerms &&
      Object.keys(errors).length === 0
    );
  },
};

/**
 * Sanitize input to prevent XSS
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Format mobile number
 */
export const formatMobileNumber = (value) => {
  const digitsOnly = value.replace(/\D/g, '');
  return digitsOnly.substring(0, 10);
};

export default validationRules;

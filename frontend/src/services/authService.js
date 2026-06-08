/**
 * API Service for Authentication
 * Handles all API calls related to signup, login, and authentication
 */

import axios from 'axios';

// Configure API base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

/**
 * Signup API call
 * @param {Object} userData - User signup data
 * @param {string} userData.name - User's full name
 * @param {string} userData.email - User's email
 * @param {string} userData.mobile - User's mobile number
 * @param {string} userData.password - User's password
 * @returns {Promise} Response from server
 */
export const signupUser = async (userData) => {
  try {
    const response = await apiClient.post('/api/auth/signup', {
      name: userData.name.trim(),
      email: userData.email.trim().toLowerCase(),
      mobile: userData.mobile.replace(/\D/g, ''),
      password: userData.password,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Login API call
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} Response from server with token
 */
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post('/api/auth/login', {
      email: email.trim().toLowerCase(),
      password,
    });
    // Store token if provided
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Logout API call
 * @returns {Promise} Response from server
 */
export const logoutUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await apiClient.post('/api/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem('authToken');
    delete apiClient.defaults.headers.common['Authorization'];
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Verify email
 * @param {string} email - Email to verify
 * @returns {Promise} Response from server
 */
export const verifyEmail = async (email) => {
  try {
    const response = await apiClient.post('/api/auth/verify-email', {
      email: email.trim().toLowerCase(),
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Check if email exists
 * @param {string} email - Email to check
 * @returns {Promise} Response from server
 */
export const checkEmailExists = async (email) => {
  try {
    const response = await apiClient.get('/api/auth/check-email', {
      params: {
        email: email.trim().toLowerCase(),
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Request password reset
 * @param {string} email - User's email
 * @returns {Promise} Response from server
 */
export const requestPasswordReset = async (email) => {
  try {
    const response = await apiClient.post('/api/auth/forgot-password', {
      email: email.trim().toLowerCase(),
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Reset password with token
 * @param {string} token - Reset token
 * @param {string} password - New password
 * @returns {Promise} Response from server
 */
export const resetPassword = async (token, password) => {
  try {
    const response = await apiClient.post('/api/auth/reset-password', {
      token,
      password,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Get current user info
 * @returns {Promise} User data
 */
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await apiClient.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * Handle API errors
 * @param {Error} error - Axios error object
 * @returns {Error} Formatted error object
 */
const handleApiError = (error) => {
  let message = 'An error occurred. Please try again.';
  let statusCode = null;

  if (error.response) {
    // Server responded with error status
    statusCode = error.response.status;
    message =
      error.response.data?.message ||
      error.response.data?.error ||
      `Error ${statusCode}`;

    // Specific error handling
    switch (statusCode) {
      case 400:
        message = error.response.data?.message || 'Invalid request. Please check your input.';
        break;
      case 401:
        message = 'Unauthorized. Please login again.';
        localStorage.removeItem('authToken');
        break;
      case 403:
        message = 'Access forbidden.';
        break;
      case 404:
        message = 'Resource not found.';
        break;
      case 409:
        message = error.response.data?.message || 'This email is already registered.';
        break;
      case 422:
        message = error.response.data?.message || 'Invalid data provided.';
        break;
      case 429:
        message = 'Too many requests. Please try again later.';
        break;
      case 500:
        message = 'Server error. Please try again later.';
        break;
      default:
        message = error.response.data?.message || message;
    }
  } else if (error.request) {
    // Request was made but no response received
    message = 'No response from server. Please check your connection.';
  } else {
    // Error in request setup
    message = error.message || 'Network error. Please try again.';
  }

  const apiError = new Error(message);
  apiError.statusCode = statusCode;
  apiError.originalError = error;

  return apiError;
};

/**
 * Initialize auth interceptor
 * Add token to all requests if available
 */
export const initializeAuthInterceptor = () => {
  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor for handling token expiration
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('authToken');
        // Redirect to login can be handled by the component
      }
      return Promise.reject(error);
    }
  );
};

// Initialize interceptor when module loads
initializeAuthInterceptor();

export default {
  signupUser,
  loginUser,
  logoutUser,
  verifyEmail,
  checkEmailExists,
  requestPasswordReset,
  resetPassword,
  getCurrentUser,
};

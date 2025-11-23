import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jfif';
import { toast } from 'react-toastify';
import { setUserSession, isAuthenticated } from '../../utils/auth';

const Login = () => {
  const navigate = useNavigate();
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Check if user is already logged in
  useEffect(() => {
    if (isAuthenticated()) {
      console.log('User already authenticated, redirecting to dashboard');
      navigate('/dashboard');
    }
  }, [navigate]);

  // Listen for logout events to redirect to home page
  useEffect(() => {
    const handleLogout = () => {
      navigate('/');
    };

    window.addEventListener('auth-logout', handleLogout);
    return () => window.removeEventListener('auth-logout', handleLogout);
  }, [navigate]);

  // No local authentication needed - only backend auth

  const validateForm = () => {
    const newErrors = {};
    
    if (!username.trim()) {
      newErrors.username = 'Email is required';
    } else {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username.trim())) {
        newErrors.username = 'Please enter a valid email address';
      }
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.trim().length < 4) {
      newErrors.password = 'Password must be at least 4 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      toast.error('Please fill in all required fields', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored'
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log('=== LOGIN ATTEMPT START ===');
      console.log('Username (email):', username);
      console.log('Password length:', password.length);
      
      // Backend authentication - GET request to backend with URL parameters
      const email = encodeURIComponent(username.trim());
      const pass = encodeURIComponent(password.trim());
      const loginUrl = `http://localhost:8080/ascentitllc/login/${email}/${pass}`;
      
      console.log('=== SENDING API REQUEST ===');
      console.log('URL:', loginUrl);
      console.log('Email:', username.trim());
      console.log('Password length:', password.trim().length);
      
      // Test server connectivity first
      console.log('Testing server connection...');
      
      const response = await axios.get(loginUrl, {
        timeout: 10000 // 10 second timeout
      });
      
      console.log('=== API RESPONSE ===');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      console.log('Response data:', response.data);
      console.log('Response headers:', response.headers);
      
      if (response.status === 200 && response.data) {
        // Successful database authentication
        toast.success(`Welcome back, ${response.data.name}! 🎉`, {
          position: 'top-center',
          autoClose: 2000,
          theme: 'colored'
        });
        
        // Store user data from database response using utility function
        const userData = {
          id: response.data._id || response.data.id || null,
          gmail: response.data.gmail,
          name: response.data.name,
          dob: response.data.dob,
          contact: response.data.contact,
          role: response.data.role
        };
        
        setUserSession(userData);
        
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        throw new Error('Invalid credentials');
      }
      
    } catch (error) {
      console.log('=== ERROR OCCURRED ===');
      console.error('Full error object:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      let debugInfo = '';
      
      if (error.response) {
        // Server responded with error status
        console.log('=== SERVER ERROR RESPONSE ===');
        console.log('Status:', error.response.status);
        console.log('Status Text:', error.response.statusText);
        console.log('Response Data:', error.response.data);
        console.log('Response Headers:', error.response.headers);
        
        debugInfo = `Server Error: ${error.response.status} - ${error.response.statusText}`;
        
        if (error.response.status === 401) {
          errorMessage = 'Invalid email or password. Please verify your credentials.';
        } else if (error.response.status === 404) {
          errorMessage = 'Login endpoint not found. Please contact support.';
        } else if (error.response.status === 400) {
          errorMessage = 'Bad request. Please check your email format.';
        } else if (error.response.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (error.response.status === 405) {
          errorMessage = 'Method not allowed. Server may not accept POST requests.';
        } else {
          const backendMessage = error.response.data?.message || error.response.data?.error || error.response.data;
          errorMessage = typeof backendMessage === 'string' ? backendMessage : `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        // Network/connection error
        console.log('=== NETWORK ERROR ===');
        console.log('Request made but no response:', error.request);
        console.log('Error code:', error.code);
        
        debugInfo = `Network Error: ${error.code || 'CONNECTION_FAILED'}`;
        
        if (error.code === 'ECONNREFUSED') {
          errorMessage = 'Server is not running. Please make sure the backend server is started on port 8080.';
        } else if (error.code === 'ETIMEDOUT') {
          errorMessage = 'Request timeout. Server is taking too long to respond.';
        } else {
          errorMessage = 'Cannot connect to server. Please check if the server is running.';
        }
      } else {
        // Other error
        console.log('=== OTHER ERROR ===');
        console.log('Error message:', error.message);
        debugInfo = `Error: ${error.message}`;
        errorMessage = 'An unexpected error occurred: ' + error.message;
      }
      
      console.log('=== DEBUG SUMMARY ===');
      console.log('Error Type:', debugInfo);
      console.log('User Message:', errorMessage);
      
      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 4000,
        theme: 'colored'
      });
      
      setErrors({
        general: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="text-center mt-4 name">Employee Login</div>
      <form className="p-3 mt-3" onSubmit={handleLogin}>
        {errors.general && (
          <div className="alert alert-danger text-center mb-3" role="alert">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {errors.general}
          </div>
        )}
        
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-envelope"></span>
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Enter your email address"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (errors.username) {
                setErrors(prev => ({ ...prev, username: '' }));
              }
            }}
            className={errors.username ? 'error' : ''}
            disabled={isLoading}
          />
        </div>
        {errors.username && (
          <div className="error-message text-danger mt-1 mb-2">
            <small><i className="fas fa-exclamation-circle me-1"></i>{errors.username}</small>
          </div>
        )}
        
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors(prev => ({ ...prev, password: '' }));
              }
            }}
            className={errors.password ? 'error' : ''}
            disabled={isLoading}
          />
        </div>
        {errors.password && (
          <div className="error-message text-danger mt-1 mb-2">
            <small><i className="fas fa-exclamation-circle me-1"></i>{errors.password}</small>
          </div>
        )}
        
        <button 
          className="btn mt-3" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin me-2"></i>
              Logging in...
            </>
          ) : (
            <>
              <i className="fas fa-sign-in-alt me-2"></i>
              Login
            </>
          )}
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;

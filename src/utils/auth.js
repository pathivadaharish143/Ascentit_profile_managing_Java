// Authentication utility functions

// Check if user is authenticated
export const isAuthenticated = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return false;
    
    const userData = JSON.parse(user);
    return userData && userData.isAuthenticated === true;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

// Get current user data
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return null;
    
    const userData = JSON.parse(user);
    return userData.isAuthenticated ? userData : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Logout function
export const logout = () => {
  try {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    // Clear any other auth-related data
    
    // Dispatch custom event to notify all components about logout
    window.dispatchEvent(new CustomEvent('auth-logout'));
    
    return true;
  } catch (error) {
    console.error('Error during logout:', error);
    return false;
  }
};

// Login function
export const setUserSession = (userData) => {
  try {
    const sessionData = {
      ...userData,
      isAuthenticated: true,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(sessionData));
    
    // Dispatch custom event to notify all components about login
    window.dispatchEvent(new CustomEvent('auth-login', { detail: sessionData }));
    
    return true;
  } catch (error) {
    console.error('Error setting user session:', error);
    return false;
  }
};
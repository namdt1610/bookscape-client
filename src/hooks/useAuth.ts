import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  userRole: string | null;
  user: any | null;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    userRole: null,
    user: null,
  });

  useEffect(() => {
    // Check localStorage or cookies for auth token
    const token = localStorage.getItem('token');
    
    if (token) {
      // Validate token (you might want to verify it with your API)
      try {
        // Parse user info from token or get it from context/store
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        setAuthState({
          isAuthenticated: true,
          userRole: user.role || null,
          user,
        });
      } catch (error) {
        // Invalid token or user data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, []);

  return authState;
};

export default useAuth;
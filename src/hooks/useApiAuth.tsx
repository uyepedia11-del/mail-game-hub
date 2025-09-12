import { useState, useEffect, createContext, useContext, ReactNode } from "react";

interface User {
  id: string;
  username: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = "https://api.akunstarter.com";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem("authToken");
    if (token) {
      // Validate token by making a request to inbox
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const validateToken = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/inbox`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Token is valid, user is authenticated
        // Extract user info from token or response if available
        setUser({ id: "1", username: "user" }); // Placeholder until API provides user info
      } else {
        // Token is invalid
        localStorage.removeItem("authToken");
        setUser(null);
      }
    } catch (error) {
      console.error("Token validation failed:", error);
      localStorage.removeItem("authToken");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success && data.token) {
        localStorage.setItem("authToken", data.token);
        setUser({ 
          id: data.user?.id || "1", 
          username: data.user?.username || username,
          email: data.user?.email 
        });
        return { success: true };
      } else {
        return { 
          success: false, 
          error: data.message || "Invalid username or password. Please check your credentials." 
        };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { 
        success: false, 
        error: "Network error. Please check your connection and try again." 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useApiAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useApiAuth must be used within an AuthProvider");
  }
  return context;
}
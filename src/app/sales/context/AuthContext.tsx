"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SalesPerson } from "../types";
import { mockSalesUsers } from "../lib/mock-data";

// Define the shape of the context
interface AuthContextType {
  user: Omit<SalesPerson, "pin"> | null;
  login: (phoneNumber: string, pin: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

// Create the context with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Omit<SalesPerson, "pin"> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // On mount, try to load the user from localStorage
    try {
      const storedUser = localStorage.getItem("salesUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("salesUser");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (phoneNumber: string, pin: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate an API call
    return new Promise(resolve => {
      setTimeout(() => {
        const foundUser = mockSalesUsers.find(
          (u) => u.phoneNumber === phoneNumber && u.pin === pin
        );

        if (foundUser) {
          const { pin: _, ...userToStore } = foundUser;
          localStorage.setItem("salesUser", JSON.stringify(userToStore));
          setUser(userToStore);
          setIsLoading(false);
          resolve(true);
        } else {
          setIsLoading(false);
          resolve(false);
        }
      }, 500);
    });
  };

  const logout = () => {
    localStorage.removeItem("salesUser");
    setUser(null);
    // We can handle redirection in the component that calls logout
  };

  const value = { user, login, logout, isLoading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

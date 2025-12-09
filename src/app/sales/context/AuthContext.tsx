"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AuthUser, SalesPerson } from "../types";
import { salesDal } from "../dal";
import { AxiosError, isAxiosError } from "axios";

type Result =
  | {
    success: true;
  }
  | {
    success: false;
    error:
    | "network-error"
    | "invalid-credentials"
    | "server-error"
    | "unknown";
    errorMessage: string;
  };

interface AuthContextType {
  user: AuthUser | null;
  login: (phoneNumber: string, pin: string) => Promise<Result>;
  signUp: (params: SalesPerson) => Promise<Result>;
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
  const [user, setUser] = useState<AuthUser | null>(null);
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

  const signUp = async (params: SalesPerson): Promise<Result> => {
    setIsLoading(true);
    try {
      const data = await salesDal.signup(params);
      localStorage.setItem("salesUser", JSON.stringify(data));
      localStorage.setItem("salesUserToken", data.token);
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        joinedSince: data.joinedSince,
        lastLogin: data.lastLogin,
        picture: data.picture,
        status: data.status,
      });
      setIsLoading(false);
      return {
        success: true,
      };
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      if (!isAxiosError(err))
        return {
          success: false,
          error: "unknown",
          errorMessage: "Something went wrong.",
        };
      const axiosError = err as AxiosError<{ errorMessage: string }>;
      if (axiosError.code === "ERR_NETWORK")
        return {
          success: false,
          error: "network-error",
          errorMessage: "No internet connection.",
        };

      const res = axiosError.response;
      return {
        success: false,
        error: "server-error",
        errorMessage: res?.data?.errorMessage ?? "Something went wrong.",
      };
    }
  };

  const login = async (phoneNumber: string, pin: string): Promise<Result> => {
    setIsLoading(true);
    try {
      const data = await salesDal.login({
        phoneNumber: phoneNumber,
        pin: pin,
      });
      localStorage.setItem("salesUser", JSON.stringify(data));
      localStorage.setItem("salesUserToken", data.token);
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        joinedSince: data.joinedSince,
        lastLogin: data.lastLogin,
        picture: data.picture,
        status: data.status,
      });
      setIsLoading(false);
      return {
        success: true,
      };
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      if (!isAxiosError(err))
        return {
          success: false,
          error: "unknown",
          errorMessage: "Something went wrong.",
        };
      const axiosError = err as AxiosError<{ errorMessage: string }>;
      if (axiosError.code === "ERR_NETWORK")
        return {
          success: false,
          error: "network-error",
          errorMessage: "No internet connection.",
        };

      const res = axiosError.response;
      return {
        success: false,
        error: "server-error",
        errorMessage: res?.data?.errorMessage ?? "Something went wrong.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("salesUser");
    localStorage.removeItem("salesUserToken");

    setUser(null);
    // We can handle redirection in the component that calls logout
  };

  const value = { user, login, logout, isLoading, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

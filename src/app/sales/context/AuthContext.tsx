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

  const fetchUser = async () => {
    const res = await salesDal.getSalesProfile();
    setUser(res.data.profile);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        fetchUser();
      } catch (error) {
        console.error("Failed to fetch sales person", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const signUp = async (params: SalesPerson): Promise<Result> => {
    try {
      const data = await salesDal.signup(params);
      localStorage.setItem("salesUserToken", data.token);
      fetchUser();
      return {
        success: true,
      };
    } catch (err) {
      console.error(err);
      if (!isAxiosError(err))
        return {
          success: false,
          error: "unknown",
          errorMessage: "Something went wrong.",
        };
      const axiosError = err as AxiosError<{ data: { errorMessage: string } }>;
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
        errorMessage: res?.data?.data?.errorMessage ?? "Something went wrong.",
      };
    }
  };

  const login = async (phoneNumber: string, pin: string): Promise<Result> => {
    try {
      const data = await salesDal.login({
        phoneNumber: phoneNumber,
        pin: pin,
      });
      localStorage.setItem("salesUserToken", data.token);
      fetchUser();
      return {
        success: true,
      };
    } catch (err) {
      console.error(err);
      if (!isAxiosError(err))
        return {
          success: false,
          error: "unknown",
          errorMessage: "Something went wrong.",
        };
      const axiosError = err as AxiosError<{ data: { errorMessage: string } }>;
      if (axiosError.code === "ERR_NETWORK")
        return {
          success: false,
          error: "network-error",
          errorMessage: "No internet connection.",
        };
      const res = axiosError.response;
      if (axiosError.code === "ERR_BAD_REQUEST")
        return {
          success: false,
          error: "invalid-credentials",
          errorMessage: "Invalid phone number or PIN. Please try again.",
        };
      return {
        success: false,
        error: "server-error",
        errorMessage: res?.data?.data?.errorMessage ?? "Something went wrong.",
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

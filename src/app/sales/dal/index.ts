import axios from "axios";
import {
  SalesPerson,
  DriverOtp,
  SalesUserLoginResponse,
  DriverProfileResponse,
  SalesUserSignupResponse,
} from "../types";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/web/salesTeam",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("salesUserToken");
    if (token) {
      config.headers.auth = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const salesDal = {
  async signup(data: SalesPerson) {
    const response = await apiClient.post<SalesUserSignupResponse>(
      "/create",
      data,
    );
    return response.data.data;
  },
  async getDriverOtp(data: { driverPhoneNumber: string }) {
    const response = await apiClient.get<DriverOtp>("/getOtp", {
      params: data,
    });
    return response.data;
  },

  async login(data: { pin: string; phoneNumber: string }) {
    const response = await apiClient.post<SalesUserLoginResponse>(
      "/login",
      data,
    );
    return response.data.data;
  },

  async getDriverProfile(data: { internationalPhoneNumber: string }) {
    const response = await apiClient.get<DriverProfileResponse>(
      "/driver/profile",
      {
        params: data,
      },
    );
    return response.data;
  },
  async approveDriver(data: { driverPhoneNumber: string; pin: string }) {
    const response = await apiClient.post("/driver/approve", {
      data,
    });
    return response.data;
  },
};

export interface SalesPerson {
  firstName: string;
  lastName: string;
  pin: string;
  phoneNumber: string;
  badgeNumber: string;
  managerName: string;
  managerPhoneNumber: string;
  company: string;
}

export interface AuthUser {
  firstName: string;
  lastName: string;
  joinedSince: string;
  lastLogin: string;
  picture: string;
  status: "inactive" | "active";
}

export type SalesUserLoginResponse = {
  data: {
    token: string;
    firstName: string;
    lastName: string;
    joinedSince: string;
    lastLogin: string;
    picture: string;
    status: "inactive" | "active";
    statusCode: 200;
    errorMessage: string;
    weeklyTarget: number;
    weeklySales: number;
  };
};

export type SalesUserSignupResponse = {
  data: {
    token: string;
    firstName: string;
    lastName: string;
    joinedSince: string;
    lastLogin: string;
    picture: string;
    status: "inactive" | "active";
    statusCode: number;
    errorMessage: string;
    weeklyTarget: number;
    weeklySales: number;
  };
};

export type DriverOtp = {
  data: {
    otp: number;
    phoneNumber: string;
    otpUpdatedAt: string;
    statusCode: number;
    errorMessage: string;
  };
};

export type DriverProfileResponse = {
  data: {
    profile: {
      firstName: string;
      lastName: string;
      internationalPhoneNumber: string;
      picture: string;
    };
    statusCode: 200;
    errorMessage: string;
  };
};

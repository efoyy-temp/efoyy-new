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

export type SalesProfileResponse = {
  data: {
    profile: {
      id: number;
      firstName: string;
      lastName: string;
      preferredName: string | null;
      phoneNumber: string;
      email: string | null;
      status: "active" | "inactive";
      company: string;
      role: string;
      badgeNumber: string;
      department: string | null;
      teamName: string | null;
      isEmployee: boolean;
      managerName: string;
      managerPhoneNumber: string;
      managerEmail: string | null;
      joinedAt: string;
      startDate: string;
      lastActivityAt: string;
      picture: string;
      stats: {
        numberOfSales: number;
        driverOnboardedCount: number;
        passengerOnboardedCount: number;
        activeDriverPipeline: number;
        activePassengerPipeline: number;
        totalAmountPaid: string;
        totalAmountUnpaid: string;
        commissionPending: string;
        bonusPaid: string;
        targetMonthlySales: number;
        targetQuarterlySales: number;
        targetWeeklySales: number;
        numberOfStickers: number;
        conversionRate: string;
      };
      createdAt: string;
      updatedAt: string;
    };
    statusCode: number;
    errorMessage: string;
  };
};

export type AuthUser = SalesProfileResponse["data"]["profile"];

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
      vehicle: {
        plateNumber: string;
        color: string;
        colorCode: string;
        model: string;
        brand: string;
      } | null;
    };
    statusCode: 200;
    errorMessage: string;
  };
};

export type SalesPersonListResponse = {
  data: {
    salesPersons: {
      id: number;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    }[];
    count: number;
    statusCode: number;
    errorMessage: string;
  };
};

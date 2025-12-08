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

export interface Driver {
  fullName: string;
  phoneNumber: string;
  licenseNumber: string;
  licensePlate: string;
  carModel: string;
  carColor: string;
  carYear: string;
  approvalStatus: 'Approved' | 'Pending' | 'Rejected';
  riskScore: number; // 0-100
  notes: string;
}

export enum AppView {
  SIGNUP = 'SIGNUP',
  DASHBOARD = 'DASHBOARD'
}
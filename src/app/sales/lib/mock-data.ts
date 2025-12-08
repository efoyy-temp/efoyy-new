import { SalesPerson } from "../types";

// Note: In a real app, this data would come from a secure backend.
// The PIN should never be stored in plaintext.
export const mockSalesUsers: SalesPerson[] = [
  {
    firstName: "Alex",
    lastName: "Johnson",
    phoneNumber: "+251912121212",
    pin: "1234", // This is for demonstration purposes only.
    badgeNumber: "B-492",
    managerName: "Jane Doe",
    managerPhoneNumber: "+15555555555",
    company: "Efoyy",
  },
];

"use client";
import React, { useState } from "react";
import { Layout } from "./components/Layout";
import { SignupForm } from "./components/SignupForm";
import { DriverSearch } from "./components/DriverSearch";
import { DriverProfile } from "./components/DriverProfile";
import { SalesPerson, Driver, AppView } from "./types";

function App() {
  const [view, setView] = useState<AppView>(AppView.SIGNUP);
  const [currentUser, setCurrentUser] = useState<SalesPerson | null>(null);
  const [currentDriver, setCurrentDriver] = useState<Driver | null>(null);

  const handleSignup = (user: SalesPerson) => {
    setCurrentUser(user);
    setView(AppView.DASHBOARD);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentDriver(null);
    setView(AppView.SIGNUP);
  };

  const handleDriverFound = (driver: Driver) => {
    setCurrentDriver(driver);
  };

  const handleCloseDriverProfile = () => {
    setCurrentDriver(null);
  };

  const handleApproveDriver = (password: string): boolean => {
    if (!currentUser || !currentDriver) return false;

    // Verify password
    if (password === currentUser.password) {
      setCurrentDriver({
        ...currentDriver,
        approvalStatus: "Approved",
      });
      return true;
    }

    return false;
  };

  return (
    <Layout currentUser={currentUser} onLogout={handleLogout}>
      {view === AppView.SIGNUP && <SignupForm onSignup={handleSignup} />}

      {view === AppView.DASHBOARD && !currentDriver && (
        <DriverSearch onDriverFound={handleDriverFound} />
      )}

      {view === AppView.DASHBOARD && currentDriver && (
        <DriverProfile
          driver={currentDriver}
          onClose={handleCloseDriverProfile}
          onApprove={handleApproveDriver}
        />
      )}
    </Layout>
  );
}

export default App;

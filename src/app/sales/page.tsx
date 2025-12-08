"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import { Layout } from "./components/Layout";
import { DriverSearch } from "./components/DriverSearch";
import { DriverProfile } from "./components/DriverProfile";
import { Driver } from "./types";
import { Loader2 } from "lucide-react";

export default function SalesDashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [currentDriver, setCurrentDriver] = useState<Driver | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/sales/login");
    }
  }, [user, isLoading, router]);

  const handleDriverFound = (driver: Driver) => {
    setCurrentDriver(driver);
  };

  const handleCloseDriverProfile = () => {
    setCurrentDriver(null);
  };

  const handleApproveDriver = (password: string): boolean => {
    // In a real app, this would be a backend call.
    // For this mock, we'll just approve it without checking the password.
    if (currentDriver) {
        setCurrentDriver({
            ...currentDriver,
            approvalStatus: "Approved",
          });
          return true;
    }
    return false;
  };

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Layout>
      {!currentDriver ? (
        <DriverSearch onDriverFound={handleDriverFound} />
      ) : (
        <DriverProfile
          driver={currentDriver}
          onClose={handleCloseDriverProfile}
          onApprove={handleApproveDriver}
        />
      )}
    </Layout>
  );
}


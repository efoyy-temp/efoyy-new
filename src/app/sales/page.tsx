"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import { Layout } from "./components/Layout";
import { DriverSearch } from "./components/DriverSearch";
import { DriverProfile } from "./components/DriverProfile";
import { Loader2 } from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DriverProfileResponse } from "./types";
import { Button } from "@/components/ui/button";
import { SalesProfile } from "./components/SalesProfile";

export default function SalesDashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [currentDriver, setCurrentDriver] = useState<
    DriverProfileResponse["data"]["profile"] | null
  >(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/sales/login");
    }
  }, [user, isLoading, router]);

  const handleDriverFound = (
    driver: DriverProfileResponse["data"]["profile"],
  ) => {
    setCurrentDriver(driver);
  };

  const handleCloseDriverProfile = () => {
    setCurrentDriver(null);
  };

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user.status === "inactive") {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center text-center pt-20">
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Wait for Activation
            </h2>
            <p className="text-muted-foreground mb-6">
              Your account is currently inactive. Please wait for the
              activation. Please contact your manager for assistance or call
              9446.
            </p>
            <Button onClick={logout} variant="destructive">
              Log Out
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SalesProfile />
      <DriverSearch onDriverFound={handleDriverFound} />
      <Dialog
        open={!!currentDriver}
        onOpenChange={(isOpen) => !isOpen && handleCloseDriverProfile()}
      >
        <DialogContent>
          {currentDriver && (
            <DriverProfile
              driver={currentDriver}
              onClose={handleCloseDriverProfile}
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

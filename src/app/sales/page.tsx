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

  return (
    <Layout>
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

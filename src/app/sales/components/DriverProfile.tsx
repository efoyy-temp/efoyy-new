import React, { useState } from "react";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { salesDal } from "../dal";
import { DriverOtp, DriverProfileResponse } from "../types";

interface DriverProfileProps {
  driver: DriverProfileResponse["data"]["profile"];
  onClose: () => void;
  onApprove: (password: string) => boolean;
}

export const DriverProfile: React.FC<DriverProfileProps> = ({
  driver,
  onClose,
}) => {
  const [otp, setOtp] = useState<DriverOtp["data"] | null>(null);
  const [isFetchingOtp, setIsFetchingOtp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleViewOtp = async () => {
    setIsFetchingOtp(true);
    setError(null);
    try {
      const response = await salesDal.getDriverOtp({
        driverPhoneNumber: driver.internationalPhoneNumber,
      });
      if (response.data) {
        setOtp(response.data);
      } else {
        setError("Failed to fetch OTP.");
      }
    } catch (err) {
      setError("An error occurred while fetching OTP.");
    } finally {
      setIsFetchingOtp(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Driver Profile</DialogTitle>
        <DialogDescription>
          Review the driver's details and take action.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={driver.picture}
              alt={`${driver.firstName} ${driver.lastName}`}
            />
            <AvatarFallback>
              {driver.firstName[0]}
              {driver.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">
              {driver.firstName} {driver.lastName}
            </h3>
            <p className="text-muted-foreground">
              {driver.internationalPhoneNumber}
            </p>
          </div>
        </div>

        {otp && (
          <div className="mt-4 p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground">Driver OTP</p>
            <p className="text-2xl font-bold tracking-widest">{otp.otp}</p>
            <p className="text-xs text-muted-foreground">
              Expires at:{" "}
              {new Date(otp.otpUpdatedAt).toLocaleTimeString()}
            </p>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <DialogFooter className="sm:justify-between gap-2">
        <Button onClick={handleViewOtp} disabled={isFetchingOtp}>
          {isFetchingOtp ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          View OTP
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Approve Driver
          </Button>
          <DialogClose asChild>
            <Button onClick={onClose}>Close</Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </>
  );
};

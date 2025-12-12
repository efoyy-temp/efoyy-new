"use client";

import React, { useState } from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, CircleAlert } from "lucide-react";
import { salesDal } from "../dal";
import { DriverOtp } from "../types";
import { AxiosError, isAxiosError } from "axios";

interface NewDriverDialogProps {
  phoneNumber: string;
  onClose: () => void;
}

export const NewDriverDialog: React.FC<NewDriverDialogProps> = ({
  phoneNumber,
  onClose,
}) => {
  const [otp, setOtp] = useState<DriverOtp["data"] | null>(null);
  const [isFetchingOtp, setIsFetchingOtp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchOtp = async () => {
    setError(null);
    setIsFetchingOtp(true);
    try {
      const response = await salesDal.getDriverOtp({
        driverPhoneNumber: phoneNumber,
      });
      if (response.data) {
        setOtp(response.data);
      } else {
        setError("Failed to fetch OTP.");
      }
    } catch (err) {
      if (isAxiosError(err)) {
        const axiosError = err as AxiosError<{
          data: { errorMessage: string };
        }>;
        setError(
          axiosError.response?.data?.data?.errorMessage ??
          "An error occurred while fetching OTP.",
        );
      } else setError("An error occurred while fetching OTP.");
      console.error(err);
    } finally {
      setIsFetchingOtp(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Driver Not Found</DialogTitle>
        <DialogDescription>
          The driver with phone number {phoneNumber} is not registered. You can
          get an OTP to help them sign up.
        </DialogDescription>
      </DialogHeader>

      <div className="py-4">
        {!otp ? (
          <Button
            onClick={handleFetchOtp}
            disabled={isFetchingOtp}
            className="w-full"
          >
            {isFetchingOtp && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Get Registration OTP
          </Button>
        ) : (
          <div className="mt-4 p-4 text-center bg-secondary rounded-lg">
            <p className="text-xs mb-2 text-muted-foreground">Driver OTP</p>
            <p className="text-3xl text-center font-bold tracking-widest">
              {otp.otp}
            </p>
            <DialogDescription className="mt-4 gap-4 text-red-500">
              <CircleAlert className="inline-flex  " />
              {"    "}
              Only use the OTP if the driver is not receiving sms.
            </DialogDescription>
          </div>
        )}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

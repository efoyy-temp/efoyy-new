import React, { useState } from "react";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { salesDal } from "../dal";
import { DriverOtp, DriverProfileResponse } from "../types";

import { useToast } from "@/hooks/use-toast";
import parsePhoneNumber from "libphonenumber-js";
import { AxiosError, isAxiosError } from "axios";
import { CircleAlert } from "lucide-react";

interface DriverProfileProps {
  driver: DriverProfileResponse["data"]["profile"];
  onClose: () => void;
}

export const DriverProfile: React.FC<DriverProfileProps> = ({
  driver,
  onClose,
}) => {
  const { toast } = useToast();
  const [otp, setOtp] = useState<DriverOtp["data"] | null>(null);
  const [showOtp, setShowOtp] = useState(false);
  const [isFetchingOtp, setIsFetchingOtp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isApproving, setIsApproving] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [pin, setPin] = useState("");

  const handleViewOtpToggle = async () => {
    setError(null);
    if (showOtp) {
      setShowOtp(false);
      return;
    }

    if (!otp) {
      setIsFetchingOtp(true);
      try {
        const response = await salesDal.getDriverOtp({
          driverPhoneNumber: driver.internationalPhoneNumber,
        });
        if (response.data) {
          setOtp(response.data);
          setShowOtp(true);
        } else {
          setError("Failed to fetch OTP.");
        }
      } catch (err) {
        setError("An error occurred while fetching OTP.");
      } finally {
        setIsFetchingOtp(false);
      }
    } else {
      setShowOtp(true);
    }
  };

  const handleConfirmApproval = async () => {
    setError(null);
    setIsConfirming(true);
    try {
      const parsed = parsePhoneNumber(driver.internationalPhoneNumber);

      await salesDal.approveDriver({
        driverPhoneNumber: parsed!.formatNational().replaceAll(" ", ""),
        pin: pin,
      });

      toast({
        title: "Driver Approved",
        description: `${driver.firstName} ${driver.lastName} has been successfully approved.`,
      });
      onClose(); // Close the dialog
    } catch (err) {
      if (isAxiosError(err)) {
        const axiosError = err as AxiosError<{
          data: { errorMessage: string };
        }>;
        if (axiosError.code === "ERR_NETWORK")
          setError("No internet connection.");
        else
          setError(
            axiosError.response?.data?.data?.errorMessage ??
            "Something went wrong.",
          );
      } else {
        setError("Something went wrong.");
      }
      setPin("");
    } finally {
      setIsConfirming(false);
    }
  };

  const handleCancelApproval = () => {
    setIsApproving(false);
    setError(null);
    setPin("");
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {isApproving ? "Confirm Approval" : "Driver Profile"}
        </DialogTitle>
        {!isApproving && (
          <DialogDescription>
            Review the driver&apos;s details and take action.
          </DialogDescription>
        )}
      </DialogHeader>

      {isApproving ? (
        <div className="py-4 space-y-4">
          <Label htmlFor="pin">Enter your PIN to approve this driver</Label>
          <InputOTP
            id="pin"
            maxLength={4}
            value={pin}
            onChange={(value) => setPin(value)}
            containerClassName="w-full gap-6 self-center justify-between my-8 has-[:disabled]:opacity-100"
          >
            <InputOTPGroup className="w-full justify-between [&>*]:rounded-md ">
              <InputOTPSlot
                className="!text-xl leading-tight border size-12"
                index={0}
              />
              <InputOTPSlot
                className="!text-xl leading-tight border size-12"
                index={1}
              />
              <InputOTPSlot
                className="!text-xl leading-tight border size-12"
                index={2}
              />
              <InputOTPSlot
                className="!text-xl leading-tight border size-12"
                index={3}
              />
            </InputOTPGroup>
          </InputOTP>
          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}
        </div>
      ) : (
        <div className="py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={driver.picture}
                alt={`${driver.firstName} ${driver.lastName}`}
                className="object-cover"
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

          {showOtp && otp && (
            <div className="mt-4 p-4 text-center bg-secondary rounded-lg">
              <p className="text-xs mb-2 text-muted-foreground">Driver OTP</p>
              <p className="text-3xl text-center font-bold tracking-widest">
                {otp.otp}
              </p>

              <DialogDescription className="mt-4 gap-4 text-red-500  ">
                <CircleAlert className="inline-flex  " />
                {"    "}
                Only use the OTP if the driver is not receiving sms.
              </DialogDescription>
            </div>
          )}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      )}

      <DialogFooter className="sm:justify-between gap-2">
        {isApproving ? (
          <>
            <Button variant="ghost" onClick={handleCancelApproval}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirmApproval}
              disabled={pin.length < 4 || isConfirming}
            >
              {isConfirming && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Confirm Approval
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleViewOtpToggle}
              variant="outline"
              disabled={isFetchingOtp}
            >
              {isFetchingOtp ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {showOtp ? "Hide OTP" : "View OTP"}
            </Button>

            <DialogClose asChild>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </DialogClose>
            <Button onClick={() => setIsApproving(true)}>Approve Driver</Button>
          </>
        )}
      </DialogFooter>
    </>
  );
};

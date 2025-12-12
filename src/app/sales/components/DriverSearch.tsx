import React, { useState } from "react";
import { DriverProfileResponse } from "../types";
import "react-phone-input-2/lib/style.css";
import { salesDal } from "../dal";
import { Loader2, Search } from "lucide-react";
import { isValidNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import { Button } from "@/components/ui/button";
import { isAxiosError } from "axios";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { NewDriverDialog } from "./NewDriverDialog";

interface DriverSearchProps {
  onDriverFound: (driver: DriverProfileResponse["data"]["profile"]) => void;
}

export const DriverSearch: React.FC<DriverSearchProps> = ({
  onDriverFound,
}) => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showNewDriverDialog, setShowNewDriverDialog] = useState(false);

  const isValidPhoneNumber = isValidNumber(phone, "ET");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhoneNumber) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await salesDal.getDriverProfile({
        internationalPhoneNumber: `+${phone}`,
      });
      if (response.data.profile) {
        onDriverFound(response.data.profile);
      } else {
        setShowNewDriverDialog(true);
      }
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 404) {
        setShowNewDriverDialog(true);
      } else {
        console.error(err);
        setError("Failed to retrieve driver details. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-white mb-4 tracking-tight">
            Driver Search
          </h1>
          <p className="text-zinc-500">
            Enter a driver&apos;s phone number to retrieve their verification
            profile.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="relative group flex flex-col gap-4"
        >
          <PhoneInput
            onChange={(phoneNumber) => setPhone(phoneNumber)}
            dropdownClass="!bg-card"
            countryCodeEditable={false}
            buttonClass="!bg-card !border-border !rounded-md"
            inputClass="!bg-card !ml-16 !pl-4 !h-auto  py-2  placeholder:!text-muted-foreground !border-border !rounded-r-md h-auto flex-1"
            containerClass="!border-border w-full flex "
            value={phone}
            country={"et"}
          />
          <Button
            size="lg"
            disabled={!isValidPhoneNumber || isLoading}
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            Search
          </Button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}
      </div>
      <Dialog
        open={showNewDriverDialog}
        onOpenChange={setShowNewDriverDialog}
      >
        <DialogContent>
          <NewDriverDialog
            phoneNumber={`+${phone}`}
            onClose={() => setShowNewDriverDialog(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};


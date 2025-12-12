"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Loader2 } from "lucide-react";
import { Layout } from "../components/Layout";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const res = await login("+" + phoneNumber, pin);
    setIsLoading(false);
    if (res.success) {
      router.push("/sales");
    } else {
      if (res.error === "network-error") setError("No internet connection.");
      else if (res.error === "invalid-credentials")
        setError("Invalid phone number or PIN. Please try again.");
      else setError("Something went wrong.");
    }
  };

  return (
    <Layout>
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            Sales Portal Login
          </h1>
          <p className="text-muted-foreground">
            Enter your credentials to access the dashboard.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <PhoneInput
              country={"et"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              dropdownClass="!bg-card"
              buttonClass="!bg-card !border-border !rounded-md"
              inputClass="!bg-card !ml-16 !pl-4 !h-auto  py-1  placeholder:!text-muted-foreground !border-border !rounded-r-md h-auto flex-1"
              containerClass="!border-border w-full flex "
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pin">PIN</Label>
            <InputOTP
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
          </div>

          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-base"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Log In
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sales/signup" className="underline font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </Layout>
  );
}

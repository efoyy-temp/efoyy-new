"use client";

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { salesDal } from "../dal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";

const formSchema = z.object({
  firstName: z.string().trim().min(2, "First name is too short"),
  lastName: z.string().trim().min(2, "Last name is too short"),
  pin: z.string().length(4, "PIN must be 4 digits"),
  phoneNumber: z
    .string()
    .refine((data) => isValidPhoneNumber(data), "Invalid phone number"),
  badgeNumber: z.string().trim().min(1, "Badge number is required"),
  managerName: z.string().trim().min(2, "Manager name is too short"),
  managerPhoneNumber: z
    .string()
    .refine((data) => isValidPhoneNumber(data), "Invalid manager phone number"),
  company: z.string().trim().min(1, "Company is required"),
});

type FormInput = z.infer<typeof formSchema>;

export const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const response = await salesDal.signup(data);
    if (response.statusCode === 201) {
      toast.success("Account created successfully!");
      reset();
    } else {
      toast.error(response.errorMessage || "An error occurred.");
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-6">
        <CardTitle className="text-2xl">Create Account</CardTitle>
        <CardDescription>
          Enter your personnel details to access the driver database.
        </CardDescription>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="e.g. Alex"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="e.g. Johnson"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <PhoneInput
                  country={"et"}
                  value={field.value}
                  onChange={(phone) => field.onChange("+" + phone)}
                  dropdownClass="!bg-card"
                  buttonClass="!bg-card !border-border !rounded-md"
                  inputClass="!bg-card !ml-16 !pl-4 !h-auto  py-1  placeholder:!text-muted-foreground !border-border !rounded-r-md h-auto flex-1"
                  containerClass="!border-border w-full flex "
                />
              )}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="badgeNumber">Badge ID</Label>
            <Input
              id="badgeNumber"
              placeholder="e.g. B-492"
              {...register("badgeNumber")}
            />
            {errors.badgeNumber && (
              <p className="text-red-500 text-sm">
                {errors.badgeNumber.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="pin">Create PIN</Label>
            <Controller
              control={control}
              name="pin"
              render={({ field }) => (
                <InputOTP
                  maxLength={4}
                  {...field}
                  type="password"
                  style={{ verticalAlign: "middle" }}
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
              )}
            />
            {errors.pin && (
              <p className="text-red-500 text-sm">{errors.pin.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="managerName">Manager Name</Label>
              <Input
                id="managerName"
                placeholder="e.g. Jane Doe"
                {...register("managerName")}
              />
              {errors.managerName && (
                <p className="text-red-500 text-sm">
                  {errors.managerName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerPhoneNumber">Manager Phone Number</Label>
              <Controller
                control={control}
                name="managerPhoneNumber"
                render={({ field }) => (
                  <PhoneInput
                    country={"et"}
                    value={field.value}
                    onChange={(phone) => field.onChange("+" + phone)}
                    dropdownClass="!bg-card"
                    buttonClass="!bg-card !border-border !rounded-md"
                    inputClass="!bg-card !ml-16 !pl-4 !h-auto  py-1  placeholder:!text-muted-foreground !border-border !rounded-r-md h-auto flex-1"
                    containerClass="!border-border w-full flex "
                  />
                )}
              />
              {errors.managerPhoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.managerPhoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="e.g. Efoyy"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            Access Platform
          </Button>
        </form>
      </div>
    </div>
  );
};

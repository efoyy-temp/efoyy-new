"use client";

import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardTitle } from "@/components/ui/card";
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
import { useAuth } from "../context/AuthContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companies } from "../dal/constants";
import { useRouter } from "next/navigation";

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

export const SignupForm = () => {
  const router = useRouter();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
    ...form
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const response = await auth.signUp(data);
    if (response.success) {
      toast.success("Account created successfully!");
      router.push("/sales");
      reset();
    } else {
      toast.error(response.errorMessage);
    }
  };

  useEffect(() => {
    if (!auth.isLoading && auth.user) router.push("/sales");
  }, [auth.isLoading, auth.user]);

  return (
    <div className="w-full ">
      <div className="mb-6">
        <CardTitle className="text-2xl">Create an Account</CardTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Input
                id="firstName"
                placeholder="First Name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                id="lastName"
                placeholder="Last Name"
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

            <div className="flex items-center gap-2">
              <span className="text-xl min-w-12 shrink-0">ፎ _</span>
              <Input
                id="badgeNumber"
                placeholder="000"
                {...register("badgeNumber")}
              />
            </div>
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

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Controller
              control={control}
              name="company"
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    const { managerPhoneNumber, managerName } = companies.find(
                      (company) => company.name === value,
                    )!;
                    form.setValue("managerName", managerName);
                    form.setValue("managerPhoneNumber", managerPhoneNumber);
                  }}
                  value={field.value}
                >
                  <SelectTrigger ref={field.ref}>
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem
                        key={company.name as string}
                        value={company.name as string}
                      >
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

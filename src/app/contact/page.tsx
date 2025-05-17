"use client";

import { useToast } from "@/hooks/use-toast";
import { isValidPhoneNumber } from "libphonenumber-js";
import { MapPin, Phone, Mail, Clock, Send, Instagram } from "lucide-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react"; // Import Loader2 for spinner
import { useTranslations } from "next-intl";
import { gql, useMutation } from "@apollo/client"; // Import gql and useMutation

// Define a Zod schema for form validation
const formSchema = z.object({
  name: z.string().trim().min(1, "Required").min(2, {
    message: "Too short",
  }),
  email: z
    .string()
    .trim()
    .refine(
      (data) => (data ? z.string().email().safeParse(data).success : true),
      "Invalid email address.",
    )
    .optional(),
  phoneNumber: z
    .object({
      dialCode: z.string(),
      number: z.string(),
    })
    .refine((data) => data.dialCode && data.number, "Phone number is required")
    .refine((data) => {
      console.log(data);
      return isValidPhoneNumber(data.number);
    }, "Invalid phone number"),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Define the form input type
type FormInput = z.infer<typeof formSchema>;

const CREATE_CONTACT_US_MUTATION = gql`
  mutation CreateContactUs($userInput: createContactUsInputType) {
    createContactUs(userInput: $userInput) {
      statusCode
      errorMessage
    }
  }
`;

export default function ContactPage() {
  const { toast } = useToast();
  const t = useTranslations("contactPage");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    ...form
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  });

  const [createContactUs, { loading: isSubmitting }] = useMutation(
    CREATE_CONTACT_US_MUTATION,
    {
      onCompleted: (data) => {
        // Handle successful mutation response
        if (data?.createContactUs?.statusCode === 200) {
          console.log("Form Data Submitted Successfully");
          toast({
            description: t("successMessage"),
          });
          reset();
        } else {
          // Handle errors returned in the GraphQL response body
          console.error(
            "Form Submission Error:",
            data?.createContactUs?.errorMessage || "Unknown error",
          );
          toast({
            description:
              data?.createContactUs?.errorMessage || t("errorMessage"),
            variant: "destructive",
          });
        }
      },
      onError: (error) => {
        // Handle network or other Apollo Client errors
        console.error("Form Submission Error:", error);
        toast({
          description: t("errorMessage"),
          variant: "destructive",
        });
      },
    },
  );

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    createContactUs({
      variables: {
        userInput: {
          name: data.name,
          email: data.email ?? null,
          phoneDialCode: data.phoneNumber.dialCode,
          phoneNumber: data.phoneNumber.number,
          subject: data.subject,
          message: data.message,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {t("title")}
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("formTitle")}</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("name")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("nameLabel")}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("emailLabel")}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field, fieldState }) => (
                    <div className="space-y-2 sm:col-span-2 [&_li]:!bg-ed-200">
                      <label
                        htmlFor="phoneNumber"
                        className="text-sm font-medium"
                      >
                        {t("phoneNumber")}
                      </label>

                      <PhoneInput
                        onChange={(phone, country) => {
                          console.log({
                            number: phone,
                            // @ts-ignore
                            dialCode: country?.dialCode,
                          });
                          field.onChange({
                            number: "+" + phone,
                            // @ts-ignore
                            dialCode: country?.dialCode,
                          });
                        }}
                        dropdownClass="!bg-card"
                        countryCodeEditable={false}
                        buttonClass="!bg-card !border-border !rounded-md"
                        inputClass="!bg-card !ml-16 !pl-4 !h-auto  py-1  placeholder:!text-muted-foreground !border-border !rounded-r-md h-auto flex-1"
                        containerClass="!border-border w-full flex "
                        value={field.value?.number}
                        country={"et"}
                      />

                      {fieldState.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {t("subject")}
                </label>
                <Input
                  id="subject"
                  placeholder={t("subjectLabel")}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("messageLabel")}
                  className="min-h-[150px] "
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t("send")}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* ... existing contact info and social links ... */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("contactInfoTitle")}
              </h2>
              <div className="space-y-6">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-muted p-3 rounded-full">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">
                            {t("location")}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {t("locationDetails")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-muted p-3 rounded-full">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">
                            {t("phone")}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {t("phoneNumber")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-muted p-3 rounded-full">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">
                            {t("emailTitle")}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {t("emailAddress")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-muted p-3 rounded-full">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-card-foreground">
                            {t("hours")}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {t("workingHours")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">{t("followUs")}</h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors"
                >
                  <Instagram size={24} className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

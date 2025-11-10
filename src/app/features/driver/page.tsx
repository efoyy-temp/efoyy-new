"use client";
import Image from "next/image";
import {
  CalendarClock,
  DollarSign,
  Shield,
  MapPin,
  Star,
  Smartphone,
  Clock,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function DriverFeaturesPage() {
  const driverT = useTranslations("featuresPage.driver");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* DRIVER FEATURES SECTION */}
      <section
        id="driver-features"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              For Drivers
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {driverT("title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {driverT("description")}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] py-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  {driverT("freedom.title")}
                </h3>
                <p className="text-muted-foreground">
                  {driverT("freedom.description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8" asChild>
                  <a href="#driver-cta">{driverT("signUp")}</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#driver-how-it-works">{driverT("learnMore")}</a>
                </Button>
              </div>
            </div>
            <Image
              src="/iPhone 16.png"
              width="550"
              height="550"
              alt="Driver using the Efoyy app"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>

      {/* Driver Key Benefits */}
      <section
        id="driver-benefits"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {driverT("benefits.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {driverT("benefits.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CalendarClock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{driverT("benefits.flexible.title")}</CardTitle>
                <CardDescription>
                  {driverT("benefits.flexible.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>{driverT("benefits.flexible.items.0")}</li>
                  <li>{driverT("benefits.flexible.items.1")}</li>
                  <li>{driverT("benefits.flexible.items.2")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{driverT("benefits.earnings.title")}</CardTitle>
                <CardDescription>
                  {driverT("benefits.earnings.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>{driverT("benefits.earnings.items.0")}</li>
                  <li>{driverT("benefits.earnings.items.1")}</li>
                  <li>{driverT("benefits.earnings.items.2")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{driverT("benefits.protection.title")}</CardTitle>
                <CardDescription>
                  {driverT("benefits.protection.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>{driverT("benefits.protection.items.0")}</li>
                  <li>{driverT("benefits.protection.items.1")}</li>
                  <li>{driverT("benefits.protection.items.2")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Driver How It Works */}
      <section
        id="driver-how-it-works"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {driverT("howItWorks.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {driverT("howItWorks.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Sign Up</h3>
              <p className="text-sm text-center text-muted-foreground">
                Complete our simple online application process
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BadgeCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Get Verified</h3>
              <p className="text-sm text-center text-muted-foreground">
                Pass a background check and vehicle inspection
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Go Online</h3>
              <p className="text-sm text-center text-muted-foreground">
                Turn on the app when you&apos;re ready to accept rides
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">4. Start Earning</h3>
              <p className="text-sm text-center text-muted-foreground">
                Get paid weekly with direct deposit to your bank
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver App Features */}
      <section
        id="driver-app"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
            <Image
              src="/iPhone 16.png"
              width="550"
              height="550"
              alt="Efoyy driver app interface"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {driverT("app.title")}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {driverT("app.description")}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Smart Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Turn-by-turn directions and traffic updates in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Destination Filters</h3>
                    <p className="text-sm text-muted-foreground">
                      Set your destination and get rides heading your way
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Earnings Tracker</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor your earnings and trips in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Driver Rewards</h3>
                    <p className="text-sm text-muted-foreground">
                      Earn points for consistent service and unlock benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Testimonials */}
      <section
        id="driver-stories"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {driverT("stories.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {driverT("stories.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/7.jpg"
                    width="100"
                    height="100"
                    alt="Driver portrait"
                    className="rounded-full aspect-square object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Michael T.</h3>
                    <p className="text-sm text-muted-foreground">
                      Driving since 2022
                    </p>
                    <p className="text-sm">
                      &quot;I started driving part-time and now I&apos;m making
                      more than I did at my office job. The flexibility allows
                      me to be there for my family while earning a great
                      income.&quot;
                    </p>
                    <div className="flex justify-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/18.jpg"
                    width="100"
                    height="100"
                    alt="Driver portrait"
                    className="rounded-full aspect-square object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Sarah J.</h3>
                    <p className="text-sm text-muted-foreground">
                      Driving since 2021
                    </p>
                    <p className="text-sm">
                      &quot;As a student, Efoyy gives me the perfect way to earn
                      money between classes. I can work when I want and focus on
                      my studies when needed.&quot;
                    </p>
                    <div className="flex justify-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/92.jpg"
                    width="100"
                    height="100"
                    alt="Driver portrait"
                    className="rounded-full aspect-square object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">David R.</h3>
                    <p className="text-sm text-muted-foreground">
                      Driving since 2020
                    </p>
                    <p className="text-sm">
                      &quot;After losing my job during the pandemic, Efoyy
                      became my lifeline. Three years later, I&apos;m still
                      driving because I love the freedom and the income is
                      better than any job I&apos;ve had.&quot;
                    </p>
                    <div className="flex justify-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Driver CTA */}
      <section
        id="driver-cta"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Start Driving?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied drivers and start earning on your
                own schedule today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">
                Sign Up Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import {
  Shield,
  MapPin,
  Star,
  Smartphone,
  Clock,
  Car,
  CreditCard,
  Bell,
  Gift,
  Zap,
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

export default function RiderFeaturesPage() {
  const riderT = useTranslations("featuresPage.rider");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* RIDER FEATURES SECTION */}
      <section
        id="rider-features"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 border-t flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              For Riders
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Go Anywhere, Anytime
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the convenience of Efoyy with reliable rides at your
                fingertips, day or night.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr] py-12">
            <Image
              src="/iPhone 16.png"
              width="550"
              height="550"
              alt="Person using the Efoyy rider app"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  {riderT("convenience.title")}
                </h3>
                <p className="text-muted-foreground">
                  {riderT("convenience.description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8" asChild>
                  <a href="#rider-cta">{riderT("book")}</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#rider-how-it-works">{riderT("learnMore")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rider Key Benefits */}
      <section
        id="rider-benefits"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {riderT("benefits.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {riderT("benefits.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{riderT("benefits.quick.title")}</CardTitle>
                <CardDescription>
                  {riderT("benefits.quick.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Average pickup time under 5 minutes</li>
                  <li>Real-time driver location tracking</li>
                  <li>Schedule rides in advance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{riderT("benefits.safety.title")}</CardTitle>
                <CardDescription>
                  {riderT("benefits.safety.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Verified and background-checked drivers</li>
                  <li>Share your trip details with trusted contacts</li>
                  <li>24/7 support and emergency assistance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CreditCard className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{riderT("benefits.affordable.title")}</CardTitle>
                <CardDescription>
                  {riderT("benefits.affordable.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Economy, standard, and premium vehicle options</li>
                  <li>Transparent pricing with no hidden fees</li>
                  <li>Split fare with friends for group rides</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rider How It Works */}
      <section
        id="rider-how-it-works"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {riderT("howItWorks.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {riderT("howItWorks.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Download App</h3>
              <p className="text-sm text-center text-muted-foreground">
                Get the Efoyy app from your app store
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Enter Location</h3>
              <p className="text-sm text-center text-muted-foreground">
                Set your pickup point and destination
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Choose Ride</h3>
              <p className="text-sm text-center text-muted-foreground">
                Select from economy, standard, or premium
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">4. Enjoy the Ride</h3>
              <p className="text-sm text-center text-muted-foreground">
                Rate your driver and provide feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rider App Features */}
      <section
        id="rider-app"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {riderT("app.title")}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {riderT("app.description")}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Live Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Follow your driver&apos;s location in real-time on the map
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Bell className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Arrival Alerts</h3>
                    <p className="text-sm text-muted-foreground">
                      Get notified when your driver is arriving
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Loyalty Program</h3>
                    <p className="text-sm text-muted-foreground">
                      Earn points with every ride for future discounts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Quick Reorder</h3>
                    <p className="text-sm text-muted-foreground">
                      Easily book rides to your favorite destinations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/iPhone 16.png"
              width="550"
              height="550"
              alt="Efoyy rider app interface"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>

      {/* Rider Testimonials */}
      <section
        id="rider-stories"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {riderT("stories.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {riderT("stories.description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <Card
                key={index}
                className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Image
                      src="/iPhone 16.png"
                      width="100"
                      height="100"
                      alt="Rider portrait"
                      className="rounded-full aspect-square object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="font-bold">
                        {riderT(`stories.testimonials.${index}.name`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {riderT(`stories.testimonials.${index}.since`)}
                      </p>
                      <p className="text-sm">
                        {riderT(`stories.testimonials.${index}.quote`)}
                      </p>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rider CTA */}
      <section
        id="rider-cta"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {riderT("cta.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {riderT("cta.description")}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">
                {riderT("cta.download")}
              </Button>
              <Button variant="outline" size="lg">
                {riderT("cta.learnMore")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Image from "next/image";
import {
  Navigation,
  CalendarClock,
  DollarSign,
  Shield,
  MapPin,
  Star,
  Smartphone,
  Clock,
  BadgeCheck,
  ChevronDown,
  Car,
  Users,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Quick Navigation */}
      <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-16 text-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Efoyy Features
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover all the features that make Efoyy the perfect platform
                for both drivers and riders.
              </p>
            </div>
            <Tabs defaultValue="drivers" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="drivers" className="py-2" asChild>
                  <a href="#driver-features">
                    <Car className="h-6 w-6 mr-2" />
                    For Drivers
                  </a>
                </TabsTrigger>
                <TabsTrigger value="riders" className="py-2" asChild>
                  <a href="#rider-features">
                    <Users className="h-6 w-6 mr-2" />
                    For Riders
                  </a>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

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
                Drive & Earn On Your Schedule
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of drivers who've found freedom and financial
                opportunity with Efoyy. Set your own hours and be your own boss.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] py-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Freedom to work on your terms
                </h3>
                <p className="text-muted-foreground">
                  With Efoyy, you're in control of when, where, and how much you
                  work. Whether you're looking for a full-time income or just
                  some extra cash, we've got you covered.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8" asChild>
                  <a href="#driver-cta">Sign Up to Drive</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#driver-how-it-works">Learn More</a>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
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
                Why Drive With Us?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Efoyy offers the flexibility, earnings, and support you need to
                succeed on your own terms.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CalendarClock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Flexible Schedule</CardTitle>
                <CardDescription>
                  Drive whenever you want. No minimum hours or schedules to
                  follow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Work around your existing commitments</li>
                  <li>Drive during peak hours for maximum earnings</li>
                  <li>Take time off whenever you need it</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Competitive Earnings</CardTitle>
                <CardDescription>
                  Keep more of what you earn with our driver-friendly commission
                  structure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Lower commission rates than competitors</li>
                  <li>Weekly direct deposits to your bank account</li>
                  <li>Surge pricing during high-demand periods</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Driver Protection</CardTitle>
                <CardDescription>
                  We've got your back with comprehensive insurance and safety
                  features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Insurance coverage while on the platform</li>
                  <li>24/7 emergency support hotline</li>
                  <li>Safety features built into the driver app</li>
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
                How It Works For Drivers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Getting started is easy. Be on the road and earning in just a
                few simple steps.
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
                Turn on the app when you're ready to accept rides
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
              src="/placeholder.svg?height=550&width=550"
              width="550"
              height="550"
              alt="Efoyy driver app interface"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Driver App
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our driver app is designed to make your experience seamless
                  and profitable.
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
                Driver Success Stories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from drivers who have transformed their lives with Efoyy.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
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
                      "I started driving part-time and now I'm making more than
                      I did at my office job. The flexibility allows me to be
                      there for my family while earning a great income."
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
                  <Image
                    src="/placeholder.svg?height=100&width=100"
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
                      "As a student, Efoyy gives me the perfect way to earn
                      money between classes. I can work when I want and focus on
                      my studies when needed."
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
                  <Image
                    src="/placeholder.svg?height=100&width=100"
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
                      "After losing my job during the pandemic, Efoyy became my
                      lifeline. Three years later, I'm still driving because I
                      love the freedom and the income is better than any job
                      I've had."
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
              src="/placeholder.svg?height=550&width=550"
              width="550"
              height="550"
              alt="Person using the Efoyy rider app"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Your ride, your way</h3>
                <p className="text-muted-foreground">
                  Whether you're heading to work, meeting friends, or exploring
                  a new city, Efoyy gets you there safely and comfortably.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8" asChild>
                  <a href="#rider-cta">Book a Ride</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#rider-how-it-works">Learn More</a>
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
                Why Ride With Us?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Efoyy offers convenience, safety, and affordability for all your
                transportation needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Quick Pickups</CardTitle>
                <CardDescription>
                  Get a ride in minutes, even during peak hours.
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
                <CardTitle>Safety First</CardTitle>
                <CardDescription>
                  Your safety is our top priority with every ride.
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
                <CardTitle>Affordable Options</CardTitle>
                <CardDescription>
                  Multiple ride options to fit your budget and needs.
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
                How It Works For Riders
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Getting a ride is simple and straightforward with our
                easy-to-use app.
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
                  Rider App Features
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our rider app is designed with you in mind, making every
                  journey smooth and hassle-free.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Live Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Follow your driver's location in real-time on the map
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
              src="/placeholder.svg?height=550&width=550"
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
                What Our Riders Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it - hear from our satisfied
                riders.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width="100"
                    height="100"
                    alt="Rider portrait"
                    className="rounded-full aspect-square object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Emily K.</h3>
                    <p className="text-sm text-muted-foreground">
                      Using Efoyy since 2021
                    </p>
                    <p className="text-sm">
                      "Efoyy has been a game-changer for my daily commute. The
                      drivers are always professional, and I never wait more
                      than a few minutes for pickup."
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
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width="100"
                    height="100"
                    alt="Rider portrait"
                    className="rounded-full aspect-square object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Marcus L.</h3>
                    <p className="text-sm text-muted-foreground">
                      Using Efoyy since 2022
                    </p>
                    <p className="text-sm">
                      "As someone who doesn't own a car, Efoyy has given me the
                      freedom to go anywhere in the city without relying on
                      public transportation schedules."
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
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width="100"
                    height="100"
                    alt="Rider portrait"
                    className="rounded-full aspect-square object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Sophia W.</h3>
                    <p className="text-sm text-muted-foreground">
                      Using Efoyy since 2020
                    </p>
                    <p className="text-sm">
                      "I feel safe using Efoyy, even late at night. The ability
                      to share my trip status with friends gives me peace of
                      mind, and the drivers are always respectful."
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

      {/* Rider CTA */}
      <section
        id="rider-cta"
        className="scroll-mt-16 w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center"
      >
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Ride with Us?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download the app now and experience the convenience of Efoyy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">
                Download App
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="max-w-screen-xl w-full px-4 md:px-6 py-8 text-center flex justify-center">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Back to Top
          <ChevronDown className="ml-1 h-4 w-4 rotate-180" />
        </a>
      </div>

      <Footer />
    </div>
  );
}

import Link from "next/link";
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

export default function DriverFeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Drive & Earn On Your Schedule
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of drivers who've found freedom and financial
                    opportunity with RideShare. Set your own hours and be your
                    own boss.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Sign Up to Drive
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width="550"
                height="550"
                alt="Driver using the RideShare app"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Drive With Us?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  RideShare offers the flexibility, earnings, and support you
                  need to succeed on your own terms.
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
                    Keep more of what you earn with our driver-friendly
                    commission structure.
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

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
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

        {/* App Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width="550"
                height="550"
                alt="RideShare driver app interface"
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

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Driver Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from drivers who have transformed their lives with
                  RideShare.
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
                        "I started driving part-time and now I'm making more
                        than I did at my office job. The flexibility allows me
                        to be there for my family while earning a great income."
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
                        "As a student, RideShare gives me the perfect way to
                        earn money between classes. I can work when I want and
                        focus on my studies when needed."
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
                        "After losing my job during the pandemic, RideShare
                        became my lifeline. Three years later, I'm still driving
                        because I love the freedom and the income is better than
                        any job I've had."
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

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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
      </main>
      <Footer />
    </div>
  );
}

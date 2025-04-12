import Image from "next/image";
import { MapPin, Bell, Users, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SafetyPage() {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <main>
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="/iPhone 16.png"
                alt="Phone with map interface"
                width={400}
                height={600}
                className="mx-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm mb-2">Your safety is our top priority.</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Safety Features
                <br />
                Designed to Exceed
                <br />
                Expectations
              </h1>
              <p className="mb-8">
                We're excited to introduce our SOS feature, launching in phases.
                First, you'll experience the MVP version as part of our Safety
                Kit in the app. When you're on a trip, simply tap the SOS button
                to activate it. Here's what happens next:
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Discover the benefits of our SOS feature when it's activated!
          </h2>

          <div className="flex md:flex-row flex-col-reverse gap-0 border rounded-lg overflow-hidden">
            <div className="md:w-2/5">
              <div className="p-4 md:p-8 border-b flex items-start gap-4">
                <Bell className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    Every SMS message sent will contain the precise, real-time
                    location of the driver, ensuring that recipients can track
                    their whereabouts accurately.
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 border-b flex items-start gap-4">
                <Bell className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    Nearby drivers, within a 5KM range, will get an SMS
                    notification.
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 border-b flex items-start gap-4">
                <Users className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    As soon as the driver adds emergency contacts, each one will
                    instantly receive a text message, ensuring they are promptly
                    informed and ready to assist.
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 flex items-start gap-4">
                <Phone className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    When the SOS feature is activated, the Efoyy team will try
                    to reach the driver. If they can't connect, the app will:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>
                      - Send the driver's location via SMS every 30 seconds.
                    </li>
                    <li>
                      - Alert nearby drivers with the driver's exact location.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l flex-1 relative bg-opacity-30 block min-h-60 w-full">
              <Image
                src="/iPhone 16 Pro.png"
                alt="Phone with map interface in protective environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import { MapPin, Bell, Users, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from 'next-intl';

export default function SafetyPage() {
  const t = useTranslations('safetyPage');
  
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
              <p className="text-sm mb-2">{t('tagline')}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('title')}
              </h1>
              <p className="mb-8">
                {t('description')}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-12 text-center">
            {t('benefitsTitle')}
          </h2>

          <div className="flex md:flex-row flex-col-reverse gap-0 border rounded-lg overflow-hidden">
            <div className="md:w-2/5">
              <div className="p-4 md:p-8 border-b flex items-start gap-4">
                <Bell className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    {t('benefit1')}
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 border-b flex items-start gap-4">
                <Bell className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    {t('benefit2')}
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 border-b flex items-start gap-4">
                <Users className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    {t('benefit3')}
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 flex items-start gap-4">
                <Phone className="mt-1 flex-shrink-0" />
                <div>
                  <p className="">
                    {t('benefit4')}
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>
                      - {t('benefit4Item1')}
                    </li>
                    <li>
                      - {t('benefit4Item2')}
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

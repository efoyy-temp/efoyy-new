"use client";

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
  ArrowRight,
  Calendar,
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
import { useTranslations } from 'next-intl';

export default function DriverFeaturesPage() {
  const t = useTranslations('driverPage');
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12 pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                {t('heroDescription')}
              </p>
              <Button className="px-8 py-6 text-lg h-auto" size="lg">
                {t('heroButtonText')} <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/assets/driver-hero.jpg"
                alt={t('heroImageAlt')}
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Key benefits Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('benefitsTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('benefit1Title')}</h3>
              <p className="text-muted-foreground">
                {t('benefit1Description')}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('benefit2Title')}</h3>
              <p className="text-muted-foreground">
                {t('benefit2Description')}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('benefit3Title')}</h3>
              <p className="text-muted-foreground">
                {t('benefit3Description')}
              </p>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-16 bg-muted/30 rounded-2xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('howItWorksTitle')}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t('howItWorksDescription')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">{t('step1Title')}</h3>
              <p className="text-muted-foreground">
                {t('step1Description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">{t('step2Title')}</h3>
              <p className="text-muted-foreground">
                {t('step2Description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">{t('step3Title')}</h3>
              <p className="text-muted-foreground">
                {t('step3Description')}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="px-8" size="lg">
              {t('applyButtonText')}
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('testimonialsTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/assets/driver-testimonial-1.jpg"
                    alt={t('testimonial1Name')}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('testimonial1Name')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('testimonial1Location')}
                  </p>
                </div>
              </div>
              <p className="italic">"{t('testimonial1Text')}"</p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/assets/driver-testimonial-2.jpg"
                    alt={t('testimonial2Name')}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('testimonial2Name')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('testimonial2Location')}
                  </p>
                </div>
              </div>
              <p className="italic">"{t('testimonial2Text')}"</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground rounded-2xl p-8 mt-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('ctaTitle')}</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              {t('ctaDescription')}
            </p>
            <Button
              variant="secondary"
              className="px-8 py-6 text-lg h-auto"
              size="lg"
            >
              {t('ctaButtonText')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

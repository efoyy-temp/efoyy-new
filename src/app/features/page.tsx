"use client";
import { Car, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FeaturesPage() {
  const t = useTranslations("featuresPage");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Quick Navigation */}
      <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
        <div className="max-w-screen-xl w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-16 text-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {t("hero.title")}
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("hero.description")}
              </p>
            </div>
            <Tabs defaultValue="drivers" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="drivers" className="py-2" asChild>
                  <Link href="/features/driver">
                    <Car className="h-6 w-6 mr-2" />
                    {t("hero.drivers")}
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="riders" className="py-2" asChild>
                  <Link href="/features/user">
                    <Users className="h-6 w-6 mr-2" />
                    {t("hero.riders")}
                  </Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

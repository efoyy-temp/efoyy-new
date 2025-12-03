"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  ShieldCheck,
  Award,
  CircleDollarSign,
  User,
  Heart,
} from "lucide-react";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("aboutPage");
  return (
    <>
      <Navbar />
      <div className="bg-background text-foreground">
        <main className="container mx-auto px-4 py-12 md:py-20">
          <section className="text-center my-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("description")}
            </p>
          </section>

          <section className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    {t("uniqueApproach")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-lg">
                <p>{t("proprietaryTech")}</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("whatMakesUsDifferent")}
              </h2>
              <p className="text-muted-foreground mt-2">
                {t("innovativeSolutions")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Globe className="w-8 h-8 text-primary" />}
                title={t("madeForEthiopia.title")}
                description={t("madeForEthiopia.description")}
              />
              <FeatureCard
                icon={<Smartphone className="w-8 h-8 text-primary" />}
                title={t("offlineFunctionality.title")}
                description={t("offlineFunctionality.description")}
              />
              <FeatureCard
                icon={<CircleDollarSign className="w-8 h-8 text-primary" />}
                title={t("smartFairPricing.title")}
                description={t("smartFairPricing.description")}
              />
              <FeatureCard
                icon={<Award className="w-8 h-8 text-primary" />}
                title={t("rewardsIncentives.title")}
                description={t("rewardsIncentives.description")}
              />
              <FeatureCard
                icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                title={t("safetyPriority.title")}
                description={t("safetyPriority.description")}
              />
              <FeatureCard
                icon={<User className="w-8 h-8 text-primary" />}
                title={t("efoyyCopilot.title")}
                description={t("efoyyCopilot.description")}
              />
              <FeatureCard
                icon={<Heart className="w-8 h-8 text-primary" />}
                title={t("gracePeriod.title")}
                description={t("gracePeriod.description")}
              />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-card hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutPage;

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  Share2,
  Headset,
  ArrowRight,
} from "lucide-react";
import { ReactElement } from "react";

const icons = [
  <ShieldCheck key="shield" className="w-8 h-8 text-primary" />,
  <AlertTriangle key="alert" className="w-8 h-8 text-primary" />,
  <Share2 key="share" className="w-8 h-8 text-primary" />,
  <Headset key="headset" className="w-8 h-8 text-primary" />,
];

export default function SafetyOverView() {
  const t = useTranslations("home.safety");

  const features = Array.from({ length: 4 }, (_, i) => ({
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
    icon: icons[i],
  }));

  return (
    <section
      className="py-24 relative bg-cover bg-center"
      style={{ backgroundImage: "url(/Charcoal_004.jpg)" }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/safety"
            className="inline-flex items-center text-primary font-semibold text-lg group"
          >
            {t("viewMore")}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
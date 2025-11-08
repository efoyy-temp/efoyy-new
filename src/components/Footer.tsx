"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("navbar");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background mt-20 flex flex-col items-center ">
      <div className="container pt-16 px-8 max-w-7xl">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="space-y-4 min-w-28">
            <h3 className="text- font-bold mb-6">{t("company.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/safety"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {tn("safety")}
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {tn("features")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {t("company.contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4 min-w-28">
            <h3 className="text- font-bold mb-6">{t("resources.title")}</h3>
            <ul className="space-y-2">
              
              <li>
                <Link
                  href="/faq"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {t("resources.faqs")}
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {t("resources.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/driver-privacy-policy"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {t("resources.driverPrivacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {t("resources.termsOfService")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
        </div>

        {/* Copyright */}
        <div className="mt-14 mb-8 text-center">
          <p className="text-primary font-semibold text-xs leading-relaxed">
            {t("copyright").replace("year", currentYear.toString())}
          </p>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <h1
          style={{
            fontFamily: "var(--font-manrope)",
          }}
          className="tracking flex justify-center w-full text-foreground text-[30vw] text-center font-bold leading-[0.8] mb-[-6vw]">
          EFOYY
        </h1>
      </div>
    </footer>
  );
}

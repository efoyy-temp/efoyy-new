import Link from "next/link";
import { Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("terms");
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex justify-center">
        <main className="w-full  max-w-screen-lg px-4 md:px-6 py-8 md:py-12 mt-16">
          <div className="mx-auto">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {t("title")}
              </h1>
              <p className="text-muted-foreground">{t("effectiveDate")}</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold">{t("generalTitle")}</h2>
              <p>{t("generalDescription")}</p>

              {/* Table of Contents */}
              <div className="bg-muted p-4 rounded-lg my-6">
                <h3 className="font-semibold mb-2">{t("toc.title")}</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i + 1}`}
                        className="hover:text-primary"
                      >
                        {t(`toc.${i + 1}`)}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-20">
                <h2 className="text-xl font-semibold">{t("section1.title")}</h2>
                <p>{t("section1.p1")}</p>
                <p>{t("section1.p2")}</p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section2.title")}</h2>
                <h3 className="text-lg font-medium mt-4">
                  {t("section2.1.title")}
                </h3>
                <p>{t("section2.1.p")}</p>

                <h3 className="text-lg font-medium mt-4">
                  {t("section2.2.title")}
                </h3>
                <p>{t("section2.2.p")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>{t("section2.2.riderTitle")}</strong>{" "}
                    {t("section2.2.riderDescription")}
                  </li>
                  <li>
                    <strong>{t("section2.2.driverTitle")}</strong>{" "}
                    {t("section2.2.driverDescription")}
                  </li>
                </ul>

                <h3 className="text-lg font-medium mt-4">
                  {t("section2.3.title")}
                </h3>
                <p>{t("section2.3.p")}</p>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section3.title")}</h2>
                <h3 className="text-lg font-medium mt-4">
                  {t("section3.1.title")}
                </h3>
                <p>{t("section3.1.p")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <li key={i}>{t(`section3.1.list.${i}`)}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mt-4">
                  {t("section3.2.title")}
                </h3>
                <p>{t("section3.2.p")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i}>{t(`section3.2.list.${i}`)}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mt-4">
                  {t("section3.3.title")}
                </h3>
                <p>{t("section3.3.p")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <li key={i}>{t(`section3.3.list.${i}`)}</li>
                  ))}
                </ul>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section4.title")}</h2>
                <h3 className="text-lg font-medium mt-4">
                  {t("section4.1.title")}
                </h3>
                <p>{t("section4.1.p")}</p>

                <h3 className="text-lg font-medium mt-4">
                  {t("section4.2.title")}
                </h3>
                <p>{t("section4.2.p")}</p>

                <h3 className="text-lg font-medium mt-4">
                  {t("section4.3.title")}
                </h3>
                <p>{t("section4.3.p")}</p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section5.title")}</h2>
                <p>{t("section5.p1")}</p>
                <p>{t("section5.p2")}</p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section6.title")}</h2>
                <p>{t("section6.p1")}</p>
                <p>{t("section6.p2")}</p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section7.title")}</h2>
                <p>{t("section7.p")}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>{t(`section7.list.${i}`)}</li>
                  ))}
                </ul>
                <p>{t("section7.p2")}</p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section8.title")}</h2>
                <p>{t("section8.p")}</p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">{t("section9.title")}</h2>
                <p>{t("section9.p1")}</p>
                <p>{t("section9.p2")}</p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">
                  {t("section10.title")}
                </h2>
                <p>{t("section10.p1")}</p>
                <p>{t("section10.p2")}</p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">
                  {t("section11.title")}
                </h2>
                <p>{t("section11.p1")}</p>
                <p>{t("section11.p2")}</p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">
                  {t("section12.title")}
                </h2>
                <p>{t("section12.p")}</p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="scroll-mt-20 mt-8">
                <h2 className="text-xl font-semibold">
                  {t("section13.title")}
                </h2>
                <p>
                  {t("section13.p1")}
                  <a
                    href="mailto:support@efoyy.com"
                    className="text-primary hover:underline"
                  >
                    support@efoyy.com
                  </a>
                  {t("section13.p2")}
                </p>
              </section>

              <div className="mt-8 text-center">
                <p>{t("thankYou")}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

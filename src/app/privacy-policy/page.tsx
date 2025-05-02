import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-8 mt-12 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-muted-foreground">
              {t('effectiveDate')}
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold">{t('noticeTitle')}</h2>
            <p>{t('noticeDescription')}</p>

            {/* Table of Contents */}
            <div className="bg-muted p-4 rounded-lg my-6">
              <h3 className="font-semibold mb-2">{t('toc.title')}</h3>
              <ol className="list-decimal pl-5 space-y-1">
                {Array.from({ length: 13 }).map((_, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} className="hover:text-primary">
                      {t(`toc.${i + 1}`)}
                  </a>
                </li>
                ))}
              </ol>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-20">
              <h2 className="text-xl font-semibold">{t('section1.title')}</h2>
              <p>{t('section1.description')}</p>
              <ul className="list-disc pl-5 space-y-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i}>{t(`section1.list.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section2.title')}</h2>
              <ul className="list-disc pl-5 space-y-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <li key={i}>{t(`section2.list.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section3.title')}</h2>
              <p>{t('section3.description')}</p>
              <ul className="list-disc pl-5 space-y-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>{t(`section3.list.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section4.title')}</h2>
              <ul className="list-disc pl-5 space-y-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>{t(`section4.list.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section5.title')}</h2>
              <p>{t('section5.description')}</p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section6.title')}</h2>
              <p>
                {t('section6.description.0')}
                <a href="mailto:support@efoyy.com" className="text-primary hover:underline">support@efoyy.com</a>
                {t('section6.description.1')}
                <a href="https://efoyy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">efoyy.com</a>
                {t('section6.description.2')}
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section7.title')}</h2>
              <p>{t('section7.description')}</p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section8.title')}</h2>
              <p>{t('section8.description')}</p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section9.title')}</h2>
              <p>{t('section9.description')}</p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section10.title')}</h2>
              <p>{t('section10.description')}</p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section11.title')}</h2>
              <p>
                {t('section11.description.0')}
                <a href="mailto:support@efoyy.com" className="text-primary hover:underline">support@efoyy.com</a>
                {t('section11.description.1')}
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section12.title')}</h2>
              <p>{t('section12.description')}</p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-20 mt-8">
              <h2 className="text-xl font-semibold">{t('section13.title')}</h2>
              <p>
                {t('section13.description.0')}
                <a href="mailto:support@efoyy.com" className="text-primary hover:underline">support@efoyy.com</a>
                {t('section13.description.1')}
              </p>
            </section>

            <div className="mt-8 text-center">
              <p>{t('thankYou')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

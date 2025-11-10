import type { Metadata } from "next";
import {
  Instrument_Sans,
  Figtree,
  Noto_Serif_Ethiopic,
} from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const manrope = Figtree({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const noto = Noto_Serif_Ethiopic({
  variable: "--font-noto",
  subsets: ["ethiopic"],
  fallback: ["var(--font-manrope)", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Efoyy",
  description: "Safely arrive at your destination",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/Charcoal_004.jpg" />
      <body
        className={`${manrope.variable} ${locale == "en" ? manrope.className : noto.className} antialiased`}
      >
        <NextIntlClientProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>{children}</Providers>
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

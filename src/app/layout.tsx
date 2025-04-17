import type { Metadata } from "next";
import { Manrope, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const manrope = Manrope({
  variable: "--font-manrope",
});

const noto = Noto_Sans_Ethiopic({
  variable: "--font-noto",
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
      <body
        className={` ${locale == "en" ? manrope.className : noto.className} antialiased`}
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

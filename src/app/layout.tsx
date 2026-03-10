import type { Metadata } from "next";
import { Inter, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const noto = Noto_Serif_Ethiopic({
  variable: "--font-noto",
  subsets: ["ethiopic"],
  fallback: ["var(--font-inter)", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Efoyy Lab | Engineering Tomorrow",
  description: "Building Ethiopia's future engineers through project-based mastery.",
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
        className={`${inter.variable} ${locale == "en" ? inter.className : noto.className} antialiased`}
      >
        <NextIntlClientProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>{children}</Providers>
            <Toaster />
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

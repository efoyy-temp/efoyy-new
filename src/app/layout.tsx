import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

const manrope = Manrope({
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Efoyy",
  description: "Safely arrive at your destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

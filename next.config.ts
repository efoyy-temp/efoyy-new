import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import moduleAnalzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

const withBundleAnalyzer = moduleAnalzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withBundleAnalyzer(nextConfig));

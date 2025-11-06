import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import moduleAnalzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  }
};

const withBundleAnalyzer = moduleAnalzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withBundleAnalyzer(nextConfig));

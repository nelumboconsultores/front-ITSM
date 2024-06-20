import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  sassOptions: {
    includePaths: [join(__dirname, "src/styles/scss")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};

export default nextConfig;

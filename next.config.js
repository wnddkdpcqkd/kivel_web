/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;

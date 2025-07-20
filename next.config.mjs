/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });
    return config;
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;

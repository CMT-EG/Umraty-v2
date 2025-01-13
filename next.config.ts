import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp|avif|ico|bmp|tiff)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images',
          outputPath: 'static/images',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  // Other Next.js config options can go here
};

export default nextConfig;

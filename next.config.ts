import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  compiler: {
    // 1) styled components
    styledComponents: true,
    // 2) emotion
    emotion: true, 
  },
  
  
  // 3) SVG
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  // 3) SVG
  webpack(config, { isServer }) {

    // config.externals = [...config.externals, "bcrypt"];
  
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};


export default nextConfig;
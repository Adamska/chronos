import type { NextConfig } from "next";

const shaderGlobs = ["*.vert", "*.frag", "*.glsl"] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  turbopack: {
    rules: Object.fromEntries(shaderGlobs.map((glob) => [glob, { type: "raw" as const }])),
  },
  webpack: (config: { module: { rules: unknown[] } }) => {
    config.module.rules.push({ test: /\.(vert|frag|glsl)$/, type: "asset/source" });
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const useAlternateDistDir =
  process.platform === "win32" && process.env.CI !== "true";

const nextConfig: NextConfig = {
  // Local Windows workaround; Netlify/CI must output to the default `.next`.
  ...(useAlternateDistDir ? { distDir: ".next-app" } : {}),
};

export default nextConfig;

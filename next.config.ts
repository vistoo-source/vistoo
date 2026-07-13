import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Work around a locked/corrupted default .next folder on this machine.
  distDir: ".next-app",
};

export default nextConfig;

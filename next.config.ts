import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary allowlist while real media is being finalized.
    // TODO: remove any hostnames not used by production content.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "revitalizemedicalclinic.com" },
      { protocol: "https", hostname: "www.revitalizemedicalclinic.com" },
    ],
  },
};

export default nextConfig;

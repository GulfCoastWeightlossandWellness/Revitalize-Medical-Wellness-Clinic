import type { NextConfig } from "next";
import { REDIRECT_MAP } from "./lib/redirects";

const nextConfig: NextConfig = {
  images: {
    // Temporary allowlist while real media is being finalised.
    // TODO: remove squarespace-cdn hostname once all images are migrated to /public.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "revitalizemedicalclinic.com" },
      { protocol: "https", hostname: "www.revitalizemedicalclinic.com" },
    ],
  },

  async redirects() {
    return REDIRECT_MAP.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent,
    }));
  },
};

export default nextConfig;

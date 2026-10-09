/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Old Squarespace URLs that now 404. /weddings is a real page again, so it needs no redirect.
  async redirects() {
    return [
      { source: "/halepunakai", destination: "/", statusCode: 301 },
      { source: "/contact", destination: "/", statusCode: 301 },
    ];
  },
  // Keep Vercel deployment URLs (staging, previews) out of search results.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.*\\.vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

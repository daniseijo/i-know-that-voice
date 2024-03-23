/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
};

export default nextConfig;

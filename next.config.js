/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.thesprucepets.com",
      "freshheadline.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;

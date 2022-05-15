/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.pinimg.com",
      "toppng.com",
      "cdn-icons-png.flaticon.com",
      "wallpapercave.com",
      "thumbs.dreamstime.com",
      "images8.alphacoders.com",
      "c.neh.tw",
    ],
  },
};

module.exports = nextConfig;

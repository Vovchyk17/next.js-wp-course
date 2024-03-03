/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [new URL(process.env.WP_IMAGES_URL).hostname],
  },
};

module.exports = nextConfig;

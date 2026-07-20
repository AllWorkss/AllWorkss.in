/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919004246792',
    NEXT_PUBLIC_GOOGLE_CALENDAR_ID: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID,
  },
};

module.exports = nextConfig;

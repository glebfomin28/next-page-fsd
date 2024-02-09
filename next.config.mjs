/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
};

export default nextConfig;

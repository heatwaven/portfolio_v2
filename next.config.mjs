/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // NUR wenn deine Seite unter github.io/portfolio_v2 läuft (nicht bei custom domain):
  //basePath: '/portfolio_v2',
  //assetPrefix: '/portfolio_v2',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loaders: [
      {
        test: /\.(jpg|png|webp)$/,
        loader: 'next-optimized-images/webp',
      },
    ],
  },
}

module.exports = nextConfig

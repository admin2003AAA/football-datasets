/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@novastream/ui', '@novastream/config', '@novastream/types'],
  images: {
    domains: ['novastream.tv', 'stream.novastream.tv'],
  },
};

module.exports = nextConfig;

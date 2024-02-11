/** @type {import('next').NextConfig} */
const getRedirects = require("./lib/redirects.js");
const getHeaders = require("./lib/headers.js");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
  },
  async headers() {
    return await getHeaders();
  },
  async redirects() {
    return await getRedirects();
  },
};

module.exports = nextConfig;

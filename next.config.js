/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Allows to remove JSX properties.
    reactRemoveProperties: true,
    // removeConsole
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
};

module.exports = nextConfig;

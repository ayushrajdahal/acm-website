/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  images: {
    unoptimized: true,
  },
  output: "export",  // <=== enables static exports
  // async redirects() {
  //   return [
  //     {
  //       source: '/:workshop',
  //       destination: 'https://uno.zoom.us/j/88075597346',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;

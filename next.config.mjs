/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/",
    images: {
        unoptimized: true,
      },
    output: "export",  // <=== enables static exports
};

export default nextConfig;

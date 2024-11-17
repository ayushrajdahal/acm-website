/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/",
    images: {
        unoptimized: false,
      },
    output: "export",  // <=== enables static exports
};

export default nextConfig;

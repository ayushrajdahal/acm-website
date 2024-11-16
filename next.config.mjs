/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/uno-acm-website",
    images: {
        unoptimized: true,
      },
    output: "export",  // <=== enables static exports
};

export default nextConfig;

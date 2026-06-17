/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Tells Next.js to generate a static "out" folder
    images: {
        unoptimized: true, // GitHub Pages does not support the default Next.js Image Optimization API
    },
    // ONLY include the lines below if deploying to a subpath repository (e.g., username.github.io/repo-name)
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
};

export default nextConfig;

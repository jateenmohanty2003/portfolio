/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Safely pulls the repo name 'portfolio' only when building on GitHub Actions
const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '';

const nextConfig = {
    output: 'export', // Required for GitHub Pages static exports
    basePath: isProd ? repoName : '',
    images: {
        unoptimized: true, // Required for static exports so Next.js doesn't try to optimize on a server
    },
};

export default nextConfig;

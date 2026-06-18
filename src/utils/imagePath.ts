// 1. Check if running on GitHub Actions production, else leave empty for local development
const basePath = process.env.NODE_ENV === 'production' ? `/${process.env.GITHUB_REPOSITORY}` : '';

export default function getImgUrl(path: string = ""): string {
    return `${basePath}${path}`
}
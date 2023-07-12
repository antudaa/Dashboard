/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
        serverActions: true,
        forceSwcTransforms: true
    },
}

module.exports = nextConfig

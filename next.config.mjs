/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com', // Correct hostname
                port: '', // Omit the port if not necessary
                pathname: '/**', // Allow all paths from this domain
            },
        ],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '2ynivgpjsxybrljk.public.blob.vercel-storage.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
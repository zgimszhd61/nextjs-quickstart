/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.baidu.com',
            },
          ],
        },
};

export default nextConfig;

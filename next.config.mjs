/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 외부에서 이미지를 가져오려면 remotePatterns에 해당 도메인을 추가해야 합니다.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;

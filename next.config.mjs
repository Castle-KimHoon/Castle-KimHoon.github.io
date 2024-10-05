/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-app', // GitHub Pages의 기본 경로 설정
  assetPrefix: '/next-app/', // 정적 파일의 경로 설정
};

export default nextConfig;

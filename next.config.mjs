/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 정적 HTML 파일 생성
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
    // domains: ['example.com'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // imageSizes: [16, 32, 48, 64, 96],
    // formats: ['image/webp']
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://Castle-KimHoon.github.io/Blog/' : '',
};

export default nextConfig;

/*
  1. reactStrictMode: true 
    //true로 설정하면 개발 중 더 많은 경고와 검사 기능이 활성화
  2. swcMinify: true  
    //코드 축소를 통해 최종 번들의 크기를 줄이고 성능을 개선
  3. env: {CUSTOM_API_KEY: 'your-api-key-here'}
    //서버 측 및 클라이언트 측에서 모두 사용할 수 있는 환경 변수를 정의
  4.  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => { return config;}
    // webpack 설정을 수정합니다.
  5. async redirects() { return [source: '/old-page', destination: '/new-page', permanent: true]}
    // 리디렉션 규칙을 정의
  6. async rewrites() { return [ source: '/blog/:slug', destination: '/api/posts?slug=:slug'}]}
    //프론트엔드의 URL은 그대로 유지하면서 백엔드에서 다른 API나 페이지로 요청을 리라이트
  7. async headers() {return [{source: '/about',headers: [{key: 'X-Custom-Header',value: 'My custom header value'}]}]}
    //페이지나 API 요청에 특정 HTTP 헤더를 추가
  8. pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
    //원하는 페이지 파일 확장자를 추가 가능
  9. trailingSlash: true
    // true로 설정하면 모든 URL이 /about/처럼 슬래시로 끝
  10. outputFileTracing: true
    // 프로젝트에서 사용하는 파일만 포함하는 빌드를 생성하여 서버 크기 감소
  11. distDir: 'build'
    // 기본적으로 .next 폴더에 빌드가 출력되지만, 이 옵션으로 원하는 디렉토리로 변경 가능
  12. poweredByHeader: false
    // 보안 목적으로 응답 헤더에 "X-Powered-By: Next.js"를 포함하지 않도록 설정
  13. i18n: {locales: ['en', 'fr', 'de'], defaultLocale: 'en',}
    // 다국어 지원
  14. basePath
    // 모든 페이지에 대한 기본 경로 설정
  ...
*/

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  // ✅ GitHub Pages에서 안정적으로 라우팅/에셋 경로 맞추기
  trailingSlash: true,

  // 프로젝트 페이지(/korean-blog/)로 배포할 때 필요
  basePath: isProd ? "/korean-blog" : "",
  assetPrefix: isProd ? "/korean-blog/" : "",
};

module.exports = nextConfig;

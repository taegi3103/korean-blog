/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // 프로젝트 페이지(/korean-blog/)로 배포할 때 필요
  basePath: isProd ? "/korean-blog" : "",
  assetPrefix: isProd ? "/korean-blog/" : "",
};

module.exports = nextConfig;

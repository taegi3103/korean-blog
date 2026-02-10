const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? "/korean-blog" : "",
  assetPrefix: isProd ? "/korean-blog/" : "",
};

module.exports = nextConfig;

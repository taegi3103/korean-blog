// lib/posts.ts
const norm = (s: string) =>
  s
    .replace(/^\/+|\/+$/g, "")      // 앞뒤 /
    .replace(/^posts\//, "")        // posts/ 제거
    .replace(/\.(md|mdx)$/i, "");   // .md/.mdx 제거

export function getAllPosts() {
  const posts = /* 너 기존 로딩 로직 */;
  return posts.map((p: any) => ({
    ...p,
    slug: norm(p.slug),
  }));
}

export function getPostBySlug(slug: string) {
  const s = norm(slug);
  const posts = getAllPosts();
  return posts.find((p: any) => norm(p.slug) === s) ?? null;
}

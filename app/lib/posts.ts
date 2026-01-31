export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello-korean-blog",
    title: "블로그 시작합니다 (임시 글)",
    excerpt: "Next.js + GitHub Pages로 정적 블로그 뼈대를 잡았습니다.",
    date: "2026-01-30",
    tags: ["start", "nextjs", "github-pages"],
    content: "내용...",
  },
  // ...
];

export function getPostBySlug(slug: string) {
  const s = decodeURIComponent(slug).replace(/\/$/, "");
  return posts.find((p) => p.slug === s);
}

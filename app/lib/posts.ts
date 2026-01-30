mkdir -p app/lib
cat > app/lib/posts.ts <<'EOF'
export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  tags: string[];
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello-korean-blog",
    title: "블로그 시작합니다 (임시 글)",
    date: "2026-01-30",
    excerpt: "Next.js + GitHub Pages로 정적 블로그 뼈대를 잡았습니다.",
    tags: ["nextjs", "github-pages"],
    content: `# 블로그 시작합니다

이 글은 임시 데이터입니다. 앞으로 마크다운/MDX로 확장할 수 있어요.`,
  },
  {
    slug: "korea-it-history",
    title: "한국 IT 역사 한 줄 정리 (임시 글)",
    date: "2026-02-01",
    excerpt: "블로그 방향성 테스트용 샘플 포스트입니다.",
    tags: ["it", "korea"],
    content: `# 한국 IT 역사 한 줄 정리

샘플 내용입니다.`,
  },
  {
    slug: "danang-travel-memo",
    title: "다낭 여행 메모 (임시 글)",
    date: "2026-02-05",
    excerpt: "카테고리/태그/검색 붙이기 전 임시 목록 페이지 테스트.",
    tags: ["travel", "danang"],
    content: `# 다낭 여행 메모

샘플 내용입니다.`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
EOF

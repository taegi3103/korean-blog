export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  tags: string[];
  content: string; // 임시: plain text/markdown 느낌
};

export const posts: Post[] = [
  {
    slug: "hello-korean-blog",
    title: "블로그 시작합니다 (임시 글)",
    date: "2026-01-30",
    excerpt: "Next.js + GitHub Pages로 정적 블로그 뼈대를 잡았습니다.",
    tags: ["start", "nextjs", "github-pages"],
    content: `# 블로그 시작합니다

이 블로그는 Next.js(App Router) + GitHub Pages(Static Export)로 운영됩니다.
- 목적: 한국어 글을 깔끔하게 정리
- 다음 단계: 마크다운 포스트/검색/태그/카테고리`,
  },
  {
    slug: "korea-it-history-notes",
    title: "한국 IT 역사 한 줄 정리 (임시 글)",
    date: "2026-02-01",
    excerpt: "블로그 방향성 테스트용 샘플 포스트입니다.",
    tags: ["it", "history", "notes"],
    content: `# 한국 IT 역사 메모

간단한 타임라인/키워드부터 쌓아봅니다.
- PC 통신
- 인터넷 보급
- 스마트폰/모바일`,
  },
  {
    slug: "danang-travel-memo",
    title: "다낭 여행 메모 (임시 글)",
    date: "2026-02-05",
    excerpt: "카테고리/태그/검색 붙이기 전 임시 목록 페이지 테스트.",
    tags: ["travel", "danang"],
    content: `# 다낭 여행 메모

- 동선
- 맛집
- 호텔
- 투어 아이디어`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const p of posts) for (const t of p.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

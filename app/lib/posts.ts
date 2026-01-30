// app/lib/posts.ts
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
    tags: ["start", "nextjs", "github-pages"],
    content: `이 블로그는 Next.js(App Router) + GitHub Pages(Static Export)로 운영합니다.

오늘은 기본 구조를 만들고, 목록/상세/소개 페이지를 연결했습니다.`,
  },
  {
    slug: "korea-it-history-notes",
    title: "한국 IT 역사 한 줄 정리 (임시 글)",
    date: "2026-02-01",
    excerpt: "블로그 방향성 테스트용 샘플 포스트입니다.",
    tags: ["korea", "it", "notes"],
    content: `이 글은 임시 데이터입니다.

나중에 마크다운/MDX로 확장할 수 있습니다.`,
  },
  {
    slug: "danang-travel-memo",
    title: "다낭 여행 메모 (임시 글)",
    date: "2026-02-05",
    excerpt: "카테고리/태그/검색 붙이기 전 목록 페이지 테스트.",
    tags: ["danang", "travel", "memo"],
    content: `여행 메모 예시입니다.

장소/동선/팁을 정리하는 형태로 확장 가능합니다.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

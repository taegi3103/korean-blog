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
    tags: ["Next.js", "GitHub Pages"],
    content: `이 글은 임시 글입니다.

- Next.js App Router
- Static Export
- GitHub Pages 배포`,
  },
  {
    slug: "korea-it-history-notes",
    title: "한국 IT 역사 한 줄 정리 (임시 글)",
    date: "2026-02-01",
    excerpt: "블로그 방향성 테스트용 샘플 포스트입니다.",
    tags: ["IT", "Korea"],
    content: `이 글은 임시 글입니다.

나중에 여기에 본문을 채우면 됩니다.`,
  },
  {
    slug: "danang-travel-memo",
    title: "다낭 여행 메모 (임시 글)",
    date: "2026-02-05",
    excerpt: "카테고리/태그/검색 붙이기 전 임시 목록 페이지 테스트.",
    tags: ["Travel", "Da Nang"],
    content: `이 글은 임시 글입니다.

- 맛집
- 동선
- 팁`,
  },
];

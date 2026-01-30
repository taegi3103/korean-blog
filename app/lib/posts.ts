export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "welcome",
    title: "블로그 시작합니다 (임시 글)",
    date: "2026-01-30",
    excerpt: "Next.js + GitHub Pages로 정적 블로그 뼈대를 잡았습니다.",
  },
  {
    slug: "korea-it-history",
    title: "한국 IT 역사 한 줄 정리 (임시 글)",
    date: "2026-02-01",
    excerpt: "블로그 방향성 테스트용 샘플 포스트입니다.",
  },
  {
    slug: "danang-travel-notes",
    title: "다낭 여행 메모 (임시 글)",
    date: "2026-02-05",
    excerpt: "카테고리/태그/검색 붙이기 전 임시 목록 페이지 테스트.",
  },
];

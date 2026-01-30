import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

const TEMP_POSTS: Post[] = [
  {
    slug: "welcome",
    title: "환영합니다 — 첫 글",
    excerpt: "GitHub Pages + Next.js static export로 블로그를 시작합니다.",
    date: "2026-01-30",
    tags: ["start", "github-pages", "nextjs"],
  },
  {
    slug: "danang-notes",
    title: "다낭에서 일하며 느낀 점",
    excerpt: "현지에서 일/생활하며 얻은 작은 인사이트를 정리해요.",
    date: "2026-01-29",
    tags: ["life", "danang"],
  },
  {
    slug: "automation-ideas",
    title: "자동화 아이디어 5가지",
    excerpt: "Make/n8n으로 블로그 운영을 자동화하는 실전 아이디어.",
    date: "2026-01-28",
    tags: ["automation", "n8n"],
  },
];

export default function PostsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="text-zinc-600">
          지금은 임시 데이터로 목록을 보여줍니다. 다음 단계에서 실제 글 페이지를
          붙이면 돼요.
        </p>
      </header>

      <div className="grid gap-4">
        {TEMP_POSTS.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-sm text-zinc-500">{post.date}</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-3 text-lg font-semibold tracking-tight">{post.title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{post.excerpt}</p>

            <div className="mt-4">
              {/* 글 상세 페이지 만들기 전까지는 홈으로 연결해도 OK */}
              <Link href="/" className="text-sm font-medium text-zinc-900 hover:underline">
                홈으로 →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

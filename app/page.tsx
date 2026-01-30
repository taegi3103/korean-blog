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

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <p className="text-sm font-medium text-zinc-600">korean-blog</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          여행·IT·자동화 노트
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          GitHub Pages에서 동작하는 아주 단순한 블로그. 글은 가볍게, 구성은
          미니멀하게. (지금은 임시 데이터로 글 목록만 보여줘요.)
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            글 목록 보기
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            소개 보기
          </Link>
        </div>
      </section>

      {/* Posts Preview */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold tracking-tight">최근 글</h2>
          <Link href="/posts" className="text-sm text-zinc-600 hover:text-zinc-900">
            전체 보기 →
          </Link>
        </div>

        <ul className="grid gap-4">
          {TEMP_POSTS.map((post) => (
            <li
              key={post.slug}
              className="rounded-2xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50"
            >
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

              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {post.excerpt}
              </p>

              <div className="mt-4">
                {/* 지금은 실제 글 페이지를 만들지 않았으니 Posts로 보내도 OK */}
                <Link
                  href="/posts"
                  className="text-sm font-medium text-zinc-900 hover:underline"
                >
                  읽기 →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

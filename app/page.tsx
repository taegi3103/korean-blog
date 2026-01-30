cat > app/page.tsx <<'EOF'
import Link from "next/link";
import { posts } from "./lib/posts";

export const metadata = {
  title: "Korean Blog",
  description: "Next.js(App Router) + GitHub Pages(Static Export) 블로그 템플릿",
};

export default function Home() {
  const latest = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Korean Blog</h1>
        <p className="text-zinc-600">
          사이트 소개: Next.js(App Router) + GitHub Pages(Static Export)로 운영하는 한국어 블로그 템플릿입니다.
        </p>
      </header>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">최근 글</h2>
          <Link className="text-sm text-zinc-700 underline" href="/posts/">
            전체 보기 →
          </Link>
        </div>

        <ul className="space-y-3">
          {latest.map((p) => (
            <li key={p.slug} className="rounded-xl border border-zinc-100 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <Link className="font-semibold" href={`/posts/${p.slug}/`}>
                  {p.title}
                </Link>
                <span className="text-sm text-zinc-500">{p.date}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
EOF

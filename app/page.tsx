// app/page.tsx
import Link from "next/link";
import { posts } from "./lib/posts";

export default function Home() {
  const recent = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Korean Blog</h1>
        <p className="text-zinc-600">
          사이트 소개: Next.js(App Router) + GitHub Pages(Static Export)로 운영하는
          한국어 블로그 템플릿입니다.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">최근 글</h2>
          <Link href="/posts" className="text-sm text-zinc-600 hover:text-black">
            전체 보기 →
          </Link>
        </div>

        <div className="grid gap-4">
          {recent.map((p) => (
            <Link
              key={p.slug}
              href={`/posts/${p.slug}`}
              className="rounded-xl border border-zinc-200 p-5 hover:border-zinc-300"
            >
              <div className="text-xs text-zinc-500">{p.date}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-zinc-600">{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

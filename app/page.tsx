import Link from "next/link";
import { posts } from "./lib/posts";

export const metadata = {
  title: "Korean Blog",
  description: "Next.js(App Router) + GitHub Pages(Static Export)로 운영하는 한국어 블로그 템플릿",
};

export default function Home() {
  const latest = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Korean Blog
        </h1>
        <p className="mt-3 text-zinc-600">
          사이트 소개: Next.js(App Router) + GitHub Pages(Static Export)로 운영하는 한국어 블로그 템플릿입니다.
        </p>
      </header>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">최근 글</h2>
          <Link href="/posts" className="text-sm text-zinc-600 hover:text-zinc-900">
            전체 보기 →
          </Link>
        </div>

        <div className="grid gap-4">
          {latest.map((p) => (
            <Link
              key={p.slug}
              href={`/posts/${p.slug}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-5 hover:border-zinc-300"
            >
              <div className="text-sm text-zinc-500">{p.date}</div>
              <div className="mt-1 text-lg font-semibold text-zinc-900">
                {p.title}
              </div>
              <div className="mt-2 text-zinc-600">{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

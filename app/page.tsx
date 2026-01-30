import Link from "next/link";
import { posts } from "./lib/posts";

export default function Home() {
  const top = posts.slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Korean Blog</h1>
        <p className="text-zinc-600">
          사이트 소개: Next.js(App Router) + GitHub Pages(Static Export)로 운영하는
          한국어 블로그 템플릿입니다.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">최근 글</h2>
          <Link href="/posts" className="text-sm text-zinc-700 hover:underline">
            전체 보기 →
          </Link>
        </div>

        <ul className="space-y-3">
          {top.map((p) => (
            <li key={p.slug} className="rounded-xl border border-zinc-200 p-5">
              <div className="text-sm text-zinc-500">{p.date}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-zinc-600">{p.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

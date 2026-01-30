// app/posts/page.tsx
import Link from "next/link";
import { posts } from "../lib/posts";

export const metadata = {
  title: "Posts | Korean Blog",
};

export default function PostsPage() {
  const list = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <p className="text-zinc-600">전체 글 목록 (임시 데이터)</p>
      </header>

      <div className="grid gap-4">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/posts/${p.slug}`}
            className="rounded-xl border border-zinc-200 p-5 hover:border-zinc-300"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-zinc-500">{p.date}</span>
              <div className="flex gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-zinc-600">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

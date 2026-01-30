mkdir -p app/posts
cat > app/posts/posts-client.tsx <<'EOF'
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "../lib/posts";

export default function PostsClient({ posts }: { posts: Post[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return posts;

    return posts.filter((p) => {
      const hay = `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q, posts]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="검색…"
          className="w-60 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        />
      </div>

      <ul className="divide-y divide-zinc-100 rounded-xl border border-zinc-100 bg-white">
        {filtered.map((p) => (
          <li key={p.slug} className="p-5 hover:bg-zinc-50">
            <div className="flex items-center justify-between gap-3">
              <Link className="text-lg font-semibold" href={`/posts/${p.slug}/`}>
                {p.title}
              </Link>
              <span className="text-sm text-zinc-500">{p.date}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700"
                >
                  #{t}
                </span>
              ))}
            </div>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="p-6 text-sm text-zinc-500">검색 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
EOF

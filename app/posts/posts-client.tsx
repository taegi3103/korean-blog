"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { posts } from "@/app/lib/posts";

export default function PostsClient() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    if (!keyword) return posts;
    return posts.filter((p) =>
      (p.title + " " + p.excerpt).toLowerCase().includes(keyword)
    );
  }, [q]);

  return (
    <section className="mt-6">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="검색…"
        className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none"
      />

      <ul className="mt-6 space-y-3">
        {filtered.map((p) => (
          <li key={p.slug} className="rounded-2xl border border-zinc-200 p-5">
            <p className="text-sm text-zinc-500">{p.date}</p>
            <Link className="mt-1 block text-xl font-semibold" href={`/posts/${p.slug}`}>
              {p.title}
            </Link>
            <p className="mt-2 text-zinc-700">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

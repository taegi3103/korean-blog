"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "../lib/posts";

export default function PostsClient({ posts }: { posts: Post[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("");

  const tags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => (p.tags ?? []).forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return posts
      .filter((p) => (tag ? (p.tags ?? []).includes(tag) : true))
      .filter((p) => {
        if (!query) return true;
        return (
          ((p.title ?? '').toLowerCase().includes(query)) ||
          ((p.excerpt ?? '').toLowerCase().includes(query)) ||
          ((p.tags ?? []).some((t) => t.toLowerCase().includes(query)))
        );
      })
      .sort((a, b) => ((a.date ?? '') < (b.date ?? '') ? 1 : -1));
  }, [posts, q, tag]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-2 sm:max-w-md">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="검색 (제목/요약/태그)"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
          >
            <option value="">태그 전체</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {(q || tag) && (
            <button
              onClick={() => {
                setQ("");
                setTag("");
              }}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm hover:bg-zinc-50"
            >
              초기화
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <ul className="space-y-3">
        {filtered.map((p) => (
          <li key={p.slug} className="rounded-xl border border-zinc-200 bg-white p-5 hover:bg-zinc-50">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <Link href={`/posts/${p.slug}`} className="block">
                  <h2 className="truncate text-lg font-semibold text-zinc-900">
                    {p.title}
                  </h2>
                </Link>
                <p className="mt-1 text-sm text-zinc-600">{p.excerpt}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags?.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700 hover:bg-zinc-50"
                      title="이 태그로 필터"
                    >
                      #{t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="shrink-0 text-sm text-zinc-500">{p.date}</div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center text-zinc-600">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}

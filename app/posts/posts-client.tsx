// app/posts/posts-client.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "../lib/posts";

type SortKey = "newest" | "oldest" | "title";

function formatDate(date: string) {
  // YYYY-MM-DD -> YYYY.MM.DD
  return date.replaceAll("-", ".");
}

export default function PostsClient({ posts }: { posts: Post[] }) {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("newest");

  const allTags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    let list = posts.filter((p) => {
      const matchesQuery =
        query.length === 0 ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));

      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });

    list = list.sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "oldest") return a.date.localeCompare(b.date);
      return b.date.localeCompare(a.date); // newest
    });

    return list;
  }, [posts, q, activeTag, sort]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="검색: 제목, 요약, 태그"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-600">정렬</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900"
          >
            <option value="newest">최신순</option>
            <option value="oldest">오래된순</option>
            <option value="title">제목순</option>
          </select>
        </div>
      </div>

      {/* Tags */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              activeTag === null
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
            }`}
          >
            전체
          </button>

          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                activeTag === t
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Result meta */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-600">
          결과: <span className="font-medium text-zinc-900">{filtered.length}</span>개
          {activeTag ? (
            <>
              {" "}
              · 태그: <span className="font-medium text-zinc-900">{activeTag}</span>
            </>
          ) : null}
        </p>

        {(q.trim() || activeTag) && (
          <button
            onClick={() => {
              setQ("");
              setActiveTag(null);
            }}
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            필터 초기화
          </button>
        )}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center">
          <p className="text-zinc-700">검색 결과가 없습니다.</p>
          <p className="mt-2 text-sm text-zinc-500">검색어/태그를 바꿔보세요.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {filtered.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/posts/${p.slug}`}
                className="block rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-zinc-500">{formatDate(p.date)}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="mt-2 text-lg font-semibold text-zinc-900">{p.title}</h2>
                <p className="mt-2 text-zinc-600">{p.excerpt}</p>

                <div className="mt-4 text-sm font-medium text-zinc-900">
                  읽기 →
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

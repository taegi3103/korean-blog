import Link from "next/link";
import { getAllPosts } from "./lib/posts";

export const metadata = {
  title: "Korean Blog",
  description: "Next.js(App Router) + GitHub Pages(Static Export) 한국어 블로그 템플릿",
};

export default function Home() {
  const posts = getAllPosts().slice(0, 10);

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">사이트 제목</h1>
      <p className="mt-2 text-zinc-600">사이트 소개(임시)</p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">최근 글</h2>
        <ul className="mt-4 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
          {posts.map((p) => (
            <li key={p.slug} className="p-4 hover:bg-zinc-50">
              <Link className="block" href={`/posts/${p.slug}/`}>
                <div className="text-base font-medium">{p.title || "제목 없음"}</div>
                <div className="mt-1 text-sm text-zinc-500">
                  {p.date ? p.date : "—"} {p.excerpt ? `· ${p.excerpt}` : ""}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import Link from "next/link";
import { getAllPosts } from "./lib/posts";

export const metadata = {
  title: "Korean Blog",
  description: "Next.js(App Router) + GitHub Pages(Static Export) 한국어 블로그 템플릿",
};

export default function Home() {
  const posts = getAllPosts().slice(0, 10);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold">
            Korean Blog
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
            <Link className="hover:text-black" href="/posts">
              Posts
            </Link>
            <Link className="hover:text-black" href="/about">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">사이트 제목</h1>
        <p className="mt-2 text-zinc-600">사이트 소개(임시)</p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold">글 목록</h2>
          <ul className="mt-4 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
            {posts.map((p) => (
              <li key={p.slug} className="p-4 hover:bg-zinc-50">
                <Link className="block" href={`/posts/${p.slug}/`}>
                  <div className="text-base font-medium">{p.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">
                    {p.date ? p.date : "—"} · {p.excerpt ? p.excerpt : ""}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Korean Blog
        </div>
      </footer>
    </div>
  );
}

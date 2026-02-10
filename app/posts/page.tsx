import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export const metadata = {
  title: "Posts | Korean Blog",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
      <p className="mt-2 text-zinc-600">전체 글 목록</p>

      <ul className="mt-6 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
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
    </div>
  );
}

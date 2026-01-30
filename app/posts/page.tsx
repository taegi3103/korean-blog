import { posts } from "../lib/posts";

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Posts</h1>
        <p className="text-zinc-600">임시 데이터로 렌더링되는 글 목록입니다.</p>
      </header>

      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border border-zinc-200 p-5">
            <div className="text-sm text-zinc-500">{p.date}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            <p className="mt-2 text-zinc-600">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

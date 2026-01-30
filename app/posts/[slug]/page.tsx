// app/posts/[slug]/page.tsx
import Link from "next/link";
import { getPost, posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">글을 찾을 수 없습니다</h1>
        <Link href="/posts" className="text-zinc-600 hover:text-black">
          ← 목록으로
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-sm text-zinc-500">{post.date}</div>
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </header>

      <div className="prose max-w-none prose-zinc">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="pt-4">
        <Link href="/posts" className="text-zinc-600 hover:text-black">
          ← 목록으로
        </Link>
      </div>
    </article>
  );
}

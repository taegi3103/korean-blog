import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/posts" className="text-sm text-zinc-600 hover:text-zinc-900">
          ← 목록으로
        </Link>
        <div className="text-sm text-zinc-500">{post.date}</div>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        {post.title}
      </h1>
      <p className="mt-3 text-zinc-600">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700"
          >
            #{t}
          </span>
        ))}
      </div>

      <hr className="my-8 border-zinc-200" />

      <pre className="whitespace-pre-wrap leading-7 text-zinc-800">
        {post.content}
      </pre>
    </div>
  );
}

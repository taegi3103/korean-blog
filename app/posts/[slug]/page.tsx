// app/posts/[slug]/page.tsx
import Link from "next/link";
import { posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="mx-auto w-full max-w-3xl px-6 py-10">
        <p className="text-zinc-700">글을 찾을 수 없습니다.</p>
        <Link className="mt-4 inline-block text-zinc-900 underline" href="/posts">
          목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <Link href="/posts" className="text-sm text-zinc-700 hover:text-zinc-900">
        ← Posts로 돌아가기
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
        {post.title}
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-600">
        <span>{post.date}</span>
        <span className="text-zinc-300">·</span>
        {post.tags.map((t) => (
          <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>

      <article className="prose prose-zinc mt-8 max-w-none">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </article>
    </div>
  );
}

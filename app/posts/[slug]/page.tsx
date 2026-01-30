// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/app/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10 bg-white">
      <div className="mb-6">
        <p className="text-sm text-zinc-500">{post.date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      <article className="prose max-w-none prose-zinc">
        <p>{post.excerpt}</p>
        {post.content?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </main>
  );
}

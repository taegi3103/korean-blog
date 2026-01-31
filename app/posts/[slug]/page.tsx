import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/app/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{post.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{post.date}</p>
      <div className="prose prose-zinc mt-8 max-w-none whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
}

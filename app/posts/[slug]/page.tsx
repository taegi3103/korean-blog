import { notFound } from "next/navigation";
import { posts } from "@/app/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 bg-white">
      <p className="text-sm text-zinc-500">{post.date}</p>
      <h1 className="mt-2 text-3xl font-bold text-zinc-900">{post.title}</h1>
      <p className="mt-6 text-zinc-700">{post.excerpt}</p>
    </main>
  );
}

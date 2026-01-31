// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/app/lib/posts";

type Params = { slug: string | string[] };

function normSlug(slug: Params["slug"]) {
  return Array.isArray(slug) ? slug.join("/") : slug;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const slug = normSlug(resolvedParams.slug);

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      {/* post.content 등 기존 렌더 */}
    </article>
  );
}

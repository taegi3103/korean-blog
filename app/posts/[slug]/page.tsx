// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts"; // 네 프로젝트 함수명에 맞게 유지

type Params = { slug: string | string[] };

function normSlug(slug: Params["slug"]) {
  return Array.isArray(slug) ? slug.join("/") : slug;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  // ✅ 반드시 { slug: "hello-korean-blog" } 같은 "string"을 리턴해야 함
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Params }) {
  const slug = normSlug(params.slug);

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  // ↓ 아래 렌더링은 너 기존 코드 그대로 두고
  // post 변수만 정상적으로 잡히게 하면 됨
  return (
    <article>
      <h1>{post.title}</h1>
      {/* post.content 등 기존 렌더 */}
    </article>
  );
}

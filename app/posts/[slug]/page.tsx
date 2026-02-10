import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../lib/posts";

// 정적 배포를 위한 필수 설정
export const dynamicParams = false;

// 모든 포스트 경로를 빌드 시점에 생성
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 실제 포스트 페이지 렌더링
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose prose-zinc max-w-none">
      <header className="mb-8 border-b border-zinc-200 pb-6">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900">
          {post.title || "제목 없음"}
        </h1>
        {post.date && (
          <time className="text-sm text-zinc-500">{post.date}</time>
        )}
        {post.excerpt && (
          <p className="mt-2 text-zinc-600">{post.excerpt}</p>
        )}
      </header>

      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <footer className="mt-12 border-t border-zinc-200 pt-6">
        <Link 
          href="/posts" 
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← 목록으로 돌아가기
        </Link>
      </footer>
    </article>
  );
}

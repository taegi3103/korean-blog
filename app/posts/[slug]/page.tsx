mkdir -p app/posts/[slug]
cat > app/posts/[slug]/page.tsx <<'EOF'
import Link from "next/link";
import { getPostBySlug, posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">글을 찾을 수 없습니다.</h1>
        <Link className="underline" href="/posts/">
          목록으로
        </Link>
      </div>
    );
  }

  return (
    <article className="prose max-w-none prose-zinc">
      <div className="not-prose mb-6">
        <Link className="text-sm text-zinc-600 underline" href="/posts/">
          ← 목록으로
        </Link>
      </div>

      <h1 className="mb-2">{post.title}</h1>
      <p className="text-sm text-zinc-500">{post.date}</p>

      <hr />

      <div className="not-prose mt-4 whitespace-pre-wrap leading-7 text-zinc-800">
        {post.content}
      </div>
    </article>
  );
}
EOF

cat > app/posts/page.tsx <<'EOF'
import { posts } from "../lib/posts";
import PostsClient from "./posts-client";

export const metadata = {
  title: "Posts | Korean Blog",
  description: "블로그 글 목록",
};

export default function PostsPage() {
  // 최신순
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return <PostsClient posts={sorted} />;
}
EOF

import { getAllPosts } from "../lib/getAllPosts()";
import PostsClient from "./getAllPosts()-client";

export const metadata = {
  title: "Posts | Korean Blog",
  description: "Korean Blog 글 목록",
};

export default function PostsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Posts</h1>
        <p className="mt-2 text-zinc-600">
          글 목록입니다. 검색/태그/정렬은 추후 붙이면 됩니다.
        </p>
      </header>

      <PostsClient getAllPosts()={getAllPosts()} />
    </div>
  );
}

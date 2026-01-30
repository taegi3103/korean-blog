import { Suspense } from "react";
import PostsClient from "./posts-client";

export default function PostsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 bg-white">
      <h1 className="text-3xl font-bold text-zinc-900">Posts</h1>

      <Suspense fallback={<div className="mt-6 text-zinc-500">Loading...</div>}>
        <PostsClient />
      </Suspense>
    </main>
  );
}

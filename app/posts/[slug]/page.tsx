// app/posts/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import { notFound } from "next/navigation";
import matter from 'gray-matter'; // 만약 설치 안 되어 있다면 'npm install gray-matter' 필요

// 1. 빌드 시 어떤 페이지들을 만들지 폴더를 직접 뒤져서 알려줍니다.
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  
  // 폴더가 없으면 에러 방지를 위해 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md')) // 마크다운 파일만 골라내기
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''), // 파일명에서 .md 제거
    }));
}

// 2. 동적 파라미터 강제 비활성화 (정적 배포 필수 설정)
export const dynamicParams = false;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // 파일이 없으면 404
  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  // 파일 읽기
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <article className="prose lg:prose-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">{data.title || "제목 없음"}</h1>
      {/* 본문 내용 출력 (단순 텍스트 처리 버전) */}
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

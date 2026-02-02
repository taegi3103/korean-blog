import fs from 'fs';
import path from 'path';
import { notFound } from "next/navigation";

// 1. 정적 배포(Export) 필수 설정: 모든 경로를 빌드 시점에 생성함
export const dynamicParams = false;

// 2. n8n이 파일을 올리는 '_posts' 폴더를 읽어 경로 목록 생성
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  
  // 폴더가 없으면 빌드 오류 방지를 위해 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    console.warn("_posts 폴더를 찾을 수 없습니다.");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
}

// 3. 실제 포스트 페이지 렌더링
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Next.js 15 버전 대응
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // 파일 존재 여부 확인
  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  // 파일 내용 읽기
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // n8n에서 생성한 마크다운의 Frontmatter(--- 제목 등 ---)와 본문을 분리
  const parts = fileContents.split('---');
  let title = "제목 없음";
  let content = fileContents;

  if (parts.length >= 3) {
    // 제목 추출 (title: "..." 형태 매칭)
    const titleMatch = parts[1].match(/title:\s*"(.*)"/);
    if (titleMatch) title = titleMatch[1];
    // 실제 본문 (HTML)
    content = parts.slice(2).join('---');
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">{title}</h1>
        {/* n8n에서 만든 HTML 본문을 출력 */}
        <div 
          className="markdown-body entry-content" 
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>
      <div className="mt-12">
        <a href="/" className="text-blue-600 hover:underline">← 목록으로 돌아가기</a>
      </div>
    </main>
  );
}

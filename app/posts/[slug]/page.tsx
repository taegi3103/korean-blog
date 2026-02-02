import fs from 'fs';
import path from 'path';
import { notFound } from "next/navigation";

// 1. 정적 배포(Export)를 위해 반드시 필요한 설정
export const dynamicParams = false;

// 2. 어떤 글들을 페이지로 만들지 '_posts' 폴더를 직접 뒤져서 결정합니다.
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  
  // 폴더가 없으면 빈 배열 반환 (빌드 에러 방지)
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
}

// 3. 실제 페이지를 그려주는 함수
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // 파일이 없으면 404 처리
  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  // 파일 읽기
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // n8n에서 넣은 앞부분(--- ... ---)을 분리하고 본문 HTML만 추출합니다.
  const contentParts = fileContents.split('---');
  const htmlContent = contentParts.length > 2 ? contentParts.slice(2).join('---') : fileContents;

  // 제목 추출 (간이 방식)
  const titleMatch = fileContents.match(/title:\s*"(.*)"/);
  const title = titleMatch ? titleMatch[1] : "제목 없음";

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        {/* n8n에서 생성한 HTML 본문을 안전하게 렌더링 */}
        <div 
          className="markdown-body" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </article>
    </main>
  );
}

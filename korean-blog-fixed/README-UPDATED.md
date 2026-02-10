# Korean Blog - Next.js + GitHub Pages

Next.js App Router를 사용한 한국어 블로그 템플릿입니다. GitHub Pages에 정적 사이트로 배포할 수 있습니다.

## 🚀 주요 기능

- ✅ Next.js 16 + App Router
- ✅ TypeScript 지원
- ✅ Tailwind CSS 4
- ✅ Markdown 기반 블로그 포스트
- ✅ GitHub Pages 정적 배포
- ✅ 반응형 디자인

## 📁 프로젝트 구조

```
korean-blog-main/
├── _posts/                  # 마크다운 포스트 파일들
│   ├── 2026-01-30-youth-future-fund.md
│   └── 2026-02-02-youth-housing-30.md
├── app/
│   ├── about/              # About 페이지
│   ├── lib/
│   │   └── posts.ts        # 포스트 로딩 로직
│   ├── posts/
│   │   ├── [slug]/         # 동적 포스트 페이지
│   │   └── page.tsx        # 포스트 목록
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 홈페이지
├── public/                 # 정적 파일들
├── next.config.js          # Next.js 설정
├── package.json
└── tsconfig.json
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. GitHub Pages 배포용 빌드

```bash
NODE_ENV=production npm run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

## 📝 블로그 포스트 작성

### 포스트 파일 생성

`_posts` 디렉토리에 마크다운 파일을 생성합니다.

파일명 형식: `YYYY-MM-DD-slug.md`

예시: `2026-01-30-my-first-post.md`

### Frontmatter 형식

```markdown
---
title: "포스트 제목"
date: "2026-01-30"
excerpt: "포스트 요약문 (선택사항)"
---

여기에 포스트 내용을 작성합니다.

## 제목

본문 내용...
```

### 지원하는 메타데이터

- `title`: 포스트 제목 (필수)
- `date`: 발행일 (YYYY-MM-DD 형식, 선택)
- `excerpt`: 포스트 요약문 (선택)
- `tags`: 태그 목록 (선택, 배열)

## ⚙️ 설정

### next.config.js

GitHub Pages 배포를 위한 설정:

```javascript
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",              // 정적 사이트 생성
  images: { unoptimized: true }, // 이미지 최적화 비활성화
  trailingSlash: true,           // URL 끝에 슬래시 추가
  basePath: isProd ? "/korean-blog" : "",       // GitHub Pages 리포지토리명
  assetPrefix: isProd ? "/korean-blog/" : "",   // 에셋 경로 접두사
};
```

**주의**: `basePath`와 `assetPrefix`의 `/korean-blog`를 실제 GitHub 리포지토리명으로 변경하세요.

## 🔧 주요 수정 사항

### ✅ 수정된 오류들

1. **디렉토리 경로 수정**
   - `app/lib/posts.ts`에서 `/posts` → `/_posts`로 수정
   - 실제 마크다운 파일 위치와 일치시킴

2. **중복 헤더/푸터 제거**
   - `layout.tsx`에서 헤더/푸터 관리
   - 개별 페이지에서 중복 제거

3. **파일명 정리**
   - URL 인코딩된 한글 파일명 정리
   - 빈 `.md` 파일 제거
   - 중복 파일 제거

4. **마크다운 스타일링 개선**
   - `globals.css`에 `.markdown-content` 스타일 추가
   - 테이블, 링크, 카드 컴포넌트 스타일 정의

5. **타입 안전성 개선**
   - `title || "제목 없음"` 패턴으로 null 처리

## 🚀 GitHub Pages 배포

### 1. GitHub 리포지토리 생성

리포지토리명을 `korean-blog`로 생성 (또는 원하는 이름)

### 2. 코드 푸시

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/사용자명/korean-blog.git
git push -u origin main
```

### 3. GitHub Actions 워크플로우

`.github/workflows/deploy.yml` 파일이 자동으로 배포를 처리합니다.

### 4. Settings에서 GitHub Pages 활성화

1. 리포지토리 Settings → Pages
2. Source: "GitHub Actions" 선택
3. 배포 완료 후 `https://사용자명.github.io/korean-blog/` 접속

## 📚 추가 정보

### 커스터마이징

- **사이트 제목**: `app/layout.tsx`에서 수정
- **메타데이터**: 각 페이지의 `metadata` 객체 수정
- **스타일**: `app/globals.css` 및 Tailwind 클래스 활용
- **색상/폰트**: Tailwind 설정 커스터마이징

### 문제 해결

**빌드 오류 발생 시:**

1. `_posts` 디렉토리가 존재하는지 확인
2. 모든 `.md` 파일에 올바른 Frontmatter가 있는지 확인
3. `npm run build`로 로컬에서 먼저 테스트

**포스트가 표시되지 않을 때:**

1. 파일명이 `.md`로 끝나는지 확인
2. Frontmatter 형식이 올바른지 확인 (`---`로 시작하고 끝남)
3. `_posts` 디렉토리 경로가 올바른지 확인

## 📄 라이선스

MIT License

## 🙋 문의

이슈나 개선사항이 있다면 GitHub Issues를 활용해주세요.

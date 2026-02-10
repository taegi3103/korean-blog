export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">About</h1>
        <p className="text-zinc-600">
          이 블로그의 목적/운영 방식/콘텐츠 방향을 정리하는 페이지입니다.
        </p>
      </header>

      <section className="space-y-3 rounded-xl border border-zinc-200 p-5">
        <h2 className="text-lg font-semibold">블로그 소개</h2>
        <p className="text-zinc-700 leading-7">
          - 한국어 글 중심<br />
          - GitHub Pages 정적 배포<br />
          - 추후 MD/JSON 기반 글 생성 자동화(n8n 등)로 확장 예정
        </p>
      </section>
    </div>
  );
}

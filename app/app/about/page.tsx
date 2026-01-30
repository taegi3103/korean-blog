export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-zinc-600">이 블로그는 미니멀하게 운영하는 실험 공간입니다.</p>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold tracking-tight">무엇을 올리나요?</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
          <li>여행/현지 생활 메모</li>
          <li>IT/자동화(n8n/Make) 팁</li>
          <li>짧은 아이디어/체크리스트</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold tracking-tight">운영 방식</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          GitHub Pages + Next.js static export로 배포합니다. 다음 단계에서 “글 상세
          페이지(슬러그)”와 “md 기반”으로 확장할 수 있어요.
        </p>
      </section>
    </div>
  );
}

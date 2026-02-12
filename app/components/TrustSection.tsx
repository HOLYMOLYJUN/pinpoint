const stats = [
  { value: "150+", label: "누적 시공 사례" },
  { value: "평균 21일", label: "공사 기간" },
  { value: "98%", label: "고객 만족도" },
  { value: "1년", label: "A/S 보장" },
];

const reviews = [
  { name: "김**", biz: "카페 전환", text: "분식점에서 카페로 바꾸면서 전면 철거 각오했는데, 기존 구조 살려서 비용 40% 절감했어요." },
  { name: "이**", biz: "음식점 전환", text: "공사 3주 만에 끝나서 임대료 부담이 확 줄었습니다. 과정도 투명하게 공유해줘서 안심됐어요." },
  { name: "박**", biz: "스터디카페 전환", text: "PC방에서 스터디카페로 전환했는데 칸막이 구조 그대로 활용해서 정말 빠르게 끝났어요." },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-32 px-5 bg-warm-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Proof Point</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">숫자로 보는 핀포인트</h2>
          <p className="text-fg-secondary">실적과 고객 후기로 증명합니다</p>
        </div>
        <div className="max-w-[1080px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="rounded-[16px] p-8 text-center bg-main-light shadow-md">
              <p className="text-2xl md:text-3xl font-extrabold mb-2 text-accent">{s.value}</p>
              <p className="text-sm text-fg-secondary">{s.label}</p>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-center mb-8 text-accent">고객 후기</h3>
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-[16px] p-6 relative bg-main-light shadow-md">
              <p className="text-4xl absolute top-5 right-5 text-main-dark">&quot;</p>
              <p className="text-sm leading-relaxed mb-5 text-fg">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold bg-accent-light">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent">{r.name}</p>
                  <p className="text-xs text-fg-muted">{r.biz}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

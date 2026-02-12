const services = [
  { icon: "🔨", title: "부분 철거", desc: "필요한 부분만 선별 철거하여 비용과 시간을 최소화합니다." },
  { icon: "🏗️", title: "기존 구조 활용 설계", desc: "남길 수 있는 구조는 최대한 살려 합리적으로 설계합니다." },
  { icon: "🏠", title: "업종 맞춤 동선 재설계", desc: "새로운 업종에 최적화된 고객·작업 동선을 설계합니다." },
  { icon: "🪧", title: "간판·외관 리뉴얼", desc: "업종에 맞는 새로운 외관과 간판으로 첫인상을 바꿉니다." },
  { icon: "⏱️", title: "최소 공사 기간", desc: "체계적인 공정 관리로 영업 공백을 최소화합니다." },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-20 md:py-32 px-5 bg-main">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Skill Point</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">우리가 하는 일</h2>
          <p className="text-fg-secondary">기존 매장 구조를 최대한 살리는 스마트한 인테리어</p>
        </div>
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-[16px] p-8 py-10 bg-warm-white shadow-md transition hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-3xl block mb-5">{s.icon}</span>
              <h3 className="text-lg font-bold mb-2 text-accent">{s.title}</h3>
              <p className="text-sm leading-relaxed text-fg-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "🍳", title: "업종변경", desc: "주방 변경, 홀 동선 재배치, 홀 분위기 전환, 간판 교체 등" },
  { icon: "🧱", title: "부분공사", desc: "바닥, 벽면, 천정, 조명 등 필요한 구간만 선택 시공" },
  { icon: "🛠️", title: "전문공사", desc: "냉·난방, 누수·방수, 닥트, 전기 증설 등 전문 파트 공사" },
  { icon: "⚡", title: "긴급간편공사", desc: "작지만 꼭 필요한 소액 간편 공사, 빠른 방문·빠른 처리" },
  { icon: "🏬", title: "전면공사", desc: "브랜딩부터 공간 전환까지 전체 리뉴얼 패키지 진행" },
  { icon: "🔨", title: "부분철거", desc: "필요한 부분만 선별 철거, 비용과 기간 최소화" },
  { icon: "🏗️", title: "전면철거", desc: "전체 철거 후 새로 시공, 맞춤형 전체 리뉴얼" },
  { icon: "📌", title: "기타", desc: "현장 조건별 맞춤 제안. 방문 실측 후 최적안 안내" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ServiceSection() {
  return (
    <section id="categories" className="py-20 md:py-32 px-5 bg-main">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Category</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">공사 카테고리</h2>
          <p className="text-fg-secondary">업종변경 / 부분공사 / 전문공사 / 긴급간편공사 / 전면공사 / 부분철거 / 전면철거 / 기타</p>
        </motion.div>
        <motion.div
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-[16px] p-8 py-10 bg-warm-white  transition hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-3xl block mb-5">{s.icon}</span>
              <h3 className="text-lg font-bold mb-2 text-accent">{s.title}</h3>
              <p className="text-sm leading-relaxed text-fg-secondary">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

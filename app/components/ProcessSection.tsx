"use client";

import { motion } from "framer-motion";

const processSteps = [
  { num: "01", title: "상담", desc: "전화·카카오톡으로 업종과 예산 상담" },
  { num: "02", title: "현장 실측", desc: "현장 방문하여 구조 파악 및 실측" },
  { num: "03", title: "설계 제안", desc: "기존 구조 활용 최적 설계안 제시" },
  { num: "04", title: "공사", desc: "부분 철거 → 시공 → 마감 일괄 진행" },
  { num: "05", title: "오픈", desc: "최종 점검 후 깔끔한 오픈 지원" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 px-5 bg-main">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Check Point</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">진행 프로세스</h2>
          <p className="text-fg-secondary">상담부터 오픈까지, 체계적으로 진행합니다</p>
        </motion.div>
        <motion.div
          className="max-w-[1080px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {processSteps.map((p, i) => (
            <motion.div key={i} variants={item} className="text-center">
              <div className="w-[72px] h-[72px] mx-auto rounded-[16px] flex items-center justify-center shadow-md mb-5 bg-warm-white">
                <span className="text-xl font-extrabold text-accent">{p.num}</span>
              </div>
              <h3 className="text-base font-bold mb-2 text-accent">{p.title}</h3>
              <p className="text-xs leading-relaxed text-fg-secondary">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

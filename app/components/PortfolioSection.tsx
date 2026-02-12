"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const beforeAfter = [
  { before: "노후화된 분식점", after: "모던 브런치 카페", category: "카페 전환" },
  { before: "오래된 옷가게", after: "감성 디저트 매장", category: "디저트 전환" },
  { before: "PC방", after: "무인 스터디카페", category: "스터디카페 전환" },
];

export default function PortfolioSection() {
  const [activeBA, setActiveBA] = useState(0);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-5 bg-warm-white">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Turning Point</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">Before &amp; After</h2>
          <p className="text-fg-secondary">같은 공간, 완전히 다른 분위기</p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {beforeAfter.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveBA(i)}
              className={`px-6 py-3 rounded-[16px] text-sm font-medium transition ${
                activeBA === i ? "bg-accent text-white shadow-md" : "bg-main-light text-fg-secondary hover:bg-main-dark"
              }`}
            >
              {item.category}
            </button>
          ))}
        </motion.div>
        <motion.div
          className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
            }}
            className="rounded-[16px] overflow-hidden p-8 md:p-10 min-h-[320px] flex flex-col items-center justify-center text-center bg-main-dark shadow-md"
          >
            <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 bg-red-100 text-red-600">
              BEFORE
            </span>
            <p className="text-2xl font-bold mb-2 text-accent">{beforeAfter[activeBA].before}</p>
            <p className="text-sm mb-6 text-fg-muted">실제 시공 전 모습</p>
            <div className="w-full h-36 rounded-[16px] flex items-center justify-center text-sm bg-warm-gray/15 text-warm-gray">
              시공 전 사진 영역
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
            }}
            className="rounded-[16px] overflow-hidden p-8 md:p-10 min-h-[320px] flex flex-col items-center justify-center text-center bg-accent shadow-md"
          >
            <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 bg-green-900/50 text-green-300">
              AFTER
            </span>
            <p className="text-2xl font-bold text-white mb-2">{beforeAfter[activeBA].after}</p>
            <p className="text-sm mb-6 text-white/50">시공 완료 후 모습</p>
            <div className="w-full h-36 rounded-[16px] flex items-center justify-center text-sm bg-white/10 text-white/30">
              시공 후 사진 영역
            </div>
          </motion.div>
        </motion.div>
        <motion.p
          className="text-center text-xs mt-8 text-fg-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          * 실제 시공 사진으로 교체 예정
        </motion.p>
      </div>
    </section>
  );
}

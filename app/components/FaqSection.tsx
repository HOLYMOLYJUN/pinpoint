"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "전면 철거 없이 업종변경이 가능한가요?",
    a: "가능합니다. 기존 구조 상태를 실측한 뒤 유지 가능한 부분을 최대한 살려 비용과 기간을 줄입니다.",
  },
  {
    q: "추가 비용이 생길까 걱정됩니다.",
    a: "표준 견적 프로그램 기반으로 사전 견적을 제시하고, 변경 시에는 사전 협의 후 진행합니다.",
  },
  {
    q: "공사 기간은 얼마나 걸리나요?",
    a: "현장 조건에 따라 다르지만 부분 리뉴얼은 평균 7일 이내 완료를 목표로 합니다.",
  },
  {
    q: "허가/감리 이슈도 대응하나요?",
    a: "네. 업종변경 시 필요한 인허가 체크리스트를 기준으로 사전에 안내해드립니다.",
  },
];

const conversation = faqs.flatMap((faq) => [
  { side: "left" as const, text: `Q. ${faq.q}` },
  { side: "right" as const, text: `A. ${faq.a}` },
]);

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0 },
  },
};

const item = (side: "left" | "right") => ({
  hidden: { opacity: 0, x: side === "left" ? -48 : 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
});

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 px-5 bg-main">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">자주묻는질문</h2>
          <p className="text-fg-secondary">자주 묻는 질문을 모아봤어요</p>
        </motion.div>
        <motion.div
          className="max-w-[1080px] mx-auto flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {conversation.map((msg, i) => (
            <motion.div
              key={`${msg.side}-${i}`}
              className={`flex ${msg.side === "left" ? "justify-start" : "justify-end"}`}
              variants={item(msg.side)}
            >
              <div className="max-w-[85%] md:max-w-[75%]">
                <div
                  className={`px-8 py-6 ${
                    msg.side === "left"
                      ? "bg-warm-white shadow-md rounded-[16px] rounded-tl-sm"
                      : "bg-accent rounded-[16px] rounded-tr-sm"
                  }`}
                >
                  <p
                    className={`text-sm md:text-lg leading-relaxed whitespace-pre-line ${
                      msg.side === "left" ? "text-fg font-medium" : "text-white"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const conversation = [
  { side: "left" as const, text: "업종 바꾸고 싶은데, \n 전면 철거하면 비용이 너무 부담돼요..." },
  { side: "right" as const, text: "필요한 부분만 부분 철거합니다. \n 기존 구조 최대한 살려서 비용을 확 줄여드려요." },
  { side: "left" as const, text: "공사기간이 길어지면 임대료만 나가잖아요 ㅠㅠ" },
  { side: "right" as const, text: "평균 21일 내 완공합니다. 영업 공백 최소화가 저희 원칙이에요." },
  { side: "left" as const, text: "부분 리모델링만으로 업종 전환이 진짜 가능한가요?" },
  { side: "right" as const, text: "가능합니다. 기존 동선과 설비를 활용한 맞춤 설계를 제안드려요." },
  { side: "left" as const, text: "추가 비용이 계속 발생할까봐 불안해요..." },
  { side: "right" as const, text: "견적 확정 후 추가 비용 없이 진행합니다.\n 투명한 공정 관리를 약속 드립니다." },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0 },
  },
};

const item = (side: "left" | "right") => ({
  hidden: { opacity: 0, x: side === "left" ? -48 : 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
});

export default function PainPointSection() {
  return (
    <section id="worries" className="py-20 md:py-32 px-5 bg-warm-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Pain Point</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">이런 고민 있으신가요?</h2>
          <p className="text-fg-secondary">업종 변경을 앞두고 이런 걱정, 한 번쯤 해보셨을 겁니다.</p>
        </div>
        <motion.div
          className="max-w-[1080px] mx-auto flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {conversation.map((msg, i) => (
            <motion.div
              key={i}
              className={`flex ${msg.side === "left" ? "justify-start" : "justify-end"}`}
              variants={item(msg.side)}
            >
              <div className="max-w-[85%] md:max-w-[75%]">
                <div
                  className={`px-8 py-6 ${
                    msg.side === "left"
                      ? "bg-main-light shadow-md rounded-[16px] rounded-tl-sm"
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

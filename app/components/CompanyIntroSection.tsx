"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  "다 뜯지 마세요. 필요한 곳 딱.",
  "인테리어도 이제 필요한 곳만 골라 담는 소액공사 전문 기업",
  "전국 250여개 점포 운영 경험의 프랜차이즈 본사 출신 전문가 제안",
  "표준 견적 프로그램 기반 거품 없는 견적",
  "전국 어디서든 24시간 이내 방문",
];

export default function CompanyIntroSection() {
  return (
    <section id="company" className="py-20 md:py-32 px-5 bg-warm-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Company</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">업체소개</h2>
          <p className="text-fg-secondary">
            전국 250여개 점포 운영 경험을 가진 프랜차이즈 본사 출신 전문가가 직접 제안합니다.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
            }}
            className="relative w-full min-h-[320px] md:min-h-[420px] aspect-4/3 rounded-[16px] overflow-hidden shadow-md"
          >
            <Image src="/images/Intro.png" alt="핀포인트 리뉴얼 업체소개 - 상담, 현장 시공, 차량" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 640px" priority />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
            }}
            className="space-y-4"
          >
            {points.map((point) => (
            <motion.div
              key={point}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
              }}
              className="rounded-[16px] p-6 bg-main-light shadow-md"
            >
              <p className="text-fg">{point}</p>
            </motion.div>
            ))}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
              }}
              className="rounded-[16px] p-6 bg-main-light shadow-md border-l-4 border-accent"
            >
              <p className="text-fg font-medium">부분공사도 신속한 A/S 처리</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

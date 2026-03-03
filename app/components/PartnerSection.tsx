"use client";

import { motion } from "framer-motion";

export default function PartnerSection() {
  return (
    <section id="partner" className="py-20 md:py-32 px-5 bg-main">
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          className="rounded-[16px] p-8 md:p-10 bg-warm-white shadow-md"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Partner</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">파트너 모집</h2>
          <p className="text-fg-secondary leading-relaxed mb-6">
            전국 시공 네트워크 확장을 위해 지역 파트너를 모집합니다.
            <br />
            인테리어 업종 유경험자 우대, 협업 프로세스는 별도 안내드립니다.
          </p>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 rounded-[16px] text-sm font-semibold text-white bg-accent transition hover:opacity-90"
          >
            파트너 문의하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}

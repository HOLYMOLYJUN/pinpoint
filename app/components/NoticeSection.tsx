"use client";

import { motion } from "framer-motion";

const notices = [
  { title: "2월 업종변경 패키지 상담 오픈", date: "2026-02-10" },
  { title: "긴급간편공사 주말 대응 지역 확대", date: "2026-02-06" },
  { title: "부분공사 표준단가 업데이트 안내", date: "2026-02-01" },
];

export default function NoticeSection() {
  return (
    <section id="notice" className="py-20 md:py-32 px-5 bg-warm-white">
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Notice</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">공지사항</h2>
        </motion.div>
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {notices.map((notice) => (
            <motion.div
              key={notice.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
              }}
              className="rounded-[16px] p-5 bg-main-light shadow-md flex items-center justify-between gap-4"
            >
              <p className="text-fg">{notice.title}</p>
              <span className="text-xs text-fg-muted">{notice.date}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const workImages = [
  "/images/works/KakaoTalk_20260227_131806292.jpg",
  "/images/works/KakaoTalk_20260227_131806292_01.jpg",
  "/images/works/KakaoTalk_20260227_131806292_02.jpg",
  "/images/works/KakaoTalk_20260227_131806292_03.jpg",
  "/images/works/KakaoTalk_20260227_131806292_04.jpg",
  "/images/works/KakaoTalk_20260227_131806292_05.jpg",
  "/images/works/KakaoTalk_20260227_131806292_06.jpg",
  "/images/works/KakaoTalk_20260227_131806292_07.jpg",
  "/images/works/KakaoTalk_20260227_131806292_08.jpg",
  "/images/works/KakaoTalk_20260227_131806292_09.jpg",
  "/images/works/KakaoTalk_20260227_131806292_10.jpg",
  "/images/works/KakaoTalk_20260227_131806292_11.jpg",
  "/images/works/KakaoTalk_20260227_131806292_12.jpg",
  "/images/works/KakaoTalk_20260227_131806292_13.jpg",
  "/images/works/KakaoTalk_20260227_131816626.jpg",
  "/images/works/KakaoTalk_20260227_131816626_01.jpg",
  "/images/works/KakaoTalk_20260227_131816626_02.jpg",
  "/images/works/KakaoTalk_20260227_131816626_03.jpg",
  "/images/works/KakaoTalk_20260227_131816626_04.jpg",
  "/images/works/KakaoTalk_20260227_131816626_05.jpg",
  "/images/works/KakaoTalk_20260227_131816626_06.jpg",
  "/images/works/KakaoTalk_20260227_131816626_07.jpg",
  "/images/works/KakaoTalk_20260227_131816626_08.jpg",
  "/images/works/KakaoTalk_20260227_131816626_09.jpg",
  "/images/works/KakaoTalk_20260227_131816626_10.jpg",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-5 bg-warm-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-warm-gray">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">시공 사례</h2>
          <p className="text-fg-secondary">저희가 그동안 공사한 매장 사례입니다</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          {workImages.map((src, i) => (
            <motion.div
              key={src}
              variants={item}
              className="group relative aspect-square rounded-[16px] overflow-hidden shadow-md"
            >
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={src}
                  alt={`시공 사례 ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

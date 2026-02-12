"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+nanqE2n28st7cO7xqWZpWJJx9mlFFVJY9mJ2M/9k=";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20 px-5 bg-main min-h-0">
      <div className="absolute inset-0">
        <Image
          src="/images/main3.png"
          alt=""
          fill
          priority
          quality={75}
          sizes="(max-width: 768px) 768px, 1920px"
          placeholder="blur"
          blurDataURL={BLUR_DATA}
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-main/60" aria-hidden />
      <motion.div
        className="relative py-24 z-10 max-w-[640px] mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.span
          variants={item}
          className="inline-block text-xs font-medium px-3.5 py-1 rounded-full mb-8 bg-accent/10 text-accent"
        >
          업종 변경 인테리어 전문
        </motion.span>
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8 text-accent"
        >
          업종 변경 인테리어,
          <br />
          <span className="text-accent-light">전면 철거 없이</span> 가능합니다
        </motion.h1>
        <motion.p variants={item} className="text-sm md:text-base mb-12 leading-relaxed text-accent-light">
          기존 구조를 최대한 활용하여{" "}
          <strong className="text-accent">최소 비용, 최소 기간</strong>으로
          <br className="hidden md:block" />
          새로운 매장을 완성합니다.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="px-6 py-3 rounded-[16px] text-base font-semibold text-white bg-accent transition hover:opacity-90 hover:shadow-lg">
            무료 상담 신청하기
          </a>
          <a href="#portfolio" className="px-6 py-3 rounded-[16px] text-base font-semibold border-2 border-accent/20 text-accent transition hover:border-accent/40">
            시공 사례 보기
          </a>
        </motion.div>
        <motion.div variants={item} className="mt-12 flex flex-wrap justify-center gap-5 text-xs md:text-sm text-accent font-medium">
          {["누적 150건+ 시공", "평균 21일 완공", "1년 A/S 보장"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              {t}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

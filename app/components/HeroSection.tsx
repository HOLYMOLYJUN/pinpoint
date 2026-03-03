"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+nanqE2n28st7cO7xqWZpWJJx9mlFFVJY9mJ2M/9k=";

const chars = ["핀", "포", "인", "트"];
const scatterOffsets = [
  { x: -80, y: -60, rotate: -15 },
  { x: 60, y: -40, rotate: 12 },
  { x: -50, y: 50, rotate: 8 },
  { x: 70, y: 40, rotate: -10 },
];

const PinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-40 pb-36 md:pt-24 md:pb-20 px-5 bg-main min-h-200">
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
        className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <motion.div
          className="flex items-center justify-center gap-1 md:gap-2 mb-6"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.5 },
            },
          }}
        >
          {chars.map((c, i) => (
            <motion.span
              key={c}
              variants={{
                hidden: {
                  opacity: 0,
                  x: scatterOffsets[i].x,
                  y: scatterOffsets[i].y,
                  rotate: scatterOffsets[i].rotate,
                  scale: 0.5,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="inline-block text-5xl md:text-7xl font-extrabold text-accent bg-warm-white/90 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg"
            >
              {c}
            </motion.span>
          ))}
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, delay: 0.9, ease: "easeOut" },
              },
            }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ml-1 md:ml-2"
            style={{ color: "var(--color-point)" }}
          >
            <PinIcon className="w-full h-full" />
          </motion.span>
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
          className="text-lg md:text-xl text-accent-light font-medium mb-2 text-center"
        >
          필요한 곳만 콕 집어 완성하는 핀셋 리뉴얼 솔루션
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
          }}
          className="text-sm md:text-base mb-10 text-accent-light/90 text-center"
        >
          다 뜯어내지 않고, 필요한 곳만 정확히 리뉴얼합니다.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } },
          }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#contact" className="px-6 py-3 rounded-[16px] text-base font-semibold text-white bg-accent transition hover:opacity-90 hover:shadow-lg">
            문의 남기기
          </a>
          <a href="#categories" className="px-6 py-3 rounded-[16px] text-base font-semibold border-2 border-accent/20 text-accent transition hover:border-accent/40">
            카테고리 보기
          </a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.4, delay: 0.6 } },
          }}
          className="mt-12 flex flex-wrap justify-center gap-5 text-xs md:text-sm text-accent font-medium"
        >
          {["누적 150건+ 시공", "평균 7일 완공", "1년 A/S 보장"].map((t) => (
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

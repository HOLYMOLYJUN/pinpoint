import Image from "next/image";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+nanqE2n28st7cO7xqWZpWJJx9mlFFVJY9mJ2M/9k=";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-5 bg-main">
      <div className="absolute inset-0">
        <Image
          src="/images/main.jpg"
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
      <div className="relative z-10 max-w-[700px] mx-auto text-center">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-8 bg-accent/10 text-accent">
          업종 변경 인테리어 전문
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-accent">
          업종 변경 인테리어,
          <br />
          <span className="text-accent-light">전면 철거 없이</span> 가능합니다
        </h1>
        <p className="text-base md:text-lg mb-10 leading-relaxed text-fg-secondary">
          기존 구조를 최대한 활용하여{" "}
          <strong className="text-accent">최소 비용, 최소 기간</strong>으로
          <br className="hidden md:block" />
          새로운 매장을 완성합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 rounded-[16px] text-lg font-semibold text-white bg-accent transition hover:opacity-90 hover:shadow-lg">
            무료 상담 신청하기
          </a>
          <a href="#portfolio" className="px-8 py-4 rounded-[16px] text-lg font-semibold border-2 border-accent/20 text-accent transition hover:border-accent/40">
            시공 사례 보기
          </a>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-accent text-bold">
          {["누적 150건+ 시공", "평균 21일 완공", "1년 A/S 보장"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-point)] inline-block" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

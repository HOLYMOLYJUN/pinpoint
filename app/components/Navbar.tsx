"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-warm-white/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-5 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-accent w-[120px]">
          <Image src="/images/logo.svg" alt="PINPOINT" width={150} height={50} className="w-full h-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-fg-secondary">
          <a href="#categories" className="hover:opacity-70 transition">카테고리</a>
          <a href="#company" className="hover:opacity-70 transition">업체소개</a>
          <a href="#faq" className="hover:opacity-70 transition">자주묻는질문</a>
          <a href="#portfolio" className="hover:opacity-70 transition">시공 사례</a>
          <a href="#notice" className="hover:opacity-70 transition">공지사항</a>
          <a href="#partner" className="hover:opacity-70 transition">파트너 모집</a>
          <a href="#contact" className="px-5 py-2 rounded-[16px] text-white bg-accent transition hover:opacity-90">
            문의 남기기
          </a>
        </div>
        <a href="#contact" className="md:hidden px-4 py-2 rounded-[16px] text-sm font-medium text-white bg-accent">
          무료 상담
        </a>
      </div>
    </nav>
  );
}

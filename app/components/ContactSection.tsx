"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", location: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setForm({ name: "", phone: "", location: "", business: "", message: "" });
  };

  const fields = [
    { label: "이름", key: "name" as const, type: "text", ph: "홍길동", req: true },
    { label: "연락처", key: "phone" as const, type: "tel", ph: "010-0000-0000", req: true },
    { label: "매장 위치", key: "location" as const, type: "text", ph: "서울시 강남구" },
    { label: "변경 예정 업종", key: "business" as const, type: "text", ph: "카페, 음식점 등" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-5 bg-accent">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/50">Starting Point</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">무료 상담 신청</h2>
          <p className="text-base leading-relaxed text-white/65">
            업종 변경, 어디서부터 시작해야 할지 모르겠다면
            <br />
            핀포인트가 현장부터 확인해드립니다.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[16px] p-8 md:p-10 shadow-2xl bg-warm-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="block text-sm font-medium mb-2 text-fg-secondary">{f.label}</label>
                <input
                  type={f.type}
                  required={f.req}
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  placeholder={f.ph}
                  className="w-full px-4 py-3.5 rounded-[16px] text-sm outline-none transition bg-main-light border border-main-dark/30 text-fg focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            ))}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-fg-secondary">문의 내용</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="현재 매장 상태, 예산, 일정 등 자유롭게 적어주세요."
              className="w-full px-4 py-3.5 rounded-[16px] text-sm outline-none transition resize-none bg-main-light border border-main-dark/30 text-fg focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-[16px] text-base font-bold text-white bg-accent transition hover:opacity-90 hover:shadow-lg"
          >
            무료 상담 신청하기
          </button>
          <p className="text-center text-xs mt-4 text-fg-muted">상담 신청 후 24시간 이내 연락드립니다.</p>
        </form>
      </div>
    </section>
  );
}

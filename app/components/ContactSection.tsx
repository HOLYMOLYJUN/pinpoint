"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    region: "",
    business: "",
    workDetails: "",
    name: "",
    phone: "",
    alertAgree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 알림 설정 여부와 함께 확인 후 연락드리겠습니다.");
    setForm({ region: "", business: "", workDetails: "", name: "", phone: "", alertAgree: false });
  };

  const fields = [
    { label: "지역 (시·군·구)", key: "region" as const, type: "text", ph: "서울시 강남구", req: true },
    { label: "업종 (간단 메모)", key: "business" as const, type: "text", ph: "예: 카페 → 분식", req: true },
    { label: "성함", key: "name" as const, type: "text", ph: "홍길동", req: true },
    { label: "연락처", key: "phone" as const, type: "tel", ph: "010-0000-0000", req: true },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-5 bg-accent">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/50">Starting Point</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">문의 남기기</h2>
          <p className="text-base leading-relaxed text-white/65">
            지역과 업종, 필요한 공사 내용을 남겨주시면
            <br />
            핀포인트가 빠르게 확인 후 연락드립니다.
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-[16px] p-8 md:p-10 shadow-2xl bg-warm-white"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
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
            <label className="block text-sm font-medium mb-2 text-fg-secondary">공사 내용 (간단 메모)</label>
            <textarea
              rows={4}
              required
              value={form.workDetails}
              onChange={(e) => setForm({ ...form, workDetails: e.target.value })}
              placeholder="예: 홀 조명 교체, 주방 동선 변경, 간판 교체"
              className="w-full px-4 py-3.5 rounded-[16px] text-sm outline-none transition resize-none bg-main-light border border-main-dark/30 text-fg focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
          </div>
          <label className="flex items-center gap-2 mb-6 text-sm text-fg-secondary">
            <input
              type="checkbox"
              checked={form.alertAgree}
              onChange={(e) => setForm({ ...form, alertAgree: e.target.checked })}
              className="w-4 h-4"
            />
            문의 진행 알림 수신에 동의합니다.
          </label>
          <button
            type="submit"
            className="w-full py-4 rounded-[16px] text-base font-bold text-white bg-accent transition hover:opacity-90 hover:shadow-lg"
          >
            문의 보내기
          </button>
          <p className="text-center text-xs mt-4 text-fg-muted">상담 신청 후 24시간 이내 연락드립니다.</p>
        </motion.form>
      </div>
    </section>
  );
}

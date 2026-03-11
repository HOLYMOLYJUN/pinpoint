"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tab = "partner" | "inquiry";

const partnerFormInit = {
  region: "",
  name: "",
  phone: "",
  message: "",
  alertAgree: false,
};

const inquiryFormInit = {
  region: "",
  business: "",
  workDetails: "",
  name: "",
  phone: "",
  alertAgree: false,
};

export default function ContactSection() {
  const [tab, setTab] = useState<Tab>("inquiry");
  const [partnerForm, setPartnerForm] = useState(partnerFormInit);
  const [inquiryForm, setInquiryForm] = useState(inquiryFormInit);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("지역 파트너 모집 신청이 접수되었습니다. 확인 후 연락드리겠습니다.");
    setPartnerForm(partnerFormInit);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("공사 문의가 접수되었습니다. 알림 설정 여부와 함께 확인 후 연락드리겠습니다.");
    setInquiryForm(inquiryFormInit);
  };

  const inquiryFields = [
    { label: "지역 (시·군·구)", key: "region" as const, type: "text", ph: "서울시 강남구", req: true },
    { label: "업종 (간단 메모)", key: "business" as const, type: "text", ph: "예: 카페 → 분식", req: true },
    { label: "성함", key: "name" as const, type: "text", ph: "홍길동", req: true },
    { label: "연락처", key: "phone" as const, type: "tel", ph: "010-0000-0000", req: true },
  ];

  const inputClass =
    "w-full px-4 py-3.5 rounded-[16px] text-sm outline-none transition bg-main-light border border-main-dark/30 text-fg focus:ring-2 focus:ring-accent/20 focus:border-accent";
  const labelClass = "block text-sm font-medium mb-2 text-fg-secondary";

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
            지역 파트너 모집 또는 공사 문의를 선택해 주세요.
          </p>
        </motion.div>

        <div className="rounded-t-[16px] flex gap-2 bg-white p-4 ">
          <button
            type="button"
            onClick={() => setTab("partner")}
            className={`cursor-pointer flex-1 py-4 rounded-[8px] text-sm font-semibold transition ${
              tab === "partner" ? "bg-accent text-white" : "text-accent hover:bg-accent/80 hover:text-white"
            }`}
          >
            지역파트너 모집
          </button>
          <button
            type="button"
            onClick={() => setTab("inquiry")}
            className={`cursor-pointer flex-1 py-4 rounded-[8px] text-sm font-semibold transition ${
              tab === "inquiry" ? "bg-accent text-white" : "text-accent hover:bg-accent/80 hover:text-white"
            }`}
          >
            공사문의
          </button>
        </div>

        <motion.div
          className="rounded-b-[16px] rounded-t-none p-8 md:p-10 shadow-2xl bg-warm-white"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {tab === "partner" && (
            <form onSubmit={handlePartnerSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass}>지역 (시·군·구)</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.region}
                    onChange={(e) => setPartnerForm({ ...partnerForm, region: e.target.value })}
                    placeholder="활동 가능 지역"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>성함</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    placeholder="홍길동"
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>연락처</label>
                  <input
                    type="tel"
                    required
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className={labelClass}>경력·희망 사항 (간단 메모)</label>
                <textarea
                  rows={4}
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                  placeholder="인테리어 경력, 희망 협업 방식 등"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <label className="flex items-center gap-2 mb-6 text-sm text-fg-secondary">
                <input
                  type="checkbox"
                  checked={partnerForm.alertAgree}
                  onChange={(e) => setPartnerForm({ ...partnerForm, alertAgree: e.target.checked })}
                  className="w-4 h-4"
                />
                문의 진행 알림 수신에 동의합니다.
              </label>
              <button
                type="submit"
                className="w-full py-4 rounded-[16px] text-base font-bold text-white bg-accent transition hover:opacity-90 hover:shadow-lg"
              >
                파트너 신청하기
              </button>
              <p className="text-center text-xs mt-4 text-fg-muted">신청 후 검토하여 연락드립니다.</p>
            </form>
          )}

          {tab === "inquiry" && (
            <form onSubmit={handleInquirySubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {inquiryFields.map((f) => (
                  <div key={f.key}>
                    <label className={labelClass}>{f.label}</label>
                    <input
                      type={f.type}
                      required={f.req}
                      value={inquiryForm[f.key]}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label className={labelClass}>공사 내용 (간단 메모)</label>
                <textarea
                  rows={4}
                  required
                  value={inquiryForm.workDetails}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, workDetails: e.target.value })}
                  placeholder="예: 홀 조명 교체, 주방 동선 변경, 간판 교체"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <label className="flex items-center gap-2 mb-6 text-sm text-fg-secondary">
                <input
                  type="checkbox"
                  checked={inquiryForm.alertAgree}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, alertAgree: e.target.checked })}
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
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

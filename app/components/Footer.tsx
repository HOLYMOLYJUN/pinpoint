export default function Footer() {
  return (
    <footer className="py-12 px-5 bg-accent border-t border-white/10">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-1">PINPOINT</p>
            <p className="text-sm text-white/40">업종 변경 인테리어 전문</p>
          </div>
          <div className="text-center md:text-right text-sm text-white/40">
            <p>상담 전화: 02-0000-0000</p>
            <p>카카오톡: @pinpoint</p>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-xs border-t border-white/10 text-white/25">
          &copy; 2026 PINPOINT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

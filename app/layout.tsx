import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PINPOINT | 업종 변경 인테리어 전문",
  description:
    "다 뜯어내지 않습니다. 기존 구조 최대 활용, 최소 비용·최소 기간으로 업종 변경 인테리어를 완성합니다.",
  keywords: [
    "업종변경 인테리어",
    "부분철거",
    "리모델링",
    "매장 인테리어",
    "최소비용 인테리어",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

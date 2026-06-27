import "./globals.css";

export const metadata = {
  title: "케이엠경영컨설팅",
  description: "정책자금, 창업, 법인전환, 경영개선 전문 컨설팅 상담 홈페이지",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

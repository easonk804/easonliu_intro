import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "个人展示 | 三年创业，寻求平台资源下的内部孵化机会",
  description:
    "三年创业经历与认知迭代，专注从 0 到 1；寻求在知名企业内借助平台资源、独立做项目的机会。",
  keywords: ["个人网站", "创业经历", "内部孵化", "从0到1", "创新业务"],
  openGraph: {
    title: "个人展示 | 三年创业，寻求内部孵化机会",
    description:
      "三年创业经历与认知迭代；寻求在知名企业内借助平台资源、独立做项目的机会。",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={notoSansSC.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          跳过导航，直达主内容
        </a>
        <Header />
        <main id="main" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

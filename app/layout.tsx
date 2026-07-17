import type { Metadata } from "next";
import { DM_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });
const dmMono = DM_Mono({ variable: "--font-mono", weight: ["300", "400", "500"], subsets: ["latin"] });

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nice-intl.github.io/nice-rubric";
const title = "Rubric Reward Model Workshop × NICE";
const description = "聚焦 Rubric 构建、奖励建模、自动评测与强化学习的青年学者 Workshop。";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
  openGraph: {
    title,
    description,
    type: "website",
    url: origin,
    images: [{ url: `${origin}${basePath}/og.png`, width: 1792, height: 932, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${origin}${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${syne.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

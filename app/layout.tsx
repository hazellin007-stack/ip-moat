import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "你記得那次創業失敗",
  description:
    "為什麼有人把點子變成王朝，你的卻成了別人的產品？一份寫給創業者的 IP 實戰指南。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${bricolage.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

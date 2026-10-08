import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunadejerez.com"),
  title: {
    default: "Luna de Jerez（ルナ・デ・ヘレス）｜ 中目黒のフラメンコスタジオ",
    template: "%s | Luna de Jerez フラメンコスタジオ",
  },
  description:
    "東京・中目黒駅徒歩4分のフラメンコスタジオ「Luna de Jerez」。アンダルシア・ヘレスの伝統と洗練された情熱。初心者から舞台経験者まで、足腰に優しい無垢フロアで本場フラメンコを丁寧に指導。手ぶらでOKの体験レッスン受付中。",
  keywords: [
    "フラメンコ",
    "フラメンコ教室",
    "フラメンコスタジオ",
    "Luna de Jerez",
    "ルナデヘレス",
    "中目黒",
    "目黒区",
    "大人の習い事",
    "ダンススタジオ",
    "セビジャーナス",
    "体験レッスン",
    "池田遥香",
  ],
  authors: [{ name: "池田 遥香" }],
  creator: "Luna de Jerez",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://lunadejerez.com",
    siteName: "Luna de Jerez",
    title: "Luna de Jerez｜洗練された情熱、アンダルシアの鼓動をこの街で。",
    description:
      "東京・中目黒駅徒歩4分。初心者から学べる本格フラメンコ教室「Luna de Jerez」。体験レッスン毎日受付中！",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Luna de Jerez フラメンコスタジオ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna de Jerez｜東京・中目黒のフラメンコスタジオ",
    description: "アンダルシア・ヘレス直伝の本格フラメンコ。初心者向け体験レッスン受付中。",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness 構造化データ (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DanceStudio",
    "name": "Luna de Jerez (ルナ・デ・ヘレス)",
    "image": "https://lunadejerez.com/images/hero.jpg",
    "telephone": "03-6800-XXXX",
    "url": "https://lunadejerez.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "上目黒2-15-8 ルナビルディング 3F",
      "addressLocality": "目黒区",
      "addressRegion": "東京都",
      "postalCode": "153-0051",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.6441,
      "longitude": 139.6989
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:30",
        "closes": "20:00"
      }
    ],
    "priceRange": "¥¥"
  };

  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}

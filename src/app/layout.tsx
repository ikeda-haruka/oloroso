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
  metadataBase: new URL("https://estudio-oloroso.com"),
  title: {
    default: "Estudio Oloroso（エストゥディオ・オロロソ）｜ 架空のフラメンコスタジオ（ポートフォリオ作品）",
    template: "%s | Estudio Oloroso フラメンコスタジオ（架空・ポートフォリオ）",
  },
  description:
    "【ポートフォリオ作品】Web制作・開発実績用の架空のフラメンコスタジオ「Estudio Oloroso（エストゥディオ・オロロソ）」のデモサイトです。実在の店舗・人物とは関係ありません。",
  keywords: [
    "ポートフォリオ",
    "Web制作",
    "Next.js",
    "Decap CMS",
    "フラメンコスタジオ",
    "架空サイト",
    "Estudio Oloroso",
    "エストゥディオオロロソ",
  ],
  authors: [{ name: "池田 遥香" }],
  creator: "Estudio Oloroso",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://estudio-oloroso.com",
    siteName: "Estudio Oloroso (ポートフォリオ作品)",
    title: "Estudio Oloroso｜架空のフラメンコスタジオ（ポートフォリオ作品）",
    description:
      "【ポートフォリオ作品】Web制作・開発実績用の架空のフラメンコスタジオサイトです。",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Oloroso フラメンコスタジオ（ポートフォリオ作品）",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Oloroso｜架空のフラメンコスタジオ（ポートフォリオ作品）",
    description: "【ポートフォリオ作品】Web制作・開発実績用の架空のフラメンコスタジオサイトです。",
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
    "name": "Estudio Oloroso (エストゥディオ・オロロソ) [架空の教室・ポートフォリオ作品]",
    "description": "ポートフォリオ用の架空のフラメンコスタジオサイトです。",
    "image": "https://estudio-oloroso.com/images/hero.jpg",
    "telephone": "03-0000-0000",
    "url": "https://estudio-oloroso.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "東京都目黒区（架空の所在地）",
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

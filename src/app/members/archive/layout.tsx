import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会員専用 レッスン動画アーカイブ | Estudio Oloroso",
  description:
    "Estudio Oloroso受講生専用のレッスン復習・振替学習用動画アーカイブライブラリです。入門から中上級までの足打ち・振付解説動画をいつでもどこでもご視聴いただけます。",
};

export default function MemberArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

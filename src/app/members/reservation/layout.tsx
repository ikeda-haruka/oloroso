import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会員専用 スタジオWeb予約 | Estudio Oloroso",
  description:
    "Estudio Oloroso在籍受講生専用のスタジオ自主練習・レンタルWeb予約システムです。24時間オンラインで空き枠の確認と予約が可能です。",
};

export default function MemberReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会員ログイン | Estudio Oloroso",
  description:
    "Estudio Oloroso在籍受講生専用の会員ログインページです。会員専用スタジオWeb予約やレッスン動画アーカイブにアクセスできます。",
};

export default function MemberLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, Phone, AlertCircle } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニュー開閉時のbodyスクロールロック
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "ホーム", href: "/" },
    { name: "スタジオ紹介", href: "/about" },
    { name: "クラス案内", href: "/classes" },
    { name: "スケジュール・料金", href: "/schedule" },
    { name: "お知らせ・ブログ", href: "/news" },
    { name: "アクセス・お問い合わせ", href: "/contact" },
  ];

  return (
    <>
      {/* ポートフォリオ用架空サイト免責バナー */}
      <div className="bg-[#FAF0E6] text-[#801336] text-[11px] py-1.5 px-4 border-b border-[#801336]/20 text-center font-bold tracking-wide">
        【ポートフォリオ作品】当サイトはWeb制作実績用の架空のフラメンコスタジオサイトです。実在の店舗・人物・施設とは関係ありません。
      </div>

      {/* 既存受講生向け・重要アナウンスバー */}
      <div className="bg-[#2B0A11] text-[#E8C888] text-xs py-2 px-4 border-b border-[#801336]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-[#801336] text-white px-2 py-0.5 rounded text-[10px] font-bold">INFO</span>
            <span className="hover:underline cursor-pointer">
              <Link href="/news" className="flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-[#E8C888]" />
                10月度 レッスン開講・休講スケジュールを更新しました
              </Link>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-[#FAF7F2]/80">
            <Link href="/schedule" className="hover:text-white transition flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#C5A059]" /> 今月のスケジュール
            </Link>
            <span className="text-[#801336]">|</span>
            <span className="flex items-center gap-1 text-[#FAF7F2]/70">
              <Phone className="w-3 h-3 text-[#C5A059]" /> 03-0000-0000（架空の番号）
            </span>
          </div>
        </div>
      </div>

      {/* メインヘッダー */}
      <header
        className={`sticky top-0 z-50 transition-luxury w-full ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#801336]/10"
            : "bg-[#FAF7F2] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A059] shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Estudio Oloroso Logo"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-jp text-xl md:text-2xl font-bold tracking-widest text-[#801336] group-hover:text-[#721B29] transition">
                Estudio Oloroso
              </span>
              <span className="text-[10px] tracking-wider text-[#721B29]/70 uppercase">
                Flamenco Studio Tokyo
              </span>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1C1917]/85 hover:text-[#801336] transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#801336] hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* スライド4要件: ヘッダー追従エリアにスケジュール & 休講・代講情報を独立配置 */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/news"
              className="px-3 py-1.5 text-xs font-medium text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition flex items-center gap-1"
              title="最新の休講・代講情報"
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>休講・代講</span>
            </Link>
            <Link
              href="/schedule"
              className="px-3 py-1.5 text-xs font-medium text-[#801336] bg-[#801336]/5 hover:bg-[#801336]/10 border border-[#801336]/30 rounded-lg transition flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>スケジュール</span>
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C888] animate-pulse"></span>
              体験予約
            </Link>
          </div>

          {/* スマホハンバーガーボタン */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#801336] hover:text-[#721B29] focus:outline-none"
              aria-label="メニューを開く"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* スマホドロワーメニュー（z-[100] でヘッダーz-50より最前面に配置し、二重表示を防止） */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* 背景クリックで閉じる透明エリア */}
          <div className="absolute inset-0" onClick={() => setIsMobileMenuOpen(false)} />

          {/* ドロワーメニュー本体 */}
          <div className="relative ml-auto w-4/5 max-w-sm h-full bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-[101]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#801336]/20">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#C5A059]">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-serif-jp text-base font-bold text-[#801336]">Estudio Oloroso</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition"
                  aria-label="メニューを閉じる"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 生徒専用クイックアクセスブロック */}
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200">
                <span className="text-[10px] font-bold text-amber-900 tracking-wider uppercase block mb-1.5">
                  生徒専用メニュー
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    href="/news"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-white rounded-lg border border-amber-200 text-amber-900 font-bold flex items-center justify-center gap-1 shadow-xs"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                    <span>休講・代講</span>
                  </Link>
                  <Link
                    href="/schedule"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-white rounded-lg border border-amber-200 text-[#801336] font-bold flex items-center justify-center gap-1 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>スケジュール</span>
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[#1C1917] hover:text-[#801336] py-2.5 px-1 border-b border-gray-100 transition flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-gray-400 text-xs">›</span>
                  </Link>
                ))}
                {/* 採用情報への導線も追加 */}
                <Link
                  href="/recruit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-600 hover:text-[#801336] py-2 px-1 border-b border-gray-100 transition flex items-center justify-between"
                >
                  <span>採用情報（受付スタッフ募集）</span>
                  <span className="text-gray-400 text-xs">›</span>
                </Link>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 text-center block font-semibold text-white bg-gradient-to-r from-[#801336] to-[#721B29] rounded-xl shadow-md"
                >
                  体験レッスンを予約する
                </Link>
                <a
                  href="https://line.me/R/ti/p/@estudio_oloroso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center block font-semibold text-white bg-[#06C755] rounded-xl shadow-sm hover:opacity-90 transition text-sm"
                >
                  公式LINEで問い合わせ・相談
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-1.5">
              <p className="font-bold text-[#801336]">※ポートフォリオ用架空スタジオ</p>
              <p>〒153-0051 東京都目黒区（※架空の所在地）</p>
              <p>TEL: 03-0000-0000（架空）</p>
              <p>想定立地: 中目黒駅徒歩4分</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#2B0A11] text-[#FAF7F2] pt-16 pb-24 md:pb-12 border-t border-[#801336]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#801336]/30">
          {/* ブランド情報 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A059]">
                <Image src="/images/logo.png" alt="Estudio Oloroso" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif-jp text-xl font-bold tracking-wider text-white">Estudio Oloroso</h3>
                <p className="text-[11px] text-[#C5A059] tracking-widest uppercase">Estudio de Baile Flamenco</p>
              </div>
            </div>
            <p className="text-xs text-[#FAF7F2]/80 leading-relaxed">
              スペイン・アンダルシア地方ヘレス・デ・ラ・フロンテーラの伝統と息吹をそのままに。芳醇な辛口シェリー「オロロソ」のように、深遠な情熱とエレガンスが息づく本格フラメンコをお届けします。
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/estudio_oloroso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#801336]/60 flex items-center justify-center hover:bg-[#801336] transition text-[#E8C888]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#801336]/60 flex items-center justify-center hover:bg-[#801336] transition text-[#E8C888]"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#801336]/60 flex items-center justify-center hover:bg-[#801336] transition text-[#E8C888]"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* クイックリンク */}
          <div>
            <h4 className="font-serif-jp text-sm font-semibold tracking-wider text-[#C5A059] uppercase mb-4 border-l-2 border-[#C5A059] pl-2">
              サイトマップ
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li>
                <Link href="/" className="hover:text-[#E8C888] transition flex items-center gap-1.5">
                  › トップページ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E8C888] transition flex items-center gap-1.5">
                  › スタジオ紹介・講師理念
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#E8C888] transition flex items-center gap-1.5">
                  › クラス案内・カリキュラム
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#E8C888] transition flex items-center gap-1.5">
                  › 週間スケジュール・料金案内
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#E8C888] transition flex items-center gap-1.5">
                  › お知らせ・公式ブログ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E8C888] transition flex items-center gap-1.5">
                  › 体験レッスン申込・お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="hover:text-[#E8C888] transition flex items-center gap-1.5 text-amber-200/90 font-medium">
                  › 採用情報（受付スタッフ募集）
                </Link>
              </li>
              <li className="pt-2 border-t border-[#801336]/40">
                <Link href="/members/reservation" className="hover:text-white transition flex items-center gap-1.5 text-[#E8C888] font-bold">
                  › 【会員専用】スタジオWeb予約
                </Link>
              </li>
              <li>
                <Link href="/members/archive" className="hover:text-white transition flex items-center gap-1.5 text-[#E8C888] font-bold">
                  › 【会員専用】動画アーカイブ
                </Link>
              </li>
              <li>
                <Link href="/members/login" className="hover:text-white transition flex items-center gap-1.5 text-[#FAF7F2]/70 text-[11px]">
                  › 会員ログイン
                </Link>
              </li>
              <li>
                <Link href="/members/management" className="hover:text-white transition flex items-center gap-1.5 text-amber-200 text-[11px] font-semibold">
                  › 館員・会員管理ポータル（CMS）
                </Link>
              </li>
            </ul>
          </div>

          {/* レッスンカテゴリー */}
          <div>
            <h4 className="font-serif-jp text-sm font-semibold tracking-wider text-[#C5A059] uppercase mb-4 border-l-2 border-[#C5A059] pl-2">
              受講クラス一覧
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <li>
                <Link href="/classes#beginner" className="hover:text-[#E8C888] transition">
                  ・入門クラス（セビジャーナス基礎）
                </Link>
              </li>
              <li>
                <Link href="/classes#intermediate" className="hover:text-[#E8C888] transition">
                  ・初級・振付クラス（曲種表現力）
                </Link>
              </li>
              <li>
                <Link href="/classes#advanced" className="hover:text-[#E8C888] transition">
                  ・中級・上級クラス（生演奏共演）
                </Link>
              </li>
              <li>
                <Link href="/classes#technique" className="hover:text-[#E8C888] transition">
                  ・テクニカ集中（サパテアード・体幹）
                </Link>
              </li>
              <li>
                <Link href="/classes#private" className="hover:text-[#E8C888] transition">
                  ・個人・特別プライベートレッスン
                </Link>
              </li>
            </ul>
          </div>

          {/* スタジオ情報・アクセス */}
          {/* スタジオ情報・アクセス */}
          <div>
            <h4 className="font-serif-jp text-sm font-semibold tracking-wider text-[#C5A059] uppercase mb-4 border-l-2 border-[#C5A059] pl-2 flex items-center gap-2">
              <span>スタジオ情報</span>
              <span className="text-[10px] bg-[#801336] text-[#E8C888] px-1.5 py-0.5 rounded font-normal">架空</span>
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/80">
              <div className="bg-[#801336]/30 p-2 rounded text-[11px] text-[#E8C888] mb-2 leading-relaxed">
                ※当サイトはポートフォリオ用の架空の教室です。実在の施設ではありません。
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>〒153-0051 東京都目黒区（※架空の所在地）</span>
              </div>
              <p className="text-[11px] text-[#C5A059] pl-6">想定立地: 中目黒駅南改札徒歩4分（サンプル）</p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>03-0000-0000（架空の番号）</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>demo@example.com（デモ用）</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p>月〜金: 10:00 - 21:30</p>
                  <p>土・日: 09:30 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト & CMS管理リンク */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
          <p>© 2026 Estudio Oloroso (Flamenco Studio). ポートフォリオ用架空サイトです。</p>
          <div className="flex items-center gap-4">
            <Link href="/recruit" className="hover:underline text-amber-200/90 font-medium">採用情報</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">利用規約・免責事項</Link>
            <span>•</span>
            <Link href="/admin/" className="hover:text-[#E8C888] transition flex items-center gap-1 text-[11px]">
              CMS管理者ログイン <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

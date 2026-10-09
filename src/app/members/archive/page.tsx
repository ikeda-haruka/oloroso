"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Video,
  Play,
  Lock,
  Clock,
  Sparkles,
  CalendarCheck,
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function MemberArchivePage() {
  const categories = [
    { name: "すべて", count: 24 },
    { name: "入門・基礎", count: 8 },
    { name: "初級・振付", count: 8 },
    { name: "中級・上級", count: 5 },
    { name: "テクニカ集中", count: 3 },
  ];

  const archiveVideos = [
    {
      id: "v-01",
      title: "【入門・基礎】セビジャーナス第1番・第2番の足打ちとブラソ徹底復習",
      category: "入門・基礎",
      date: "2026年10月06日 収録",
      instructor: "池田 遥香",
      duration: "42分",
      thumbnail: "/images/classes-beginner.jpg",
      points: [
        "パソ・デ・セビジャーナスの重心移動とつま先の軌道",
        "腕（ブラソ）を回す際の手首の内回し・外回しの違い",
        "後半の回転（ブエルタ）で軸をぶらさないコツ",
      ],
      badge: "最新アーカイブ",
    },
    {
      id: "v-02",
      title: "【初級・振付】アレグリアス：シレンシオの優雅なアバニコ（扇子）の扱い方",
      category: "初級・振付",
      date: "2026年10月03日 収録",
      instructor: "池田 遥香",
      duration: "55分",
      thumbnail: "/images/classes-intermediate.jpg",
      points: [
        "扇子（アバニコ）を開閉するタイミングと手首の脱力",
        "シレンシオ特有の静寂とタパオ（足の止め）の余韻",
        "目線の流し方と首の角度でエレガンスを表現するポイント",
      ],
      badge: "人気動画",
    },
    {
      id: "v-03",
      title: "【テクニカ集中】高速サパテアードの音色改善と体幹コントロール",
      category: "テクニカ集中",
      date: "2026年09月27日 収録",
      instructor: "池田 遥香",
      duration: "38分",
      thumbnail: "/images/classes-technique.jpg",
      points: [
        "プランタ（母指球）・ゴルペ（足裏全体）・タコン（踵）の音の打ち分け",
        "骨盤を水平にキープし膝への負担を軽減する立ち方",
        "メトロノームに合わせたコンパス12拍の加速トレーニング",
      ],
      badge: "必見基礎",
    },
    {
      id: "v-04",
      title: "【中級・上級】ソレア・ポル・ブレリア：生ギターの呼吸に合わせたコールとレマーテ",
      category: "中級・上級",
      date: "2026年09月20日 収録",
      instructor: "池田 遥香",
      duration: "60分",
      thumbnail: "/images/classes-advanced.jpg",
      points: [
        "ギタリストに合図を送る『ジャマーダ』のキレ",
        "重厚なコンパスの『溜め』と爆発的なアクセントの対比",
        "生演奏との即興的な掛け合い（ハレオ）の入れどころ",
      ],
      badge: "舞台対策",
    },
  ];

  return (
    <div className="space-y-16 py-12 md:py-20">
      {/* ページタイトルヘッダー */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold mb-4 shadow-xs">
          <Lock className="w-3.5 h-3.5 text-[#801336]" />
          <span>在籍受講生（会員）限定コンテンツ</span>
        </div>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-1 mb-3">
          レッスン動画アーカイブ
        </h1>
        <p className="text-xs sm:text-sm text-[#801336] font-bold tracking-widest uppercase">
          Online Video Archive for Members
        </p>
        <div className="w-16 h-1 bg-[#801336] mx-auto my-6" />

        {/* 会員限定ガイダンス */}
        <div className="bg-[#FAF7F2] border border-amber-200/80 rounded-2xl p-5 text-xs text-gray-700 max-w-2xl mx-auto leading-relaxed shadow-sm">
          <p className="font-bold text-[#801336] mb-1.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            お休み時の振替学習や、自主練習の予習・復習にご活用ください
          </p>
          <p className="text-gray-600">
            当スタジオでは、全クラスの模範演技・足打ち解説動画を毎レッスン後に高画質アーカイブ保存しています。
            視聴パスワードは月初のレッスン時、またはスタジオ公式LINEにて会員様へ個別にお知らせしております。
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            ※当サイトはポートフォリオ用のデモ画面です。動画の再生シミュレーションをお試しいただけます。
          </p>
        </div>
      </section>

      {/* 会員専用クイックリンクバナー */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2B0A11] via-[#721B29] to-[#2B0A11] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C5A059]/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#E8C888] flex items-center justify-center shrink-0 border border-[#C5A059]/40">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#E8C888] tracking-widest uppercase">
                Studio Rental / Practice
              </span>
              <h2 className="font-serif-jp text-lg sm:text-xl font-bold mt-0.5">
                動画で動きを確認したら、スタジオで自主練習！
              </h2>
              <p className="text-xs text-white/80 mt-1">
                日曜の自主練習枠や平日空き枠を、会員専用スタジオ予約サイト（Airリザーブ）から24時間Web予約いただけます。
              </p>
            </div>
          </div>
          <Link
            href="/members/reservation"
            className="px-6 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E8C888] text-[#2B0A11] font-bold text-xs tracking-wider rounded-xl shadow hover:scale-105 transition-transform flex items-center gap-2 shrink-0 whitespace-nowrap"
          >
            <span>会員専用スタジオ予約へ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* アーカイブ動画ライブラリ一覧 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* フィルタータブ */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap ${
                  i === 0
                    ? "bg-[#801336] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {c.name} ({c.count})
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            全24本中 4本のデモ動画を表示中
          </span>
        </div>

        {/* 動画カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archiveVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* サムネイル & 再生オーバーレイ */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#801336]/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#801336] transition-all">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>
                  {/* バッジ */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#2B0A11]/90 text-[#E8C888] font-bold text-[10px] backdrop-blur-sm border border-[#C5A059]/40">
                      {video.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[10px] shadow">
                      {video.badge}
                    </span>
                  </div>
                  {/* 再生時間 */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E8C888]" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* 動画情報 */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{video.date}</span>
                    <span className="font-medium text-gray-700">担当: {video.instructor}</span>
                  </div>
                  <h3 className="font-serif-jp text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#801336] transition leading-snug">
                    {video.title}
                  </h3>

                  {/* 復習のポイント */}
                  <div className="mt-4 p-3.5 bg-[#FAF7F2] rounded-xl border border-gray-100 text-xs">
                    <span className="font-bold text-gray-700 block mb-1.5 flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                      このアーカイブで学べるポイント
                    </span>
                    <ul className="space-y-1 text-gray-600">
                      {video.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-[#801336] font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* カード下部アクション */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                <button
                  onClick={() => alert(`【デモ視聴】\n「${video.title}」の再生プレイヤーを起動しました。\n※本番環境では会員認証後にVimeo限定公開プレイヤーで全編ストリーミング再生されます。`)}
                  className="w-full py-3 bg-[#FAF7F2] hover:bg-[#801336] text-[#801336] hover:text-white border border-[#801336]/30 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 group-hover:bg-[#801336] group-hover:text-white"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>この動画を再生する（会員認証デモ）</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 会員サポート案内 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center space-y-4">
          <h2 className="font-serif-jp text-lg sm:text-xl font-bold text-gray-900">
            動画が見られない・パスワードをお忘れの場合
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed max-w-xl mx-auto">
            動画アーカイブのパスワードは毎月1日に更新されます。メールまたは公式LINEより「お名前・受講クラス名」を添えてお気軽にお問い合わせください。担当スタッフよりご案内いたします。
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href="https://line.me/R/ti/p/@estudio_oloroso"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#06C755] text-white font-bold text-xs rounded-xl shadow-xs hover:opacity-90 transition flex items-center gap-1.5"
            >
              <span>公式LINEでパスワードを問い合わせる</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

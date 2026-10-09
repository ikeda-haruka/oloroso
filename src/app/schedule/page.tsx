"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Gift,
  HelpCircle,
  AlertCircle,
  Filter,
  X,
  Target,
  BookOpen,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";

interface TimetableItem {
  dayKey: string;
  dayName: string;
  time: string;
  className: string;
  level: string;
  teacher: string;
  desc: string;
  target?: string;
  items?: string;
  statusNote?: string;
}

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"interactive" | "google">("interactive");
  const [modalItem, setModalItem] = useState<TimetableItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const days = [
    { key: "all", label: "全曜日" },
    { key: "tue", label: "火曜日" },
    { key: "wed", label: "水曜日" },
    { key: "thu", label: "木曜日" },
    { key: "fri", label: "金曜日" },
    { key: "sat", label: "土曜日" },
    { key: "sun", label: "日曜日" },
  ];

  const levels = [
    { key: "all", label: "全レベル" },
    { key: "入門", label: "入門・基礎のみ" },
    { key: "初級", label: "初級・振付のみ" },
    { key: "中級・上級", label: "中上級のみ" },
    { key: "全レベル", label: "テクニカのみ" },
  ];

  const timetable: TimetableItem[] = [
    {
      dayKey: "tue",
      dayName: "火曜日",
      time: "11:00 - 12:00",
      className: "入門・基礎クラス（朝の部）",
      level: "入門",
      teacher: "池田 遥香",
      desc: "主婦層やフリーランスの方に人気。姿勢改善とセビジャーナス基礎。",
      target: "フラメンコをまったく初めて学ぶ方、平日午前に身体を動かしたい方",
      items: "動きやすい服装、靴下（シューズ・ファルダ無料貸出）",
      statusNote: "通常開講（体験レッスン受付中）",
    },
    {
      dayKey: "tue",
      dayName: "火曜日",
      time: "19:00 - 20:15",
      className: "初級・振付クラス",
      level: "初級",
      teacher: "池田 遥香",
      desc: "お仕事帰りに。アレグリアスの振付とアバニコの扱い方。",
      target: "基礎ステップを修了した方、表現力を深めたい方",
      items: "シューズ、ファルダ、扇子（アバニコ）",
      statusNote: "通常開講（体験レッスン受付中）",
    },
    {
      dayKey: "wed",
      dayName: "水曜日",
      time: "18:30 - 19:45",
      className: "中級・上級クラス",
      level: "中級・上級",
      teacher: "池田 遥香",
      desc: "ソレア・ポル・ブレリア。生演奏を意識した重厚なコンパスの探求。",
      target: "経験3年以上、舞台・即興表現を学びたい方",
      items: "シューズ、ファルダ、カスタネット等",
      statusNote: "通常開講",
    },
    {
      dayKey: "wed",
      dayName: "水曜日",
      time: "20:00 - 21:00",
      className: "テクニカ集中クラス",
      level: "全レベル",
      teacher: "池田 遥香",
      desc: "サパテアード（足打ち）の速射と体幹の強化。単発受講可。",
      target: "足打ちのスピード・音色を向上させたい全レベル",
      items: "レッスン着、シューズ",
      statusNote: "通常開講（単発チケット受講可）",
    },
    {
      dayKey: "thu",
      dayName: "木曜日",
      time: "14:00 - 15:00",
      className: "個人・プライベートレッスン枠",
      level: "個別",
      teacher: "池田 遥香",
      desc: "完全予約制。苦手克服や舞台前ソロ特訓に。",
      target: "マンツーマン指導希望、ソロ発表会対策の方",
      items: "ご相談に応じたアイテム",
      statusNote: "事前予約制（空き枠はお問い合わせください）",
    },
    {
      dayKey: "thu",
      dayName: "木曜日",
      time: "19:30 - 20:30",
      className: "入門・基礎クラス（夜の部）",
      level: "入門",
      teacher: "池田 遥香",
      desc: "平日夜の未経験者専用枠。シューズ無料レンタルで手ぶら受講OK。",
      target: "お仕事帰りに未経験から始めたい社会人の方",
      items: "動きやすい服装、靴下（シューズ無料貸出）",
      statusNote: "通常開講（体験レッスン受付中）",
    },
    {
      dayKey: "fri",
      dayName: "金曜日",
      time: "19:00 - 20:15",
      className: "初級・振付クラス",
      level: "初級",
      teacher: "池田 遥香",
      desc: "週末前のリフレッシュ。タンゴの軽快なリズムと豊かな表現力。",
      target: "基礎経験者、リズム感を養いたい方",
      items: "シューズ、ファルダ",
      statusNote: "通常開講",
    },
    {
      dayKey: "sat",
      dayName: "土曜日",
      time: "10:30 - 11:30",
      className: "入門・基礎クラス（週末朝）",
      level: "入門",
      teacher: "池田 遥香",
      desc: "休日のスタートに。太陽の光が入るスタジオで気持ちよく身体を動かします。",
      target: "週末の午前中にリフレッシュしたい初心者の方",
      items: "動きやすい服装、靴下（シューズ無料貸出）",
      statusNote: "大人気枠（体験レッスン残席わずか）",
    },
    {
      dayKey: "sat",
      dayName: "土曜日",
      time: "12:00 - 13:15",
      className: "初級・振付クラス（週末昼）",
      level: "初級",
      teacher: "池田 遥香",
      desc: "1曲をじっくり通して踊り込む人気クラス。",
      target: "ステップアップを目指す初級者",
      items: "シューズ、ファルダ",
      statusNote: "通常開講",
    },
    {
      dayKey: "sat",
      dayName: "土曜日",
      time: "14:00 - 15:00",
      className: "テクニカ集中クラス（週末）",
      level: "全レベル",
      teacher: "池田 遥香",
      desc: "足打ちと回転。月替わりで生ギター伴奏付きワークショップあり。",
      target: "体幹と軸、足音のキレを極めたい全レベル",
      items: "レッスン着、シューズ",
      statusNote: "通常開講",
    },
    {
      dayKey: "sun",
      dayName: "日曜日",
      time: "11:00 - 12:30",
      className: "中級・上級クラス（総合）",
      level: "中級・上級",
      teacher: "池田 遥香",
      desc: "90分の充実レッスン。カンテ・ギターとの調和とソロ振付。",
      target: "本格志向・舞台出演経験者",
      items: "シューズ、ファルダ、マントン",
      statusNote: "通常開講",
    },
    {
      dayKey: "sun",
      dayName: "日曜日",
      time: "14:00 - 16:00",
      className: "スタジオ自主練習・レンタル枠",
      level: "会員限定",
      teacher: "スタッフ常駐",
      desc: "生徒の皆様が自主練習にご利用いただける開放時間帯。",
      target: "当スタジオ受講生（自主練習用）",
      items: "各自練習用アイテム",
      statusNote: "会員予約制",
    },
  ];

  // 曜日 & レベルの絞り込みフィルター（スライド8要件）
  const filteredTimetable = timetable.filter((item) => {
    const matchesDay = selectedDay === "all" || item.dayKey === selectedDay;
    const matchesLevel = selectedLevel === "all" || item.level === selectedLevel;
    return matchesDay && matchesLevel;
  });

  const pricingPlans = [
    {
      name: "月2回プラン",
      badge: "マイペースに通いたい方",
      isPopular: false,
      price: "¥7,500",
      period: "/月",
      desc: "忙しい社会人や遠方から通われる方に最適。無理なく続けられる隔週ペースです。",
      features: [
        "月2回のクラス受講（振替可能）",
        "入門・初級・テクニカから選択可能",
        "翌月への振替繰り越し対応",
        "シューズ・ファルダ預かりロッカー利用可（有料）",
      ],
    },
    {
      name: "月4回レギュラープラン",
      badge: "一番人気・おすすめ",
      isPopular: true,
      price: "¥13,000",
      period: "/月",
      desc: "週1回のレッスンで着実にステップアップ。身体にコンパスが染み渡る標準コース。",
      features: [
        "月4回のクラス受講（週1回ベース）",
        "急なお休みも同月・翌月に無料振替可能",
        "発表会（フィエスタ）への出演資格",
        "スタジオ個人練習レンタル 20%OFF",
      ],
    },
    {
      name: "フリーパス（受け放題）",
      badge: "本気で上達したい方",
      isPopular: false,
      price: "¥24,000",
      period: "/月",
      desc: "開講中の全通常クラス（入門・初級・中級・テクニカ）を回数無制限で受講可能。",
      features: [
        "対象クラスすべて受講し放題",
        "テクニカ集中クラスも受講可能",
        "月謝内で複数クラスの掛け持ち受講",
        "スタジオ個人練習レンタル 50%OFF",
      ],
    },
  ];

  const faqs = [
    {
      q: "急な仕事や体調不良でお休みした場合、振替レッスンは受けられますか？",
      a: "はい、可能です！受講開始1時間前までにスタジオLINEまたはシステムからご連絡いただければ、同月内または翌月末までの別曜日クラスに何回でもお振替いただけます（月謝回数の範囲内）。",
    },
    {
      q: "休会や退会、プランの変更はどうすればよいですか？",
      a: "前月の10日までに受付またはメール・LINEにてご連絡いただければ、翌月1日より休会（休会費¥1,000/月）または退会・プラン変更が可能です。違約金等は一切ございませんのでご安心ください。",
    },
    {
      q: "チケット制と月謝制の違いは何ですか？",
      a: "定期的に通える方は月謝制がお得（1回あたり単価が割安）です。シフト勤務や出張等で通う日程が不規則な方には、有効期限内ならいつでも使える「5回チケット（有効期限3ヶ月：¥17,500）」や「10回チケット（有効期限6ヶ月：¥33,000）」をおすすめしています。",
    },
    {
      q: "レッスン時のスタジオ利用マナーや持ち物について教えてください。",
      a: "スタジオ内は土足厳禁となっております。更衣室にてレッスンウェアにお着替えいただき、フラメンコシューズはスタジオフロアに入ってからお履き替えください。水分補給の飲料（蓋付きボトル）と汗拭きタオルをお持ちください。",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* ページタイトル */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          Schedule & Pricing
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          週間スケジュール・料金案内
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 max-w-xl mx-auto mb-6 leading-relaxed">
          ※本ページのスケジュール・料金体系はWebサイト制作ポートフォリオ用のサンプル設定です。
        </div>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          ライフスタイルに合わせて通いやすい柔軟なタイムテーブルと、明確で安心な料金体系。
          無理なく長く続けられる環境をご用意しています。
        </p>
      </section>

      {/* ========================================================= */}
      {/* P04-01 / スライド8: スマホ最適化カレンダーUI & 絞り込み機能 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#801336]/15">
          {/* ヘッダー部 & ビュー切り替え */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Timetable</span>
              <h2 className="font-serif-jp text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                レッスンスケジュール
              </h2>
            </div>

            {/* 表示モード切り替えタブ（インタラクティブ一覧 / Googleカレンダー同期） */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("interactive")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === "interactive"
                    ? "bg-[#801336] text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>リスト絞り込み</span>
              </button>
              <button
                onClick={() => setViewMode("google")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === "google"
                    ? "bg-[#801336] text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>月間カレンダー同期</span>
              </button>
            </div>
          </div>

          {/* 休講・代講アラートバー */}
          <div className="mb-6 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between gap-3 text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span><strong>【最新のお知らせ】</strong> 台風や祝日の休講・代講情報はリアルタイムに更新されます。</span>
            </div>
            <Link href="/news" className="underline font-bold shrink-0 hover:text-[#801336]">
              休講一覧を見る
            </Link>
          </div>

          {viewMode === "interactive" ? (
            <>
              {/* スライド8要件: 絞り込み検索機能（曜日 ＆ レベル） */}
              <div className="space-y-3 mb-6 bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200">
                {/* 曜日選択 */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <span className="text-[11px] font-bold text-gray-500 shrink-0 mr-1">曜日:</span>
                  {days.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDay(d.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider whitespace-nowrap transition-all ${
                        selectedDay === d.key
                          ? "bg-[#801336] text-white shadow"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                {/* レベル選択 */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <span className="text-[11px] font-bold text-gray-500 shrink-0 mr-1">レベル:</span>
                  {levels.map((lvl) => (
                    <button
                      key={lvl.key}
                      onClick={() => setSelectedLevel(lvl.key)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        selectedLevel === lvl.key
                          ? "bg-[#C5A059] text-white font-bold shadow"
                          : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* スライド8要件: ワンタップ即時表示対応タイムテーブル */}
              <div className="divide-y divide-gray-100">
                {filteredTimetable.length > 0 ? (
                  filteredTimetable.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setModalItem(item)}
                      className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF7F2] px-4 rounded-2xl transition cursor-pointer group border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="px-2.5 py-1 rounded bg-[#2B0A11] text-[#E8C888] font-bold text-xs shrink-0">
                          {item.dayName}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 shrink-0">
                          <Clock className="w-3.5 h-3.5 text-[#801336]" />
                          <span>{item.time}</span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            item.level === "入門"
                              ? "bg-green-100 text-green-800"
                              : item.level === "初級"
                              ? "bg-blue-100 text-blue-800"
                              : item.level === "中級・上級"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {item.level}
                        </span>
                      </div>

                      <div className="md:w-1/2">
                        <h3 className="font-serif-jp text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#801336] transition">
                          {item.className}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.desc}</p>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                        <span className="text-xs text-gray-600 font-medium">担当: {item.teacher}</span>
                        <span className="text-xs text-[#801336] font-bold group-hover:underline flex items-center gap-0.5">
                          詳細 <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-10 text-xs text-gray-500">
                    条件に一致するレッスンは見つかりませんでした。絞り込み条件を変更してください。
                  </p>
                )}
              </div>
            </>
          ) : (
            /* 外部連携仕様: Googleカレンダー / 月間・週間ビュー埋め込み */
            <div className="space-y-4">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div>
                  <p className="font-bold text-gray-900">Googleカレンダー / iCal 連携カレンダー</p>
                  <p className="text-gray-600">休講・代講・特別イベントなどのスケジュールをリアルタイムに確認できます。</p>
                </div>
                <a
                  href="https://calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 font-bold hover:bg-gray-50 transition flex items-center gap-1.5 shrink-0"
                >
                  <span>Googleカレンダーで開く</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* レスポンシブカレンダープレビュー枠 */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-gray-200 bg-white p-6 flex flex-col items-center justify-center text-center shadow-inner">
                <Calendar className="w-12 h-12 text-[#801336] mb-3" />
                <h3 className="font-serif-jp text-lg font-bold text-gray-900 mb-1">
                  Estudio Oloroso 公式カレンダー（月間ビュー）
                </h3>
                <p className="text-xs text-gray-500 max-w-md mb-4">
                  ※実際の運用時は Google Calendar API (v3) により、最新のレッスン日程・休講アラートがインタラクティブに同期表示されます。
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setViewMode("interactive")}
                    className="px-4 py-2 bg-[#801336] text-white text-xs font-bold rounded-lg shadow hover:bg-[#721B29] transition"
                  >
                    タイムテーブル一覧に戻る
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* スライド8要件: ワンタップ詳細ポップアップモーダル */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-200 relative space-y-5 animate-scaleUp">
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#2B0A11] text-[#E8C888] font-bold text-xs">
                  {modalItem.dayName}
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#801336]" />
                  {modalItem.time}
                </span>
              </div>
              <h3 className="font-serif-jp text-xl font-bold text-gray-900">{modalItem.className}</h3>
              <p className="text-xs text-gray-500 mt-1">担当講師: <strong>{modalItem.teacher}</strong></p>
            </div>

            <div className="space-y-3 bg-[#FAF7F2] p-4 rounded-2xl border border-gray-100 text-xs">
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700">対象レベル:</span>{" "}
                  <span className="text-gray-600">{modalItem.target || modalItem.level}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#721B29] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700">必要な持ち物:</span>{" "}
                  <span className="text-gray-600">{modalItem.items || "レッスン着、シューズ"}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700">開講ステータス:</span>{" "}
                  <span className="text-green-800 font-semibold">{modalItem.statusNote || "通常開講"}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed italic border-l-2 border-[#801336] pl-3">
              “{modalItem.desc}”
            </p>

            {modalItem.level === "会員限定" || modalItem.className.includes("自主練習") ? (
              <div className="pt-2 space-y-2.5">
                <a
                  href="https://airrsv.net/estudio-oloroso/calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#801336] hover:bg-[#721B29] text-white text-xs font-bold rounded-xl shadow transition flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>会員専用スタジオ予約サイトへ（空き状況確認・予約）</span>
                </a>
                <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                  ※当枠は在籍生徒専用の練習・レンタル枠です。一般の方の体験レッスン受講はできません。
                </p>
              </div>
            ) : (
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  onClick={() => setModalItem(null)}
                  className="w-full sm:w-1/2 py-3 bg-[#801336] hover:bg-[#721B29] text-white text-xs font-bold rounded-xl shadow transition text-center"
                >
                  このクラスで体験予約
                </Link>
                <a
                  href="https://line.me/R/ti/p/@estudio_oloroso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 bg-[#06C755] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow transition text-center"
                >
                  LINEで空き状況を質問
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* P04-02: 月謝・チケット料金体系表（カード型） */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Pricing Plans</span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2 mb-3">
            わかりやすい月謝・料金システム
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            すべてのプランは税込表記です。入会前の無理な勧誘等は一切ございません。
          </p>
        </div>

        {/* 初期費用案内バー */}
        <div className="max-w-3xl mx-auto mb-12 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500">基本初期費用</span>
            <p className="font-serif-jp text-base font-bold text-gray-900 mt-0.5">
              入会金: <span className="text-[#801336]">¥10,000</span>（税込）
            </p>
            <p className="text-[11px] text-gray-500">※体験レッスン当日入会で半額または無料特典あり！</p>
          </div>
          <div className="text-center sm:text-right">
            <span className="text-xs text-gray-500">はじめての方限定</span>
            <p className="font-serif-jp text-base font-bold text-[#801336] mt-0.5">
              体験レッスン: ¥2,000（税込）
            </p>
            <p className="text-[11px] text-green-700 font-bold">★ シューズ・ファルダ無料貸出付き</p>
          </div>
        </div>

        {/* カード型料金体系表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? "bg-white border-2 border-[#801336] shadow-2xl scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#801336] to-[#721B29] text-[#FAF7F2] text-xs font-bold px-4 py-1 rounded-full shadow tracking-wider uppercase">
                  POPULAR
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-[#801336] bg-[#801336]/10 px-3 py-1 rounded-full">
                  {plan.badge}
                </span>

                <h3 className="font-serif-jp text-xl font-bold text-gray-900 mt-4 mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 mb-6 min-h-[32px]">{plan.desc}</p>

                <div className="flex items-baseline gap-1 mb-6 border-b border-gray-100 pb-6">
                  <span className="text-3xl sm:text-4xl font-serif-jp font-bold text-[#801336]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold text-gray-700 block">プラン内容・特典:</span>
                  {plan.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider transition text-center block ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white shadow-md hover:shadow-lg"
                    : "bg-[#FAF7F2] text-[#801336] hover:bg-[#801336] hover:text-white border border-[#801336]/30"
                }`}
              >
                このプランで体験予約する
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* P04-03: 入会キャンペーン・割引特典 */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2B0A11] via-[#721B29] to-[#2B0A11] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-[#C5A059]/40">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#C5A059]/50 text-xs font-bold text-[#E8C888] mb-4">
              <Gift className="w-3.5 h-3.5" />
              <span>期間限定 入会キャンペーン</span>
            </div>
            <h3 className="font-serif-jp text-2xl sm:text-3xl font-bold mb-4">
              体験レッスン当日のご入会で
              <br />
              <span className="gold-shimmer">入会金が半額（¥5,000 OFF）</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/90 leading-relaxed mb-6">
              さらに、お友達やご家族と同時にご入会いただくと入会金が全額無料に！
              まずは手ぶらでスタジオの雰囲気を味わってみてください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E8C888] text-[#2B0A11] font-bold text-xs tracking-wider rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <span>特典を利用して体験予約</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P04-04: 受講システム・振替ルールFAQ */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">System FAQ</span>
          <h2 className="font-serif-jp text-2xl font-bold text-gray-900 mt-1 mb-2">
            受講システム・振替ルールについて
          </h2>
          <p className="text-xs text-gray-500">
            お休み時の振替や休会手続きなど、よくあるご質問をまとめました。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#801336]/10 text-[#801336] font-bold text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-gray-900">{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#801336]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-gray-100 flex items-start gap-3 bg-[#FAF7F2]/40">
                    <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#801336] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      A
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

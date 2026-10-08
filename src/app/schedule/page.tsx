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
} from "lucide-react";

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>("all");
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

  const timetable = [
    {
      dayKey: "tue",
      dayName: "火曜日",
      time: "11:00 - 12:00",
      className: "入門・基礎クラス（朝の部）",
      level: "入門",
      teacher: "池田 遥香",
      desc: "主婦層やフリーランスの方に人気。姿勢改善とセビジャーナス基礎。",
    },
    {
      dayKey: "tue",
      dayName: "火曜日",
      time: "19:00 - 20:15",
      className: "初級・振付クラス",
      level: "初級",
      teacher: "池田 遥香",
      desc: "お仕事帰りに。アレグリアスの振付とアバニコの扱い方。",
    },
    {
      dayKey: "wed",
      dayName: "水曜日",
      time: "18:30 - 19:45",
      className: "中級・上級クラス",
      level: "中級・上級",
      teacher: "池田 遥香",
      desc: "ソレア・ポル・ブレリア。生演奏を意識した重厚なコンパスの探求。",
    },
    {
      dayKey: "wed",
      dayName: "水曜日",
      time: "20:00 - 21:00",
      className: "テクニカ集中クラス",
      level: "全レベル",
      teacher: "池田 遥香",
      desc: "サパテアード（足打ち）の速射と体幹の強化。単発受講可。",
    },
    {
      dayKey: "thu",
      dayName: "木曜日",
      time: "14:00 - 15:00",
      className: "個人・プライベートレッスン枠",
      level: "個別",
      teacher: "池田 遥香",
      desc: "完全予約制。苦手克服や舞台前ソロ特訓に。",
    },
    {
      dayKey: "thu",
      dayName: "木曜日",
      time: "19:30 - 20:30",
      className: "入門・基礎クラス（夜の部）",
      level: "入門",
      teacher: "池田 遥香",
      desc: "平日夜の未経験者専用枠。シューズ無料レンタルで手ぶら受講OK。",
    },
    {
      dayKey: "fri",
      dayName: "金曜日",
      time: "19:00 - 20:15",
      className: "初級・振付クラス",
      level: "初級",
      teacher: "池田 遥香",
      desc: "週末前のリフレッシュ。タンゴ・デ・トリDefaultForwardと豊かな表現力。",
    },
    {
      dayKey: "sat",
      dayName: "土曜日",
      time: "10:30 - 11:30",
      className: "入門・基礎クラス（週末朝）",
      level: "入門",
      teacher: "池田 遥香",
      desc: "休日のスタートに。太陽の光が入るスタジオで気持ちよく身体を動かします。",
    },
    {
      dayKey: "sat",
      dayName: "土曜日",
      time: "12:00 - 13:15",
      className: "初級・振付クラス（週末昼）",
      level: "初級",
      teacher: "池田 遥香",
      desc: "1曲をじっくり通して踊り込む人気クラス。",
    },
    {
      dayKey: "sat",
      dayName: "土曜日",
      time: "14:00 - 15:00",
      className: "テクニカ集中クラス（週末）",
      level: "全レベル",
      teacher: "カルメン・サンチェス / 池田",
      desc: "足打ちと回転。月替わりで特別ゲスト講師の指導あり。",
    },
    {
      dayKey: "sun",
      dayName: "日曜日",
      time: "11:00 - 12:30",
      className: "中級・上級クラス（総合）",
      level: "中級・上級",
      teacher: "池田 遥香",
      desc: "90分の充実レッスン。カンテ・ギターとの調和とソロ振付。",
    },
    {
      dayKey: "sun",
      dayName: "日曜日",
      time: "14:00 - 16:00",
      className: "スタジオ自主練習・レンタル枠",
      level: "会員限定",
      teacher: "スタッフ常駐",
      desc: "生徒の皆様が自主練習にご利用いただける開放時間帯。",
    },
  ];

  const filteredTimetable =
    selectedDay === "all"
      ? timetable
      : timetable.filter((item) => item.dayKey === selectedDay);

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
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          ライフスタイルに合わせて通いやすい柔軟なタイムテーブルと、明確で安心な料金体系。
          無理なく長く続けられる環境をご用意しています。
        </p>
      </section>

      {/* ========================================================= */}
      {/* P04-01: 週間レッスンスケジュール表（曜日タブUI） */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#801336]/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Timetable</span>
              <h2 className="font-serif-jp text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                週間レッスンスケジュール
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#801336] bg-[#801336]/5 px-3 py-1.5 rounded-lg border border-[#801336]/15">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>祝日・第5週目の休講情報はお知らせページをご確認ください</span>
            </div>
          </div>

          {/* 曜日タブ切り替えボタン群 */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 border-b border-gray-100 scrollbar-none">
            {days.map((d) => (
              <button
                key={d.key}
                onClick={() => setSelectedDay(d.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all ${
                  selectedDay === d.key
                    ? "bg-[#801336] text-white shadow-md"
                    : "bg-[#FAF7F2] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* スケジュール一覧リスト */}
          <div className="divide-y divide-gray-100">
            {filteredTimetable.length > 0 ? (
              filteredTimetable.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF7F2]/60 px-3 rounded-xl transition"
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
                    <h3 className="font-serif-jp text-sm sm:text-base font-bold text-gray-900">
                      {item.className}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                    <span className="text-xs text-gray-600 font-medium">担当: {item.teacher}</span>
                    <Link
                      href="/contact"
                      className="px-3 py-1.5 bg-[#801336] hover:bg-[#721B29] text-white text-[11px] font-bold rounded shadow-sm transition"
                    >
                      体験予約
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-10 text-xs text-gray-500">該当する曜日のレッスンはありません。</p>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P04-02: 月謝・チケット料金体系表 */}
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
          <div className="border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-6 text-left">
            <span className="text-xs text-gray-500">体験レッスン料</span>
            <p className="font-serif-jp text-base font-bold text-gray-900 mt-0.5">
              1回 60分: <span className="text-[#C5A059]">¥2,000</span>（税込）
            </p>
            <p className="text-[11px] text-green-700 font-bold">シューズ・ファルダ無料レンタル付き</p>
          </div>
        </div>

        {/* 料金カード3連 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? "bg-gradient-to-b from-white via-white to-[#FAF7F2] shadow-2xl border-2 border-[#801336] -translate-y-2"
                  : "bg-white shadow-sm border border-gray-200 hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#801336] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                  MOST POPULAR
                </div>
              )}

              <div>
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                  {plan.badge}
                </span>
                <h3 className="font-serif-jp text-xl font-bold text-gray-900 mt-1 mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">{plan.desc}</p>

                <div className="flex items-baseline gap-1 pb-6 mb-6 border-b border-gray-100">
                  <span className="font-serif-jp text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-xs text-gray-500">{plan.period}（税込）</span>
                </div>

                <ul className="space-y-3 text-xs text-gray-600 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/contact"
                  className={`w-full py-3 block text-center rounded-xl text-xs font-bold transition shadow-sm ${
                    plan.isPopular
                      ? "bg-[#801336] hover:bg-[#721B29] text-white"
                      : "bg-[#FAF7F2] hover:bg-gray-200 text-gray-900 border border-gray-200"
                  }`}
                >
                  体験レッスンで相談する
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* チケット制・プライベート料金表 */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
          <h3 className="font-serif-jp text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            チケット制・ビジター・個人レッスン料金
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="bg-[#FAF7F2] p-4 rounded-xl">
              <span className="text-gray-500">5回チケット（有効期限3ヶ月）</span>
              <p className="font-serif-jp text-lg font-bold text-gray-900 mt-1">¥17,500</p>
              <p className="text-[10px] text-gray-500 mt-1">1回あたり ¥3,500（税込）</p>
            </div>
            <div className="bg-[#FAF7F2] p-4 rounded-xl">
              <span className="text-gray-500">10回チケット（有効期限6ヶ月）</span>
              <p className="font-serif-jp text-lg font-bold text-gray-900 mt-1">¥33,000</p>
              <p className="text-[10px] text-gray-500 mt-1">1回あたり ¥3,300（税込）</p>
            </div>
            <div className="bg-[#FAF7F2] p-4 rounded-xl">
              <span className="text-gray-500">個人レッスン（60分・完全個別）</span>
              <p className="font-serif-jp text-lg font-bold text-gray-900 mt-1">¥9,000</p>
              <p className="text-[10px] text-gray-500 mt-1">スタジオ使用料込み・日時自由設定</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P04-03: 入会キャンペーン・割引特典 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#C5A059] to-[#E8C888] rounded-3xl p-8 sm:p-12 text-[#2B0A11] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#2B0A11] text-[#E8C888] px-3.5 py-1 rounded-full text-xs font-bold">
                <Gift className="w-3.5 h-3.5" />
                <span>期間限定 入会特典キャンペーン</span>
              </div>
              <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold leading-tight">
                体験レッスン当日入会で
                <br />
                入会金 ¥10,000 が【全額無料】に！
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                体験レッスン受講当日にレギュラー月謝プランへご入会いただいた場合、通常10,000円の入会金を全額免除いたします。さらに、お友達やご家族とペアでのご入会で、レッスンチケット1回分を双方にプレゼント！
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center">
              <Link
                href="/contact"
                className="w-full py-4 px-6 bg-[#2B0A11] hover:bg-[#1A060A] text-white font-bold text-xs tracking-wider rounded-xl shadow-lg text-center transition hover:scale-105"
              >
                キャンペーン特典で体験予約
              </Link>
              <p className="text-[11px] mt-2 opacity-80 text-center">※今月末までの期間限定特典</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P04-04: 受講システム・振替ルールFAQ（開閉式アコーディオン） */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">FAQ & Rules</span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">
            受講システム・振替ルールよくある質問
          </h2>
          <p className="text-xs text-gray-600">
            お仕事やご家庭の都合で通いやすいよう、柔軟な振替制度を設けています。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:text-[#801336]"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#801336] shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                    openFaq === idx ? "rotate-180 text-[#801336]" : ""
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FAF7F2]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Clock, Target, Users, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "クラス案内・レッスンカリキュラム",
  description:
    "入門・初心者からプロ志向・テクニカ強化まで。Luna de Jerez（ルナ・デ・ヘレス）のレベル別フラメンコクラス体系とカリキュラム詳細をご案内します。",
};

export default function ClassesPage() {
  const classes = [
    {
      id: "beginner",
      levelNumber: "01",
      badge: "未経験・初心者",
      title: "入門・基礎クラス",
      tagline: "はじめてのフラメンコ — 身体の使い方とセビジャーナス習得",
      image: "/images/class-beginner.jpg",
      target: "フラメンコをまったく初めて学ぶ方、運動経験のない方",
      goal: "正しい基本姿勢、ブラソ（腕）の運び、セビジャーナス全4番のマスター",
      items: "動きやすい服装、靴下（※シューズ・ファルダはスタジオで無料貸出）",
      message:
        "フラメンコは大地に足をつけ、自分自身と呼吸を合わせることから始まります。鏡の前で背筋を伸ばすだけで、日常を忘れる特別な時間が始まります。リズムに乗る心地よさをぜひ感じてください。",
      duration: "60分 / 回（月2回〜4回）",
      canTrial: true,
    },
    {
      id: "intermediate",
      levelNumber: "02",
      badge: "経験1年〜",
      title: "初級・振付クラス",
      tagline: "表現力を磨く — 1曲を通した情熱とリズムの探求",
      image: "/images/class-choreography.jpg",
      target: "入門クラスを修了した方、または1年以上の基礎経験がある方",
      goal: "アレグリアス、タンゴ、ブレリアスなど代表曲種の振付習得と感情表現",
      items: "フラメンコシューズ、ファルダ、アバニコ（扇子）等の小物",
      message:
        "基礎ができるようになると、踊る歓びは何倍にも膨らみます。ギターや歌の盛り上がりに合わせて身体を躍動させ、自分だけの表現を紡ぎ出していきましょう。",
      duration: "75分 / 回（月4回）",
      canTrial: true,
    },
    {
      id: "advanced",
      levelNumber: "03",
      badge: "経験3年〜",
      title: "中級・上級クラス",
      tagline: "深遠なる曲種への挑戦 — 生演奏との対話と即興性",
      image: "/images/concept.jpg",
      target: "フラメンコ歴3年以上、または舞台経験をお持ちの方",
      goal: "ソレア、タラント、シギリジャなどの重厚な曲種、カンテやギターへの即興的反応力",
      items: "フラメンコシューズ、ファルダ、カスタネット、マントン（大判ショール）",
      message:
        "フラメンコの核心である「コンパスの呼吸」と「ヌエベ（感情の爆発）」。形を追う段階を越えて、自分自身の魂を観客に届ける真のバイラオーラ（踊り手）を目指します。",
      duration: "90分 / 回（月4回）",
      canTrial: true,
    },
    {
      id: "technique",
      levelNumber: "04",
      badge: "全レベル対象",
      title: "テクニカ集中クラス",
      tagline: "技を研ぎ澄ます — サパテアードと回転軸の徹底強化",
      image: "/images/class-technica.jpg",
      target: "足打ちのスピード・音色を向上させたい方、軸のブレを解消したい全レベル",
      goal: "力みのない高速サパテアード、身体の解剖学に基づいた体幹強化、安定したピルエット",
      items: "レッスン着、シューズ",
      message:
        "無駄な力みを捨て、床の反発を骨で捉える。身体の仕組みを理解することで、怪我をせずに美しい足音を響かせられるようになります。他教室に通われている方の受講も大歓迎です。",
      duration: "60分 / 回（単発チケット受講可）",
      canTrial: true,
    },
    {
      id: "private",
      levelNumber: "05",
      badge: "完全予約制",
      title: "個人・セミプライベートレッスン",
      tagline: "完全オーダーメイド — 短期集中・舞台前ソロ指導",
      image: "/images/about-studio.jpg",
      target: "多忙で定期通学が難しい方、発表会やコンクール前のソロ特訓、苦手箇所の克服",
      goal: "受講生一人ひとりの目的とペースに最適化した完全マンツーマン指導",
      items: "ご相談内容に応じたアイテム",
      message:
        "あなたの身体の癖や目標に1対1で向き合います。動画でのフィードバックも行い、最短距離での上達をお約束します。",
      duration: "60分〜90分 / 回（日時自由調整）",
      canTrial: false,
    },
  ];

  return (
    <div className="space-y-20 py-12 md:py-20">
      {/* ページタイトル */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          Curriculum & Levels
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          クラス案内・レッスン体系
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          未経験からプロ志向まで、無理なく確実にステップアップ。
          あなたの目的やライフスタイルに合わせて選べる豊富なクラスをご用意しています。
        </p>
      </section>

      {/* ========================================================= */}
      {/* P03-01: レベル別クラス体系マップ */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#801336]/15">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Step-up Flow</span>
            <h2 className="font-serif-jp text-xl sm:text-2xl font-bold text-gray-900 mt-1">
              ステップアップチャート
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              現在の経験に合わせて最適なクラスをお選びいただけます。迷った時は講師が丁寧にご案内します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-amber-200 text-center relative flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#801336] bg-[#801336]/10 px-2 py-0.5 rounded-full uppercase">
                  STEP 1
                </span>
                <h3 className="font-serif-jp font-bold text-base text-gray-900 mt-2">入門・基礎</h3>
                <p className="text-xs text-[#801336] font-medium mt-1">未経験 〜 1年</p>
                <p className="text-[11px] text-gray-600 mt-2">姿勢・ブラソ・セビジャーナスでフラメンコの基礎を構築</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-[10px] text-gray-500">週2開講</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-amber-200 text-center relative flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#721B29] bg-[#721B29]/10 px-2 py-0.5 rounded-full uppercase">
                  STEP 2
                </span>
                <h3 className="font-serif-jp font-bold text-base text-gray-900 mt-2">初級・振付</h3>
                <p className="text-xs text-[#721B29] font-medium mt-1">経験 1年 〜 3年</p>
                <p className="text-[11px] text-gray-600 mt-2">アレグリアス等の名曲に挑戦。表現力とアバニコ技術の習得</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-[10px] text-gray-500">週3開講</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-amber-200 text-center relative flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#2B0A11] bg-[#2B0A11]/10 px-2 py-0.5 rounded-full uppercase">
                  STEP 3
                </span>
                <h3 className="font-serif-jp font-bold text-base text-gray-900 mt-2">中級・上級</h3>
                <p className="text-xs text-[#2B0A11] font-medium mt-1">経験 3年以上</p>
                <p className="text-[11px] text-gray-600 mt-2">ソレアやシギリジャ等の深遠な曲種。生演奏との即興的掛け合い</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-[10px] text-gray-500">週2開講</span>
              </div>
            </div>

            {/* Parallel Special: テクニカ & 個人 */}
            <div className="bg-gradient-to-br from-[#801336]/10 to-[#C5A059]/10 p-5 rounded-xl border border-[#C5A059]/50 text-center flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#C5A059] bg-[#C5A059]/20 px-2 py-0.5 rounded-full uppercase">
                  SPECIAL
                </span>
                <h3 className="font-serif-jp font-bold text-base text-gray-900 mt-2">テクニカ / 個人</h3>
                <p className="text-xs text-[#C5A059] font-medium mt-1">全レベル並行受講可</p>
                <p className="text-[11px] text-gray-600 mt-2">足音の強化・軸の安定・マンツーマンの弱点集中克服</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-[10px] text-gray-500">チケット制 / 予約制</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P03-02 〜 P03-04: 各クラス詳細仕様カード */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {classes.map((cls) => (
          <div
            key={cls.id}
            id={cls.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#801336]/15 grid grid-cols-1 lg:grid-cols-12 scroll-mt-28"
          >
            {/* クラス写真 */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <Image src={cls.image} alt={cls.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-[#801336] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {cls.badge}
              </div>
            </div>

            {/* クラス詳細仕様 */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#C5A059] tracking-widest uppercase">
                    CLASS {cls.levelNumber}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#801336]" /> {cls.duration}
                  </span>
                </div>

                <h2 className="font-serif-jp text-2xl font-bold text-gray-900 mb-2">{cls.title}</h2>
                <p className="text-xs sm:text-sm font-semibold text-[#801336] mb-6">{cls.tagline}</p>

                {/* 仕様リスト */}
                <div className="space-y-3 bg-[#FAF7F2] p-4 rounded-xl text-xs mb-6 border border-gray-100">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-700">対象者:</span>{" "}
                      <span className="text-gray-600">{cls.target}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-700">到達目標:</span>{" "}
                      <span className="text-gray-600">{cls.goal}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-[#721B29] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-700">必要な持ち物:</span>{" "}
                      <span className="text-gray-600">{cls.items}</span>
                    </div>
                  </div>
                </div>

                {/* 講師からのメッセージ */}
                <blockquote className="text-xs text-gray-600 italic border-l-2 border-[#801336] pl-3 leading-relaxed">
                  “{cls.message}”
                </blockquote>
              </div>

              {/* クラス直下CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/schedule"
                  className="text-xs text-gray-600 hover:text-[#801336] flex items-center gap-1"
                >
                  開講曜日・タイムテーブルを確認 <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {cls.canTrial && (
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white text-xs font-bold rounded-lg shadow transition text-center"
                  >
                    このクラスで体験レッスンを予約
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* クラス選び相談バナー */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#FAF7F2] p-8 rounded-2xl border border-gray-200">
        <h3 className="font-serif-jp text-lg font-bold text-gray-900 mb-2">
          どのクラスを選べば良いか迷っている方へ
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
          これまでのダンス経験や体力、生活リズムに合わせて、講師が最適な受講プランをご提案いたします。お電話や公式LINEからお気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://line.me/R/ti/p/@lunadejerez"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#06C755] text-white font-bold text-xs rounded-lg shadow hover:opacity-95 transition"
          >
            LINEでクラス選びを相談する
          </a>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#801336] text-white font-bold text-xs rounded-lg shadow hover:bg-[#721B29] transition"
          >
            Webお問い合わせフォーム
          </Link>
        </div>
      </section>
    </div>
  );
}

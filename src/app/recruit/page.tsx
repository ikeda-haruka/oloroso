import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Calendar,
  MessageCircle,
  ArrowRight,
  Briefcase,
  Gift,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報（受付事務スタッフ募集） | Estudio Oloroso",
  description:
    "Estudio Oloroso（エストゥディオ・オロロソ）のスタジオ受付事務・運営アシスタント採用情報。生徒様が安心して通える上質な空間を支えるスタッフを募集しています。未経験歓迎、スタジオ無料利用特典あり。",
};

export default function RecruitPage() {
  const jobDetails = [
    {
      title: "受付・フロント接客",
      desc: "生徒の皆様の笑顔でのお出迎え・お見送り、体験レッスン受講生の案内、入会手続きやお月謝のご案内を担当します。",
      icon: Users,
    },
    {
      title: "スタジオ運営・自主練習枠の管理",
      desc: "レッスン合間や自主練習・スタジオレンタル枠の開錠・施錠、受付確認、フロアの清潔維持やレンタルシューズ・備品の管理を行います。",
      icon: ShieldCheck,
    },
    {
      title: "事務サポート・受講生窓口",
      desc: "公式LINEやメール・お電話でのお問い合わせ一次対応、休講・代講スケジュールの掲示、簡単な受講管理データ入力を担当します。",
      icon: Clock,
    },
    {
      title: "イベント・発表会サポート",
      desc: "年1回の発表会（フィエスタ）や特別ワークショップの際、会場受付や当日の進行サポートなどスタジオの晴れ舞台を支えます。",
      icon: Sparkles,
    },
  ];

  const benefits = [
    {
      badge: "Benefit 01",
      title: "スタジオ無料利用制度",
      desc: "空き時間帯にはスタジオを無料で個人利用可能。自主練習やヨガ・ストレッチなどのリフレッシュにも活用いただけます。",
    },
    {
      badge: "Benefit 02",
      title: "レッスン社員割引",
      desc: "「自分もフラメンコを踊ってみたい」という方は、スタジオ開講の通常クラスを特別優待価格で受講できます（未経験大歓迎）。",
    },
    {
      badge: "Benefit 03",
      title: "週2日・1日4h〜OK",
      desc: "平日夜や土日を中心に、ご自身のライフスタイルに合わせたシフト調整が可能です。Wワークや学業との両立も応援します。",
    },
    {
      badge: "Benefit 04",
      title: "落ち着いた温かな環境",
      desc: "大人の受講生が集まるアットホームで品のあるフラメンコ教室です。ノルマ等は一切なく、生徒様と心を通わせる接客ができます。",
    },
  ];

  const requirements = [
    { label: "募集職種", value: "スタジオ受付・運営事務スタッフ（アルバイト / パート）" },
    { label: "雇用形態", value: "アルバイト・パート（※正社員登用制度あり）" },
    {
      label: "給与",
      value: "時給 1,300円 〜 1,600円（※経験・能力・シフト貢献度を考慮し決定 / 昇給随時 / 交通費全額支給）",
    },
    {
      label: "勤務地",
      value: "東京都目黒区（東急東横線・東京メトロ日比谷線「中目黒駅」南改札より徒歩4分 ※架空設定）",
    },
    {
      label: "勤務時間",
      value:
        "シフト制（平日 10:30〜21:30、土日 09:30〜18:30 のうち実働4〜8時間 / 週2日〜OK）\n※特に平日夜（18:00〜）や土日のシフトに入れる方を歓迎いたします。",
    },
    {
      label: "応募資格",
      value:
        "・明るく丁寧な挨拶・コミュニケーションができる方\n・基本的なPC/スマートフォン操作（LINE対応、簡単な文字入力）ができる方\n・ダンスや音楽、スペイン文化、舞台芸術に興味をお持ちの方（フラメンコ経験は不問・未経験大歓迎）\n・接客・受付事務の経験がある方歓迎（未経験の方も丁寧に研修します）",
    },
    {
      label: "待遇・福利厚生",
      value:
        "・交通費全額支給\n・スタジオ無料利用特典（空き時間帯）\n・フラメンコレッスン社員割引受講制度\n・エプロン・ユニフォーム貸与\n・正社員登用制度あり",
    },
    {
      label: "試用期間",
      value: "試用期間3ヶ月（条件・給与に変更なし）",
    },
  ];

  const selectionFlow = [
    {
      step: "01",
      title: "WebまたはLINEでエントリー",
      desc: "お問い合わせフォームまたは公式LINEより、お名前とご連絡先、簡単な志望動機をお送りください。",
    },
    {
      step: "02",
      title: "書類選考・日程調整",
      desc: "ご応募内容を確認の上、3営業日以内に面接日程のご連絡を差し上げます。",
    },
    {
      step: "03",
      title: "スタジオ面接（1回）",
      desc: "スタジオの雰囲気をご覧いただきながら、希望のシフトやこれまでのご経験について気軽にお話しします。",
    },
    {
      step: "04",
      title: "採用内定・研修スタート",
      desc: "合否のご連絡後、ご希望の開始日に合わせて丁寧な引き継ぎ・受付研修を開始します。",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* ページタイトルヘッダー */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          Recruitment & Careers
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          スタジオ受付事務スタッフ 採用情報
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />

        {/* ポートフォリオ用架空サイト免責バナー */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 max-w-2xl mx-auto mb-6 leading-relaxed">
          <p className="font-bold mb-1">【ポートフォリオ作品用の架空求人情報です】</p>
          当サイトはWeb制作実績用の架空のフラメンコスタジオサイトのため、実際の求人募集・採用選考は行っておりません。受付常駐機能やスクール運営体制の設計サンプルとして掲載しております。
        </div>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          生徒の皆様が安心して情熱的に踊りに打ち込める、温かく心地よいスタジオ環境。
          Estudio Olorosoの“顔”として、スタジオ運営を支えてくださるスタッフを募集しています。
        </p>
      </section>

      {/* ========================================================= */}
      {/* メッセージセクション: スタッフ常駐へのこだわり */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#801336]/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#801336]/10 text-[#801336] rounded-full text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>安心・安全の常駐体制</span>
            </div>
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
              生徒様がレッスンと自主練習に
              <br />
              心から集中できる空間のために
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Estudio Olorosoでは、講師がレッスンに専念できるだけでなく、受講生の皆様がいつでも安心して通えるよう、スタジオに専任の受付事務スタッフが常駐する体制を大切にしています。
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              初めて体験レッスンに来られる方の緊張をほぐす優しいお出迎え、自主練習枠やスタジオレンタルのスムーズな受付、清潔で心地よいフロアの維持管理など、スタッフの細やかな心遣いがスタジオの温かいコミュニティを育んでいます。
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-[#801336]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-700" /> 未経験スタート歓迎
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-700" /> 週2日・シフト柔軟
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF7F2]">
              <Image
                src="/images/about-studio.jpg"
                alt="スタジオ受付・レッスン空間"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2B0A11] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#C5A059]/40 hidden sm:block">
              <p className="text-[11px] text-[#E8C888] font-bold tracking-widest uppercase mb-1">Our Studio Culture</p>
              <p className="text-xs leading-relaxed text-[#FAF7F2]/90">
                「お疲れ様でした！」の笑顔が飛び交う、あたたかな居場所を一緒につくりましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 主な業務内容 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Job Responsibilities</span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-2">
            主なお仕事内容
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            先輩スタッフが丁寧にフォローしますので、ダンス経験や受付経験がない方もご安心ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobDetails.map((job, idx) => {
            const Icon = job.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between hover:border-[#801336]/40 transition group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#801336]/10 text-[#801336] flex items-center justify-center mb-4 group-hover:bg-[#801336] group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-jp text-base font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{job.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 働く魅力・福利厚生 */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-[#FAF7F2] to-[#F3ECE4] py-20 border-y border-[#801336]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Benefits</span>
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-2">
              スタッフ限定の福利厚生・魅力
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              踊ることが好きな方、心地よいワークライフバランスを叶えたい方に嬉しい環境です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#801336] tracking-wider uppercase block mb-1">
                    {b.badge}
                  </span>
                  <h3 className="font-serif-jp text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 募集要項テーブル */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Outline</span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-2">
            募集要項
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            ご不明な点はお気軽にお問い合わせフォームまたは公式LINEよりご相談ください。
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
          {requirements.map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6">
              <div className="sm:col-span-3 font-bold text-xs sm:text-sm text-gray-900">
                {item.label}
              </div>
              <div className="sm:col-span-9 text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 応募・選考フロー */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">Selection Flow</span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-2">
            ご応募から採用までの流れ
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            エントリーから内定までは約1〜2週間程度を予定しています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectionFlow.map((flow, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-6 rounded-2xl border border-gray-200 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-serif-jp font-bold text-[#801336] block mb-2">
                  STEP {flow.step}
                </span>
                <h3 className="font-serif-jp text-sm sm:text-base font-bold text-gray-900 mb-2">
                  {flow.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{flow.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 応募アクションCTA */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2B0A11] via-[#721B29] to-[#2B0A11] rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center relative overflow-hidden border border-[#C5A059]/40">
          <span className="text-xs font-bold text-[#E8C888] tracking-widest uppercase block mb-2">
            Apply Now
          </span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold mb-4">
            あなたのご応募を心よりお待ちしております
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/90 max-w-xl mx-auto mb-8 leading-relaxed">
            「スタジオの雰囲気を見てみたい」「シフトの相談をしたい」など、まずはお気軽にご連絡ください。
            <br />
            <span className="text-[11px] text-[#E8C888] font-bold">
              ※当サイトはポートフォリオ用の架空サイトです。応募フォーム送信はデモ動作となります。
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=recruit"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E8C888] text-[#2B0A11] font-bold text-xs tracking-wider rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Webエントリーフォームへ進む</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://line.me/R/ti/p/@estudio_oloroso"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#06C755] hover:opacity-95 text-white font-bold text-xs tracking-wider rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>公式LINEから応募・相談する</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

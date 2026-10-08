import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ShieldCheck,
  Heart,
  Star,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { getAllNews, getAllBlogPosts } from "@/lib/content";

export default function Home() {
  const newsList = getAllNews().slice(0, 3);
  const blogList = getAllBlogPosts().slice(0, 3);

  return (
    <div className="space-y-20 md:space-y-32">
      {/* ========================================================= */}
      {/* P01-01: ファーストビュー (FV) / ヒーローエリア */}
      {/* ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#2B0A11]">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Estudio Oloroso フラメンコ舞踊"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* オーバーレイグラデーション: 深みのあるワインレッド */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B0A11]/90 via-[#721B29]/75 to-[#2B0A11]/85 backdrop-brightness-95" />
          {/* 繊細な装飾ノイズ / メッシュ */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* ヒーローコンテンツ */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#C5A059]/40 backdrop-blur-md mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-[#E8C888]" />
            <span className="text-xs sm:text-sm tracking-widest text-[#FAF7F2] font-medium">
              ESTUDIO DE BAILE FLAMENCO
            </span>
          </div>

          <h1 className="font-serif-jp text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight sm:leading-tight mb-6 text-white drop-shadow-md">
            魂が躍動する、
            <br />
            <span className="gold-shimmer">アンダルシアの鼓動</span>をこの街で。
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#FAF7F2]/90 leading-relaxed font-light mb-10">
            スペイン・ヘレス直伝の情熱とエレガンス。
            <br className="hidden sm:inline" />
            足腰に優しい特注無垢フロアで、未経験から一生モノの輝きを。
          </p>

          {/* CTAボタン群 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#E8C888] hover:from-[#B8924B] hover:to-[#D8B26B] text-[#2B0A11] font-bold text-sm tracking-wider rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              <span>無料体験レッスンを予約する</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/classes"
              className="w-full sm:w-auto px-7 py-4 bg-[#FAF7F2]/15 hover:bg-[#FAF7F2]/25 text-white border border-[#FAF7F2]/30 font-medium text-sm tracking-wider rounded-lg backdrop-blur-sm transition-all"
            >
              クラスカリキュラムを見る
            </Link>
          </div>

          {/* スライド5要件: 既存受講生向け「今月のスケジュール」および「会員ログイン」へのクイックリンクボタン */}
          <div className="pt-6 border-t border-[#FAF7F2]/20 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="text-[#FAF7F2]/70 text-[11px] font-bold tracking-wider uppercase mr-1">
              受講生専用:
            </span>
            <Link
              href="/schedule"
              className="px-3.5 py-1.5 bg-[#FAF7F2]/15 hover:bg-[#FAF7F2]/25 text-[#E8C888] font-bold rounded-lg border border-[#C5A059]/40 backdrop-blur-sm transition flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8C888]" />
              <span>今月のスケジュール</span>
            </Link>
            <Link
              href="/news"
              className="px-3.5 py-1.5 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] rounded-lg border border-white/20 backdrop-blur-sm transition flex items-center gap-1"
            >
              <span>休講・代講案内</span>
            </Link>
            <Link
              href="/admin/"
              className="px-3 py-1.5 bg-black/30 hover:bg-black/50 text-[#FAF7F2]/80 hover:text-white rounded-lg border border-white/10 transition flex items-center gap-1 text-[11px]"
              title="Decap CMS 管理画面（お知らせ・ブログの編集）"
            >
              <span>会員・CMSログイン</span>
            </Link>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#FAF7F2]/60 text-[10px] tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C5A059] to-transparent mt-1 animate-pulse" />
        </div>
      </section>

      {/* ========================================================= */}
      {/* P01-02: イントロダクション（スタジオの想い） */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左側画像 */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] outline outline-1 outline-[#801336]/20">
              <Image
                src="/images/concept.jpg"
                alt="フラメンコの情熱とエレガンス"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0A11]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs tracking-widest text-[#E8C888] uppercase mb-1">Tradition & Elegance</p>
                <p className="font-serif-jp text-lg font-bold">ヘレスの魂が、あなたの日常を美しく染め上げる</p>
              </div>
            </div>
            {/* 装飾アクセント */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 bg-[#801336]/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* 右側テキスト */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block border-l-4 border-[#801336] pl-3">
              <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                Studio Concept
              </span>
              <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                洗練された情熱
                <span className="block text-sm sm:text-base font-normal text-[#721B29] mt-1">
                  Sophisticated Passion
                </span>
              </h2>
            </div>

            <p className="text-[#1C1917]/80 text-sm sm:text-base leading-relaxed">
              フラメンコの聖地、スペイン・アンダルシア地方の「ヘレス・デ・ラ・フロンテーラ」。
              乾いた風とシェリー酒の香り、そして人々の魂から湧き出る生きたリズムが息づくこの街で培われた本物のフラメンコを、ここ東京・中目黒でお伝えしています。
            </p>
            <p className="text-[#1C1917]/80 text-sm sm:text-base leading-relaxed">
              フラメンコは単なるダンスではありません。喜怒哀楽、人生のあらゆる感情を身体とサパテアード（足拍子）で大地に刻み込む、究極の自己表現です。
              年齢や運動神経に関係なく、基礎からじっくりと身体の使い方を学ぶことで、どなたでも優雅で凛とした踊り手へと変わることができます。
            </p>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#801336] hover:text-[#721B29] transition group"
              >
                <span>スタジオ理念と主宰プロフィールを見る</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P01-03: クラス紹介ハイライト（3つの特徴） */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE4] to-[#FAF7F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
              Classes & Curriculum
            </span>
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2 mb-4">
              目的に合わせた3つの柱
            </h2>
            <p className="text-sm text-[#1C1917]/70">
              初めてフラメンコに触れる方から、本格的な曲種の探求、サパテアードの強化まで。
              一人ひとりの成長に寄り添う丁寧なクラス編成です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* カード1: 入門クラス */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#801336]/10 flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/class-beginner.jpg"
                  alt="はじめてのフラメンコ 入門クラス"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#801336] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  未経験者歓迎
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-[#C5A059] tracking-wider uppercase">LEVEL 01</span>
                <h3 className="font-serif-jp text-lg font-bold text-[#1C1917] mt-1 mb-2">
                  はじめてのフラメンコ（基礎）
                </h3>
                <p className="text-xs text-[#1C1917]/70 leading-relaxed mb-6 flex-grow">
                  美しい姿勢、腕の使い方（ブラソ）、基本の足さばきを無理なく習得。お祭りで踊られる人気曲「セビジャーナス」を1年かけてマスターします。
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">週2開講 / 60分</span>
                  <Link
                    href="/classes#beginner"
                    className="text-xs font-bold text-[#801336] flex items-center gap-1 group-hover:underline"
                  >
                    詳細を見る <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* カード2: 初級・振付クラス */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#801336]/10 flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/class-choreography.jpg"
                  alt="表現力を磨く 初級振付クラス"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#721B29] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  ステップアップ
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-[#C5A059] tracking-wider uppercase">LEVEL 02</span>
                <h3 className="font-serif-jp text-lg font-bold text-[#1C1917] mt-1 mb-2">
                  表現力を磨く（初級・振付）
                </h3>
                <p className="text-xs text-[#1C1917]/70 leading-relaxed mb-6 flex-grow">
                  アレグリアスやソレアなど本格的な曲種に挑戦。扇子（アバニコ）などの小物使いや、ギター・歌（カンテ）の呼吸に合わせた表現力を深めます。
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">週3開講 / 75分</span>
                  <Link
                    href="/classes#intermediate"
                    className="text-xs font-bold text-[#801336] flex items-center gap-1 group-hover:underline"
                  >
                    詳細を見る <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* カード3: テクニカ集中 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#801336]/10 flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/class-technica.jpg"
                  alt="身体を研ぎ澄ます テクニカ集中クラス"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#2B0A11] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  全レベル対象
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-[#C5A059] tracking-wider uppercase">LEVEL 03</span>
                <h3 className="font-serif-jp text-lg font-bold text-[#1C1917] mt-1 mb-2">
                  技を極める（テクニカ集中）
                </h3>
                <p className="text-xs text-[#1C1917]/70 leading-relaxed mb-6 flex-grow">
                  サパテアード（足打ち）の明瞭さとスピード、体幹の安定、回転の軸を徹底的に鍛える特化クラス。他教室に通われている方の受講も歓迎です。
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">週2開講 / 60分</span>
                  <Link
                    href="/classes#technique"
                    className="text-xs font-bold text-[#801336] flex items-center gap-1 group-hover:underline"
                  >
                    詳細を見る <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-[#801336] text-[#801336] font-semibold text-xs tracking-wider rounded-lg shadow-sm hover:bg-[#801336] hover:text-white transition-all"
            >
              <span>クラス一覧・料金システムをすべて見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P01-04: 体験レッスン案内・特典バナー */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#801336] via-[#721B29] to-[#2B0A11] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* 背景の幾何学パターン装飾 */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FAF7F2]/15 px-3.5 py-1 rounded-full text-xs font-semibold text-[#E8C888] border border-[#E8C888]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>手ぶらで参加OK！未経験者限定キャンペーン</span>
              </div>

              <h2 className="font-serif-jp text-2xl sm:text-4xl font-bold leading-tight">
                まずは一度、靴を履いて
                <br />
                大地の響きを体感してみませんか？
              </h2>

              <p className="text-xs sm:text-sm text-[#FAF7F2]/90 leading-relaxed max-w-2xl">
                「ダンス経験が全くない」「リズム感に自信がない」という方でも大丈夫。
                専用シューズと練習用スカート（ファルダ）は無料レンタル。少人数制で講師が足の動かし方から親身にサポートします。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E8C888] shrink-0" />
                  <span>シューズ・スカート無料貸出</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E8C888] shrink-0" />
                  <span>当日入会で入会金50%OFF</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E8C888] shrink-0" />
                  <span>少人数アットホームレッスン</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
              <div className="text-center">
                <span className="text-xs text-[#E8C888]">体験レッスン参加費</span>
                <div className="text-3xl font-bold font-serif-jp text-white my-1">
                  ¥2,000 <span className="text-xs font-normal text-gray-300">（税込）</span>
                </div>
                <p className="text-[11px] text-[#FAF7F2]/80">※当日入会で全額キャッシュバック！</p>
              </div>

              <Link
                href="/contact"
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#C5A059] to-[#E8C888] hover:from-[#B8924B] hover:to-[#D8B26B] text-[#2B0A11] font-bold text-center text-xs tracking-wider rounded-lg shadow-lg hover:scale-105 transition-all"
              >
                体験レッスンを予約する
              </Link>
              <a
                href="https://line.me/R/ti/p/@estudio_oloroso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#FAF7F2]/80 hover:text-white underline flex items-center gap-1"
              >
                公式LINEからも24時間予約受付中
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P01-05: インフォメーションハブ（News・SNS・口コミ） */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 左側: 最新のお知らせ & ブログ記事 (8カラム) */}
          <div className="lg:col-span-7 space-y-8">
            {/* お知らせ */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-[#801336]/20 pb-2">
                <h3 className="font-serif-jp text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#801336]"></span>
                  スタジオ最新お知らせ
                </h3>
                <Link href="/news" className="text-xs text-[#801336] hover:underline flex items-center gap-0.5">
                  一覧を見る <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="divide-y divide-gray-200">
                {newsList.map((item) => (
                  <article key={item.slug} className="py-3.5 hover:bg-white/60 px-2 rounded transition">
                    <Link href={`/news#${item.slug}`} className="block">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] text-gray-500">{item.date}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                            item.isAlert
                              ? "bg-red-600 text-white animate-pulse"
                              : "bg-[#801336]/10 text-[#801336]"
                          }`}
                        >
                          {item.category}
                        </span>
                        {item.isPinned && (
                          <span className="text-[10px] bg-[#C5A059] text-white px-1.5 py-0.5 rounded">
                            重要
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-medium text-[#1C1917] hover:text-[#801336] transition line-clamp-1">
                        {item.title}
                      </h4>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* ブログピックアップ */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-4 border-b border-[#801336]/20 pb-2">
                <h3 className="font-serif-jp text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                  公式ブログ・コラム
                </h3>
                <Link href="/news" className="text-xs text-[#801336] hover:underline flex items-center gap-0.5">
                  ブログ一覧 <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogList.slice(0, 2).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col group transition"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.thumbnail || "/images/blog-culture.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="text-[#801336] font-medium">{post.category}</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#1C1917] group-hover:text-[#801336] transition line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 右側: Instagramフィード & エキテン口コミ連携 (5カラム) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Instagram連携カード */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#801336]/15">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917]">@estudio_oloroso</h4>
                    <p className="text-[10px] text-gray-500">公式Instagramフィード</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/estudio_oloroso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#801336] hover:underline flex items-center gap-0.5"
                >
                  フォロー <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Instagramサムネイルグリッド（モックアップ） */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image src="/images/community.jpg" alt="Insta 1" fill className="object-cover group-hover:scale-110 transition" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image src="/images/class-choreography.jpg" alt="Insta 2" fill className="object-cover group-hover:scale-110 transition" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image src="/images/instructor-ikeda.jpg" alt="Insta 3" fill className="object-cover group-hover:scale-110 transition" />
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 text-center">
                日々のレッスン風景やリハーサル動画を配信中！
              </p>
            </div>

            {/* エキテン口コミ連携カード */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-2xl p-6 border border-amber-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                    エ
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">地域口コミサイト「エキテン」</h4>
                    <div className="flex items-center gap-1">
                      <div className="flex text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <Star className="w-3 h-3 fill-amber-500" />
                        <Star className="w-3 h-3 fill-amber-500" />
                        <Star className="w-3 h-3 fill-amber-500" />
                        <Star className="w-3 h-3 fill-amber-500" />
                      </div>
                      <span className="text-xs font-bold text-amber-700">4.89</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">
                  高評価多数
                </span>
              </div>

              <blockquote className="text-xs text-gray-700 bg-white/80 p-3 rounded-lg italic border-l-2 border-amber-400 mb-3">
                “大人になってからの初めてのダンスで不安でしたが、先生が一人ひとりの骨格や癖に合わせて丁寧に教えてくださり、半年で憧れのセビジャーナスが踊れるようになりました！”
              </blockquote>

              <div className="text-right">
                <a
                  href="https://www.ekiten.jp/shop_estudio_oloroso/?utm_source=estudio_oloroso&utm_medium=website&utm_campaign=top_reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-amber-800 hover:underline inline-flex items-center gap-1"
                >
                  エキテンで口コミをもっと見る <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P01-06: スタジオアクセス・地図情報（架空・デモ表示） */}
      {/* ========================================================= */}
      <section className="bg-white py-16 border-t border-[#801336]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
              Location & Access (Demo)
            </span>
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2 mb-3">
              スタジオ所在地・アクセス
              <span className="inline-block text-xs bg-amber-100 text-amber-900 font-normal px-2.5 py-0.5 rounded-full ml-2 align-middle border border-amber-300">
                ※架空のロケーション
              </span>
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 text-left sm:text-center leading-relaxed">
              <strong>【ポートフォリオ作品としての注記】</strong><br />
              当サイトはWeb制作・開発実績用の架空の教室サイトです。記載されている所在地、施設、Googleマップはすべてイメージ（デモ用サンプル）であり、実在するスタジオではございません。
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* スタジオ外観・道順案内 (5カラム) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md">
                <Image src="/images/about-studio.jpg" alt="Estudio Oloroso スタジオ風景（イメージ）" fill className="object-cover" />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                  ※画像はスタジオイメージです
                </div>
              </div>
              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-gray-200 space-y-3 text-xs">
                <div>
                  <span className="text-gray-500 font-medium">スタジオ所在地（架空）</span>
                  <p className="font-bold text-gray-900 mt-0.5">
                    〒153-0051 東京都目黒区（※架空の住所です）
                  </p>
                  <p className="text-[11px] text-gray-500">※実在の住所・建物は存在しません</p>
                </div>
                <div>
                  <span className="text-gray-500 font-medium">想定最寄り駅</span>
                  <p className="text-gray-900 mt-0.5">
                    東急東横線・東京メトロ日比谷線「中目黒駅」南改札徒歩4分（想定ロケーション）
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 font-medium">想定営業時間</span>
                  <p className="text-gray-900 mt-0.5">月〜金 10:00〜21:30 / 土日 09:30〜20:00</p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=中目黒駅"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#801336] hover:bg-[#721B29] text-white rounded font-bold text-center block transition text-xs shadow-sm"
                  >
                    Google Maps（中目黒駅周辺のサンプルマップを開く）
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map 埋め込み (7カラム) - 架空であることが明確に分かるラベル付き */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-md border border-gray-200 relative">
              <div className="bg-[#2B0A11] text-[#E8C888] text-xs py-2 px-4 flex items-center justify-between font-bold">
                <span>📍 Google Map（中目黒駅周辺のイメージ表示・サンプル）</span>
                <span className="bg-amber-500 text-black text-[10px] px-2 py-0.5 rounded">架空教室</span>
              </div>
              <div className="h-[340px] relative">
                <iframe
                  title="Estudio Oloroso スタジオマップ（サンプル）"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0673418544983!2d139.69614487625126!3d35.6445582316521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b486927a7b3%3A0x8e578c773a987d90!2z5Lit55uu6buS6aeF!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg border border-amber-300 shadow text-[11px] text-amber-900 text-center font-medium pointer-events-none">
                  ⚠️ ※当スタジオはポートフォリオ用の架空の設定です。地図は中目黒エリアのサンプルです。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

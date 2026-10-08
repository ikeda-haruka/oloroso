import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Pin,
  Calendar,
  Tag,
  ChevronRight,
  Star,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { getAllNews, getAllBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ・公式ブログ",
  description:
    "Luna de Jerez（ルナ・デ・ヘレス）の最新お知らせ、休講・代講情報、フラメンコの知識コラム、レッスン日記をご覧いただけます。Decap CMS連携。",
};

export default function NewsIndexPage() {
  const newsList = getAllNews();
  const blogList = getAllBlogPosts();

  const pinnedNews = newsList.filter((n) => n.isPinned || n.isAlert);
  const normalNews = newsList.filter((n) => !n.isPinned && !n.isAlert);

  return (
    <div className="space-y-20 py-12 md:py-20">
      {/* ページタイトル */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          News & Journal
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          お知らせ・公式ブログ
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          スタジオからの最新インフォメーション、休講・代講情報から、
          フラメンコにまつわる歴史コラムや日々のレッスン風景をお届けします。
        </p>
      </section>

      {/* ========================================================= */}
      {/* P05-01: 重要なお知らせ・休校情報（ピニング表示） */}
      {/* ========================================================= */}
      {pinnedNews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-red-800 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-red-600 animate-bounce" />
              <span>【重要】緊急・直近の開催状況とお知らせ</span>
            </div>

            <div className="space-y-4">
              {pinnedNews.map((item) => (
                <div
                  key={item.slug}
                  id={item.slug}
                  className="bg-white p-5 rounded-2xl border border-red-200 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.date}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded ${
                        item.isAlert
                          ? "bg-red-600 text-white"
                          : "bg-[#801336] text-white"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-[10px] bg-[#C5A059] text-white px-2 py-0.5 rounded font-bold flex items-center gap-1">
                      <Pin className="w-3 h-3" /> 固定
                    </span>
                  </div>

                  <h3 className="font-serif-jp text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  {item.summary && (
                    <p className="text-xs text-gray-600 leading-relaxed">{item.summary}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* メインコンテンツエリア（お知らせ一覧 & ブログ一覧 & サイドバー） */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 左側 8カラム: ブログ記事一覧 & 通常お知らせ */}
          <div className="lg:col-span-8 space-y-16">
            {/* P05-02: 公式ブログ一覧（3カラムカード型） */}
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#801336]/20">
                <div>
                  <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                    Official Blog
                  </span>
                  <h2 className="font-serif-jp text-2xl font-bold text-gray-900 mt-1">
                    公式ブログ・コラム
                  </h2>
                </div>
                <span className="text-xs text-gray-500 font-medium">全 {blogList.length} 記事</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogList.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 flex flex-col group transition-all duration-300"
                  >
                    <Link href={`/news/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.thumbnail || "/images/blog-culture.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#2B0A11]/85 backdrop-blur-sm text-[#E8C888] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </div>
                    </Link>

                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="text-[11px] text-gray-400 mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#801336]" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="font-serif-jp text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#801336] transition leading-snug mb-3">
                          <Link href={`/news/${post.slug}`}>{post.title}</Link>
                        </h3>
                        {post.excerpt && (
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="pt-3 border-t border-gray-50 flex flex-wrap gap-1.5">
                          {post.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 通常のお知らせ一覧 */}
            {normalNews.length > 0 && (
              <div className="pt-8">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
                  <h3 className="font-serif-jp text-lg font-bold text-gray-900">
                    過去のお知らせアーカイブ
                  </h3>
                </div>
                <div className="divide-y divide-gray-200 bg-white rounded-2xl p-6 border border-gray-200">
                  {normalNews.map((n) => (
                    <div key={n.slug} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <span>{n.date}</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] text-gray-700">
                          {n.category}
                        </span>
                      </div>
                      <p className="font-medium text-xs sm:text-sm text-gray-900">{n.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 右側 4カラム: サイドバー（Instagram & エキテン & CMS案内） */}
          <div className="lg:col-span-4 space-y-8">
            {/* P05-03: Instagram公式フィード連携 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#801336]/15">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">@lunadejerez</h4>
                    <p className="text-[10px] text-gray-500">Instagram 公式アカウント</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/lunadejerez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#801336] hover:underline flex items-center gap-0.5"
                >
                  フォロー <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* サムネイル画像グリッド */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image src="/images/hero.jpg" alt="Insta 1" fill className="object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image src="/images/class-beginner.jpg" alt="Insta 2" fill className="object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image src="/images/community.jpg" alt="Insta 3" fill className="object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image src="/images/instructor-ikeda.jpg" alt="Insta 4" fill className="object-cover group-hover:scale-110 transition duration-300" />
                </div>
              </div>

              <p className="text-[11px] text-gray-500 text-center mt-3">
                ストーリーズではリアルタイムの練習風景も随時更新中！
              </p>
            </div>

            {/* P05-04: 地域口コミサイト「エキテン」連携 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 border border-amber-200 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-200/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-bold text-sm flex items-center justify-center">
                    エ
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">エキテン公式口コミ</h4>
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
              </div>

              <p className="text-xs text-gray-700 leading-relaxed mb-4 italic">
                “中目黒駅近くで通いやすく、初心者でも丁寧に教えてくれます。靴の響きが心地よく、姿勢も良くなりました！”
              </p>

              <a
                href="https://www.ekiten.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-center rounded-xl text-xs block transition shadow-sm"
              >
                エキテンで口コミを投稿・閲覧
              </a>
            </div>

            {/* CMS更新バナー */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs text-gray-500 space-y-2">
              <p className="font-bold text-gray-700 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#801336]" />
                CMSによる更新管理
              </p>
              <p className="text-[11px] leading-relaxed">
                本サイトの記事・お知らせは Decap CMS を通じて GitHub 上の Markdown ファイルとしてリアルタイムに管理されています。
              </p>
              <Link
                href="/admin/"
                className="text-[11px] text-[#801336] font-bold underline hover:text-[#721B29] block pt-1"
              >
                Decap CMS 管理画面へ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

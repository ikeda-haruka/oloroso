import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag, ChevronLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };

  return {
    title: `${post.title} | Estudio Oloroso 公式ブログ`,
    description: post.excerpt || `${post.title} の詳細記事です。`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail || "/images/blog-culture.jpg"],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="py-12 md:py-20">
      {/* 記事ヘッダー */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#801336] mb-8 transition font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>お知らせ・ブログ一覧に戻る</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#801336]" /> {post.date}
          </span>
          <span>•</span>
          <span className="bg-[#801336]/10 text-[#801336] font-bold px-2.5 py-0.5 rounded-full">
            {post.category}
          </span>
        </div>

        {/* 記事タイトル */}
        {(() => {
          let badge = "";
          let main = post.title;
          let subtitle = "";

          const badgeMatch = main.match(/^【(.*?)】\s*/);
          if (badgeMatch) {
            badge = badgeMatch[1];
            main = main.replace(/^【.*?】\s*/, "");
          }

          const subMatch = main.match(/[〜~](.*?)[〜~]?$/);
          if (subMatch) {
            subtitle = subMatch[0];
            main = main.slice(0, main.length - subtitle.length).trim();
          }

          return (
            <div className="mb-6 space-y-2">
              {badge && (
                <div className="inline-block">
                  <span className="text-xs font-bold text-[#801336] bg-[#801336]/10 border border-[#801336]/20 px-3 py-1 rounded-full tracking-wider">
                    {badge}
                  </span>
                </div>
              )}
              <h1 className="font-serif-jp text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight tracking-normal [word-break:auto-phrase]">
                {main}
              </h1>
              {subtitle && (
                <p className="font-serif-jp text-xs sm:text-base text-gray-600 leading-relaxed font-normal pt-0.5 [word-break:auto-phrase]">
                  {subtitle}
                </p>
              )}
            </div>
          );
        })()}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1"
              >
                <Tag className="w-3 h-3 text-[#C5A059]" /> {tag}
              </span>
            ))}
          </div>
        )}

        {/* アイキャッチ画像 */}
        {post.thumbnail && (
          <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg mb-8 sm:mb-12 border-2 sm:border-4 border-white bg-[#FAF7F2]">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* 記事本文 */}
        <div
          className="prose prose-base sm:prose-lg max-w-none prose-headings:font-serif-jp prose-headings:text-[#2B0A11] prose-h2:border-l-4 prose-h2:border-[#801336] prose-h2:pl-4 prose-h2:py-1 prose-h3:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-blockquote:border-l-[#801336] prose-blockquote:bg-[#FAF7F2] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-strong:text-[#801336]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />

        {/* 記事下部CTA & シェア */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#801336] to-[#721B29] rounded-2xl p-8 text-white text-center shadow-lg">
            <span className="text-xs text-[#E8C888] font-bold tracking-widest uppercase">
              Experience Flamenco
            </span>
            <h3 className="font-serif-jp text-xl sm:text-2xl font-bold mt-1 mb-3">
              Estudio Oloroso でフラメンコを始めてみませんか？
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/90 max-w-lg mx-auto mb-6">
              未経験の方に向けた手ぶらで参加できる体験レッスンを随時開講しています。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#E8C888] hover:bg-[#D8B26B] text-[#2B0A11] font-bold text-xs tracking-wider rounded-xl shadow transition"
            >
              <span>体験レッスンを予約する</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif-jp text-lg font-bold text-gray-900 mb-6 border-b pb-2">
              その他のブログ記事
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/news/${rPost.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col group transition"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={rPost.thumbnail || "/images/blog-culture.jpg"}
                      alt={rPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] text-gray-400">{rPost.date}</span>
                    <h4 className="font-serif-jp text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#801336] transition line-clamp-2 mt-1">
                      {rPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

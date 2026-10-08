import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, Heart, Award, Music, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スタジオ紹介・講師プロフィール",
  description:
    "Luna de Jerez（ルナ・デ・ヘレス）の理念、歴史、主宰・池田遥香のプロフィール、足腰に優しい特注無垢ダンスフロア設備、受講生の声をご紹介します。",
};

export default function AboutPage() {
  const testimonials = [
    {
      name: "M.K 様（40代・会社員）",
      experience: "受講歴: 1年（ダンス未経験スタート）",
      comment:
        "運動が苦手で体が硬かった私ですが、先生が姿勢や体重の乗せ方を解剖学的に分かりやすく教えてくださり、無理なく続けられています。今では週1回のレッスンが最高のデトックスです！",
    },
    {
      name: "S.T 様（30代・主婦）",
      experience: "受講歴: 3年（初級〜中級クラス）",
      comment:
        "発表会で生ギターとカンテに合わせて踊った時の鳥肌が立つような感動は一生忘れられません。スタジオの仲間も温かく、大人になってからこんなに熱中できる趣味に出会えて幸せです。",
    },
    {
      name: "Y.N 様（50代・他教室から移籍）",
      experience: "受講歴: フラメンコ歴7年",
      comment:
        "以前の教室で足腰を痛めて悩んでいたところ、こちらの無垢スプリングフロアとテクニカ指導に出会いました。身体を痛めない正しいサパテアードが身につき、表現の幅が一気に広がりました。",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* ページタイトルヘッダー */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          About Luna de Jerez
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          スタジオ理念と講師紹介
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          伝統に裏打ちされた本物の技術と、誰もが自由に感情を解放できる温かな空間。
          「Luna de Jerez」が大切にしている哲学をご紹介します。
        </p>
      </section>

      {/* ========================================================= */}
      {/* P02-01: 理念と歴史（アンダルシアの伝統） */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#801336]/10 text-[#801336] rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>アンダルシア・ヘレスへの敬意</span>
            </div>

            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
              「Luna de Jerez」に込めた
              <br />
              月と大地の物語
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              スペイン南部、シェリー酒と馬、そして深遠なカンテ（歌）の街「ヘレス・デ・ラ・フロンテーラ」。
              フラメンコの原点とも言えるこの街の夜空には、静かに大地を照らす白銀の月が浮かんでいます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              「Luna（月）」は内に秘めた優雅さと静けさ、「Jerez（ヘレス）」は大地を踏み鳴らす揺るぎない野生と情熱を象徴しています。
              激しさだけでなく、洗練された品格を兼ね備えたフラメンコをお伝えしたいという願いから、当スタジオは名付けられました。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              私たちは、単なる振付の模倣にとどまらず、身体の芯から湧き出る生きたコンパス（リズム）と、自己の内面と向き合う表現の深さを丁寧に分かち合っています。
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/concept.jpg"
                alt="ヘレスの魂を受け継ぐフラメンコ"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#2B0A11] text-white p-6 rounded-xl shadow-xl max-w-xs border border-[#C5A059]/40 hidden sm:block">
              <p className="text-xs text-[#E8C888] font-bold tracking-widest uppercase mb-1">Our Core Value</p>
              <p className="font-serif-jp text-xs leading-relaxed">
                「フラメンコは感情の言語。情熱を解放し、自分自身を真実に表現する場所を。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P02-02: 主宰・講師プロフィール */}
      {/* ========================================================= */}
      <section className="bg-white py-20 border-y border-[#801336]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* 講師写真 */}
            <div className="lg:col-span-5 relative text-center">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2]">
                <Image
                  src="/images/instructor-ikeda.jpg"
                  alt="Luna de Jerez 主宰 池田 遥香"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="text-xs font-bold text-[#C5A059] tracking-widest uppercase">DIRECTOR & BAILAORA</span>
                <h3 className="font-serif-jp text-2xl font-bold text-[#1C1917] mt-1">池田 遥香</h3>
                <p className="text-xs text-gray-500 font-sans">Haruka Ikeda</p>
              </div>
            </div>

            {/* 講師経歴 & メッセージ */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-[#801336] pl-4">
                <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                  Instructor Profile
                </span>
                <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                  確かな本場の研鑽と、
                  <br />
                  一人ひとりの可能性を開く指導
                </h2>
              </div>

              <blockquote className="bg-[#FAF7F2] p-5 rounded-xl border border-gray-200 text-sm italic text-gray-700 leading-relaxed font-serif-jp">
                “フラメンコに出会った時、私は自分の内側にこんなにも熱い感情が眠っていたことに驚きました。
                言葉にできない喜びや切なさを、足を踏み鳴らし、指先を伸ばすことで表現できる。
                年齢やこれまでの経験は関係ありません。あなたが踏み出す最初の一歩を、私が心を込めて支えます。”
              </blockquote>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b pb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#801336]" />
                  主な経歴・受賞歴
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#801336] shrink-0">2012年〜</span>
                    <span>スペイン・アンダルシア地方ヘレス・デ・ラ・フロンテーラへ長期留学。マヌエラ・カルピオ、メルセデス・ルイス等の名匠に師事。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#801336] shrink-0">2016年</span>
                    <span>日本フラメンコ協会「新人公演」において奨励賞を受賞。国内外のタブラオ、劇場公演に多数出演。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#801336] shrink-0">2019年</span>
                    <span>東京・中目黒にフラメンコスタジオ「Luna de Jerez」を創設。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#801336] shrink-0">現在</span>
                    <span>後進の育成に注力する傍ら、スペイン人アーティスト招聘公演の企画・出演を継続中。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P02-03: スタジオ設備・フロア環境 */}
      {/* ========================================================= */}
      <section id="facility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
            Studio Facilities
          </span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2 mb-4">
            長く健康に踊り続けられる設備環境
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            強い衝撃が伴うフラメンコだからこそ、生徒様の身体への安全性を最優先に設計しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 設備1: 特注無垢スプリングフロア */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#801336]/10 flex items-center justify-center text-[#801336]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif-jp text-base font-bold text-gray-900">
              足腰に優しい特注無垢ダンスフロア
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              床下に衝撃吸収スプリング構造を備えた天然サクラ無垢材を採用。強いサパテアード（足打ち）による膝や腰への負担を極限まで和らげ、心地よい響きを実現します。
            </p>
          </div>

          {/* 設備2: 全面大型ミラー & 本格音響 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#801336]/10 flex items-center justify-center text-[#801336]">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="font-serif-jp text-base font-bold text-gray-900">
              大型一面ミラー & ハイレゾ音響
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              幅10メートルにわたる歪みのない大型ミラーで、全身の姿勢や腕（ブラソ）の軌道を細かくチェック。Bluetooth高音質スピーカーで本場のギターや歌を臨場感豊かに再生します。
            </p>
          </div>

          {/* 設備3: 更衣室 & パウダールーム */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#801336]/10 flex items-center justify-center text-[#801336]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif-jp text-base font-bold text-gray-900">
              更衣室・清潔なパウダースペース
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              プライバシーに配慮した広々とした更衣室とメイクスペースを完備。レッスン後のお出かけやお仕事帰りでもストレスなく快適にご利用いただけます。
            </p>
          </div>
        </div>

        {/* スタジオ全景写真バナー */}
        <div className="mt-12 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/about-studio.jpg" alt="スタジオ全景" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-10 text-white">
            <div>
              <p className="text-xs text-[#E8C888] font-bold tracking-wider uppercase mb-1">Clean & Spacious</p>
              <p className="font-serif-jp text-base sm:text-xl font-bold">心地よい木漏れ日と木の温もりに包まれた、贅沢なレッスン空間</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* P02-04: 生徒の声・発表会レポート */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-[#FAF7F2] to-[#F3ECE4] py-20 border-t border-[#801336]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
              Voices & Community
            </span>
            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2 mb-4">
              受講生の声とスタジオの日常
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              幅広い世代の生徒様が、それぞれのペースで輝いています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C5A059] mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase">Member Voice</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed mb-6 italic">
                    “{t.comment}”
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-xs text-gray-900">{t.name}</p>
                  <p className="text-[10px] text-gray-500">{t.experience}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 定期発表会（フィエスタ）バナー */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#801336]/20 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto">
              <Image src="/images/community.jpg" alt="定期発表会 Fiesta" fill className="object-cover" />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-4">
              <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                Annual Recital / Fiesta
              </span>
              <h3 className="font-serif-jp text-2xl font-bold text-gray-900">
                本場スペイン人アーティストと共演する定期発表会
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                年1回、プロの照明・音響が入るホールにて発表会を開催。スペインから招聘したギタリストとカンタオール（歌い手）の生演奏をバックに、日頃の成果を舞台で披露します。舞台に立つ達成感と仲間の絆は、かけがえのない宝物になります。（※参加は自由です）
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#801336] hover:bg-[#721B29] text-white text-xs font-bold rounded-lg shadow transition"
                >
                  <span>まずは体験レッスンで雰囲気を確かめる</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

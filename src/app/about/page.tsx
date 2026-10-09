import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, Heart, Award, Music, Shield, ArrowRight, Star, ExternalLink, Users, Utensils, ShoppingBag, Briefcase, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";
import { getAllStaff } from "@/lib/content";

export const metadata: Metadata = {
  title: "スタジオ紹介・講師プロフィール",
  description:
    "Estudio Oloroso（エストゥディオ・オロロソ）の理念、歴史、主宰・池田遥香のプロフィール、足腰に優しい特注無垢ダンスフロア設備、受講生の声をご紹介します。",
};

export default function AboutPage() {
  const staffList = getAllStaff();
  // 当スタジオ受講生への独自インタビュー（※参考元・他サイトの流用を行わないスタジオ独自作成）
  const testimonials = [
    {
      name: "A.S 様（30代・会社員）",
      experience: "受講歴: 10ヶ月（完全未経験スタート）",
      comment:
        "デスクワーク続きで運動不足だった私が、今では毎週スタジオの無垢床を踏み鳴らすのが最大の楽しみです。先生が足や骨盤の使い方を分かりやすく解剖学的に分解して教えてくださるので、リズム音痴だと思い込んでいた私でも自然とコンパスに合わせられるようになりました。",
    },
    {
      name: "R.M 様（40代・自営業）",
      experience: "受講歴: 3年（入門 ➔ 初級振付クラス）",
      comment:
        "オロロソ（芳醇な辛口シェリー）のように時間をかけて自分の踊りを深めるというスタジオの理念に惹かれて入会しました。上手い下手を競うのではなく、一人ひとりの個性を『それがあなたの魅力』と認めて伸ばしてくださる温かい指導が本当に心地よいです。",
    },
    {
      name: "T.K 様（50代・主婦）",
      experience: "受講歴: 4年（他舞踊からの転向）",
      comment:
        "以前別のスタジオで膝を痛めた経験があり不安でしたが、こちらの特注スプリングフロアは本当に足腰への負担が少なく驚きました。生ギターの伴奏に合わせて仲間と呼吸が一つになった瞬間は鳥肌が立つほど感動します。",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* ページタイトルヘッダー */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          About Estudio Oloroso
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          スタジオ理念と講師紹介
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 max-w-xl mx-auto mb-6 leading-relaxed">
          ※本ページの内容・プロフィール・設備案内は、Webサイト制作ポートフォリオ用の架空の設定（サンプル）です。
        </div>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          伝統に裏打ちされた本物の技術と、誰もが自由に感情を解放できる温かな空間。
          「Estudio Oloroso」が大切にしている哲学をご紹介します。
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
              「Estudio Oloroso」に込めた
              <br />
              芳醇なる情熱と熟成の物語
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              スペイン南部、シェリー酒と馬、そして深遠なカンテ（歌）の街「ヘレス・デ・ラ・フロンテーラ」。
              フラメンコの原点とも言えるこの街を象徴する銘酒「オロロソ（Oloroso）」は、スペイン語で“芳醇な香り”を意味します。長い歳月をかけて空気と対話しながら熟成を重ねることで、深い琥珀色と力強いコク、深遠なアロマを纏う辛口シェリーです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              フラメンコもまた、同じ歩みを持っています。大地を踏みしめ、自らの人生や感情を重ねるほどに、身体の奥底から湧き出る表現は深く芳醇に熟成されていきます。
              一過性の激しさだけにとどまらず、心に深く染み渡る品格と揺るぎない熱情を育みたいという想いを込めて、当スタジオは名付けられました。
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
                  alt="Estudio Oloroso 主宰 池田 遥香"
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
                  主な活動経歴・実績
                  <span className="text-[10px] text-gray-600 font-normal ml-auto">※ポートフォリオ用架空設定</span>
                </h4>
                <ul className="space-y-3 text-xs text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-[#801336] shrink-0 w-20">研鑽・渡欧</span>
                    <span>幼少よりクラシックバレエに親しみ、後にフラメンコへ転向。本場スペイン・アンダルシア地方（ヘレス、セビージャ等）へ渡り、現地の舞踊家たちから生のコンパス（リズム）とカンテ（歌）の神髄を体得。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-[#801336] shrink-0 w-20">舞台・出演</span>
                    <span>帰国後、国内外のタブラオ（劇場型レストラン）や各種フラメンコフェスティバルに多数出演。ソロ・群舞双方で豊かな表現力を持つバイラオーラとして舞台経験を重ねる。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-[#801336] shrink-0 w-20">スタジオ設立</span>
                    <span>東京・中目黒にフラメンコスタジオ「Estudio Oloroso」を開設。年齢や経験を問わず、一人ひとりの身体の使い方と感情表現に寄り添う指導方針を確立。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-[#801336] shrink-0 w-20">現在</span>
                    <span>スタジオでの後進育成に情熱を注ぐ傍ら、自主公演の企画や各種ワークショップ、生演奏ライブへの出演など精力的に活動を展開している。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* スタッフ・館員紹介（CMS連携） */}
          <div className="mt-16 pt-12 border-t border-gray-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                  Studio Staff & Instructors
                </span>
                <h3 className="font-serif-jp text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
                  スタジオ運営を支える館員・講師陣
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  安心してレッスン・自主練習に打ち込めるよう、受付事務スタッフが常駐しサポートいたします。
                </p>
              </div>
              <Link
                href="/members/management"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#801336] hover:text-[#C5A059] bg-[#FAF7F2] border border-gray-200 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto"
              >
                <span>館員・会員管理ポータル</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffList.map((st) => (
                <div
                  key={st.staffId}
                  className="bg-[#FAF7F2] rounded-2xl p-6 border border-gray-200 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-[#801336] uppercase bg-white border border-[#801336]/20 px-2 py-0.5 rounded-md">
                          {st.role}
                        </span>
                        <h4 className="font-serif-jp text-lg font-bold text-gray-900 mt-1">
                          {st.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 font-sans">{st.kana}</p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {st.employmentType}
                      </span>
                    </div>

                    <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                      {st.bio}
                    </p>

                    {st.responsibilities.length > 0 && (
                      <div className="pt-2 border-t border-gray-200/60">
                        <div className="text-[11px] font-bold text-gray-800 mb-1">主な担当:</div>
                        <ul className="text-[11px] text-gray-600 space-y-0.5 list-disc list-inside">
                          {st.responsibilities.slice(0, 3).map((r, i) => (
                            <li key={i} className="truncate">{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="truncate max-w-[180px]">{st.scheduleSummary || "シフト常駐"}</span>
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">{st.staffId}</span>
                  </div>
                </div>
              ))}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 設備1: 特注無垢スプリングフロア */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#801336]/10 flex items-center justify-center text-[#801336]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif-jp text-base font-bold text-gray-900">
              足腰に優しい特注無垢ダンスフロア
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              床下に衝撃吸収スプリング構造を備えた天然サクラ無垢材を採用。強いサパテアード（足打ち）による膝や腰への負担を和らげます。
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
              幅10メートルにわたる大型ミラーで全身の軌道をチェック。Bluetooth高音質スピーカーで本場のギターや歌を豊かに再生します。
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
              プライバシーに配慮した更衣室とメイクスペースを完備。レッスン後のお出かけやお仕事帰りでもストレスなくご利用いただけます。
            </p>
          </div>

          {/* 設備・体制4: 専任スタッフ常駐体制 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#801336]/10 flex items-center justify-center text-[#801336]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-jp text-base font-bold text-gray-900">
                安心の専任スタッフ常駐体制
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                レッスン時だけでなく、自主練習・レンタル枠でも専任スタッフが常駐。開錠・施錠や安全確認、丁寧な受講生サポートを行います。
              </p>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/recruit"
                className="text-[11px] font-bold text-[#801336] hover:underline flex items-center gap-1"
              >
                受付スタッフ採用情報はこちら ›
              </Link>
            </div>
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

          {/* P02-04 / 外部連携: エキテン口コミ連携バッジ */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm max-w-2xl mx-auto mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0 border border-orange-200">
                エキテン
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-sm text-gray-900">4.85</span>
                  <span className="text-[11px] text-gray-600">/ 5.0（地域フラメンコ部門 高評価）</span>
                </div>
                <p className="text-xs text-gray-700 mt-0.5">
                  第三者口コミサイト「エキテン」でも生徒様からのリアルな高評価をいただいています。
                </p>
              </div>
            </div>
            <a
              href="https://www.ekiten.jp/shop_estudio_oloroso/?utm_source=estudio_oloroso&utm_medium=website&utm_campaign=about_reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-[#801336] text-xs font-bold rounded-lg border border-gray-200 transition flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>口コミ一覧を見る</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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

      {/* ========================================================= */}
      {/* スタジオ主催の文化交流・親睦イベント（スペイン料理会 ＆ 衣装フリマ会） */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
            Community & Culture Events
          </span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2 mb-4">
            踊りを通じて広がる、温かな文化交流と絆
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Estudio Olorosoでは、レッスン以外にもアンダルシアの文化を五感で楽しむ料理会や、
            生徒同士で衣装を譲り合うフリーマーケット会などを定期開催しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* イベント1: スペイン料理の料理会 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#801336]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center border border-amber-200">
                <Utensils className="w-6 h-6 text-[#801336]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#801336] tracking-wider uppercase block mb-1">
                  Fiesta Gastronómica
                </span>
                <h3 className="font-serif-jp text-xl font-bold text-gray-900">
                  スペイン料理の料理会
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                フラメンコが育まれたアンダルシアの大地と食文化を、みんなで手作りして味わう大人気の親睦会です。
                本場のレシピを再現し、ワインやシェリー（オロロソ）とともに笑顔あふれる時間を過ごします。
              </p>

              {/* 料理メニュー紹介 */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200 space-y-2">
                <span className="text-xs font-bold text-gray-800 block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  作成する代表メニュー
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-600">
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <p className="font-bold text-gray-800">・アヒージョ (Ajillo)</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">海老とマッシュルームの熱々ガーリックオイル煮</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <p className="font-bold text-gray-800">・トルティージャ (Tortilla)</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">じゃがいもと玉ねぎがぎっしり詰まったスペイン風オムレツ</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <p className="font-bold text-gray-800">・サルモレホ (Salmorejo)</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">アンダルシア・コルドバ発祥の濃厚な冷製トマトスープ</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <p className="font-bold text-gray-800">・パパ・アリニャー (Papas aliñás)</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">カディス名物、茹でじゃがいもと香味野菜の爽やか和え</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 italic">
              ※クラスや経験年数の垣根を越えて、スペインの歴史やフラメンコの曲種について楽しくおしゃべりできます。
            </div>
          </div>

          {/* イベント2: 衣装のフリーマーケット会 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#801336]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-900 flex items-center justify-center border border-rose-200">
                <ShoppingBag className="w-6 h-6 text-[#801336]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#801336] tracking-wider uppercase block mb-1">
                  Mercadillo de Flamenco
                </span>
                <h3 className="font-serif-jp text-xl font-bold text-gray-900">
                  衣装のフリーマーケット会
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                先輩生徒から後輩生徒へ、大切に着てきたファルダ（スカート）や衣装、小物を譲り合うスタジオ内バザーです。
                「最初から高価な衣装を揃えるのは不安…」という入門・初級の方も、お手頃な価格で素敵な本格衣装に出会えます。
              </p>

              {/* 出品アイテム例 */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200 space-y-2">
                <span className="text-xs font-bold text-gray-800 block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  主な出品・お譲りアイテム
                </span>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">練習用ファルダ & 発表会用ドレス</span>
                      <p className="text-[11px] text-gray-500">スペイン直輸入の本格フリルスカートや、過去の発表会で着用した晴れ舞台用衣装</p>
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">フラメンコ小物・装飾品</span>
                      <p className="text-[11px] text-gray-500">マントン（大判ショール）、ピキージョ、アバニコ（扇子）、ペイネタ（髪飾り）、ピアス等</p>
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#801336] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">カスタネット（パリージョ）& シューズ</span>
                      <p className="text-[11px] text-gray-500">状態の良い木製カスタネットや、サイズが合わなくなった良品シューズ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 italic">
              ※モノを大切にするサステナブルな取り組みとして、生徒の皆様同士のあたたかいコミュニケーションが生まれています。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

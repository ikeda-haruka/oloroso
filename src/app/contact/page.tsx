"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Shirt,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Send,
  Phone,
  Mail,
  ShieldCheck,
  Search,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<"trial" | "general">("trial");
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSearchingZip, setIsSearchingZip] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    kana: "",
    postalCode: "",
    address: "",
    email: "",
    phone: "",
    preferredClass: "beginner",
    preferredDate1: "",
    preferredDate2: "",
    preferredDate3: "",
    shoeSize: "23.5",
    message: "",
    honeypot: "", // スパム対策（ボットが入力した場合は破棄）
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 郵便番号から住所自動入力（API + フォールバックシミュレーション）
  const handlePostalLookup = async () => {
    const rawZip = formData.postalCode.replace(/[^0-9]/g, "");
    if (rawZip.length < 7) {
      alert("7桁の郵便番号（例: 1530051）を入力してください。");
      return;
    }
    setIsSearchingZip(true);
    try {
      const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${rawZip}`);
      const data = await res.json();
      if (data.results && data.results[0]) {
        const item = data.results[0];
        const fullAddr = `${item.address1}${item.address2}${item.address3}`;
        setFormData((prev) => ({ ...prev, address: fullAddr }));
      } else {
        // フォールバック（東京都目黒区想定のサンプル補完）
        setFormData((prev) => ({ ...prev, address: "東京都目黒区上目黒" }));
      }
    } catch {
      setFormData((prev) => ({ ...prev, address: "東京都目黒区上目黒" }));
    } finally {
      setIsSearchingZip(false);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        alert("お名前、メールアドレス、電話番号をご入力ください。");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (inquiryType === "trial" && !formData.preferredDate1) {
        alert("第1希望の日時をご入力ください。");
        return;
      }
      setCurrentStep(3);
    }
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const handlePrevStep = () => {
    if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(1);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // ボット対策
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = [
    {
      step: "01",
      title: "ご来校・お着替え・シューズ選び",
      desc: "レッスン開始15分前にお越しください。足のサイズにぴったりのフラメンコシューズと練習用ファルダ（スカート）を無料でお見立てします。",
    },
    {
      step: "02",
      title: "基本姿勢とリズムレッスン（約50分）",
      desc: "背筋を伸ばす美しい立ち姿、基本のブラソ（腕の動かし方）、そして足打ち（サパテアード）の基本を体験。無理なく楽しく身体を動かします。",
    },
    {
      step: "03",
      title: "クールダウン & ご相談（約15分）",
      desc: "レッスン後のストレッチを行いながら、クラスの雰囲気や通い方について講師とお話しいただけます。無理な勧誘は一切ございません。",
    },
  ];

  const contactFaqs = [
    {
      q: "身体が硬く、ダンス経験が全くありませんが大丈夫でしょうか？",
      a: "全く問題ありません！受講生の8割以上が完全な未経験からスタートされています。フラメンコは激しい柔軟性よりも「姿勢の軸」と「足の重心」が重要ですので、どなたでも安心してご参加いただけます。",
    },
    {
      q: "通われている生徒さんの年齢層はどのくらいですか？",
      a: "20代から60代まで幅広い年代の女性が通われています。特に30代〜50代の大人の趣味として、ご自身のライフスタイルに合わせて長く楽しまれている方が多いのが特徴です。",
    },
    {
      q: "体験レッスンの当日に必要な持ち物は何ですか？",
      a: "Tシャツやスパッツ等の「動きやすい服装」と「靴下」、汗拭きタオル、水分補給用の飲み物をお持ちください。フラメンコ専用シューズとスカートは無料でお貸し出しいたします。",
    },
    {
      q: "体験レッスン後、必ず入会しなければいけませんか？",
      a: "いいえ、その場で決めていただく必要はございません。一度ご自宅でゆっくりご検討いただいて構いません。なお、当日入会される場合は入会金割引などのキャンペーン特典が適用されます。",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* ページタイトル */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
          Trial & Contact
        </span>
        <h1 className="font-serif-jp text-3xl sm:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
          体験レッスン予約・お問い合わせ
        </h1>
        <div className="w-16 h-1 bg-[#801336] mx-auto mb-6" />
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 max-w-xl mx-auto mb-6 leading-relaxed">
          ※当サイトはポートフォリオ用の架空の教室サイトです。予約フォームはデモ動作用であり、実際の予約や課金は発生いたしません。
        </div>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          未経験の方も手ぶらで大歓迎！足腰に優しい無垢フロアで、
          本場アンダルシアの情熱的なフラメンコをまずはお気軽にご体感ください。
        </p>
      </section>

      {/* 送信完了後のサンクスページ表示（デモ用） */}
      {isSubmitted ? (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-[#801336] shadow-2xl text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block bg-amber-100 text-amber-900 text-xs px-3 py-1 rounded-full font-bold">
              ※ポートフォリオ用送信完了シミュレーション画面
            </div>

            <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-gray-900">
              ご予約・お問い合わせを承りました（デモ）
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
              {formData.name} 様、この度は Estudio Oloroso（架空のデモサイト）への送信テストありがとうございます。
              （※ポートフォリオ作品のため、実際のメール送信や予約登録は行われておりません）
            </p>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2 max-w-md mx-auto text-left">
              <p className="font-bold text-gray-800">■ 本番サイト想定のフロー</p>
              <p>・24時間以内に担当講師より、体験日時の確定メールをお送りいたします。</p>
              <p>・当日はレッスン開始15分前にスタジオ（中目黒駅徒歩4分想定）へお越しください。</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="text-xs text-gray-500 underline hover:text-[#801336]"
              >
                別の内容を送信する
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-[#801336] text-white font-bold text-xs rounded-xl shadow hover:bg-[#721B29] transition"
              >
                トップページに戻る
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* ========================================================= */}
          {/* P06-01: 体験レッスンの流れ・準備物案内 */}
          {/* ========================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#801336]/15">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                  Lesson Flow
                </span>
                <h2 className="font-serif-jp text-2xl font-bold text-gray-900 mt-1 mb-2">
                  体験レッスンの流れ（所要時間：約60分）
                </h2>
                <p className="text-xs text-gray-500">
                  スタジオにお越しいただいてからお帰りまでの3ステップです。
                </p>
              </div>

              {/* 3ステップ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
                {steps.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[#FAF7F2] p-6 rounded-2xl border border-gray-200 relative flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-2xl font-serif-jp font-bold text-[#801336] block mb-2">
                        STEP {st.step}
                      </span>
                      <h3 className="font-serif-jp text-sm sm:text-base font-bold text-gray-900 mb-2">
                        {st.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 持ち物チェックリスト */}
              <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-900 flex items-center justify-center shrink-0">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900">当日の持ち物</h4>
                    <p className="text-xs text-gray-600">
                      動きやすい服装（Tシャツ・レギンス等）、靴下、タオル、お飲み物のみでOK！
                    </p>
                  </div>
                </div>
                <div className="text-xs bg-white px-4 py-2 rounded-xl border border-amber-200 text-[#801336] font-bold shrink-0">
                  ★ 専用シューズ・スカートは無料レンタル！
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* P06-03: 公式LINE予約導線（サブCTAバナー） */}
          {/* ========================================================= */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#06C755] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-white text-[#06C755] flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold bg-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    かんたん1分予約
                  </span>
                  <h3 className="font-serif-jp text-lg sm:text-xl font-bold mt-1">
                    公式LINEなら、友だち追加ですぐに予約・相談！
                  </h3>
                  <p className="text-xs text-white/90 mt-0.5">
                    「○日の体験は空いていますか？」など、チャット感覚でお気軽にメッセージをお送りいただけます。
                  </p>
                </div>
              </div>

              <a
                href="https://line.me/R/ti/p/@estudio_oloroso"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white text-[#06C755] font-bold text-xs tracking-wider rounded-xl shadow hover:bg-gray-100 transition whitespace-nowrap shrink-0"
              >
                LINE友だち追加で予約
              </a>
            </div>
          </section>

          {/* ========================================================= */}
          {/* P06-02 / スライド11: 体験予約・お問い合わせ ステップ化ウィザードフォーム */}
          {/* ========================================================= */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#801336]/20">
              <div className="text-center mb-6">
                <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                  Reservation Form
                </span>
                <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-2">
                  WEB予約・お問い合わせフォーム
                  <span className="inline-block text-xs bg-amber-100 text-amber-900 font-normal px-2.5 py-0.5 rounded-full ml-2 align-middle border border-amber-300">
                    デモ動作用
                  </span>
                </h2>
                {/* スライド11要件: マイクロコピーの配置 */}
                <p className="text-xs sm:text-sm text-[#801336] font-semibold flex items-center justify-center gap-1.5 mt-2">
                  <Clock className="w-4 h-4 text-[#801336]" />
                  ※ 送信後、24時間以内に担当講師よりご連絡いたします
                </p>
              </div>

              {/* スライド11要件: ステップ化＆進捗の可視化プログレスバー */}
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold mb-2">
                  <div className={`py-2 rounded-lg transition-colors ${currentStep === 1 ? "bg-[#801336] text-white shadow" : currentStep > 1 ? "bg-amber-100 text-amber-900" : "bg-gray-100 text-gray-500"}`}>
                    1. お客様情報
                  </div>
                  <div className={`py-2 rounded-lg transition-colors ${currentStep === 2 ? "bg-[#801336] text-white shadow" : currentStep > 2 ? "bg-amber-100 text-amber-900" : "bg-gray-100 text-gray-500"}`}>
                    2. 希望日時・クラス
                  </div>
                  <div className={`py-2 rounded-lg transition-colors ${currentStep === 3 ? "bg-[#801336] text-white shadow" : "bg-gray-100 text-gray-500"}`}>
                    3. 確認画面
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#801336] h-full transition-all duration-300"
                    style={{ width: currentStep === 1 ? "33%" : currentStep === 2 ? "66%" : "100%" }}
                  />
                </div>
              </div>

              {/* お問い合わせ種別切り替えタブ（STEP 1 のみ表示） */}
              {currentStep === 1 && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setInquiryType("trial")}
                    className={`py-3 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                      inquiryType === "trial"
                        ? "bg-[#801336] text-white border-[#801336] shadow"
                        : "bg-[#FAF7F2] text-gray-600 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    体験レッスンを申し込む
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType("general")}
                    className={`py-3 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                      inquiryType === "general"
                        ? "bg-[#801336] text-white border-[#801336] shadow"
                        : "bg-[#FAF7F2] text-gray-600 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    一般的なお問い合わせ
                  </button>
                </div>
              )}

              {/* STEP 1: お客様情報 */}
              {currentStep === 1 && (
                <form onSubmit={handleNextStep} className="space-y-5 text-xs sm:text-sm">
                  {/* スパム対策ハニーポット */}
                  <input
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* お名前 & フリガナ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        お名前 <span className="text-red-500 text-xs">[必須]</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例）山田 花子"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        フリガナ <span className="text-red-500 text-xs">[必須]</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例）ヤマダ ハナコ"
                        value={formData.kana}
                        onChange={(e) => setFormData({ ...formData, kana: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                      />
                    </div>
                  </div>

                  {/* 郵便番号 & 住所自動入力（スライド11仕様） */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      郵便番号 <span className="text-gray-600 text-xs font-normal">（住所自動入力）</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="例）153-0051（ハイフン有無どちらでも可）"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-2/3 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                      />
                      <button
                        type="button"
                        onClick={handlePostalLookup}
                        disabled={isSearchingZip}
                        className="w-1/3 px-3 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl border border-gray-300 text-xs flex items-center justify-center gap-1 transition"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span>{isSearchingZip ? "検索中..." : "住所自動入力"}</span>
                      </button>
                    </div>
                  </div>

                  {/* ご住所 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">ご住所</label>
                    <input
                      type="text"
                      placeholder="例）東京都目黒区上目黒1-2-3 ○○マンション101"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                    />
                  </div>

                  {/* メールアドレス & 電話番号 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        メールアドレス <span className="text-red-500 text-xs">[必須]</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="例）contact@estudio-oloroso.jp"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        お電話番号 <span className="text-red-500 text-xs">[必須]</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="例）090-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                      />
                    </div>
                  </div>

                  {/* 次へ進むボタン */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-sm"
                    >
                      <span>次へ進む（希望日時の選択）</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: 希望日時・クラス選択 */}
              {currentStep === 2 && (
                <form onSubmit={handleNextStep} className="space-y-6 text-xs sm:text-sm">
                  {inquiryType === "trial" ? (
                    <>
                      {/* クラス & シューズサイズ */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-gray-700 mb-1">
                            体験希望クラス <span className="text-red-500 text-xs">[必須]</span>
                          </label>
                          <select
                            value={formData.preferredClass}
                            onChange={(e) => setFormData({ ...formData, preferredClass: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                          >
                            <option value="beginner">入門・基礎クラス（未経験〜初心者）</option>
                            <option value="choreography">初級・振付クラス（経験1年〜）</option>
                            <option value="technica">テクニカ集中クラス（全レベル）</option>
                            <option value="consult">講師と相談して決めたい</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">
                            シューズサイズ（無料レンタル）
                          </label>
                          <select
                            value={formData.shoeSize}
                            onChange={(e) => setFormData({ ...formData, shoeSize: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                          >
                            <option value="22.0">22.0 cm</option>
                            <option value="22.5">22.5 cm</option>
                            <option value="23.0">23.0 cm</option>
                            <option value="23.5">23.5 cm (標準)</option>
                            <option value="24.0">24.0 cm</option>
                            <option value="24.5">24.5 cm</option>
                            <option value="25.0">25.0 cm 以上</option>
                            <option value="own">マイシューズを持参する</option>
                          </select>
                        </div>
                      </div>

                      {/* 希望日時（第1〜第3希望） */}
                      <div className="space-y-3 bg-[#FAF7F2] p-5 rounded-2xl border border-gray-200">
                        <span className="font-bold text-gray-800 block text-xs">
                          体験希望日時 <span className="text-red-500 text-xs">[第1希望必須]</span>
                        </span>
                        <div className="space-y-3">
                          <div>
                            <label className="text-[11px] text-gray-500 block mb-1">第1希望（必須）</label>
                            <input
                              type="text"
                              required
                              placeholder="例）10月14日(火) 11:00〜 入門クラス希望"
                              value={formData.preferredDate1}
                              onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-xs bg-white"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] text-gray-500 block mb-1">第2希望（任意）</label>
                              <input
                                type="text"
                                placeholder="例）10月18日(土) 10:30〜"
                                value={formData.preferredDate2}
                                onChange={(e) => setFormData({ ...formData, preferredDate2: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-xs bg-white"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] text-gray-500 block mb-1">第3希望（任意）</label>
                              <input
                                type="text"
                                placeholder="例）平日夜ならいつでも可"
                                value={formData.preferredDate3}
                                onChange={(e) => setFormData({ ...formData, preferredDate3: e.target.value })}
                                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-xs bg-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">
                        お問い合わせ件名 <span className="text-red-500 text-xs">[必須]</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例）スタジオレンタルについて、出演依頼など"
                        value={formData.preferredDate1}
                        onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                      />
                    </div>
                  )}

                  {/* メッセージ・質問 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      メッセージ・ご質問（任意）
                    </label>
                    <textarea
                      rows={3}
                      placeholder="これまでの運動経験や、ご不安な点などがございましたらご自由にご記入ください。"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-sm"
                    />
                  </div>

                  {/* ボタン群 */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-1/3 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-xs"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>戻る</span>
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-xs"
                    >
                      <span>確認画面へ進む</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: 確認画面 */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                  <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-gray-200 space-y-4">
                    <h3 className="font-bold text-sm text-[#801336] border-b pb-2">ご入力内容の確認</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-gray-500 block">種別</span>
                        <span className="font-bold text-gray-900">
                          {inquiryType === "trial" ? "体験レッスンのお申し込み" : "一般的なお問い合わせ"}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">お名前</span>
                        <span className="font-bold text-gray-900">{formData.name}（{formData.kana}）</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">メールアドレス</span>
                        <span className="font-bold text-gray-900">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">電話番号</span>
                        <span className="font-bold text-gray-900">{formData.phone}</span>
                      </div>
                      {formData.address && (
                        <div className="sm:col-span-2">
                          <span className="text-gray-500 block">ご住所</span>
                          <span className="text-gray-900">〒{formData.postalCode} {formData.address}</span>
                        </div>
                      )}
                      {inquiryType === "trial" && (
                        <>
                          <div>
                            <span className="text-gray-500 block">希望クラス</span>
                            <span className="font-bold text-gray-900">{formData.preferredClass}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">レンタルシューズ</span>
                            <span className="font-bold text-gray-900">{formData.shoeSize} cm</span>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-gray-500 block">体験希望日時</span>
                            <span className="font-bold text-gray-900">
                              第1希望: {formData.preferredDate1}
                              {formData.preferredDate2 && ` / 第2希望: ${formData.preferredDate2}`}
                              {formData.preferredDate3 && ` / 第3希望: ${formData.preferredDate3}`}
                            </span>
                          </div>
                        </>
                      )}
                      {formData.message && (
                        <div className="sm:col-span-2">
                          <span className="text-gray-500 block">メッセージ</span>
                          <p className="text-gray-800 whitespace-pre-wrap mt-0.5">{formData.message}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 個人情報同意チェック */}
                  <div className="flex items-start gap-2 pt-1">
                    <input type="checkbox" required id="agree" className="mt-1" defaultChecked />
                    <label htmlFor="agree" className="text-xs text-gray-600">
                      <a href="#" className="text-[#801336] underline">プライバシーポリシー</a>
                      に同意の上、送信します。
                    </label>
                  </div>

                  {/* 送信ボタン群 */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-1/3 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-xs"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>修正する</span>
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-4 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white font-bold rounded-xl shadow-xl transition flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>この内容で送信する（デモ）</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-gray-600">
                    ※ 本フォームはポートフォリオ用のデモ送信です。実際のメール配信や課金は行われません。
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* ========================================================= */}
          {/* P06-04: よくある質問 (FAQ) */}
          {/* ========================================================= */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#801336] tracking-widest uppercase">
                FAQ
              </span>
              <h2 className="font-serif-jp text-2xl font-bold text-gray-900 mt-1 mb-2">
                体験レッスンに関するよくあるご質問
              </h2>
              <p className="text-xs text-gray-500">
                初めての方から多く寄せられるご質問にお答えします。
              </p>
            </div>

            <div className="space-y-4">
              {contactFaqs.map((faq, idx) => {
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
        </>
      )}
    </div>
  );
}

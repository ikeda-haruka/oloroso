"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  KeyRound,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Video,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { DEMO_MEMBER, getLoggedInMember, setLoggedInMember, MemberUser } from "@/lib/memberAuth";

export default function MemberLoginPage() {
  const router = useRouter();
  const [emailOrId, setEmailOrId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentUser, setCurrentUser] = useState<MemberUser | null>(null);
  const [redirectUrl, setRedirectUrl] = useState("/members/reservation");

  useEffect(() => {
    // 既存ログイン状態の確認
    const logged = getLoggedInMember();
    setCurrentUser(logged);

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const redir = params.get("redirect");
      if (redir) {
        setRedirectUrl(redir);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!emailOrId.trim() || !password.trim()) {
      setErrorMsg("会員番号またはメールアドレス、パスワードを入力してください。");
      return;
    }

    // デモログイン処理（任意の入力、または指定デモIDで成功）
    const userToLogin: MemberUser = {
      ...DEMO_MEMBER,
      email: emailOrId.includes("@") ? emailOrId : DEMO_MEMBER.email,
    };

    setLoggedInMember(userToLogin);
    setCurrentUser(userToLogin);
    router.push(redirectUrl);
  };

  const handleDemoQuickLogin = () => {
    setEmailOrId(DEMO_MEMBER.memberId);
    setPassword("flamenco2026");
    setLoggedInMember(DEMO_MEMBER);
    setCurrentUser(DEMO_MEMBER);
    setTimeout(() => {
      router.push(redirectUrl);
    }, 400);
  };

  const handleLogout = () => {
    setLoggedInMember(null);
    setCurrentUser(null);
    setEmailOrId("");
    setPassword("");
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto space-y-8">
      {/* ページヘッダー */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold shadow-xs">
          <Lock className="w-3.5 h-3.5 text-[#801336]" />
          <span>在籍受講生専用ポータル</span>
        </div>
        <h1 className="font-serif-jp text-2xl sm:text-3xl font-bold text-gray-900">
          会員ログイン
        </h1>
        <p className="text-xs text-gray-600">
          スタジオ予約やレッスン動画アーカイブをご利用いただけます。
        </p>
      </div>

      {/* 免責バナー */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed shadow-xs">
        <p className="font-bold mb-1 flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-[#801336]" />
          ポートフォリオ用デモ画面
        </p>
        当機能は受講生専用システムの設計・操作シミュレーションです。
        下記の「デモ会員で簡単ログイン」ボタンを押すと、即座にログイン後の予約画面へ遷移して操作をお試しいただけます。
      </div>

      {currentUser ? (
        /* 既にログイン中 */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-200 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">現在ログイン中</span>
            <h2 className="font-serif-jp text-xl font-bold text-gray-900 mt-1">
              {currentUser.name} 様
            </h2>
            <p className="text-xs text-gray-600 mt-1">会員番号: {currentUser.memberId}</p>
            <p className="text-xs text-[#801336] font-semibold mt-0.5">{currentUser.plan}</p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href={redirectUrl}
              className="w-full py-3.5 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>スタジオ予約画面へ進む</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/members/archive"
              className="w-full py-3 bg-[#FAF7F2] hover:bg-amber-50 text-amber-950 border border-amber-300 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-[#801336]" />
              <span>レッスン動画アーカイブを見る</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-gray-500 hover:text-red-700 underline pt-2"
            >
              ログアウトする
            </button>
          </div>
        </div>
      ) : (
        /* ログインフォーム */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-200 space-y-6">
          {/* ワンクリック簡単ログインボタン */}
          <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-300 space-y-2">
            <span className="text-[11px] font-bold text-amber-900 block flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              お試しデモログイン（推奨）
            </span>
            <p className="text-[11px] text-gray-600">
              生徒アカウント（山田花子様 / 初級振付クラス）として1秒でログインできます。
            </p>
            <button
              type="button"
              onClick={handleDemoQuickLogin}
              className="w-full py-2.5 bg-gradient-to-r from-[#C5A059] to-[#E8C888] hover:opacity-95 text-[#2B0A11] font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5"
            >
              <span>デモ会員としてワンクリックでログイン</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative text-center my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <span className="relative bg-white px-3 text-[11px] text-gray-400 font-medium">または手動入力</span>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-gray-700 mb-1">
                会員番号 または メールアドレス
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="例）OLR-10023 または member@example.com"
                  value={emailOrId}
                  onChange={(e) => setEmailOrId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-xs sm:text-sm"
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">
                パスワード
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="パスワードを入力"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#801336] bg-[#FAF7F2]/50 text-xs sm:text-sm"
                />
                <KeyRound className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>ログインする</span>
              </button>
            </div>
          </form>

          {/* 会員サポート・お困りの方 */}
          <div className="pt-4 border-t border-gray-100 text-center space-y-2 text-xs text-gray-500">
            <p>
              パスワードをお忘れの方、または会員番号が不明な方は、受付スタッフまたはスタジオ公式LINEまでお問い合わせください。
            </p>
            <div className="pt-1">
              <a
                href="https://line.me/R/ti/p/@estudio_oloroso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06C755] font-bold hover:underline inline-flex items-center gap-1"
              >
                公式LINEでログイン情報を確認する ›
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 関連リンク */}
      <div className="text-center text-xs text-gray-500 space-y-1">
        <Link href="/" className="hover:text-[#801336] underline">
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}

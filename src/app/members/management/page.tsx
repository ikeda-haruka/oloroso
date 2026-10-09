import Link from "next/link";
import {
  Users,
  UserCheck,
  ShieldCheck,
  Settings,
  ExternalLink,
  Briefcase,
  Clock,
  Mail,
  Calendar,
  Video,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { getAllStaff, getAllMembers } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "館員・受講生会員 管理ポータル | Estudio Oloroso",
  description: "Estudio Oloroso の館員（スタジオスタッフ・講師・受付）および受講生会員の登録・管理ポータルです。",
};

export default function ManagementPortalPage() {
  const staffList = getAllStaff();
  const memberList = getAllMembers();

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* ページヘッダー */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-200 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold mb-3 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#801336]" />
            <span>スタジオ運営・CMS管理連携</span>
          </div>
          <h1 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            館員・受講生会員 管理ポータル
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            スタジオ常駐スタッフ・講師陣（館員）および在籍生徒（会員）の登録・権限情報を管理します。
            新規登録や詳細編集はDecap CMS管理画面より即時反映できます。
          </p>
        </div>

        {/* CMSへのリンクボタン */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#801336] text-white text-sm font-bold shadow-md hover:bg-[#600e28] transition-colors"
          >
            <Settings className="w-4 h-4 text-[#C5A059]" />
            <span>Decap CMS で編集・新規追加</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
          </Link>
          <Link
            href="/members/reservation"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            <span>スタジオ予約確認</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      </div>

      {/* 統計サマリーカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#801336]/10 text-[#801336] flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">登録館員（スタッフ）数</div>
            <div className="text-2xl font-bold text-gray-900 mt-0.5">{staffList.length} 名</div>
            <div className="text-[11px] text-[#801336] font-semibold mt-0.5">主宰・講師・受付常駐</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">登録受講生会員数</div>
            <div className="text-2xl font-bold text-gray-900 mt-0.5">{memberList.length} 名</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">全員在籍・受講中</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">スタジオ予約権限</div>
            <div className="text-2xl font-bold text-gray-900 mt-0.5">
              {memberList.filter((m) => m.canReserveStudio).length} 名
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">自主練習枠利用可</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-700 flex items-center justify-center shrink-0">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">動画アーカイブ権限</div>
            <div className="text-2xl font-bold text-gray-900 mt-0.5">
              {memberList.filter((m) => m.canAccessArchive).length} 名
            </div>
            <div className="text-[11px] text-purple-600 font-semibold mt-0.5">全動画視聴可</div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* セクション 1: 館員・スタジオスタッフ一覧 */}
      {/* ======================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#801336]" />
            <h2 className="text-xl font-bold text-gray-900 font-serif-jp">
              館員・スタジオスタッフ情報（{staffList.length}件）
            </h2>
          </div>
          <span className="text-xs text-gray-500">
            Decap CMS コレクション: <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-700">staff</code>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffList.map((staff) => (
            <div
              key={staff.staffId}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* ヘッダー */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase bg-gray-100 px-2 py-0.5 rounded">
                      {staff.staffId}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {staff.name}
                    </h3>
                    <p className="text-xs text-gray-500">{staff.kana}</p>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-bold shrink-0 ${
                      staff.status === "在籍・稼働中"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {staff.status}
                  </span>
                </div>

                {/* 役職・勤務形態 */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="font-bold text-[#801336] bg-[#801336]/10 px-2 py-0.5 rounded">
                      {staff.role}
                    </span>
                    <span className="text-gray-500">/ {staff.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 pt-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{staff.scheduleSummary || "シフト要確認"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="truncate">{staff.email}</span>
                  </div>
                </div>

                {/* 担当業務 */}
                {staff.responsibilities.length > 0 && (
                  <div className="space-y-1 pt-2 border-t border-gray-100">
                    <div className="text-[11px] font-bold text-gray-700">主な担当業務:</div>
                    <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                      {staff.responsibilities.map((resp, idx) => (
                        <li key={idx} className="leading-snug">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 自己紹介抜粋 */}
                {staff.bio && (
                  <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl line-clamp-3 leading-relaxed">
                    {staff.bio}
                  </p>
                )}
              </div>

              {/* フッターアクション */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">着任: {staff.joinedDate || "未設定"}</span>
                <Link
                  href={`/admin/#/collections/staff/entries/${staff.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#801336] hover:text-[#C5A059] flex items-center gap-1"
                >
                  <span>CMSで編集</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* セクション 2: 会員・受講生一覧 */}
      {/* ======================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#801336]" />
            <h2 className="text-xl font-bold text-gray-900 font-serif-jp">
              会員・受講生情報（{memberList.length}件）
            </h2>
          </div>
          <span className="text-xs text-gray-500">
            Decap CMS コレクション: <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-700">members</code>
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-700">
              <thead className="bg-[#FAF7F2] text-gray-700 border-b border-gray-200 font-bold">
                <tr>
                  <th className="py-3.5 px-4">会員番号 / 氏名</th>
                  <th className="py-3.5 px-4">所属クラス / プラン</th>
                  <th className="py-3.5 px-4">連絡先（メール/TEL）</th>
                  <th className="py-3.5 px-4">ステータス</th>
                  <th className="py-3.5 px-4">機能権限</th>
                  <th className="py-3.5 px-4">特記事項</th>
                  <th className="py-3.5 px-4 text-right">CMS操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {memberList.map((m) => (
                  <tr key={m.memberId} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-bold text-gray-900 text-sm">{m.name}</div>
                      <div className="text-[11px] text-gray-500 font-mono">{m.memberId} ({m.kana})</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#801336]">{m.classLevel}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{m.plan}</div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div>{m.email}</div>
                      <div className="text-gray-400 font-mono">{m.phone || "未登録"}</div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <UserCheck className="w-3 h-3" />
                        {m.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-medium ${
                            m.canReserveStudio ? "text-emerald-700" : "text-gray-400"
                          }`}
                        >
                          <Calendar className="w-3 h-3" />
                          スタジオ予約: {m.canReserveStudio ? "有効" : "無効"}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-medium ${
                            m.canAccessArchive ? "text-purple-700" : "text-gray-400"
                          }`}
                        >
                          <Video className="w-3 h-3" />
                          動画視聴: {m.canAccessArchive ? "有効" : "無効"}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed">
                        {m.notes || "—"}
                      </p>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-right">
                      <Link
                        href={`/admin/#/collections/members/entries/${m.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#801336] hover:text-white text-gray-700 text-xs font-bold transition-colors"
                      >
                        <span>CMS編集</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 運用ガイド案内 */}
      <div className="bg-[#FAF7F2] border border-[#801336]/20 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#801336]" />
          <h3 className="font-serif-jp text-lg font-bold text-gray-900">
            館員・会員管理の運用フロー（Decap CMS連携）
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700">
          <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
            <span className="font-bold text-[#801336] text-sm block">1. CMSから新規追加</span>
            <p className="leading-relaxed">
              <Link href="/admin" target="_blank" className="text-[#801336] underline font-bold">
                Decap CMS（/admin）
              </Link>
              にログインし、「館員・スタジオスタッフ管理」または「会員・受講生管理」から新規追加します。
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
            <span className="font-bold text-[#801336] text-sm block">2. 自動Gitコミット・同期</span>
            <p className="leading-relaxed">
              CMS上で保存・Publishすると、GitHubリポジトリ（content/staff/ または content/members/）にMarkdownファイルとして自動コミットされます。
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
            <span className="font-bold text-[#801336] text-sm block">3. 権限・表示の即時反映</span>
            <p className="leading-relaxed">
              スタジオ紹介ページ（About）の館員紹介、受講生ポータル、自主練習予約システムとシームレスにデータが連動します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

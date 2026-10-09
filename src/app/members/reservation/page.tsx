"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CalendarCheck,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle2,
  X,
  AlertCircle,
  Video,
  LogOut,
  ChevronRight,
  Sparkles,
  Info,
  Check,
  ArrowRight,
  Lock,
} from "lucide-react";
import {
  MemberUser,
  StudioReservation,
  DEMO_MEMBER,
  getLoggedInMember,
  setLoggedInMember,
  getMemberReservations,
  addMemberReservation,
  cancelMemberReservation,
} from "@/lib/memberAuth";

interface SlotItem {
  id: string;
  timeSlot: string;
  studioName: string;
  status: "available" | "lesson" | "reserved";
  note: string;
}

export default function MemberReservationPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<MemberUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [reservations, setReservations] = useState<StudioReservation[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedStudio, setSelectedStudio] = useState<"A" | "B">("A");

  // 予約モーダル状態
  const [activeSlot, setActiveSlot] = useState<SlotItem | null>(null);
  const [purpose, setPurpose] = useState("自主練習（足打ち・振付復習）");
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["Bluetoothスピーカー利用"]);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // 向こう14日間の日付リストを生成
  const [dateList, setDateList] = useState<{ dateStr: string; label: string; dayOfWeek: string; isSunday: boolean }[]>([]);

  useEffect(() => {
    const logged = getLoggedInMember();
    setCurrentUser(logged);
    setIsAuthLoading(false);

    if (logged) {
      setReservations(getMemberReservations());
    }

    // 日付リスト初期化（今日から14日間）
    const dates = [];
    const daysJapanese = ["日", "月", "火", "水", "木", "金", "土"];
    const now = new Date();

    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(now.getDate() + i);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const dateStr = `${yyyy}-${mm}-${dd}`;
      const dayOfWeek = daysJapanese[d.getDay()];

      dates.push({
        dateStr,
        label: `${d.getMonth() + 1}/${d.getDate()}`,
        dayOfWeek: `(${dayOfWeek})`,
        isSunday: d.getDay() === 0,
      });
    }

    setDateList(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].dateStr);
    }
  }, []);

  const handleDemoLogin = () => {
    setLoggedInMember(DEMO_MEMBER);
    setCurrentUser(DEMO_MEMBER);
    setReservations(getMemberReservations());
  };

  const handleLogout = () => {
    setLoggedInMember(null);
    setCurrentUser(null);
    router.push("/members/login");
  };

  // スロット一覧の動的シミュレーション
  const generateSlots = (): SlotItem[] => {
    const studioName = selectedStudio === "A" ? "メインスタジオ A（特注無垢フロア）" : "サブスタジオ B（個人練習用）";
    const selectedDateObj = dateList.find((d) => d.dateStr === selectedDate);
    const isSunday = selectedDateObj?.isSunday ?? false;

    if (selectedStudio === "A") {
      return [
        {
          id: "slot-1",
          timeSlot: "10:00 - 11:30",
          studioName,
          status: isSunday ? "available" : "lesson",
          note: isSunday ? "日曜自主練習枠（空き）" : "入門・基礎クラス開講中",
        },
        {
          id: "slot-2",
          timeSlot: "12:00 - 13:30",
          studioName,
          status: "available",
          note: "自主練習・レンタル利用可能",
        },
        {
          id: "slot-3",
          timeSlot: "14:00 - 16:00",
          studioName,
          status: isSunday ? "available" : "reserved",
          note: isSunday ? "日曜自主練習・開放枠（予約受付中）" : "プライベート枠（満室）",
        },
        {
          id: "slot-4",
          timeSlot: "16:30 - 18:00",
          studioName,
          status: "available",
          note: "自主練習・レンタル利用可能",
        },
        {
          id: "slot-5",
          timeSlot: "18:30 - 20:00",
          studioName,
          status: isSunday ? "available" : "lesson",
          note: isSunday ? "自主練習利用可能" : "初級・振付クラス開講中",
        },
        {
          id: "slot-6",
          timeSlot: "20:00 - 21:30",
          studioName,
          status: isSunday ? "reserved" : "available",
          note: isSunday ? "予約済み" : "夜間自主練習枠（空き）",
        },
      ];
    } else {
      // サブスタジオ B
      return [
        {
          id: "slot-b1",
          timeSlot: "10:30 - 12:00",
          studioName,
          status: "available",
          note: "個人練習用（空き）",
        },
        {
          id: "slot-b2",
          timeSlot: "13:00 - 14:30",
          studioName,
          status: "available",
          note: "個人練習用（空き）",
        },
        {
          id: "slot-b3",
          timeSlot: "15:00 - 16:30",
          studioName,
          status: "reserved",
          note: "受講生予約済み",
        },
        {
          id: "slot-b4",
          timeSlot: "17:00 - 18:30",
          studioName,
          status: "available",
          note: "個人練習用（空き）",
        },
        {
          id: "slot-b5",
          timeSlot: "19:00 - 20:30",
          studioName,
          status: "available",
          note: "個人練習用（空き）",
        },
      ];
    }
  };

  const handleOpenReserveModal = (slot: SlotItem) => {
    setActiveSlot(slot);
    setPurpose("自主練習（足打ち・振付復習）");
    setPeopleCount(1);
    setSelectedOptions(["Bluetoothスピーカー利用"]);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSlot) return;

    const newRsv = addMemberReservation({
      date: selectedDate,
      timeSlot: activeSlot.timeSlot,
      studioName: activeSlot.studioName,
      purpose,
      peopleCount,
      options: selectedOptions,
    });

    setReservations(getMemberReservations());
    setActiveSlot(null);
    setSuccessToast(`【予約完了】${selectedDate} ${activeSlot.timeSlot} ${activeSlot.studioName} のご予約を確定しました。`);

    setTimeout(() => {
      setSuccessToast(null);
    }, 6000);
  };

  const handleCancel = (id: string) => {
    if (confirm("このスタジオ予約をキャンセルしてもよろしいですか？")) {
      cancelMemberReservation(id);
      setReservations(getMemberReservations());
    }
  };

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  if (isAuthLoading) {
    return <div className="py-24 text-center text-xs text-gray-500">会員情報を確認中...</div>;
  }

  // 未ログインの場合のガード表示
  if (!currentUser) {
    return (
      <div className="py-20 px-4 max-w-lg mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto border border-amber-300">
          <Lock className="w-8 h-8 text-[#801336]" />
        </div>
        <h1 className="font-serif-jp text-2xl font-bold text-gray-900">
          会員認証が必要です
        </h1>
        <p className="text-xs text-gray-600 leading-relaxed">
          スタジオ自主練習枠・レンタルWeb予約は、Estudio Oloroso在籍の受講生専用サービスです。
          会員番号またはメールアドレスでログインしてご利用ください。
        </p>

        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 text-left space-y-2">
          <p className="font-bold">【ポートフォリオ審査用デモ】</p>
          <p>以下のボタンからデモアカウントとして即時ログインできます。</p>
          <button
            onClick={handleDemoLogin}
            className="w-full py-2.5 bg-[#801336] text-white font-bold rounded-xl shadow hover:bg-[#721B29] transition flex items-center justify-center gap-2 mt-2"
          >
            <span>デモ会員として即時ログインして試す</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-4 flex justify-center gap-4 text-xs">
          <Link
            href="/members/login?redirect=/members/reservation"
            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 font-bold rounded-xl text-gray-700 transition"
          >
            ログイン画面へ
          </Link>
          <Link href="/" className="px-6 py-2.5 text-gray-500 hover:underline">
            トップページへ戻る
          </Link>
        </div>
      </div>
    );
  }

  const currentSlots = generateSlots();
  const confirmedReservations = reservations.filter((r) => r.status === "confirmed");

  return (
    <div className="space-y-12 py-10 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 完了通知トースト */}
      {successToast && (
        <div className="fixed top-20 right-4 left-4 sm:left-auto sm:max-w-md z-50 bg-[#2B0A11] text-[#E8C888] border-2 border-[#C5A059] p-4 rounded-2xl shadow-2xl flex items-start gap-3 animate-slideDown">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold block text-white mb-0.5">予約完了</span>
            <p className="text-gray-200">{successToast}</p>
          </div>
          <button onClick={() => setSuccessToast(null)} className="ml-auto text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 会員情報バナー */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#801336] to-[#721B29] text-[#E8C888] flex items-center justify-center font-serif-jp text-2xl font-bold shadow-md shrink-0">
            {currentUser.name.slice(0, 1)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#801336] bg-[#801336]/10 px-2.5 py-0.5 rounded-full">
                在籍生徒
              </span>
              <span className="text-xs text-gray-500 font-mono">No. {currentUser.memberId}</span>
            </div>
            <h1 className="font-serif-jp text-xl sm:text-2xl font-bold text-gray-900 mt-1">
              {currentUser.name} 様
            </h1>
            <p className="text-xs text-gray-600 mt-0.5">
              所属: <strong>{currentUser.classLevel}</strong> / プラン: {currentUser.plan}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Link
            href="/members/archive"
            className="flex-1 md:flex-initial px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Video className="w-3.5 h-3.5 text-[#801336]" />
            <span>動画アーカイブへ</span>
          </Link>
          <button
            onClick={handleLogout}
            className="px-3.5 py-2 text-xs text-gray-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition flex items-center gap-1"
            title="ログアウト"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>ログアウト</span>
          </button>
        </div>
      </div>

      {/* 現在のマイ予約状況 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif-jp text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-[#801336]" />
            <span>現在の予約状況（マイ予約）</span>
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            確定予約: {confirmedReservations.length} 件
          </span>
        </div>

        {confirmedReservations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {confirmedReservations.map((rsv) => (
              <div
                key={rsv.id}
                className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm flex flex-col justify-between space-y-3 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-[#801336] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider">
                  予約確定
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#801336] mb-1">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>{rsv.date}</span>
                    <Clock className="w-3.5 h-3.5 ml-2" />
                    <span>{rsv.timeSlot}</span>
                  </div>
                  <h3 className="font-serif-jp text-base font-bold text-gray-900">
                    {rsv.studioName}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">目的: {rsv.purpose}</p>
                  {rsv.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {rsv.options.map((opt, oIdx) => (
                        <span
                          key={oIdx}
                          className="text-[10px] bg-[#FAF7F2] text-gray-600 px-2 py-0.5 rounded border border-gray-200"
                        >
                          {opt}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-gray-400">予約番号: {rsv.id}</span>
                  <button
                    onClick={() => handleCancel(rsv.id)}
                    className="text-xs text-red-600 hover:text-red-800 font-bold hover:underline"
                  >
                    キャンセルする
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#FAF7F2] rounded-2xl p-8 text-center text-xs text-gray-500 border border-gray-200">
            現在、確定しているスタジオ予約はありません。下のカレンダーより空き枠をご予約ください。
          </div>
        )}
      </section>

      {/* 新規スタジオ空き枠カレンダー・予約セクション */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-[#801336]/10 text-[#801336] rounded-full text-xs font-bold mb-2">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>24時間オンライン即時受付</span>
          </div>
          <h2 className="font-serif-jp text-xl sm:text-2xl font-bold text-gray-900">
            スタジオ空き枠から予約する
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            日付とスタジオを選択し、空いている時間枠（スロット）をクリックしてご予約ください。
          </p>
        </div>

        {/* 日付セレクター（横スクロール） */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2">1. ご利用日の選択</label>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {dateList.map((d) => (
              <button
                key={d.dateStr}
                onClick={() => setSelectedDate(d.dateStr)}
                className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold transition flex flex-col items-center min-w-[70px] shrink-0 border ${
                  selectedDate === d.dateStr
                    ? "bg-[#801336] text-white border-[#801336] shadow-md scale-105"
                    : d.isSunday
                    ? "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100"
                    : "bg-[#FAF7F2] text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <span className="text-[11px] opacity-80">{d.dayOfWeek}</span>
                <span className="text-sm mt-0.5">{d.label}</span>
                {d.isSunday && (
                  <span className={`text-[9px] mt-0.5 px-1 rounded ${selectedDate === d.dateStr ? "bg-white/20 text-white" : "bg-[#801336] text-white"}`}>
                    自主練習日
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* スタジオ選択タブ */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2">2. スタジオ室の選択</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedStudio("A")}
              className={`p-4 rounded-2xl border text-left transition flex items-start justify-between ${
                selectedStudio === "A"
                  ? "bg-white border-[#801336] ring-2 ring-[#801336]/20 shadow-sm"
                  : "bg-[#FAF7F2] border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-[#801336] uppercase tracking-wider block">STUDIO A</span>
                <h3 className="font-serif-jp text-base font-bold text-gray-900 mt-0.5">
                  メインスタジオ A
                </h3>
                <p className="text-[11px] text-gray-600 mt-1">
                  特注サクラ無垢スプリングフロア（広さ45㎡）/ 幅10m大型ミラー / ハイレゾ音響完備
                </p>
                <span className="text-[10px] text-green-700 font-bold mt-2 inline-block">
                  ★ 日曜午後は生徒専用の自主練習枠として開放
                </span>
              </div>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedStudio === "A" ? "border-[#801336] bg-[#801336] text-white" : "border-gray-300"
                }`}
              >
                {selectedStudio === "A" && <Check className="w-3 h-3" />}
              </div>
            </button>

            <button
              onClick={() => setSelectedStudio("B")}
              className={`p-4 rounded-2xl border text-left transition flex items-start justify-between ${
                selectedStudio === "B"
                  ? "bg-white border-[#801336] ring-2 ring-[#801336]/20 shadow-sm"
                  : "bg-[#FAF7F2] border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-[#801336] uppercase tracking-wider block">STUDIO B</span>
                <h3 className="font-serif-jp text-base font-bold text-gray-900 mt-0.5">
                  サブスタジオ B
                </h3>
                <p className="text-[11px] text-gray-600 mt-1">
                  個人練習・ソロ特訓専用フロア（広さ20㎡）/ 幅4mミラー / Bluetoothプレイヤー
                </p>
                <span className="text-[10px] text-gray-500 font-medium mt-2 inline-block">
                  少人数・ソロ練習に最適
                </span>
              </div>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedStudio === "B" ? "border-[#801336] bg-[#801336] text-white" : "border-gray-300"
                }`}
              >
                {selectedStudio === "B" && <Check className="w-3 h-3" />}
              </div>
            </button>
          </div>
        </div>

        {/* タイムスロット一覧 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-gray-700">
              3. 空き時間枠（スロット）を選択
            </label>
            <span className="text-[11px] text-gray-500">選択日: {selectedDate}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentSlots.map((slot) => {
              const isAvail = slot.status === "available";
              return (
                <div
                  key={slot.id}
                  className={`p-4 rounded-2xl border transition flex flex-col justify-between ${
                    isAvail
                      ? "bg-white border-amber-300 hover:border-[#801336] hover:shadow-md cursor-pointer"
                      : "bg-gray-50 border-gray-200 opacity-60"
                  }`}
                  onClick={() => {
                    if (isAvail) handleOpenReserveModal(slot);
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold font-mono text-gray-900 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#801336]" />
                        {slot.timeSlot}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isAvail
                            ? "bg-green-100 text-green-800"
                            : slot.status === "lesson"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {isAvail ? "予約可能" : slot.status === "lesson" ? "レッスン中" : "満室"}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500">{slot.note}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#801336]">
                      {isAvail ? "¥0（プラン適用無料）" : "受付不可"}
                    </span>
                    {isAvail && (
                      <span className="text-[11px] font-bold text-[#801336] hover:underline flex items-center gap-0.5">
                        予約へ進む ›
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* スタジオ利用ルール & スタッフ常駐アナウンス */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-jp text-base font-bold text-gray-900">
              安心の専任受付スタッフ常駐 & スタジオご利用ルール
            </h3>
            <p className="text-xs text-gray-600">
              生徒の皆様が気持ちよく安全にご練習いただけるよう、以下のご協力をお願いいたします。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-gray-600">
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-gray-100 space-y-1">
            <p className="font-bold text-gray-800">1. 入退室時の受付確認</p>
            <p>入室時は受付スタッフに会員証をご提示ください。開錠・音響操作もお気軽にお声がけいただけます。</p>
          </div>
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-gray-100 space-y-1">
            <p className="font-bold text-gray-800">2. 特注無垢床の保護</p>
            <p>土足厳禁です。フラメンコシューズの鋲にサビや石が挟まっていないか、入室前にご確認をお願いします。</p>
          </div>
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-gray-100 space-y-1">
            <p className="font-bold text-gray-800">3. 退室5分前のモップ清掃</p>
            <p>次の方が気持ちよく使えるよう、終了5分前に備え付けのフロアモップで床の汗拭き掛けにご協力ください。</p>
          </div>
        </div>
      </section>

      {/* 予約確認モーダル */}
      {activeSlot && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-200 relative space-y-5 animate-scaleUp">
            <button
              onClick={() => setActiveSlot(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
                <CalendarCheck className="w-3.5 h-3.5 text-[#801336]" />
                <span>スタジオ予約内容の確認</span>
              </div>
              <h3 className="font-serif-jp text-xl font-bold text-gray-900">
                {activeSlot.studioName}
              </h3>
              <p className="text-xs text-[#801336] font-bold mt-1">
                日時: {selectedDate} / {activeSlot.timeSlot}
              </p>
            </div>

            <form onSubmit={handleConfirmReservation} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  ご利用目的
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-[#FAF7F2] text-xs font-medium"
                >
                  <option value="自主練習（足打ち・振付復習）">自主練習（足打ち・振付復習）</option>
                  <option value="アレグリアス / アバニコ個人練習">アレグリアス / アバニコ個人練習</option>
                  <option value="セビジャーナス全番復習">セビジャーナス全番復習</option>
                  <option value="発表会前・舞台対策ソロ特訓">発表会前・舞台対策ソロ特訓</option>
                  <option value="その他">その他（個人練習）</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">ご利用人数</label>
                <select
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-[#FAF7F2] text-xs font-medium"
                >
                  <option value={1}>1名（個人練習）</option>
                  <option value={2}>2名（クラス仲間と合同練習）</option>
                  <option value={3}>3名以上</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  無料レンタルオプション備品（希望のものにチェック）
                </label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {[
                    "Bluetoothスピーカー利用",
                    "メトロノーム利用",
                    "予備アバニコ（扇子）貸出",
                    "練習用マントン貸出",
                    "スマホ・撮影用三脚貸出",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className={`p-2 rounded-xl border text-[11px] flex items-center gap-2 cursor-pointer transition ${
                        selectedOptions.includes(opt)
                          ? "bg-amber-50 border-amber-300 text-amber-950 font-bold"
                          : "bg-white border-gray-200 text-gray-600"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(opt)}
                        onChange={() => toggleOption(opt)}
                        className="rounded text-[#801336]"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-gray-500 block text-[11px]">利用料金</span>
                  <span className="font-bold text-sm text-[#801336]">¥0（月謝プラン特典適用）</span>
                </div>
                <span className="text-[10px] text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200 font-bold">
                  会員特典 無料開放
                </span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSlot(null)}
                  className="w-1/3 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition text-center"
                >
                  戻る
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-gradient-to-r from-[#801336] to-[#721B29] hover:from-[#721B29] hover:to-[#580F1E] text-white font-bold rounded-xl shadow-lg transition text-center flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>この内容で予約を確定する</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

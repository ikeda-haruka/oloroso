export interface MemberUser {
  id: string;
  name: string;
  kana: string;
  email: string;
  memberId: string;
  plan: string;
  classLevel: string;
  joinedDate: string;
}

export interface StudioReservation {
  id: string;
  date: string;
  timeSlot: string;
  studioName: string;
  purpose: string;
  peopleCount: number;
  options: string[];
  status: "confirmed" | "cancelled";
  createdAt: string;
}

export const DEMO_MEMBER: MemberUser = {
  id: "user-10023",
  name: "山田 花子",
  kana: "ヤマダ ハナコ",
  email: "hanako.yamada@example.com",
  memberId: "OLR-10023",
  plan: "月4回レギュラープラン（自主練習レンタル20%OFF）",
  classLevel: "初級・振付クラス（火曜夜の部）",
  joinedDate: "2025年4月",
};

export const INITIAL_RESERVATIONS: StudioReservation[] = [
  {
    id: "RSV-20261011-01",
    date: "2026-10-11", // 今週日曜
    timeSlot: "14:00 - 15:30",
    studioName: "メインスタジオ A（特注無垢フロア）",
    purpose: "日曜自主練習（アレグリアスの足打ち・アバニコ確認）",
    peopleCount: 1,
    options: ["Bluetoothスピーカー利用", "予備アバニコ貸出"],
    status: "confirmed",
    createdAt: "2026-10-07 18:30",
  },
  {
    id: "RSV-20261018-02",
    date: "2026-10-18", // 来週日曜
    timeSlot: "14:00 - 16:00",
    studioName: "メインスタジオ A（特注無垢フロア）",
    purpose: "生徒専用自主練習枠（セビジャーナス＆足打ち反復）",
    peopleCount: 1,
    options: ["メトロノーム利用"],
    status: "confirmed",
    createdAt: "2026-10-08 20:15",
  },
];

const AUTH_KEY = "oloroso_member_auth";
const RESERVATIONS_KEY = "oloroso_member_reservations";

export function getLoggedInMember(): MemberUser | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(AUTH_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setLoggedInMember(member: MemberUser | null): void {
  if (typeof window === "undefined") return;
  if (!member) {
    localStorage.removeItem(AUTH_KEY);
  } else {
    localStorage.setItem(AUTH_KEY, JSON.stringify(member));
  }
}

export function getMemberReservations(): StudioReservation[] {
  if (typeof window === "undefined") return INITIAL_RESERVATIONS;
  const stored = localStorage.getItem(RESERVATIONS_KEY);
  if (!stored) {
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(INITIAL_RESERVATIONS));
    return INITIAL_RESERVATIONS;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return INITIAL_RESERVATIONS;
  }
}

export function addMemberReservation(rsv: Omit<StudioReservation, "id" | "status" | "createdAt">): StudioReservation {
  const current = getMemberReservations();
  const newRsv: StudioReservation = {
    ...rsv,
    id: `RSV-${Date.now().toString().slice(-6)}`,
    status: "confirmed",
    createdAt: new Date().toLocaleString("ja-JP", { hour12: false }),
  };
  const updated = [newRsv, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(updated));
  }
  return newRsv;
}

export function cancelMemberReservation(id: string): void {
  const current = getMemberReservations();
  const updated = current.map((item) =>
    item.id === id ? { ...item, status: "cancelled" as const } : item
  );
  if (typeof window !== "undefined") {
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(updated));
  }
}

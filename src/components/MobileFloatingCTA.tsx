"use client";

import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";

export default function MobileFloatingCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#801336]/20 p-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* LINE相談ボタン */}
        <a
          href="https://line.me/R/ti/p/@estudio_oloroso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-[#06C755] text-white rounded-lg text-xs font-bold shadow hover:opacity-95 transition"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>LINEで相談・予約</span>
        </a>

        {/* 体験予約ボタン */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-gradient-to-r from-[#801336] to-[#721B29] text-white rounded-lg text-xs font-bold shadow hover:brightness-105 transition"
        >
          <Calendar className="w-4 h-4 shrink-0 text-[#E8C888]" />
          <span>体験レッスン予約</span>
        </Link>
      </div>
    </div>
  );
}

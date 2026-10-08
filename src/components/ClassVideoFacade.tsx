"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

interface ClassVideoFacadeProps {
  title: string;
  classNameId: string;
}

export default function ClassVideoFacade({ title, classNameId }: ClassVideoFacadeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm text-[11px] font-bold shadow transition"
        title={`${title}のレッスン風景動画を見る`}
      >
        <Play className="w-3.5 h-3.5 text-[#E8C888] fill-[#E8C888]" />
        <span>レッスン風景動画</span>
      </button>

      {/* 動画ポップアップモーダル */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#1C1917] rounded-3xl p-4 sm:p-6 max-w-2xl w-full shadow-2xl relative space-y-4 border border-white/10 text-white">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-[#E8C888]">LESSON VIDEO PREVIEW</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition"
                aria-label="閉じる"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h4 className="font-serif-jp text-base sm:text-lg font-bold">{title} のレッスン風景</h4>

            {/* YouTubeファサード動画埋め込み */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
                title={`${title} レッスン風景動画（サンプル）`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-[11px] text-gray-400 text-center">
              ※本動画は外部連携・ファサードパターン仕様に基づいたデモプレビューです。
            </p>
          </div>
        </div>
      )}
    </>
  );
}

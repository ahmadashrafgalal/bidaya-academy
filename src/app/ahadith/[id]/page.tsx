"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ahadith } from "@/data/ahadith";

export default function SingleHadithPage() {
  const router = useRouter();
  const [hadith, setHadith] = useState<any>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const found = ahadith.find((h) => h.id === Number(router.query.id));
    setHadith(found);
  }, [router.isReady, router.query.id]);

  if (!router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p className="text-xl">جارٍ التحميل...</p>
      </div>
    );
  }

  if (!hadith) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <h1 className="text-2xl text-gray-700">الحديث غير موجود</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 flex flex-col items-center">
      {/* عنوان الحديث */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-right text-orange-600 w-full">
        {hadith.title}
      </h1>

      {/* محتوى الحديث */}
      <div className="bg-white w-full md:w-3/4 rounded-3xl shadow-lg border border-gray-200 p-8 flex flex-col gap-6">
        <p className="text-right text-gray-700 leading-relaxed text-lg md:text-xl">
          {hadith.content}
        </p>

        {/* مشغل الصوت */}
        {hadith.audio && (
          <div className="flex justify-center mt-4">
            <audio
              controls
              src={hadith.audio}
              className="w-full md:w-2/3 rounded-xl border border-orange-300 shadow-md"
            >
              متصفحك لا يدعم عنصر الصوت.
            </audio>
          </div>
        )}

      </div>
    </div>
  );
}
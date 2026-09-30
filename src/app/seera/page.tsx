"use client";

import { useState } from "react";
import Link from "next/link";
import { seera } from "@/data/seera";

export default function SeeraPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header & Navigation */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold gap-2 transition-colors"
          >
            <span>→ العودة للرئيسية</span>
          </Link>
          <span className="text-sm font-medium text-gray-500">
            أكاديمية بداية لتحفيظ القرآن الكريم | بإشراف الشيخ عبد الله جلال
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-right text-orange-600 mb-3">
          قسم السيرة النبوية العطرة
        </h1>
        <p className="text-gray-600 text-right text-lg">
          سيرة النبي المصطفى ﷺ، نسبه، بعثته، وهديه المبارك للأطفال والكبار
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {seera.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            {/* عنوان موضوع السيرة */}
            <div
              onClick={() =>
                setOpenId(openId === item.id ? null : item.id)
              }
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-lg md:text-xl font-semibold text-right text-gray-800">
                {item.title}
              </h2>
              <span className="text-orange-500 font-bold text-xl">
                {openId === item.id ? "-" : "+"}
              </span>
            </div>

            {/* محتوى موضوع السيرة */}
            {openId === item.id && (
              <div className="mt-4 text-right text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                <p className="whitespace-pre-line">{item.content}</p>

                <Link
                  href={`/seera/${item.id}`}
                  className="text-orange-600 mt-4 inline-block font-semibold hover:underline"
                >
                  قراءة كاملة والاستماع للتسجيل الصوتي →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
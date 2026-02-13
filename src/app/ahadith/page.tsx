"use client";

import { useState } from "react";
import Link from "next/link";
import { ahadith } from "@/data/ahadith";

export default function AhadithPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* عنوان الصفحة */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-right text-orange-600">
        قسم الأحاديث
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ahadith.map((hadith) => (
          <div
            key={hadith.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            {/* سؤال الحديث */}
            <div
              onClick={() =>
                setOpenId(openId === hadith.id ? null : hadith.id)
              }
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-lg md:text-xl font-semibold text-right text-gray-800">
                س{hadith.id}: {hadith.title}
              </h2>
              <span className="text-orange-500 font-bold">
                {openId === hadith.id ? "-" : "+"}
              </span>
            </div>

            {/* محتوى الحديث */}
            {openId === hadith.id && (
              <div className="mt-4 text-right text-gray-700 leading-relaxed">
                <p>{hadith.content}</p>

                <Link
                  href={`/ahadith/${hadith.id}`}
                  className="text-orange-600 mt-3 inline-block font-semibold hover:underline"
                >
                  قراءة كاملة →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
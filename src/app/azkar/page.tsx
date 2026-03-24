"use client";

import { useState } from "react";
import Link from "next/link";
import { Azkar } from "@/data/Azkar";

export default function AzkarPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* عنوان الصفحة */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-right text-orange-600">
        قسم الأدعية والأذكار
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Azkar.map((aq) => (
          <div
            key={aq.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            {/* سؤال العقيدة */}
            <div
              onClick={() =>
                setOpenId(openId === aq.id ? null : aq.id)
              }
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-lg md:text-xl font-semibold text-right text-gray-800">
                {aq.title}
              </h2>
              <span className="text-orange-500 font-bold">
                {openId === aq.id ? "-" : "+"}
              </span>
            </div>

            {/* محتوى العقيدة */}
            {openId === aq.id && (
              <div className="mt-4 text-right text-gray-700 leading-relaxed">
                <p>{aq.content}</p>

                <Link
                  href={`/Azkar/${aq.id}`}
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
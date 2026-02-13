"use client";

import { useState } from "react";
import Link from "next/link";
import { ahadith } from "@/data/ahadith";
export default function AhadithPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-right">
        قسم الأحاديث
      </h1>

      <div className="space-y-4">
        {ahadith.map((hadith) => (
          <div
            key={hadith.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <div
              onClick={() =>
                setOpenId(openId === hadith.id ? null : hadith.id)
              }
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-lg font-semibold text-right">
                س{hadith.id}: {hadith.title}
              </h2>

            </div>

            {openId === hadith.id && (
              <div className="mt-4 text-right text-gray-700">
                <p>{hadith.content}</p>

                <Link
                  href={`/ahadith/${hadith.id}`}
                  className="text-blue-600 mt-3 inline-block"
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
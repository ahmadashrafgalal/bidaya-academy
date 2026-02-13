import { ahadith } from "@/data/ahadith";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default function HadithDetails({ params }: Props) {
  const hadith = ahadith.find((h) => h.id === Number(params.id));

  if (!hadith) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 flex flex-col items-center">
      {/* عنوان الحديث */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-right text-orange-600 w-full md:w-3/4">
        س{hadith.id}: {hadith.title}
      </h1>

      {/* محتوى الحديث */}
      <div className="bg-white w-full md:w-3/4 rounded-3xl shadow-lg border border-gray-200 p-8 flex flex-col gap-6">
        <p className="text-right text-gray-700 leading-relaxed text-lg md:text-xl">
          {hadith.content}
        </p>

        {/* مشغل الصوت */}
        {hadith.audio && (
        <div className="flex justify-center mt-4 w-full">
            <div className="w-full md:w-2/3 bg-orange-50 border border-orange-300 rounded-2xl shadow-md p-4 flex items-center justify-center">
            <audio
                controls
                src={`/ahadith/${hadith.id}.mp3`}
                className="w-full rounded-xl"
            >
                متصفحك لا يدعم عنصر الصوت.
            </audio>
            </div>
        </div>
        )}

    
      </div>
    </div>
  );
}
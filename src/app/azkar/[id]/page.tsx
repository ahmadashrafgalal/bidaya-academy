import { Azkar } from "@/data/Azkar";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }> | { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const zekr = Azkar.find((a) => a.id === Number(resolvedParams.id));

  if (!zekr) {
    return {
      title: "الأدعية والأذكار | أكاديمية بداية",
    };
  }

  const cleanTitle = zekr.title.replace(/\n/g, " ").trim();
  const cleanSnippet = zekr.content.replace(/\n/g, " ").trim().slice(0, 160);

  return {
    title: `${cleanTitle} | قسم الأدعية والأذكار | أكاديمية بداية`,
    description: cleanSnippet,
    alternates: {
      canonical: `/azkar/${zekr.id}`,
    },
    openGraph: {
      title: `${cleanTitle} - أكاديمية بداية`,
      description: cleanSnippet,
      url: `https://bidaya-academy.vercel.app/azkar/${zekr.id}`,
      images: ["/bedaya.jpeg"],
    },
  };
}

export default async function AzkarDetails({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const zekr = Azkar.find((a) => a.id === Number(resolvedParams.id));

  if (!zekr) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex flex-col items-center">
      {/* Navigation Breadcrumb */}
      <div className="w-full md:w-3/4 mb-6 text-right">
        <Link
          href="/azkar"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold gap-2 transition-colors"
        >
          <span>→ العودة إلى جميع الأدعية والأذكار</span>
        </Link>
      </div>

      {/* عنوان الذكر */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-right text-orange-600 w-full md:w-3/4">
        {zekr.title}
      </h1>

      {/* محتوى الذكر */}
      <div className="bg-white w-full md:w-3/4 rounded-3xl shadow-lg border border-gray-200 p-8 flex flex-col gap-6">
        <div className="text-right text-gray-800 leading-relaxed text-lg md:text-xl whitespace-pre-line">
          {zekr.content}
        </div>

        {/* مشغل الصوت */}
        <div className="mt-4 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2 text-right">استمع إلى التسجيل الصوتي للذكر:</p>
          <audio
            src={`/Azkar/${zekr.id}.mp3`}
            controls
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
import { seera } from "@/data/seera";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default function aqDetails({ params }: Props) {
  const aq = seera.find((a) => a.id === Number(params.id));

  if (!aq) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 flex flex-col items-center">
      {/* عنوان الحديث */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-right text-orange-600 w-full md:w-3/4">
         {aq.title}
      </h1>

      {/* محتوى الحديث */}
      <div className="bg-white w-full md:w-3/4 rounded-3xl shadow-lg border border-gray-200 p-8 flex flex-col gap-6">
        <p className="text-right text-gray-700 leading-relaxed text-lg md:text-xl">
          {aq.content}
        </p>

        {/* مشغل الصوت */}

        <audio
          src={`/seera/${aq.id}.mp3`}
          controls
          className="w-full rounded-xl"
        />

       
      </div>
    </div>
  );
}
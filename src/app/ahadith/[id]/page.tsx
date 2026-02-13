import { ahadith } from "@/data/ahadith";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function HadithDetails({ params }: Props) {
  const hadith = ahadith.find(
    (h) => h.id === Number(params.id)
  );

  if (!hadith) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-right">
      <h1 className="text-2xl font-bold mb-6">
        س{hadith.id}: {hadith.title}
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="mb-6 text-lg">{hadith.content}</p>

        <audio
          src={`/ahadith/${hadith.id}.mp3`}
          controls
          className="w-full"
        />
      </div>
    </div>
  );
}
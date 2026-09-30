import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم الأدعية والأذكار اليومية | أكاديمية بداية",
  description:
    "أذكار الصباح والمساء، أدعية مأثورة من القرآن والسنة، مع التسجيلات الصوتية للاستماع والترديد في أكاديمية بداية لتحفيظ القرآن الكريم.",
  keywords: [
    "الأدعية والأذكار",
    "أذكار الصباح والمساء",
    "أدعية يومية",
    "أذكار المسلم",
    "أكاديمية بداية",
    "الشيخ عبد الله جلال",
  ],
  alternates: {
    canonical: "/azkar",
  },
  openGraph: {
    title: "قسم الأدعية والأذكار اليومية | أكاديمية بداية",
    description: "الأدعية والأذكار اليومية الصحيحة مع الملفات الصوتية في أكاديمية بداية.",
    url: "https://bidaya-academy.vercel.app/azkar",
    images: ["/bedaya.jpeg"],
  },
};

export default function AzkarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

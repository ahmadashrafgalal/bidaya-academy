import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم الأحاديث النبوية الشريفة | أكاديمية بداية",
  description:
    "مجموعة مختارة من الأحاديث النبوية الشريفة وشروحها والاستماع إليها بصوت واضح بإشراف الشيخ عبد الله جلال في أكاديمية بداية لتحفيظ القرآن الكريم.",
  keywords: [
    "الأحاديث النبوية",
    "حديث شريف",
    "شرح الأحاديث",
    "أكاديمية بداية",
    "الشيخ عبد الله جلال",
    "السنة النبوية",
  ],
  alternates: {
    canonical: "/ahadith",
  },
  openGraph: {
    title: "قسم الأحاديث النبوية الشريفة | أكاديمية بداية",
    description: "الأحاديث النبوية الشريفة وشروحها مع التسجيلات الصوتية في أكاديمية بداية.",
    url: "https://bidaya-academy.vercel.app/ahadith",
    images: ["/bedaya.jpeg"],
  },
};

export default function AhadithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

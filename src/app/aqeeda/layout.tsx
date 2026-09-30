import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم العقيدة الإسلامية | أكاديمية بداية لتحفيظ القرآن الكريم",
  description:
    "تعلم أصول العقيدة الإسلامية الصحيحة وسؤال وجواب في التوحيد والإيمان مع الاستدلال من القرآن والسنة النبوية بإشراف الشيخ عبد الله جلال في أكاديمية بداية.",
  keywords: [
    "العقيدة الإسلامية",
    "تعليم العقيدة",
    "أسئلة وأجوبة في العقيدة",
    "توحيد الألوهية والربوبية",
    "أكاديمية بداية",
    "الشيخ عبد الله جلال",
  ],
  alternates: {
    canonical: "/aqeeda",
  },
  openGraph: {
    title: "قسم العقيدة الإسلامية | أكاديمية بداية",
    description: "أسئلة وأجوبة في العقيدة الإسلامية السليمة مع الأدلة من القرآن والسنة.",
    url: "https://bidaya-academy.vercel.app/aqeeda",
    images: ["/bedaya.jpeg"],
  },
};

export default function AqeedaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

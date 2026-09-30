import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم السيرة النبوية العطرة | أكاديمية بداية",
  description:
    "تعرف على سيرة النبي محمد صلى الله عليه وسلم وأخلاقه وغزواته ومواقفه الخالدة بأسلوب تعليمي شيق ومناسب لجميع الأعمار في أكاديمية بداية.",
  keywords: [
    "السيرة النبوية",
    "سيرة النبي",
    "سيرة الرسول للأطفال",
    "أكاديمية بداية",
    "الشيخ عبد الله جلال",
    "قصص نبوية",
  ],
  alternates: {
    canonical: "/seera",
  },
  openGraph: {
    title: "قسم السيرة النبوية العطرة | أكاديمية بداية",
    description: "دروس وقصص السيرة النبوية الشريفة للأطفال والكبار بإشراف الشيخ عبد الله جلال.",
    url: "https://bidaya-academy.vercel.app/seera",
    images: ["/bedaya.jpeg"],
  },
};

export default function SeeraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

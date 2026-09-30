import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

const SITE_URL = "https://bidaya-academy.vercel.app";

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "أكاديمية بداية لتحفيظ القرآن الكريم | بإشراف الشيخ عبد الله جلال",
    template: "%s | أكاديمية بداية لتحفيظ القرآن الكريم",
  },
  description:
    "أكاديمية بداية لتحفيظ القرآن الكريم وتعليم أحكام التجويد والعلوم الشرعية بإشراف الشيخ عبد الله جلال. دورات تحفيظ قرآن متقن للأطفال والكبار، إجازات قرآنية، أحاديث، عقيدة، سيرة وأذكار.",
  applicationName: "أكاديمية بداية",
  authors: [
    { name: "الشيخ عبد الله جلال", url: SITE_URL },
    { name: "أكاديمية بداية", url: SITE_URL },
  ],
  generator: "Next.js",
  keywords: [
    "أكاديمية بداية",
    "اكاديمية بداية",
    "اكاديميه بدايه",
    "أكاديمية بداية لتحفيظ القرآن الكريم",
    "أكاديمية بداية الشيخ عبدالله جلال",
    "أكاديمية بداية الشيخ عبد الله جلال",
    "الشيخ عبد الله جلال",
    "الشيخ عبدالله جلال",
    "عبد الله جلال",
    "عبدالله جلال",
    "تحفيظ القرآن الكريم",
    "تحفيظ قرآن",
    "تحفيظ قرآن أون لاين",
    "تحفيظ القرآن عن بعد",
    "تعليم التجويد",
    "أحكام التجويد",
    "دورات تجويد",
    "مقرأة إلكترونية",
    "إجازة في القرآن الكريم",
    "رواية حفص عن عاصم",
    "تحفيظ القرآن للأطفال",
    "حلقات تحفيظ",
    "دروس عقيدة إسلامية",
    "شرح الأحاديث النبوية",
    "السيرة النبوية للأطفال والكبار",
    "أذكار الصباح والمساء",
    "Bidaya Academy",
    "Quran Memorization Academy",
  ],
  creator: "أكاديمية بداية",
  publisher: "الشيخ عبد الله جلال",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["ar_SA", "ar_AE"],
    url: SITE_URL,
    title: "أكاديمية بداية لتحفيظ القرآن الكريم | بإشراف الشيخ عبد الله جلال",
    description:
      "صرح تعليمي قرآني رائد في تحفيظ القرآن الكريم وتعليم أحكام التجويد والعلوم الإسلامية لجميع الأعمار بإشراف الشيخ عبد الله جلال.",
    siteName: "أكاديمية بداية",
    images: [
      {
        url: "/bedaya.jpeg",
        width: 800,
        height: 800,
        alt: "شعار أكاديمية بداية لتحفيظ القرآن الكريم - الشيخ عبد الله جلال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أكاديمية بداية لتحفيظ القرآن الكريم | بإشراف الشيخ عبد الله جلال",
    description:
      "تحفيظ القرآن الكريم وتعليم التجويد والعلوم الشرعية للأطفال والكبار بإشراف الشيخ عبد الله جلال.",
    images: ["/bedaya.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/bedaya.jpeg",
  },
  verification: {
    google: "google3e0e3845d08f4375",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
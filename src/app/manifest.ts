import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "أكاديمية بداية لتحفيظ القرآن الكريم",
    short_name: "أكاديمية بداية",
    description: "أكاديمية بداية لتحفيظ القرآن الكريم وتعليم أحكام التجويد والعلوم الشرعية بإشراف الشيخ عبد الله جلال",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    icons: [
      {
        src: "/bedaya.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/bedaya.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}

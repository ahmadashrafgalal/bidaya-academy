import { MetadataRoute } from "next";
import { ahadith } from "@/data/ahadith";
import { aqeeda } from "@/data/aqeeda";
import { Azkar } from "@/data/Azkar";
import { seera } from "@/data/seera";

const BASE_URL = "https://bidaya-academy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/aqeeda`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ahadith`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/seera`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/azkar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic Aqeeda routes
  const aqeedaRoutes: MetadataRoute.Sitemap = aqeeda.map((item) => ({
    url: `${BASE_URL}/aqeeda/${item.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Ahadith routes
  const ahadithRoutes: MetadataRoute.Sitemap = ahadith.map((item) => ({
    url: `${BASE_URL}/ahadith/${item.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Seera routes
  const seeraRoutes: MetadataRoute.Sitemap = seera.map((item) => ({
    url: `${BASE_URL}/seera/${item.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Azkar routes
  const azkarRoutes: MetadataRoute.Sitemap = Azkar.map((item) => ({
    url: `${BASE_URL}/azkar/${item.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...aqeedaRoutes,
    ...ahadithRoutes,
    ...seeraRoutes,
    ...azkarRoutes,
  ];
}

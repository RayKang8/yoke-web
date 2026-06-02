import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yokefaith.com";
  const now = new Date();

  return [
    { url: base,                 lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}

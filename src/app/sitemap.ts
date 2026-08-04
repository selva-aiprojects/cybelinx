import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { insights } from "@/lib/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  : "https://cybelinx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/platform`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-services`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cloud-platform`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/technologies`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/company`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/security`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: product.status === "live" ? 0.85 : 0.75,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: article.date ? new Date(article.date) : currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const sitemapEntries = [...staticPages, ...productPages, ...insightPages];
  const uniqueEntries = new Map<string, MetadataRoute.Sitemap[number]>();

  sitemapEntries.forEach((entry) => {
    uniqueEntries.set(entry.url, entry);
  });

  return [...uniqueEntries.values()].sort((a, b) => a.url.localeCompare(b.url));
}


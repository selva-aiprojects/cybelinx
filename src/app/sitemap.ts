import type { MetadataRoute } from "next";

const baseUrl = "https://cybelink.com";

const routes = [
  "",
  "/products",
  "/products/cybebank",
  "/products/cybehealth",
  "/products/cybehcm",
  "/products/cybepharma",
  "/products/cybeai-suite",
  "/products/ehms",
  "/solutions",
  "/industries",
  "/technologies",
  "/ai-services",
  "/cloud-platform",
  "/case-studies",
  "/insights",
  "/company",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

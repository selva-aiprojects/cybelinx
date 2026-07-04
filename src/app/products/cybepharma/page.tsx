import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybepharma");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybePharma",
  description: product?.summary,
};

export default function CybePharmaPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

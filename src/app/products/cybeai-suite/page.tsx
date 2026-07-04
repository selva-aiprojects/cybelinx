import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybeai-suite");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeAI Suite",
  description: product?.summary,
};

export default function CybeAISuitePage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybehealth");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeHealth",
  description: product?.summary,
};

export default function CybeHealthPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

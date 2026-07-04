import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybebank");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeBank",
  description: product?.summary,
};

export default function CybeBankPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

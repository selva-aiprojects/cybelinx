import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybecommerce");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeCommerce",
  description: product?.summary,
};

export default function CybeCommercePage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

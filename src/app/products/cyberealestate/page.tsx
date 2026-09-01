import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getProduct("cyberealestate");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeRealEstate",
  description: product?.summary,
};

export default function CybeRealEstatePage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

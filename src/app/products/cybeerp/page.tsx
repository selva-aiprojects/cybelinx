import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getProduct("cybeerp");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeERP",
  description: product?.summary,
};

export default function CybeERPPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}

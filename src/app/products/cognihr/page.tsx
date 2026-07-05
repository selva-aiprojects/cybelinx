import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cognihr");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CogniHRM",
  description: product?.summary,
};

const faqs = [
  {
    question: "Is CogniHRM built for Indian statutory compliance?",
    answer: "Yes — compliance is built into payroll and HR workflows with audit-ready controls.",
  },
  {
    question: "Can CogniHRM support multiple business units or entities?",
    answer: "CogniHRM is multi-tenant by design, supporting multiple entities, regions, and business units.",
  },
  {
    question: "How long does implementation take?",
    answer: "Timelines depend on organization size and existing systems — contact us for a tailored estimate.",
  },
];

export default function CogniHRMPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} faqs={faqs} showPricing />;
}

import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybefintech");

export const metadata: Metadata = {
  title: product ? `${product.name} — ${product.tagline}` : "CybeFinTech",
  description: product?.summary,
};

const faqs = [
  {
    question: "What kind of finance teams is CybeFinTech suited for?",
    answer: "It is designed for finance leaders, investment teams, and operations teams that need real-time portfolio visibility combined with cleaner accounting workflows.",
  },
  {
    question: "Can SmartPortfolio and Smartbooks be used independently?",
    answer: "Yes. Both solutions can operate as part of the broader CybeFinTech stack, or they can be adopted separately depending on the team’s needs.",
  },
  {
    question: "Does it support modern reporting and analytics?",
    answer: "Yes. The platform is built to surface KPI monitoring, performance dashboards, variance checks, and decision-ready financial reporting.",
  },
];

export default function CybeFinTechPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} faqs={faqs} showPricing />;
}

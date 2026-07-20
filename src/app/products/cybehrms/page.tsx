import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getPortfolioProduct } from "@/lib/products";
import { notFound } from "next/navigation";

const product = getPortfolioProduct("cybehrms");

export const metadata: Metadata = {
  title: product ? `${product.name} \u2014 ${product.tagline}` : "CybeHRMS",
  description: product?.summary,
};

const faqs = [
  {
    question: "Is CybeHRM built for Indian statutory compliance?",
    answer: "Yes \u2014 compliance is built into payroll and HR workflows with audit-ready controls.",
  },
  {
    question: "Can CybeHRM support multiple business units or entities?",
    answer: "CybeHRM is multi-tenant by design, supporting multiple entities, regions, and business units.",
  },
  {
    question: "How long does implementation take?",
    answer: "Timelines depend on organization size and existing systems \u2014 contact us for a tailored estimate.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes \u2014 we offer a 14-day free trial with full access to all modules. Contact us to get started.",
  },
];

export default function CybeHRMSPage() {
  if (!product) return notFound();

  return <ProductDetail product={product} faqs={faqs} showPricing />;
}

import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { ehmsProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: `${ehmsProduct.name} — ${ehmsProduct.tagline}`,
  description: ehmsProduct.summary,
};

const faqs = [
  {
    question: "Can eHMS support multiple properties under one group?",
    answer:
      "Yes — eHMS uses schema-isolated multi-tenancy with dedicated database schemas per property while supporting group reporting.",
  },
  {
    question: "Does eHMS sync with OTAs?",
    answer: "Yes, channel management keeps rates and availability in sync across connected OTAs.",
  },
  {
    question: "What verticals does eHMS support?",
    answer: "Hotels, serviced apartments, apartment rentals, and workplace services from one platform.",
  },
];

export default function EHMSPage() {
  return <ProductDetail product={ehmsProduct} faqs={faqs} />;
}

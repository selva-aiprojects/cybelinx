import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { cybehmsProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: `${cybehmsProduct.name} \u2014 ${cybehmsProduct.tagline}`,
  description: cybehmsProduct.summary,
};

const faqs = [
  {
    question: "Can HostSphere support multiple properties under one group?",
    answer:
      "Yes \u2014 HostSphere uses schema isolation with dedicated database schemas per property while supporting group reporting.",
  },
  {
    question: "Does HostSphere sync with OTAs?",
    answer: "Yes, channel management keeps rates and availability in sync across connected OTAs.",
  },
  {
    question: "What verticals does HostSphere support?",
    answer: "Hotels, serviced apartments, apartment rentals, and workplace services from one platform.",
  },
];

export default function CybeHMSPage() {
  return <ProductDetail product={cybehmsProduct} faqs={faqs} />;
}

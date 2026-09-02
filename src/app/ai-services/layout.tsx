import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Engineering and Development Services",
  description:
    "Cybelinx engineers secure, production-ready AI products, copilots, document intelligence, agentic workflows, and MLOps platforms for enterprises.",
  keywords: [
    "AI product engineering",
    "AI development services",
    "generative AI development company",
    "enterprise AI platform",
    "machine learning product development",
    "MLOps services",
  ],
};

export default function AIServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
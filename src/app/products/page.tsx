import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import CTABand from "@/components/CTABand";
import { products } from "@/lib/products";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore the ${brand.name} Cybe* product portfolio — CybeBank, CybeHealth, CybeHCM, CybePharma, and CybeAI Suite.`,
};

export default function ProductsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Products"
          title="Cybe* platforms for enterprise outcomes."
          description="A portfolio of AI-powered products engineered for regulated, high-scale operating environments."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Not sure which platform fits?" subheading="Our product strategists will map capabilities to your industry and roadmap." />
      </Section>
    </>
  );
}

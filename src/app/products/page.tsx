import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import CTABand from "@/components/CTABand";
import { products } from "@/lib/products";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore the ${brand.name} product portfolio \u2014 CybeHRM and CybeHMS, live today, plus CybePharma Suite, CybeBank, CybeHealth, and CybeAI Suite in progress.`,
};

export default function ProductsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Products"
          title="Multi-tenant SaaS platforms, built to scale."
          description="CybeHRM and CybeHMS are live today. The rest of the portfolio is in active development with industry partners."
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
        <CTABand heading="Not sure which product fits?" subheading="Our product strategists will map capabilities to your industry and requirements." />
      </Section>
    </>
  );
}

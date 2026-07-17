import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: `Build multi-tenant AI-native SaaS platforms at Cybelinx. Open roles in product engineering, cloud infrastructure, and AI/ML.`,
};

const values = ["Innovation First", "Product Mindset", "Global Delivery", "Trusted Partnership"];

export default function CareersPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Careers"
          title="Build intelligent products with us."
          description="Join product engineers, platform architects, and AI specialists shipping platforms for global enterprises."
        />
      </Section>

      <Section>
        <div className="flex flex-wrap gap-3">
          {values.map((value) => (
            <span key={value} className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-surface">
              {value}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-charcoal p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-surface">Open roles coming soon</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">
            We&apos;re expanding engineering teams across product, cloud, and AI. Share your profile and we&apos;ll reach out
            when a matching role opens.
          </p>
          <Button href="/contact" className="mt-6">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}

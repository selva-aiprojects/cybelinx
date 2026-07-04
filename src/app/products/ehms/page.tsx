import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import StatBand from "@/components/StatBand";
import CustomerLogoStrip from "@/components/CustomerLogoStrip";
import PricingPlaceholder from "@/components/PricingPlaceholder";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import { getProduct } from "@/lib/products";

const product = getProduct("ehms")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.summary,
};

const verticals = ["Hotels & Resorts", "Serviced Apartments", "Apartment Rentals", "Workplace Services"];

const faqs = [
  {
    question: "Can eHMS support multiple properties under one group?",
    answer:
      "Yes — eHMS uses schema-isolated multi-tenancy, giving each property or tenant its own dedicated database schema while still rolling up to group-level reporting.",
  },
  {
    question: "Does eHMS sync with OTAs?",
    answer: "Yes, the Channel Management module keeps rates and availability in sync across connected OTAs.",
  },
  {
    question: "What verticals does eHMS support?",
    answer: "Hotels & Resorts, Serviced Apartments, Apartment Rentals, and Workplace Services, from one platform.",
  },
];

export default function EHMSPage() {
  return (
    <>
      <Section className="pt-16">
        <Badge tone="live">Live in Production</Badge>
        <h1 className="mt-5 max-w-2xl text-4xl font-bold text-white md:text-5xl">{product.name}</h1>
        <p className="mt-2 text-lg text-cyan">{product.tagline}</p>
        <p className="mt-5 max-w-xl text-surface/80">{product.summary}</p>
        <div className="mt-8">
          <Button href="/contact">Request a Demo</Button>
        </div>
      </Section>

      <Section>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Verticals served</span>
        <div className="mt-6 flex flex-wrap gap-3">
          {verticals.map((v) => (
            <span key={v} className="glass rounded-full px-5 py-2 text-sm text-surface">
              {v}
            </span>
          ))}
        </div>
      </Section>

      <Section textured>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">What&apos;s inside</span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          From front desk to finance, in one platform.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {product.modules.map((m) => (
            <div key={m.title} className="glass rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white">{m.title}</h3>
              <p className="mt-2 text-sm text-slate">{m.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Built to scale</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">
          Architecture that holds up across properties.
        </h2>
        {product.stats && (
          <div className="mt-8">
            <StatBand stats={product.stats} />
          </div>
        )}
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {product.differentiators.map((d) => (
            <li key={d} className="glass rounded-2xl p-6 text-sm text-surface/90">
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Customers</span>
        <h2 className="mt-3 text-3xl font-bold text-white">Trusted by hospitality groups</h2>
        <div className="mt-8">{product.customers && <CustomerLogoStrip customers={product.customers} />}</div>
      </Section>

      <Section>
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-cyan">Pricing</span>
        <PricingPlaceholder productName={product.name} />
      </Section>

      <Section>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">FAQ</span>
        <h2 className="mt-3 text-3xl font-bold text-white">Common questions</h2>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <Section>
        <CTABand
          heading="See eHMS across your properties"
          subheading="Book a walkthrough and we'll show you exactly how it fits your portfolio."
        />
      </Section>
    </>
  );
}

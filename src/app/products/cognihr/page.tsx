import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import PricingPlaceholder from "@/components/PricingPlaceholder";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import { getProduct } from "@/lib/products";

const product = getProduct("cognihr")!;

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.summary,
};

// PLACEHOLDER — confirm with product team before publishing as fact
const faqs = [
  {
    question: "Is CogniHR built for Indian statutory compliance?",
    answer:
      "Yes — statutory compliance is built into CogniHR's payroll workflows rather than added as a separate step.",
  },
  {
    question: "Can CogniHR support multiple business units or entities?",
    answer: "CogniHR is built as a multi-tenant platform, so it can support multiple entities or business units.",
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation timelines depend on your team size and existing systems — talk to us for a specific estimate.",
  },
];

export default function CogniHRPage() {
  return (
    <>
      <Section className="pt-16">
        <Badge tone="new">AI-Powered HRMS</Badge>
        <h1 className="mt-5 max-w-2xl text-4xl font-bold text-white md:text-5xl">{product.name}</h1>
        <p className="mt-2 text-lg text-cyan">{product.tagline}</p>
        <p className="mt-5 max-w-xl text-surface/80">{product.summary}</p>
        <div className="mt-8">
          <Button href="/contact">Request a Demo</Button>
        </div>
      </Section>

      <Section>
        <div className="glass rounded-2xl p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">The problem</span>
          <p className="mt-3 max-w-2xl text-lg text-white">{product.problem}</p>
        </div>
      </Section>

      <Section textured>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">What&apos;s inside</span>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Every module HR needs, in one platform.</h2>
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
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Why CogniHR</span>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {product.differentiators.map((d) => (
            <li key={d} className="glass rounded-2xl p-6 text-sm text-surface/90">
              {d}
            </li>
          ))}
        </ul>
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
          heading="See CogniHR on your team's data"
          subheading="Book a walkthrough and we'll show you exactly how it fits your HR operations."
        />
      </Section>
    </>
  );
}

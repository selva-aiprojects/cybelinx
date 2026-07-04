import Section from "@/components/Section";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import StatBand from "@/components/StatBand";
import CustomerLogoStrip from "@/components/CustomerLogoStrip";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import PricingPlaceholder from "@/components/PricingPlaceholder";
import { Product } from "@/lib/products";

const statusTone: Record<Product["status"], "live" | "new" | "soon"> = {
  live: "live",
  preview: "new",
  "coming-soon": "soon",
};

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  preview: "Preview",
  "coming-soon": "Coming Soon",
};

type ProductDetailProps = {
  product: Product;
  faqs?: { question: string; answer: string }[];
  showPricing?: boolean;
};

export default function ProductDetail({ product, faqs = [], showPricing = false }: ProductDetailProps) {
  return (
    <>
      <Section className="pt-16">
        <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
        <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold text-white md:text-5xl">{product.name}</h1>
        <p className="mt-2 text-lg text-cyan">{product.tagline}</p>
        <p className="mt-5 max-w-xl text-surface/80">{product.summary}</p>
        <div className="mt-8">
          <Button href="/contact">Request a Demo</Button>
        </div>
      </Section>

      {product.problem && (
        <Section>
          <div className="glass rounded-2xl p-8 md:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">The challenge</span>
            <p className="mt-3 max-w-2xl text-lg text-white">{product.problem}</p>
          </div>
        </Section>
      )}

      {product.modules && product.modules.length > 0 && (
        <Section textured>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">What&apos;s inside</span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">Built for enterprise depth.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {product.modules.map((module) => (
              <div key={module.title} className="glass rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white">{module.title}</h3>
                <p className="mt-2 text-sm text-slate">{module.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {product.differentiators && product.differentiators.length > 0 && (
        <Section>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Why {product.name}</span>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {product.differentiators.map((item) => (
              <li key={item} className="glass rounded-2xl p-6 text-sm text-surface/90">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.stats && (
        <Section textured>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Platform scale</span>
          <div className="mt-6">
            <StatBand stats={product.stats} />
          </div>
          {product.customers && (
            <div className="mt-8">
              <CustomerLogoStrip customers={product.customers} />
            </div>
          )}
        </Section>
      )}

      {showPricing && (
        <Section>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-cyan">Pricing</span>
          <PricingPlaceholder productName={product.name} />
        </Section>
      )}

      {faqs.length > 0 && (
        <Section>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">FAQ</span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white">Common questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </Section>
      )}

      <Section>
        <CTABand
          heading={`See ${product.name} in action`}
          subheading="Book a walkthrough tailored to your enterprise requirements."
        />
      </Section>
    </>
  );
}

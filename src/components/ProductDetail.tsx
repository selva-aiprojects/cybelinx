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
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold text-surface md:text-5xl">{product.name}</h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">{product.tagline}</p>
        <p className="mt-5 max-w-xl text-slate">{product.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {product.appUrl ? (
            <>
              <Button href={product.appUrl} target="_blank" rel="noopener noreferrer">
                Launch Live App
              </Button>
              <Button href="/contact" variant="secondary">Request Walkthrough</Button>
            </>
          ) : (
            <>
              <Button href="/contact">Request a Demo</Button>
              <Button href="/contact" variant="secondary">Start Free Trial</Button>
            </>
          )}
        </div>
      </Section>

      {product.problem && (
        <Section>
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
            <span className="slugline">The Problem We Solve</span>
            <p className="mt-3 max-w-2xl text-lg text-surface">{product.problem}</p>
          </div>
        </Section>
      )}

      {product.modules && product.modules.length > 0 && (
        <Section textured>
          <span className="slugline">What&apos;s Inside</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-surface md:text-4xl">Built for enterprise depth.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {product.modules.map((module) => (
              <div key={module.title} className="rounded-2xl border border-border bg-background p-6 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
                <h3 className="text-base font-semibold text-surface">{module.title}</h3>
                <p className="mt-2 text-sm text-slate">{module.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {product.differentiators && product.differentiators.length > 0 && (
        <Section>
          <span className="slugline">Why {product.name}</span>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {product.differentiators.map((item) => (
              <li key={item} className="rounded-2xl border border-border bg-background p-6 text-sm text-slate transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.stats && (
        <Section textured>
          <span className="slugline">Platform Scale</span>
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
          <span className="mb-6 block slugline">Pricing</span>
          <PricingPlaceholder productName={product.name} />
        </Section>
      )}

      {faqs.length > 0 && (
        <Section>
          <span className="slugline">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-surface">Common questions</h2>
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

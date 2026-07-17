import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import CTABand from "@/components/CTABand";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Cybelinx product pricing — flexible plans for enterprises of every size. Contact us for a custom quote.",
};

const plans = [
  {
    name: "Starter",
    description: "For small teams exploring our platform.",
    price: "Custom",
    features: [
      "Single product access",
      "Up to 50 users",
      "Standard support (email)",
      "Community documentation",
      "Monthly billing available",
    ],
  },
  {
    name: "Business",
    description: "For growing enterprises with compliance needs.",
    price: "Custom",
    popular: true,
    features: [
      "Full product suite access",
      "Unlimited users",
      "Priority support (email + chat)",
      "SSO / SAML integration",
      "Dedicated account manager",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale, multi-entity deployments.",
    price: "Custom",
    features: [
      "All Business features",
      "Multi-entity and multi-region",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment option",
      "SOC 2 Type II reports",
      "Architecture review sessions",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Pricing"
          title="Simple, scalable pricing."
          description="Every Cybelinx product shares the same multi-tenant core. Pricing scales with your deployment — not your headcount."
        />
      </Section>

      <Section textured>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                plan.popular ? "border-primary ring-1 ring-primary" : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-display text-xl font-bold text-surface">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate">{plan.description}</p>
                <div className="mt-6">
                  <span className="font-display text-3xl font-extrabold text-surface">{plan.price}</span>
                  <span className="ml-1 text-sm text-slate">/ month</span>
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant={plan.popular ? "primary" : "secondary"} className="mt-8 w-full">
                Contact Sales
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand
          heading="Not sure which plan fits?"
          subheading="Talk to our product team — we'll help you pick the right products and pricing for your enterprise."
        />
      </Section>
    </>
  );
}

"use client";

import { useState } from "react";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, ChevronDown, HelpCircle, ShieldCheck, Sparkles, Zap, Building2, Layers } from "lucide-react";

const plans = [
  {
    name: "Sandbox & Pilot",
    tierType: "Pilot Program",
    description: "For engineering and product teams evaluating Cybelinx platforms with test enterprise data.",
    priceMonthly: "₹0",
    priceAnnual: "₹0",
    priceSubtitle: "30-day guided pilot",
    popular: false,
    badge: "Fast-Track Sandbox",
    features: [
      "Access to 1 production SaaS module sandbox",
      "Up to 50 active evaluation users",
      "Pre-loaded synthetic enterprise datasets",
      "Standard developer API access & SDKs",
      "Community & email support (48h response)",
      "Automated ABDM / GST / PF rule simulator",
    ],
    ctaText: "Start 30-Day Pilot",
    ctaHref: "/contact",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Business Scale",
    tierType: "Commercial Production",
    description: "For mid-market & growing enterprises deploying compliant SaaS workflows in production.",
    priceMonthly: "₹24,999",
    priceAnnual: "₹19,999",
    priceSubtitle: "per module / billed annually",
    popular: true,
    badge: "Most Popular",
    features: [
      "Full access to chosen vertical SaaS product",
      "Unlimited transactions & users (tiered by volume)",
      "Embedded AI Copilot & Document Intelligence",
      "Schema-isolated database per client",
      "SAML 2.0 / Okta / Azure AD SSO integration",
      "99.9% Uptime SLA with automated backups",
      "Dedicated Technical Account Manager",
      "Priority 4-hour support response SLA",
    ],
    ctaText: "Request Commercial Quote",
    ctaHref: "/contact",
    ctaVariant: "primary" as const,
  },
  {
    name: "Enterprise Core",
    tierType: "Dedicated Architecture",
    description: "For large conglomerates, banks, and healthcare networks requiring dedicated VPC or on-premise.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    priceSubtitle: "architecture-led quote",
    popular: false,
    badge: "Multi-Region & VPC",
    features: [
      "Full suite access across all 10 Cybelinx platforms",
      "Dedicated single-tenant VPC or On-Premise deploy",
      "Custom fine-tuned LLMs & private vector enclaves",
      "Custom ERP & Core Banking bi-directional connectors",
      "24/7/365 SRE hotline with 15-minute P1 SLA",
      "SOC 2 Type II, ISO 27001 & HIPAA compliance audits",
      "Custom statutory rule engine development",
      "Quarterly architecture & security reviews",
    ],
    ctaText: "Schedule Executive Briefing",
    ctaHref: "/contact",
    ctaVariant: "secondary" as const,
  },
];

const comparisonFeatures = [
  { category: "Platform & Data Architecture", items: [
    { name: "Schema-level enterprise data isolation", pilot: "Shared", business: "Dedicated Schema", enterprise: "Dedicated VPC / DB" },
    { name: "Multi-cloud hosting options (AWS, GCP, Azure)", pilot: "AWS Mumbai", business: "Multi-Zone AWS/GCP", enterprise: "Any Cloud + On-Prem" },
    { name: "Database backups & point-in-time recovery", pilot: "Weekly", business: "Daily (30-day retention)", enterprise: "Continuous (Real-time)" },
    { name: "Post-quantum cryptographic readiness (PQC)", pilot: "Standard TLS", business: "Standard TLS 1.3", enterprise: "NIST PQC ML-KEM Included" },
  ]},
  { category: "AI & Intelligence", items: [
    { name: "Embedded AI Copilot & Automation", pilot: "Evaluation quota", business: "Full Production", enterprise: "Unlimited + Fine-Tuned" },
    { name: "Document Intelligence OCR & extraction", pilot: "100 docs / mo", business: "10,000 docs / mo", enterprise: "Custom High-Throughput" },
    { name: "Private model weights & isolated vectors", pilot: "No", business: "Yes (Org-isolated)", businessCheck: true, enterprise: "Dedicated Enclave" },
  ]},
  { category: "Security & Governance", items: [
    { name: "SAML 2.0 / Azure AD / Okta SSO", pilot: "No", business: "Included", enterprise: "Included + Custom RBAC" },
    { name: "Immutable audit logs retention", pilot: "7 days", business: "1 Year", enterprise: "7 Years (Regulated)" },
    { name: "SOC 2 Type II & ISO 27001 Audit Reports", pilot: "Summary Only", business: "Full Report (NDA)", enterprise: "Direct Auditor Access" },
  ]},
  { category: "Service Level & Support", items: [
    { name: "Production Uptime Guarantee", pilot: "Best Effort", business: "99.9% SLA", enterprise: "99.99% Financial SLA" },
    { name: "Support Response Time", pilot: "48 Hours", business: "4 Hours", enterprise: "15 Minutes (24/7/365)" },
    { name: "Dedicated Solutions Architect", pilot: "No", business: "Named CSM", enterprise: "Staff SRE & Enterprise Lead" },
  ]},
];

const faqs = [
  {
    q: "How does the 30-Day Pilot Program work?",
    a: "Our solutions engineering team spins up an isolated sandbox environment with pre-populated synthetic data representing your industry vertical. Your team tests workflows, runs simulated compliance audits, and evaluates API integrations with zero commitment.",
  },
  {
    q: "Can Cybelinx platforms be deployed in our own private cloud or on-premise datacenter?",
    a: "Yes. For our Enterprise Core customers, our entire Kubernetes-native runtime can be provisioned into your dedicated AWS, GCP, Azure VPC, or air-gapped on-premise OpenShift/Kubernetes cluster via automated Terraform/Helm blueprints.",
  },
  {
    q: "Where is our customer data stored, and does it adhere to Indian data residency laws?",
    a: "All data for Indian entities is stored exclusively in MeitY-empaneled AWS/GCP data centers in Mumbai and Hyderabad in strict compliance with the Digital Personal Data Protection (DPDP) Act and RBI data localization guidelines. Global clients can designate EU, US, or Singapore regions.",
  },
  {
    q: "Is customer data ever used to train or fine-tune public AI models?",
    a: "Never. Cybelinx enforces strict contractual and architectural guarantees: your proprietary enterprise data and document extractions remain inside your isolated tenant enclave and are never used to train public foundation models.",
  },
  {
    q: "What is the typical deployment timeline for a vertical SaaS module?",
    a: "Standard SaaS modules (CybeHRMS, CybeHospitality, CybeCommerce) can be provisioned and configured within 3 to 5 business days. Enterprise migrations involving deep legacy ERP or core banking integrations typically complete in 4 to 8 weeks with zero downtime.",
  },
  {
    q: "What payment and billing structures are supported?",
    a: "We support INR and USD invoicing, corporate POs, wire transfers, and automated recurring corporate billing. Annual commitments include a 20% cost advantage and complimentary architecture onboarding.",
  },
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Section className="pt-16 pb-6">
        <AnimatedSection>
          <PageHeader
            eyebrow="Transparent Enterprise Pricing"
            title="Predictable scaling. Zero per-seat penalties."
            description="Unlike legacy vendors that tax your growth with punitive per-user licenses, Cybelinx pricing is architected around platform capacity, modules, and SLA requirements."
          />
        </AnimatedSection>

        {/* Billing Toggle */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-xs font-bold uppercase tracking-wider ${!annualBilling ? "text-surface" : "text-slate/60"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative h-7 w-14 rounded-full bg-border/80 p-1 transition-colors hover:bg-border"
              aria-label="Toggle billing interval"
            >
              <div
                className={`h-5 w-5 rounded-full bg-primary transition-transform ${
                  annualBilling ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${annualBilling ? "text-surface" : "text-slate/60"}`}>
                Annual Billing
              </span>
              <span className="rounded-full bg-live/15 px-2 py-0.5 text-[10px] font-extrabold text-live">
                Save 20%
              </span>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── 3 Main Tier Cards ─────────────────────────────────────────── */}
      <Section textured className="py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.08}>
              <div
                className={`relative flex flex-col h-full rounded-3xl border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular ? "border-primary ring-2 ring-primary/40 shadow-lg" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-violet px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{plan.tierType}</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-surface">{plan.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate min-h-[36px]">{plan.description}</p>
                  
                  <div className="mt-6 border-y border-border/50 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-extrabold text-surface">
                        {annualBilling ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-slate/70 mt-1">{plan.priceSubtitle}</div>
                  </div>
                </div>

                <div className="mt-6 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate/60 mb-3">Included Capabilities</div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={plan.ctaHref} variant={plan.ctaVariant} className="mt-8 w-full justify-center text-xs font-bold py-3">
                  {plan.ctaText}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* ── Detailed Comparison Matrix ─────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="slugline">Detailed Capabilities</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-surface">
              Compare Platform Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-background shadow-md">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border bg-charcoal/40 text-slate/70">
                  <th className="py-4 px-6 font-bold uppercase tracking-wider">Feature Specification</th>
                  <th className="py-4 px-4 font-bold uppercase tracking-wider text-center">Sandbox Pilot</th>
                  <th className="py-4 px-4 font-bold uppercase tracking-wider text-center text-primary">Business Scale</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-center">Enterprise Core</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {comparisonFeatures.map((group) => (
                  <tr key={group.category} className="contents">
                    <tr className="bg-primary/5">
                      <td colSpan={4} className="py-3 px-6 font-bold uppercase tracking-wider text-primary text-[11px]">
                        {group.category}
                      </td>
                    </tr>
                    {group.items.map((item) => (
                      <tr key={item.name} className="hover:bg-background/80 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-surface">{item.name}</td>
                        <td className="py-3.5 px-4 text-center text-slate">{item.pilot}</td>
                        <td className="py-3.5 px-4 text-center font-semibold text-primary">{item.business}</td>
                        <td className="py-3.5 px-6 text-center font-bold text-surface">{item.enterprise}</td>
                      </tr>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── FAQ Section ────────────────────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <HelpCircle className="mx-auto h-7 w-7 text-primary mb-2" />
            <h2 className="font-display text-3xl font-bold text-surface">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-slate">Common inquiries regarding enterprise procurement, data residency, and pilots.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-background transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-display text-base font-bold text-surface">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border/40 px-6 pb-6 pt-2 text-xs leading-relaxed text-slate">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
      <Section>
        <CTABand
          heading="Need a custom deployment architecture?"
          subheading="Talk to our principal platform architects to tailor an on-premise or multi-region quote."
        />
      </Section>
    </>
  );
}

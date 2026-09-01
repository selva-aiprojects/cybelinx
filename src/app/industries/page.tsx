import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Landmark,
  HeartPulse,
  FlaskConical,
  Users,
  Factory,
  ShoppingBag,
  Truck,
  Wifi,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Regulated Enterprise Industries | Cybelinx",
  description: "Purpose-built vertical SaaS & PaaS platforms for 9 regulated industries: Banking, Healthcare, Pharma, HCM, Manufacturing, Retail, Logistics, Telecom, and Energy.",
};

const industryProfiles = [
  {
    slug: "banking-fintech",
    name: "Banking & FinTech",
    icon: Landmark,
    color: "#0D47FF",
    headline: "Real-time core banking, automated KYC/AML, and open banking APIs.",
    regulations: ["RBI Master Directions", "SEBI Regulations", "Basel III", "DPDP Act"],
    products: [
      { name: "CybeBank", slug: "cybebank" },
      { name: "CybeFinTech", slug: "cybefintech" },
    ],
    metric: "98ms",
    metricLabel: "average transaction latency at 10M+ daily events",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    icon: HeartPulse,
    color: "#10B981",
    headline: "Interoperable EMR/EHR, automated ABDM health exchange, and clinical AI copilots.",
    regulations: ["ABDM Milestone 1-3", "HIPAA Ready", "HL7 / FHIR Standards", "DISHA"],
    products: [
      { name: "CybeHealth", slug: "cybehealth" },
      { name: "Jioplix EHR", slug: "cybehealth" },
    ],
    metric: "72%",
    metricLabel: "reduction in patient admission turnaround time",
  },
  {
    slug: "pharma",
    name: "Pharma & Life Sciences",
    icon: FlaskConical,
    color: "#7B61FF",
    headline: "Batch serialization, clinical trial analytics, and automated regulatory compliance.",
    regulations: ["FDA 21 CFR Part 11", "EMA Standards", "GMP Guidelines", "GAMP 5"],
    products: [
      { name: "CybePharma", slug: "cybepharma" },
      { name: "Mediflow Suite", slug: "cybepharma" },
    ],
    metric: "100%",
    metricLabel: "electronic batch record audit trail compliance",
  },
  {
    slug: "hcm",
    name: "HCM & Workforce",
    icon: Users,
    color: "#00C2FF",
    headline: "Multi-state statutory payroll automation, talent intelligence, and predictive attrition.",
    regulations: ["EPF & ESI Acts", "State Professional Tax (PT)", "TDS & Form 16", "Gratuity Act"],
    products: [
      { name: "CybeHRMS", slug: "cybehrms" },
      { name: "Synthalyst", slug: "cybehrms" },
    ],
    metric: "0",
    metricLabel: "statutory payroll compliance discrepancies across 8 states",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Travel",
    icon: ShoppingBag,
    color: "#F59E0B",
    headline: "Unified PMS, dynamic AI room pricing, and multilingual WhatsApp AI concierge.",
    regulations: ["PCI-DSS Level 1", "Local Tourism Tax Rules", "GST Hospitality Rates"],
    products: [
      { name: "CybeHospitality", slug: "cybehms" },
      { name: "HostSphere", slug: "cybehms" },
    ],
    metric: "+22%",
    metricLabel: "RevPAR improvement documented in 6 months",
  },
  {
    slug: "retail",
    name: "Retail & Omnichannel",
    icon: ShoppingBag,
    color: "#EC4899",
    headline: "Composable headless storefronts, AI inventory sync, and real-time POS orchestration.",
    regulations: ["ONDC Integration", "GST E-Invoicing", "Consumer Protection Act"],
    products: [
      { name: "CybeCommerce", slug: "cybecommerce" },
      { name: "StoreAI", slug: "cybecommerce" },
    ],
    metric: "99.99%",
    metricLabel: "inventory synchronization accuracy across 500+ outlets",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    color: "#6366F1",
    headline: "MES integration, IoT telemetry, enterprise procurement, and vendor portals.",
    regulations: ["ISO 9001", "E-Way Bill Direct API", "GST Input Tax Credit"],
    products: [
      { name: "CybeERP", slug: "cybeerp" },
      { name: "Nexora", slug: "cybeerp" },
    ],
    metric: "34%",
    metricLabel: "reduction in raw material procurement cycle time",
  },
  {
    slug: "real-estate",
    name: "Real Estate & Commercial",
    icon: Factory,
    color: "#14B8A6",
    headline: "Multi-property leasing, automated rent collection, CAM billing, and tenant portals.",
    regulations: ["RERA Compliance", "GST on Leasing", "TDS Section 194-I"],
    products: [
      { name: "CybeRealEstate", slug: "cyberealestate" },
      { name: "Estateflow", slug: "cyberealestate" },
    ],
    metric: "96%",
    metricLabel: "on-time automated commercial rent collection rate",
  },
  {
    slug: "telecom-energy",
    name: "Telecom & Energy",
    icon: Zap,
    color: "#8B5CF6",
    headline: "BSS/OSS modernization, smart grid telemetry, and automated billing engines.",
    regulations: ["TRAI Regulations", "CERC Grid Code", "National Green Tribunal"],
    products: [
      { name: "CybeAnalytics", slug: "cybeanalytics" },
      { name: "CybeAI Suite", slug: "cybeai-suite" },
    ],
    metric: "50M+",
    metricLabel: "daily telemetry data points processed per cluster",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Section className="pt-16 pb-6">
        <AnimatedSection>
          <PageHeader
            eyebrow="Regulated Industry Specialization"
            title="Engineered for high-stakes, compliant sectors."
            description="Unlike generic horizontals, Cybelinx platforms come pre-configured with statutory rules, regulatory frameworks, and domain workflows for 9 mission-critical enterprise industries."
          />
        </AnimatedSection>
      </Section>

      {/* ── Industry Cards Grid ────────────────────────────────────────── */}
      <Section textured className="py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryProfiles.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <AnimatedSection key={ind.slug} delay={i * 0.05}>
                <div
                  id={ind.slug}
                  className="flex flex-col justify-between h-full rounded-3xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: `${ind.color}25` }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}35` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: ind.color }} />
                      </div>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: `${ind.color}15`, color: ind.color }}
                      >
                        Regulated
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-surface">{ind.name}</h2>
                    <p className="mt-2 text-xs leading-relaxed text-slate">{ind.headline}</p>

                    {/* Statutory / Compliance Standards */}
                    <div className="mt-5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate/50 mb-2">
                        Pre-Configured Compliance
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.regulations.map((reg) => (
                          <span
                            key={reg}
                            className="rounded-md border border-border/80 bg-background/50 px-2 py-0.5 text-[10px] font-semibold text-slate/70"
                          >
                            {reg}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metric */}
                    <div
                      className="mt-5 rounded-2xl border p-4"
                      style={{ borderColor: `${ind.color}20`, background: `${ind.color}06` }}
                    >
                      <div className="font-display text-2xl font-extrabold" style={{ color: ind.color }}>
                        {ind.metric}
                      </div>
                      <div className="text-[11px] font-medium text-slate/70 mt-0.5">{ind.metricLabel}</div>
                    </div>
                  </div>

                  {/* Connected Products */}
                  <div className="mt-6 border-t border-border/50 pt-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate/50 mb-2">
                      Core Platform Products
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.products.map((prod) => (
                        <Link
                          key={prod.name}
                          href={`/products/${prod.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                        >
                          {prod.name}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      <Section>
        <CTABand
          heading="See your industry in a live sandbox"
          subheading="Connect with our domain architects to review pre-loaded regulatory datasets and live demo modules."
        />
      </Section>
    </>
  );
}

import {
  Brain,
  Building2,
  Cloud,
  Cpu,
  Factory,
  FlaskConical,
  Globe2,
  HeartPulse,
  Landmark,
  Lightbulb,
  Link2,
  Package,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Cybelinx",
  tagline: "AI-powered products that run your enterprise.",
  description:
    "Cybelinx builds multi-tenant SaaS platforms \u2014 CybeHRM for HR and compliance, CybeHMS for hospitality operations, and more in development. Ship ready, live today.",
  email: "hello@cybelinx.com",
  address: "No. 41 & 42, 89/5, Prakruthi Township, 1st Block, Horamavu Agara Main Road, Bangalore, Karnataka 560113.",
};

export const trustMetrics = [
  { value: "15+", label: "Years engineering products" },
  { value: "12", label: "Countries with live deployments" },
  { value: "200+", label: "Enterprise customers" },
  { value: "99.9%", label: "Platform uptime SLA" },
];

export const customerLogos = [
  "Viswa Group",
  "GRT Group",
  "Raintree",
  "DLF",
  "Global Bank Co.",
  "HealthFirst",
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    icon: Package,
    title: "Multi-Tenant Architecture",
    description: "Every product shares a schema-isolated multi-tenant core — new customers are configuration, not a fork.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native by Default",
    description: "All platforms run on cloud-native foundations with auto-scaling, disaster recovery, and global availability.",
  },
  {
    icon: Brain,
    title: "AI Built In",
    description: "Intelligence is designed into core workflows — payroll, compliance, operations — not layered on as a chatbot.",
  },
  {
    icon: Link2,
    title: "Enterprise Integrations",
    description: "Pre-built connectors for ERP, banking, statutory portals, and third-party systems out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance as a Feature",
    description: "Statutory and regulatory rules are first-class product requirements, maintained and updated by our product team.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Delivery",
    description: "Bi-weekly releases, zero-downtime deployments, and feature flags for safe rollouts to every tenant.",
  },
];

export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    slug: "banking-fintech",
    name: "Banking & FinTech",
    description: "Digital banking, payments, lending, and regulatory-ready core platforms.",
    icon: Landmark,
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Patient-centric care platforms, clinical workflows, and interoperable health systems.",
    icon: HeartPulse,
  },
  {
    slug: "pharma",
    name: "Pharma",
    description: "R&D acceleration, compliance, supply chain, and commercial operations at scale.",
    icon: FlaskConical,
  },
  {
    slug: "hcm",
    name: "HCM",
    description: "Workforce platforms, talent intelligence, and people operations for global enterprises.",
    icon: Users,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Smart factory, MES, IoT integration, and operational excellence across plants.",
    icon: Factory,
  },
  {
    slug: "retail",
    name: "Retail",
    description: "Omnichannel commerce, inventory intelligence, and unified customer experiences.",
    icon: ShoppingBag,
  },
  {
    slug: "logistics",
    name: "Logistics",
    description: "Supply chain visibility, fleet optimization, and last-mile delivery platforms.",
    icon: Truck,
  },
  {
    slug: "telecom",
    name: "Telecom",
    description: "Network operations, BSS/OSS modernization, and digital service platforms.",
    icon: Wifi,
  },
  {
    slug: "energy",
    name: "Energy",
    description: "Grid intelligence, asset management, and sustainability-driven digital products.",
    icon: Zap,
  },
];

export const whyCybelinx = [
  {
    icon: Lightbulb,
    title: "Product-First",
    description: "We ship SaaS products, not consulting engagements. One codebase, every tenant, continuous delivery.",
  },
  {
    icon: Cpu,
    title: "AI-Native Architecture",
    description: "Intelligence is embedded into every product workflow — payroll, compliance, operations — from day one.",
  },
  {
    icon: Globe2,
    title: "Enterprise Grade",
    description: "Multi-tenant, cloud-native, compliance-ready. Built for the security and scale requirements of global enterprises.",
  },
  {
    icon: Sparkles,
    title: "Customer-Obsessed",
    description: "Every product decision starts with the customer. We ship features, listen to feedback, and iterate in production.",
  },
];

export const solutions = [
  {
    title: "Digital Product Development",
    description: "Greenfield products and platform builds with agile delivery and enterprise-grade foundations.",
  },
  {
    title: "Legacy Modernization",
    description: "Strangler patterns, cloud migration, and UX uplift without business disruption.",
  },
  {
    title: "AI Transformation",
    description: "Copilots, intelligent automation, and ML platforms integrated into core workflows.",
  },
  {
    title: "Platform Engineering",
    description: "Internal developer platforms, golden paths, and cloud-native operating models.",
  },
];

export const technologies = [
  "Cloud Native (AWS, Azure, GCP)",
  "Kubernetes & Microservices",
  "React / Next.js / TypeScript",
  "Python & Node.js",
  "Data Platforms & Lakehouse",
  "Generative AI & LLM Ops",
  "Event-Driven Architecture",
  "DevSecOps & SRE",
];

export const caseStudies = [
  {
    slug: "global-hospitality-platform",
    title: "Multi-property hospitality operating platform",
    industry: "Hospitality",
    outcome: "136+ integrated modules, 99.9% uptime across property groups.",
  },
  {
    slug: "enterprise-hcm-rollout",
    title: "AI-enabled HCM for a multi-entity enterprise",
    industry: "HCM",
    outcome: "Unified HR operations with compliance-first payroll across business units.",
  },
  {
    slug: "cloud-native-banking",
    title: "Core banking modernization program",
    industry: "Banking & FinTech",
    outcome: "Reduced time-to-market for new digital products by 40%.",
  },
];

export const insights = [
  {
    slug: "engineering-intelligent-products",
    title: "Engineering intelligent products in the AI era",
    category: "Product Engineering",
    date: "2026-03-12",
  },
  {
    slug: "cloud-platform-maturity",
    title: "Five signals your cloud platform is ready to scale",
    category: "Cloud & Platform",
    date: "2026-02-28",
  },
  {
    slug: "ai-in-enterprise-workflows",
    title: "Where AI creates ROI in enterprise workflows",
    category: "AI Services",
    date: "2026-02-10",
  },
];

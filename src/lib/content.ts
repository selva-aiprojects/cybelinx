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
  ServerCog,
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
    description: "Schema-isolated tenant data with per-tenant configuration, feature flags, and subscription management — new customers are configuration, not a codebase fork.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native by Default",
    description: "Kubernetes-orchestrated workloads on AWS/GCP with auto-scaling, multi-region disaster recovery, and global edge availability.",
  },
  {
    icon: Brain,
    title: "AI Built In",
    description: "Intelligence is designed into core workflows — predictive analytics, statutory rule engines, document intelligence — not layered on as a chatbot.",
  },
  {
    icon: Link2,
    title: "Enterprise Integrations",
    description: "Pre-built connectors for ERP, HRIS, banking, statutory portals, and third-party systems via event-driven APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance as a Feature",
    description: "Statutory and regulatory rules are first-class product requirements — SOC 2 Type II controls, immutable audit logs, and RBAC with SAML/SSO.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Delivery",
    description: "Bi-weekly releases, zero-downtime canary deployments, and progressive feature flags for safe rollouts across every tenant.",
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
    description: "We ship SaaS products, not consulting engagements. One codebase, every tenant, continuous delivery — zero forks.",
  },
  {
    icon: Cpu,
    title: "AI-Native Architecture",
    description: "Intelligence is embedded into every product workflow — statutory compliance engines, predictive analytics, document intelligence — from day one.",
  },
  {
    icon: Globe2,
    title: "Enterprise Grade",
    description: "Multi-tenant, cloud-native, compliance-ready. SOC 2 Type II controls, multi-region DR, and 99.9% uptime SLA for global enterprises.",
  },
  {
    icon: Sparkles,
    title: "Customer-Obsessed",
    description: "Every product decision starts with the customer. We ship features, listen to feedback, and iterate in production — bi-weekly release cycles.",
  },
];

export type Solution = {
  title: string;
  description: string;
  href?: string;
};

export const solutions: Solution[] = [
  {
    title: "Digital Product Development",
    description: "Greenfield SaaS products and platform builds — from architecture and prototyping through to production-grade multi-tenant delivery.",
  },
  {
    title: "Legacy Modernization",
    description: "Strangler-fig migration, cloud-native re-platforming, and UX uplift — without disrupting live business operations.",
  },
  {
    title: "AI Transformation",
    description: "Embed copilots, intelligent automation, and ML pipelines into core workflows — compliance engines, document intelligence, and predictive analytics.",
  },
  {
    title: "Platform Engineering",
    description: "Internal developer platforms, golden-path templates, CI/CD automation, and cloud-native operating models that accelerate product teams.",
    href: "/cloud-platform",
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

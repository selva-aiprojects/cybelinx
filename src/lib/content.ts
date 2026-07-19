import {
  Atom,
  Brain,
  Building2,
  Cloud,
  Cpu,
  Factory,
  FlaskConical,
  Gauge,
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
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Cybelinx",
  tagline: "AI-native platform for regulated enterprises.",
  description:
    "Cybelinx is an AI-native, multi-tenant platform for regulated enterprises \u2014 unifying web, SaaS/PaaS, multi-cloud DevSecOps, LLM services, and quantum-ready engineering on a single developer-friendly foundation. 200+ enterprises, 12 countries.",
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
  { name: "Viswa Group", snippet: "Reduced manual compliance work by 45%" },
  { name: "GRT Group", snippet: "Accelerated multi-property rollouts" },
  { name: "Raintree", snippet: "Unified digital experiences" },
  { name: "DLF", snippet: "Streamlined operational data" },
  { name: "Global Bank Co.", snippet: "Zero-downtime core banking transition" },
  { name: "HealthFirst", snippet: "Automated clinical workflows" },
];

export type PlatformPillar = {
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
  slug: string;
};

export const platformPillars: PlatformPillar[] = [
  {
    icon: Globe2,
    title: "Web & SaaS/PaaS Platforms",
    subtitle: "Cloud-native product engineering at scale",
    slug: "web-saas-paas",
    description:
      "Cloud-native web platforms built on Kubernetes-orchestrated microservices, schema-isolated tenants, and CI/CD pipelines designed for regulated industries. Platform and DevOps teams reuse shared services, templates, and pipelines to launch new vertical SaaS and PaaS solutions faster — without forking code or duplicating compliance work.",
    outcome:
      "Launch new industry SaaS products from shared infrastructure — no forks, no rebuilds.",
  },
  {
    icon: Brain,
    title: "AI & LLM-Ready Infrastructure",
    subtitle: "AI-native by design, not bolted on",
    slug: "ai-llm",
    description:
      "Data ingestion, model orchestration, and governance are baked into the platform. Engineering teams expose secure, tenant-aware LLM APIs — powered by first-party or third-party models — for document analysis, conversational support, and workflow automation, all governed by enterprise policies.",
    outcome:
      "Add AI capabilities to any product without building ML infrastructure from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Cloud DevSecOps as a Service",
    subtitle: "Ready-made pipelines with built-in compliance",
    slug: "devsecops",
    description:
      "Standard DevSecOps pipelines handle builds, deploys, security checks, and change tracking across AWS, Azure, GCP, and Kubernetes. Guardrails — not gatekeepers — let teams move fast without violating regulatory constraints. Platform-level policies, templates, and dashboards reduce developer toil.",
    outcome:
      "Teams focus on features instead of wiring CI/CD and compliance from scratch.",
  },
  {
    icon: Atom,
    title: "Quantum-Ready Engineering & Analysis",
    subtitle: "Architected for what's next",
    slug: "quantum",
    description:
      "Cybelinx is architected to be quantum-ready: data models, simulation workloads, and AI pipelines are designed so future quantum backends can plug into the same platform for optimization and analysis workloads. Regulated enterprises can experiment with quantum-assisted optimization and risk analysis on the same compliant, multi-tenant foundation they use today.",
    outcome:
      "Future-proof your platform — quantum capabilities slot in without rearchitecture.",
  },
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

export type Differentiator = {
  title: string;
  hook: string;
  summary: string;
  details: string[];
  quote: string;
  icon: LucideIcon;
};

export const differentiators: Differentiator[] = [
  {
    icon: Package,
    title: "A shared multi-tenant core, not one-off products",
    hook: "Most vendors sell a single SaaS product or a generic cloud platform. Cybelinx does both.",
    summary:
      "We operate multiple vertical SaaS platforms — HR, hospitality, banking, healthcare — all running on the same multi-tenant, Kubernetes-native core.",
    details: [
      "One architecture, many products: every new industry solution reuses the same tenant isolation, deployment, observability, and compliance controls — no forks, no parallel stacks.",
      "Faster product engineering: platform and DevOps teams can launch new enterprise applications on a proven foundation instead of rebuilding plumbing for each idea.",
    ],
    quote: "We're not just a toolkit. We use our own platform to run real products for regulated enterprises, and every new product makes the platform better for developers.",
  },
  {
    icon: Brain,
    title: "AI-native and LLM-ready by design",
    hook: "Cloud providers offer AI and LLM services. Dev tools wire them in. Cybelinx is built as an AI-native platform from day zero.",
    summary:
      "Adding AI or LLM features to any product is a first-class capability, not an afterthought.",
    details: [
      "Unified data and inference layer: ingestion, enrichment, and model orchestration are part of the core, making it straightforward to add ML and LLM flows to HR, RCM, hospitality, or future products.",
      "Tenant-aware LLM as a service: enterprises can expose secure, compliant LLM APIs with per-tenant isolation, policies, and observability.",
    ],
    quote: "Instead of bolting AI onto an old stack, Cybelinx treats AI and LLM workloads as first-class citizens of a multi-tenant, regulated enterprise platform.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-cloud DevSecOps as a service for engineering teams",
    hook: "Traditional DevSecOps tools secure your pipelines; they don't own the products those pipelines deploy.",
    summary:
      "Cybelinx embeds multi-cloud DevSecOps into the platform itself and uses it to run our own products in production.",
    details: [
      "Built-in multi-cloud pipelines: CI/CD, policies, secrets, compliance checks, and deployment strategies are all part of the platform, ready for AWS, Azure, GCP, and Kubernetes.",
      "Developer productivity focus: standard pipelines and guardrails reduce ticket churn and manual ops, so developers and platform teams can focus on features instead of constantly rewiring environments.",
    ],
    quote: "We don't just secure other people's apps — we run our own multi-tenant SaaS on the same DevSecOps platform we offer to customers.",
  },
  {
    icon: Building2,
    title: "Built for regulated enterprises, not just startups",
    hook: "Many SaaS and AI platforms start with startup use cases and try to \"add compliance later.\"",
    summary:
      "Cybelinx begins with regulated industries — healthcare, finance, HR, hospitality — and bakes governance into the core.",
    details: [
      "Compliance-first architecture: schema isolation, auditability, data residency options, and documented controls are part of the multi-tenant design, not add-ons.",
      "Enterprise lifecycle: SLAs, DR, monitoring, and uptime guarantees are defined for the platform and all products built on it.",
    ],
    quote: "If compliance is non-negotiable, you shouldn't be stitching together five tools. Cybelinx gives you one platform that already lives in regulated environments.",
  },
  {
    icon: Atom,
    title: "Future-ready: quantum and advanced engineering",
    hook: "Quantum and advanced optimization are emerging, but most vendors treat them as separate R&D.",
    summary:
      "Cybelinx designs its data and compute model so future quantum backends can plug into the same platform used for today's AI workloads.",
    details: [
      "Quantum-ready data and workflows: the way we model data, simulations, and analytics is intended to support quantum-assisted optimization and risk analysis when enterprises are ready.",
      "One foundation for tomorrow's workloads: AI, LLM, and future quantum experiments all share the same secure, multi-tenant core.",
    ],
    quote: "We build enterprise platforms that are ready for what's next — without asking engineering teams to replatform every time the technology shifts.",
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
  {
    slug: "ai-native-saas-regulated-enterprises",
    title: "AI-native SaaS in regulated enterprises",
    category: "AI & Platform",
    date: "2026-06-15",
  },
  {
    slug: "multi-cloud-devsecops-as-a-service",
    title: "Multi-cloud DevSecOps as a service: patterns for platform teams",
    category: "Cloud & Platform",
    date: "2026-05-22",
  },
  {
    slug: "designing-quantum-ready-ai-platforms",
    title: "Designing for quantum-ready AI platforms",
    category: "R&D",
    date: "2026-04-10",
  },
];

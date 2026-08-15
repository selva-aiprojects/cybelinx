import {
  Atom,
  Brain,
  Building2,
  Cloud,
  Cpu,
  Database,
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
  tagline: "Engineering the Future of Enterprise Intelligence",
  description:
    "Cybelinx builds enduring enterprise technology platforms — unifying AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, cloud, and enterprise platforms — engineered to adapt seamlessly as technology evolves without becoming dated. 200+ enterprises, 12 countries.",
  email: "sales@cybelinx.com",
  address: "No. 41 & 42, 89/5, Prakruthi Township, 1st Block, Horamavu Agara Main Road, Bangalore, Karnataka 560113.",
};

export const trustMetrics = [
  { value: "15+", label: "Years engineering platforms" },
  { value: "12", label: "Countries with live deployments" },
  { value: "200+", label: "Enterprise deployments" },
  { value: "99.9%", label: "Platform uptime SLA" },
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
    title: "SaaS & PaaS",
    subtitle: "Cloud-native product engineering & multi-entity enterprise application runtime",
    slug: "saas-paas",
    description:
      "Cloud-native enterprise platform built on Kubernetes microservices, dedicated enterprise data isolation, and shared core modules for regulated industries. Product and platform teams reuse modular services, developer portals, and zero-downtime CI/CD pipelines to deploy vertical SaaS & PaaS solutions rapidly — without duplicating compliance work or codebases.",
    outcome:
      "Deploy high-performance, compliant enterprise SaaS and PaaS solutions from a shared cloud-native foundation.",
  },
  {
    icon: Brain,
    title: "AI/GenAI - ML Production Ready",
    subtitle: "Enterprise GenAI, LLMOps & autonomous MLOps pipelines",
    slug: "ai-genai-ml",
    description:
      "Production-grade Generative AI, LLMOps, and Machine Learning infrastructure integrated directly into enterprise workflows. Enables fine-tuned LLMs, agentic RAG search, real-time inference, and vector embedding data pipelines backed by strict organization-isolated enclaves, guardrails, and audit logging.",
    outcome:
      "Operationalize enterprise GenAI and ML production pipelines with guaranteed safety, performance, and governance.",
  },
  {
    icon: ShieldCheck,
    title: "Security & DevSecOps",
    subtitle: "Zero-Trust architecture & continuous automated compliance",
    slug: "security-devsecops",
    description:
      "Continuous automated DevSecOps pipelines and Zero-Trust security guardrails across AWS, Azure, GCP, and Kubernetes. Automated SAST/DAST code scanning, secret management, container vulnerability gates, and compliance tracking empower developers to move fast while maintaining continuous regulatory compliance.",
    outcome:
      "Automate security guardrails and multi-cloud compliance without impacting developer velocity or release cycles.",
  },
  {
    icon: Database,
    title: "Data Platform & Analytics",
    subtitle: "Unified modern lakehouse & real-time decision intelligence",
    slug: "data-platform-analytics",
    description:
      "A high-throughput, governed data foundation built on modern open lakehouse standards. Unifies structured and unstructured data, streamlines real-time streaming and ETL/ELT pipelines, and delivers actionable predictive analytics and operational visibility across all enterprise domains.",
    outcome:
      "Unify enterprise data silos into a scalable, real-time data platform powering operational and predictive analytics.",
  },
  {
    icon: Atom,
    title: "Quantum Ready Workflow",
    subtitle: "NIST post-quantum cryptography (PQC) standards & hybrid compute",
    slug: "quantum-ready-workflow",
    description:
      "Engineered for immediate post-quantum cryptographic security (NIST PQC ML-KEM & ML-DSA standards) and hybrid optimization algorithms. Provides quantum-safe TLS transport and encryption primitives today, while maintaining clean R&D abstraction layers for QPU accelerators as quantum hardware matures.",
    outcome:
      "Ensure immediate enterprise quantum-safe data protection while building clean abstraction layers for future quantum compute.",
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
    title: "Architecture",
    description: "Schema-isolated multi-org data with per-client configuration, feature flags, and subscription management — new enterprise accounts are configuration, not a codebase fork.",
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
    description: "Bi-weekly releases, zero-downtime canary deployments, and progressive feature flags for safe rollouts across every organization environment.",
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
    title: "Enduring Platforms, Not Custom Dev Services",
    hook: "Most IT vendors sell one-off software development services or single-purpose apps. Cybelinx builds enduring technology platforms.",
    summary:
      "We build and operate unified enterprise platforms across AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, and multi-cloud infrastructure.",
    details: [
      "Enduring foundation: engineered to adapt as technology evolves, avoiding tech debt, codebase forks, or costly replatforming.",
      "Comprehensive technology scope: seamlessly integrates AI, data analytics, cybersecurity, automated workflows, and multi-cloud orchestration on one core.",
    ],
    quote: "We don't just write custom code; we build enduring technology platforms that power enterprise intelligence today and evolve naturally into tomorrow.",
  },
  {
    icon: Brain,
    title: "AI-native and LLM-ready by design",
    hook: "Cloud providers offer raw AI building blocks. Cybelinx bakes intelligence directly into enterprise platforms from day zero.",
    summary:
      "AI, analytics, and automated decision engines are core platform capabilities, not bolted-on features.",
    details: [
      "Unified data and inference layer: data ingestion, enrichment, and LLM orchestration are built into the platform core.",
      "Organization-aware intelligence: enterprises deploy secure, compliant AI workflows with strict client data isolation, governance, and audit trails.",
    ],
    quote: "Cybelinx treats AI, analytics, and automation as fundamental building blocks of modern enterprise platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-cloud DevSecOps & Cybersecurity",
    hook: "Standalone security tools protect code, but Cybelinx embeds cybersecurity and DevSecOps into the platform lifecycle.",
    summary:
      "Cybelinx provides built-in DevSecOps pipelines and zero-trust security controls across AWS, Azure, GCP, and Kubernetes.",
    details: [
      "Built-in compliance & guardrails: continuous automated security scans, secret management, and compliance controls built into golden paths.",
      "Developer velocity & safety: platform guardrails enable rapid feature releases without risking regulatory compliance or uptime.",
    ],
    quote: "Enduring enterprise platforms require zero-trust security and multi-cloud agility baked directly into the foundation.",
  },
  {
    icon: Building2,
    title: "Built for regulated enterprises, not just startups",
    hook: "Many technology platforms target lightweight startup workflows and struggle with enterprise governance.",
    summary:
      "Cybelinx is purpose-built for regulated industries — finance, healthcare, pharma, HR, hospitality, and manufacturing.",
    details: [
      "Compliance-first architecture: schema isolation, auditability, data residency options, and SOC 2 / ISO 27001 controls built in.",
      "Enterprise SLAs & DR: multi-region high availability, automated disaster recovery, and 99.9% uptime guarantees.",
    ],
    quote: "When security and compliance are mission-critical, enterprises trust Cybelinx for enduring, enterprise-ready technology platforms.",
  },
  {
    icon: Atom,
    title: "Future-ready: quantum & advanced engineering",
    hook: "Technology evolves rapidly. Cybelinx platforms are engineered so future innovations slot in without rearchitecture.",
    summary:
      "Our data models, simulation frameworks, and compute abstractions are designed to support post-quantum cryptography and quantum-assisted computing.",
    details: [
      "Future-proof evolution: quantum encryption, advanced ML models, and new cloud technologies integrate seamlessly.",
      "One foundation for what's next: protects enterprise investments against technological obsolescence.",
    ],
    quote: "Engineering the future of enterprise intelligence means building platforms that grow stronger with every wave of technological advancement.",
  },
];

export const whyCybelinx = [
  {
    icon: Lightbulb,
    title: "Enduring Platforms",
    description: "We engineer resilient technology platforms — spanning AI, SaaS, PaaS, DevOps, cybersecurity, and cloud — rather than one-off dev services.",
  },
  {
    icon: Cpu,
    title: "AI & Analytics Native",
    description: "Intelligence is embedded into every workflow — automated compliance, predictive analytics, and LLM orchestration — from day one.",
  },
  {
    icon: Globe2,
    title: "Enterprise Grade",
    description: "Multi-entity, multi-cloud, and compliance-ready. SOC 2 Type II controls, zero-trust security, and 99.9% uptime SLA.",
  },
  {
    icon: Sparkles,
    title: "Future-Proof Design",
    description: "Architected to evolve gracefully as technology advances — supporting AI agentic workflows, multi-cloud SRE, and post-quantum readiness.",
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
    description: "Greenfield SaaS products and platform builds — from architecture and prototyping through to production-grade delivery.",
  },
  {
    title: "Legacy Modernization",
    description: "Strangler-fig migration, cloud-native re-platforming, and UX uplift — without disrupting live business operations.",
  },
  {
    title: "AI Agentic Workflow Transformation",
    description: "Embed copilots, intelligent automation, and ML pipelines into core workflows — compliance engines, document intelligence, and predictive analytics.",
  },
  {
    title: "Multi-Cloud Infrastructure",
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

export const insights = [
  {
    slug: "engineering-intelligent-products",
    title: "Engineering intelligent products in the AI era",
    category: "Product Engineering",
    date: "2026-03-12",
    content: [
      { type: "p", text: "The era of the 'thin wrapper' is over. Enterprises are no longer impressed by SaaS products that merely pass a prompt to a public LLM API and return the response. To build truly intelligent products, engineering teams must deeply integrate AI into the core workflows of the application." },
      { type: "h3", text: "Moving Beyond Wrappers" },
      { type: "p", text: "Intelligent products require context. This means building robust data pipelines that continuously feed enterprise data into vector databases for RAG (Retrieval-Augmented Generation). It requires fine-tuning models on domain-specific vocabulary and workflows." },
      { type: "p", text: "At Cybelinx, we've architected our platform to treat AI as a core primitive. Every product built on Cybelinx has native access to organization-isolated vector embeddings and orchestrated LLM routing, allowing product teams to focus on the user experience rather than AI infrastructure." }
    ]
  },
  {
    slug: "cloud-platform-maturity",
    title: "Five signals your cloud platform is ready to scale",
    category: "Cloud & Platform",
    date: "2026-02-28",
    content: [
      { type: "p", text: "Scaling a cloud platform isn't just about adding more compute; it's about maturing your operational model. How do you know when your internal platform is ready to support dozens of product teams and hundreds of enterprise clients?" },
      { type: "h3", text: "The Five Signals" },
      { type: "p", text: "1. Self-Service Provisioning: Product teams can spin up a new, compliant environment without opening a Jira ticket. 2. Immutable Infrastructure: Changes are made via code, not SSH. 3. Zero-Trust Architecture: Network boundaries are strictly enforced between microservices and client environments. 4. Standardized Observability: Telemetry is built into the golden-path templates. 5. Automated Compliance: Security scans and audit logs are generated automatically." },
      { type: "p", text: "Cybelinx provides these five capabilities out-of-the-box, giving your platform engineering team a massive head start." }
    ]
  },
  {
    slug: "ai-in-enterprise-workflows",
    title: "Where AI creates ROI in enterprise workflows",
    category: "AI Services",
    date: "2026-02-10",
    content: [
      { type: "p", text: "There is a massive gap between AI hype and actual enterprise ROI. While generative art and creative writing get the headlines, the real value of AI in the enterprise lies in workflow automation." },
      { type: "h3", text: "Practical Automation" },
      { type: "p", text: "The highest ROI applications of AI today are in unstructured data extraction (turning PDFs and emails into structured JSON), anomaly detection in financial transactions, and semantic search across internal knowledge bases." },
      { type: "p", text: "By embedding AI directly into these mundane, high-volume workflows, enterprises can dramatically reduce processing times and error rates. The Cybelinx platform provides the scalable infrastructure required to run these intensive AI workloads reliably." }
    ]
  },
  {
    slug: "ai-native-saas-regulated-enterprises",
    title: "AI-native SaaS in regulated enterprises",
    category: "AI & Platform",
    date: "2026-06-15",
    content: [
      { type: "p", text: "Selling AI-powered SaaS to banks, healthcare providers, or government agencies presents a unique challenge: these organizations require strict data residency, isolation, and compliance guarantees that typical AI startups cannot provide." },
      { type: "h3", text: "Compliance as Code" },
      { type: "p", text: "Regulated enterprises need to know that their data won't be used to train models for their competitors. They require SOC 2 Type II compliance, HIPAA readiness, and granular Role-Based Access Control (RBAC)." },
      { type: "p", text: "The Cybelinx platform was designed for regulated industries from day one. Our architecture ensures strict logical separation of data and compute, while our DevSecOps pipelines automatically enforce compliance gates before any code reaches production." }
    ]
  },
  {
    slug: "multi-cloud-devsecops-as-a-service",
    title: "Multi-cloud DevSecOps as a service: patterns for platform teams",
    category: "Cloud & Platform",
    date: "2026-05-22",
    content: [
      { type: "p", text: "As organizations grow, they inevitably find themselves managing workloads across AWS, GCP, and Azure. Managing DevSecOps pipelines across multiple cloud providers can quickly become an operational nightmare." },
      { type: "h3", text: "The Abstraction Layer" },
      { type: "p", text: "The solution is to build an abstraction layer—a DevSecOps-as-a-Service model that provides a unified interface for deployments, regardless of the underlying cloud provider. This requires standardizing on Kubernetes and utilizing cloud-agnostic IaC tools." },
      { type: "p", text: "Cybelinx offers a multi-cloud DevSecOps engine that handles the complexity of cross-cloud deployments, allowing your platform team to focus on governance and DX rather than writing custom deployment scripts for each cloud." }
    ]
  },
  {
    slug: "designing-quantum-ready-ai-platforms",
    title: "Designing for quantum-ready AI platforms",
    category: "R&D",
    date: "2026-04-10",
    content: [
      { type: "p", text: "Quantum computing is no longer just theoretical physics; it is rapidly approaching commercial viability for specific optimization and simulation workloads. Forward-thinking engineering organizations are already designing their platforms to be 'quantum-ready'." },
      { type: "h3", text: "Future-Proofing Architecture" },
      { type: "p", text: "A quantum-ready architecture abstracts the compute backend from the orchestration layer. This allows classical compute to handle standard workloads today, while allowing future quantum accelerators to plug in and handle complex optimization tasks tomorrow." },
      { type: "p", text: "Cybelinx is leading the charge in quantum-ready enterprise architecture, ensuring that the platforms you build today will seamlessly integrate with the quantum hardware of the next decade." }
    ]
  }
];

export type Customer = {
  name: string;
  status: "live" | "coming-soon";
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  summary: string;
  status: "live" | "preview" | "coming-soon";
  requiresBetaAccess?: boolean;
  executiveHighlight?: { roi: string; metricLabel: string; compliance: string };
  engineeringHighlight?: { architecture: string; apiEndpoints: string; latency: string };
  problem?: string;
  modules?: { title: string; description: string }[];
  differentiators?: string[];
  stats?: { label: string; value: string }[];
  customers?: Customer[];
  isPlaceholderContent?: boolean;
  appUrl?: string;
  demoUrl?: string;
  icon?: string;
  image?: string;
  colorAccent?: string;
  portfolioProducts?: { name: string; url?: string; description?: string }[];
};

export const products: Product[] = [
  {
    slug: "cybehrms",
    name: "CybeHRMS",
    tagline: "Next-Generation Enterprise HR & Workforce Management",
    category: "HR & Compliance",
    summary:
      "An AI-powered, comprehensive Human Resources Management System designed to automate the entire employee lifecycle—from talent acquisition to retirement—ensuring statutory compliance and delivering seamless workforce experiences.",
    status: "live",
    executiveHighlight: {
      roi: "75% Reduction",
      metricLabel: "Payroll Processing Cycle Time",
      compliance: "Localized Statutory Rules (PF, PT, TDS, ESI, Gratuity)",
    },
    engineeringHighlight: {
      architecture: "Dedicated Schema-Isolated Enterprise PostgreSQL + Redis Event Bus",
      apiEndpoints: "RESTful & GraphQL Webhooks with SAML 2.0 / OIDC SSO",
      latency: "< 42ms P99 API Response",
    },
    icon: "/assets/icons/icon-hrms.png",
    image: "/assets/products/cybehrm.png",
    colorAccent: "#10B981", // Emerald
    appUrl: "https://synthalyst.cybelinx.com",
    demoUrl: "https://synthalyst.cybelinx.com",
    portfolioProducts: [
      { name: "SynthalystHRM", url: "https://synthalyst.cybelinx.com", description: "Core HR & Payroll System" },
      { name: "TalentPulse", url: "https://talentpulse.cybelinx.com", description: "AI-driven talent acquisition & workforce planning" },
    ],
    problem:
      "Modern enterprises struggle with fragmented HR tools, leading to severe compliance risks, poor employee engagement, disjointed payroll processes, and a lack of real-time workforce visibility.",
    modules: [
      { title: "Talent Acquisition & Onboarding", description: "Streamline recruitment with AI-driven candidate scoring and seamless paperless onboarding journeys." },
      { title: "Core HR & Employee Records", description: "A secure, centralized repository for all employee data, documents, and organizational hierarchies." },
      { title: "Time, Attendance & Leave", description: "Geofenced attendance tracking, biometric integration, and dynamic leave rule configurations." },
      { title: "Payroll & Statutory Compliance", description: "Automated, error-free payroll processing fully localized via Global Regulatory Adaptation Engine." },
      { title: "Performance & Appraisals", description: "Continuous feedback loops, OKR tracking, and comprehensive 360-degree review cycles." },
      { title: "Workforce Analytics", description: "Predictive insights on attrition, diversity metrics, and compensation trends to drive strategic decisions." },
    ],
    differentiators: [
      "AI-driven automation that reduces administrative HR workload by up to 60%",
      "Global Regulatory Adaptation Engine guaranteeing 100% adherence to complex regional statutory rules",
      "Scalable architecture designed for large enterprises and multi-subsidiary conglomerates",
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybehealth",
    name: "CybeHealth & Pharma",
    tagline: "Advanced Clinical & Healthcare Operations Platform",
    category: "Healthcare",
    summary:
      "A modern, interoperability-first healthcare ecosystem that bridges the gap between clinical excellence and operational efficiency, empowering hospitals to deliver patient-centric care at scale.",
    status: "live",
    executiveHighlight: {
      roi: "10x Speedup",
      metricLabel: "Clinical Data Ingestion & EHR Sync",
      compliance: "HIPAA, HITECH, ABDM Level 2, FHIR / HL7v2",
    },
    engineeringHighlight: {
      architecture: "FHIR Store + Microservice Event Streaming (Kafka / NATS)",
      apiEndpoints: "gRPC & FHIR RESTful Spec v4.0.1",
      latency: "< 18ms Bedside Query Latency",
    },
    icon: "/assets/icons/icon-health.png",
    image: "/assets/products/cybehealth.png",
    colorAccent: "#EC4899", // Pink
    portfolioProducts: [
      { name: "Jioplix", url: "https://jioplix.com", description: "Hospital Management" },
      { name: "Mediflow", url: "https://mediflow.cybelinx.com", description: "Pharmacy Management" },
    ],
    problem:
      "Healthcare providers face immense administrative burdens, siloed patient data, and legacy systems that restrict interoperability and ultimately compromise the quality and speed of patient care.",
    modules: [
      { title: "EMR & Clinical Workflows", description: "AI-assisted charting, specialty-specific templates, and real-time bedside decision support." },
      { title: "Patient Engagement Portal", description: "A comprehensive digital front door for appointment booking, telemedicine, and secure access to medical records." },
      { title: "Hospital Operations (HIS)", description: "Centralized control over bed management, inventory, pharmacy, and laboratory information systems." },
      { title: "Billing & Claims Management", description: "Automated insurance processing, TPA integrations, and transparent out-of-pocket billing workflows." },
    ],
    differentiators: [
      "Native ABDM compliance and HL7/FHIR interoperability for seamless health data exchange",
      "Voice-to-text AI scribes tailored for clinical terminology and local accents",
      "Bank-grade HIPAA-ready security with end-to-end encryption for all Protected Health Information (PHI)",
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybefintech",
    name: "CybeFinTech",
    tagline: "AI-native finance operations for portfolio intelligence and decision support",
    category: "FinTech & Accounting",
    summary:
      "A modern finance platform focused on SmartPortfolio to unify portfolio intelligence, investment visibility, and faster decision-making for finance teams.",
    status: "live",
    executiveHighlight: {
      roi: "85% Automation",
      metricLabel: "Reconciliation & Risk Reporting",
      compliance: "SOC 2 Type II, ISO 27001, PCI-DSS Level 1",
    },
    engineeringHighlight: {
      architecture: "Immutable Ledger + Time-Series Analytics Engine",
      apiEndpoints: "Financial OpenAPI / ISO 20022 Message Router",
      latency: "< 8ms Real-Time Transaction Audit",
    },
    icon: "/assets/icons/icon-bank.png",
    image: "/assets/products/cybebank.png",
    colorAccent: "#0EA5E9", // Sky blue
    appUrl: "https://quantanalysys.vercel.app/",
    demoUrl: "https://quantanalysys.vercel.app/",
    portfolioProducts: [
      { name: "SmartPortfolio", url: "https://quantanalysys.vercel.app", description: "Portfolio intelligence and investment decision support" },
      { name: "SmartBooks", url: "http://smartbooks.cybelinx.com", description: "Accounting and operational visibility companion product" },
    ],
    problem:
      "Finance teams are often forced to work across disconnected portfolio dashboards, Excel-heavy reporting, and fragmented decision workflows that slow strategic execution.",
    modules: [
      { title: "Portfolio Analytics", description: "Track performance, weighted exposure, and scenarios across portfolios in real time." },
      { title: "Decision Intelligence", description: "Surface forecasts, variance alerts, and KPI insights for faster business decisions." },
      { title: "Executive Visibility", description: "Deliver clearer, faster reporting across fund and portfolio-level performance." },
    ],
    differentiators: [
      "Focused on portfolio intelligence rather than broad bookkeeping complexity",
      "Built for faster strategic decision-making in data-rich financial environments",
      "Designed to support enterprise-grade finance and investment workflows",
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybeai-suite",
    name: "CybeAI Suite",
    tagline: "Enterprise GenAI & LLMOps Platform Engine",
    category: "AI Platform",
    summary:
      "Production-ready enterprise AI infrastructure—privately isolated LLM orchestration, agentic RAG search, document intelligence, and real-time vector inference.",
    status: "live",
    executiveHighlight: {
      roi: "65% Overhead Cut",
      metricLabel: "Enterprise Document & Workflow Processing",
      compliance: "Privately Isolated LLM Guardrails & Audit Logging",
    },
    engineeringHighlight: {
      architecture: "vLLM / Triton Inference Server + VectorDB Pipeline",
      apiEndpoints: "OpenAI-Compatible RESTful & Streaming SSE APIs",
      latency: "< 140ms Token Stream Latency",
    },
    icon: "/assets/icons/icon-ai.png",
    image: "/assets/products/cybeai-suite.png",
    colorAccent: "#8B5CF6", // Violet
    appUrl: "#",
    demoUrl: "#",
    modules: [
      { title: "Document Intelligence Engine", description: "Extract, classify, and structure unstructured enterprise documents with 99.4% precision." },
      { title: "Workflow Copilots", description: "Embedded autonomous assistants inside operational, clinical, and finance workflows." },
      { title: "Production LLMOps & Guardrails", description: "Model governance, dynamic prompt isolation, PII masking, and audit logging." },
    ],
    differentiators: [
      "Strictly isolated vector indexing ensuring enterprise IP remains 100% private",
      "Composable architecture that plugs seamlessly into existing cloud microservices",
      "Engineered for high-throughput, low-latency production execution without external API dependencies",
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybehms",
    name: "CybeHospitality",
    tagline: "Intelligent Enterprise Hospitality Management",
    category: "Hospitality",
    summary:
      "A state-of-the-art hospitality operating system unifying property management, guest experience, digital front desk, housekeeping, and backend financials into a single cloud-native architecture.",
    status: "live",
    requiresBetaAccess: false,
    icon: "/assets/icons/icon-hms.png",
    image: "/assets/products/cybehms.png",
    colorAccent: "#F59E0B", // Amber
    appUrl: "https://hostsphere.cybelinx.com",
    demoUrl: "https://hostsphere.cybelinx.com",
    portfolioProducts: [
      { name: "HostSphere", url: "https://hostsphere.cybelinx.com", description: "Enterprise Hospitality Management" }
    ],
    problem:
      "Legacy hospitality software creates operational silos between front-of-house and back-of-house teams, resulting in delayed service, revenue leakage, and inconsistent guest experiences.",
    modules: [
      { title: "Smart Front Desk", description: "Frictionless digital check-in/out, automated room allocation, and integrated multi-channel reservations." },
      { title: "Housekeeping & Facility Ops", description: "Real-time room status tracking, automated task delegation, and inventory management for amenities." },
      { title: "Maintenance & Ticketing", description: "Predictive maintenance schedules and instant resolution workflows for guest complaints." },
      { title: "Finance & POS Integration", description: "Unified billing, automated night audits, and seamless roll-up reporting for multi-property groups." },
      { title: "Guest CRM & Loyalty", description: "Hyper-personalized guest profiles, preference tracking, and targeted post-stay engagement campaigns." },
    ],
    differentiators: [
      "Schema-isolated architecture ensuring absolute data privacy for multi-property deployments",
      "Highly composable architecture allowing hotels to subscribe only to the modules they need",
      "Unified solution spanning boutique hotels, serviced apartments, large resorts, and co-living spaces",
    ],
    stats: [
      { label: "Tables per organization", value: "136+" },
      { label: "API endpoints", value: "100+" },
      { label: "Uptime target", value: "99.99%" },
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybepharma",
    name: "CybePharma Suite",
    tagline: "Pharma Commercial & Lifecycle Preview",
    category: "Pharma",
    summary: "Commercial operations, compliance, and supply chain intelligence for life sciences organizations.",
    status: "preview",
    requiresBetaAccess: true,
    icon: "/assets/icons/icon-pharma.png",
    image: "/assets/products/cybepharma.png",
    colorAccent: "#4685ca", // Brand blue
    isPlaceholderContent: true,
  },
  {
    slug: "cybebank",
    name: "CybeBank Core",
    tagline: "Digital Banking Infrastructure Preview",
    category: "Banking & FinTech",
    summary:
      "A cloud-native digital banking platform for retail, corporate, and payment operations with regulatory-ready architecture.",
    status: "coming-soon",
    requiresBetaAccess: true,
    icon: "/assets/icons/icon-bank.png",
    image: "/assets/products/cybebank.png",
    colorAccent: "#6366F1", // Indigo
    isPlaceholderContent: true,
  },
  {
    slug: "cybecommerce",
    name: "CybeCommerce",
    tagline: "Composable Retail & E-Commerce Module",
    category: "Commerce",
    summary:
      "A composable commerce platform powering online stores, inventory management, and customer engagement for retail businesses.",
    status: "preview",
    requiresBetaAccess: true,
    icon: "/assets/icons/icon-commerce.png",
    image: "/assets/products/cybecommerce.png",
    colorAccent: "#0a8e6e", // Teal
    portfolioProducts: [
      { name: "StoreAI-One Commerce", url: "https://storeai.cybelinx.com", description: "AI-powered e-commerce storefront" },
    ],
    isPlaceholderContent: true,
  },
];

/** Back-compat alias — HostSphere is a first-class entry in `products`. */
export const cybehmsProduct: Product = products.find((p) => p.slug === "cybehms")!;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getPortfolioProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}


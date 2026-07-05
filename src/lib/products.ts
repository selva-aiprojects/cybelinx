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
  problem?: string;
  modules?: { title: string; description: string }[];
  differentiators?: string[];
  stats?: { label: string; value: string }[];
  customers?: Customer[];
  isPlaceholderContent?: boolean;
  appUrl?: string;
  demoUrl?: string;
};

export const products: Product[] = [
  {
    slug: "cybehrm",
    name: "CybeHRM",
    tagline: "AI-Powered HRMS Platform",
    category: "HR & Compliance",
    summary:
      "An AI-enabled HRMS platform for Indian statutory compliance, employee experience, and workforce visibility across enterprises.",
    status: "live",
    problem:
      "Fragmented HR processes create compliance exposure, inconsistent experiences, and unnecessary administrative drag.",
    modules: [
      { title: "Employee Records", description: "A single, secure source of truth for every employee." },
      { title: "Attendance & Leave", description: "Automated attendance and leave workflows at scale." },
      { title: "Payroll & Compliance", description: "Payroll built around Indian statutory requirements and audit readiness." },
      { title: "Recruitment & Onboarding", description: "Candidate-to-employee journeys without visibility gaps." },
      { title: "Performance Management", description: "Review cycles and goals tied to workforce data." },
      { title: "People Analytics", description: "Workforce insights for faster, better people decisions." },
    ],
    differentiators: [
      "AI-enabled automation across core HR workflows",
      "Built around Indian statutory compliance requirements",
      "Multi-tenant architecture for entities, regions, and business units",
    ],
    isPlaceholderContent: true,
  },
  {
    slug: "cybehms",
    name: "CybeHMS",
    tagline: "Enterprise Hospitality Management System",
    category: "Hospitality",
    summary:
      "A hospitality operating platform unifying front office, housekeeping, maintenance, finance, and guest experience.",
    status: "live",
    appUrl: "https://ehms-app.vercel.app/",
    demoUrl: "https://ehms-app.vercel.app/",
    problem:
      "Disconnected operations create delays, reporting gaps, and inconsistent service quality across properties.",
    modules: [
      { title: "Front Desk", description: "Reservations, check-in/out, and guest workflows in one place." },
      { title: "Housekeeping", description: "Real-time room status and task coordination across properties." },
      { title: "Maintenance", description: "Track, assign, and resolve maintenance requests without delays." },
      { title: "Finance & GL", description: "Property-level finance that rolls up to group reporting." },
      { title: "Guest CRM", description: "Unified guest profiles across stays and touchpoints." },
    ],
    differentiators: [
      "Schema-isolated multi-tenancy for secure, scalable deployment",
      "Flexible per-tenant vertical and feature subscription model",
      "Hotels, serviced apartments, rentals, and workplace services from one platform",
    ],
    stats: [
      { label: "Tables per tenant", value: "136+" },
      { label: "API endpoints", value: "100+" },
      { label: "Uptime target", value: "99.9%" },
    ],
    customers: [
      { name: "Viswa Group", status: "live" },
      { name: "GRT Group", status: "coming-soon" },
      { name: "Raintree", status: "coming-soon" },
      { name: "DLF", status: "coming-soon" },
    ],
  },
  {
    slug: "cybepharma",
    name: "CybePharma Suite",
    tagline: "Pharma Commercial Platform",
    category: "Pharma",
    summary: "Commercial operations, compliance, and supply chain intelligence for life sciences organizations.",
    status: "preview",
    isPlaceholderContent: true,
  },
  {
    slug: "cybebank",
    name: "CybeBank",
    tagline: "Digital Banking Platform",
    category: "Banking & FinTech",
    summary:
      "A cloud-native digital banking platform for retail, corporate, and payment operations with regulatory-ready architecture.",
    status: "coming-soon",
    isPlaceholderContent: true,
  },
  {
    slug: "cybehealth",
    name: "CybeHealth",
    tagline: "Healthcare Operations Platform",
    category: "Healthcare",
    summary:
      "Unified care coordination, clinical workflows, and patient engagement for hospitals and health networks.",
    status: "coming-soon",
    problem:
      "Fragmented clinical and operational systems slow care delivery and limit visibility across the care continuum.",
    modules: [
      { title: "Care Coordination", description: "Unified workflows across departments and care teams." },
      { title: "Patient Engagement", description: "Digital front door for appointments, records, and communication." },
      { title: "Clinical Operations", description: "Operational dashboards for capacity, throughput, and quality." },
    ],
    differentiators: [
      "Interoperability-first design for HL7/FHIR integrations",
      "HIPAA-ready security and audit controls",
      "Modular deployment for hospitals and clinic networks",
    ],
    isPlaceholderContent: true,
  },
  {
    slug: "cybeai-suite",
    name: "CybeAI Suite",
    tagline: "Enterprise AI Product Suite",
    category: "AI Platform",
    summary:
      "Composable AI capabilities—copilots, document intelligence, and workflow automation—for enterprise products.",
    status: "coming-soon",
    modules: [
      { title: "Document Intelligence", description: "Extract, classify, and route unstructured enterprise documents." },
      { title: "Workflow Copilots", description: "Embedded assistants inside operational and customer workflows." },
      { title: "Model Ops", description: "Governance, monitoring, and deployment for production AI." },
    ],
    differentiators: [
      "Enterprise guardrails for security, privacy, and audit",
      "Composable modules that integrate with existing products",
      "Designed for regulated and high-trust environments",
    ],
    isPlaceholderContent: true,
  },
];

/** Back-compat alias — CybeHMS is now a first-class entry in `products`. */
export const cybehmsProduct: Product = products.find((p) => p.slug === "cybehms")!;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getPortfolioProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

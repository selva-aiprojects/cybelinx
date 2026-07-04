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
  problem: string;
  modules: { title: string; description: string }[];
  differentiators: string[];
  stats?: { label: string; value: string }[];
  customers?: Customer[];
  // PLACEHOLDER — confirm with product team before publishing as fact
  isPlaceholderContent?: boolean;
};

export const products: Product[] = [
  {
    slug: "cognihr",
    name: "CogniHR",
    tagline: "People Intelligence Platform",
    category: "AI-Powered HRMS",
    summary:
      "An AI-enabled HRMS for organizations that need compliance, employee experience, and operational visibility in one secure platform.",
    problem:
      "Fragmented HR processes create compliance exposure, inconsistent experiences, and unnecessary administrative drag across the business.",
    modules: [
      {
        title: "Employee Records",
        description: "A single, secure source of truth for every employee across your organization.",
      },
      {
        title: "Attendance & Leave",
        description: "Automated attendance tracking and leave workflows that scale across teams.",
      },
      {
        title: "Payroll & Statutory Compliance",
        description: "Payroll processing built around Indian statutory requirements, reducing compliance risk.",
      },
      {
        title: "Recruitment & Onboarding",
        description: "Move candidates from applied to onboarded without losing visibility.",
      },
      {
        title: "Performance Management",
        description: "Structured review cycles and goal tracking tied to real workforce data.",
      },
      {
        title: "People Analytics",
        description: "Workforce insights and trends to support faster, better people decisions.",
      },
    ],
    differentiators: [
      "AI-enabled automation across core HR workflows",
      "Compliance-first design for Indian statutory requirements",
      "Multi-tenant architecture that scales across teams and locations",
    ],
    isPlaceholderContent: true,
  },
  {
    slug: "ehms",
    name: "eHMS",
    tagline: "Enterprise Hospitality Management System",
    category: "AI-Powered Hospitality Platform",
    summary:
      "A hospitality operating platform that unifies front office, housekeeping, maintenance, finance, and guest experience for modern properties.",
    problem:
      "Disconnected operations create delays, reporting gaps, and inconsistent service quality across properties and teams.",
    modules: [
      { title: "Front Desk", description: "Reservations, check-in/out, and guest workflows in one place." },
      { title: "Housekeeping", description: "Real-time room status and task coordination across properties." },
      { title: "Maintenance", description: "Track, assign, and resolve maintenance requests without delays." },
      { title: "HR & Payroll", description: "Manage on-property staff, scheduling, and payroll from the same platform." },
      { title: "Finance & General Ledger", description: "Property-level finance that rolls up cleanly to group reporting." },
      { title: "Vendor Management", description: "Centralized vendor and procurement tracking per property." },
      { title: "Channel Management", description: "OTA sync keeps rates and availability consistent across channels." },
      { title: "Guest CRM", description: "A unified guest profile across stays, properties, and touchpoints." },
      { title: "Admin Suite", description: "Tenant, role, and property configuration for operations teams." },
    ],
    differentiators: [
      "Schema-isolated multi-tenancy for secure, scalable deployment",
      "Flexible per-tenant vertical and feature subscription model",
      "Built to serve hotels, serviced apartments, rentals, and workplace services from a single platform",
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
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

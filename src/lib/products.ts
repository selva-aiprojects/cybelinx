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
  image?: string;
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
    image: "/assets/products/cybehrm.png",
    appUrl: "https://cybehrm.vercel.app/",
    demoUrl: "https://cybehrm.vercel.app/",
    portfolioProducts: [
      { name: "CybeHRM", url: "https://cybehrm.vercel.app/", description: "Core HR & Payroll System" }
    ],
    problem:
      "Modern enterprises struggle with fragmented HR tools, leading to severe compliance risks, poor employee engagement, disjointed payroll processes, and a lack of real-time workforce visibility.",
    modules: [
      { title: "Talent Acquisition & Onboarding", description: "Streamline recruitment with AI-driven candidate scoring and seamless paperless onboarding journeys." },
      { title: "Core HR & Employee Records", description: "A secure, centralized repository for all employee data, documents, and organizational hierarchies." },
      { title: "Time, Attendance & Leave", description: "Geofenced attendance tracking, biometric integration, and dynamic leave rule configurations." },
      { title: "Payroll & Statutory Compliance", description: "Automated, error-free payroll processing fully localized for Indian tax regimes (PF, PT, TDS, ESI)." },
      { title: "Performance & Appraisals", description: "Continuous feedback loops, OKR tracking, and comprehensive 360-degree review cycles." },
      { title: "Workforce Analytics", description: "Predictive insights on attrition, diversity metrics, and compensation trends to drive strategic decisions." },
    ],
    differentiators: [
      "AI-driven automation that reduces administrative HR workload by up to 60%",
      "Deeply localized engine guaranteeing 100% adherence to complex regional statutory compliances",
      "Scalable multi-tenant architecture designed for large enterprises and multi-subsidiary conglomerates",
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybehms",
    name: "CybeHMS",
    tagline: "Intelligent Enterprise Hospitality Management",
    category: "Hospitality",
    summary:
      "A state-of-the-art hospitality operating system unifying property management, guest experience, digital front desk, housekeeping, and backend financials into a single cloud-native architecture.",
    status: "live",
    image: "/assets/products/cybehms.png",
    appUrl: "https://ehms-app-eta.vercel.app/",
    demoUrl: "https://ehms-app-eta.vercel.app/",
    portfolioProducts: [
      { name: "CybeHMS", url: "https://ehms-app-eta.vercel.app/", description: "Enterprise Hospitality Management" }
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
      "Schema-isolated multi-tenancy ensuring absolute data privacy for multi-property deployments",
      "Highly composable architecture allowing hotels to subscribe only to the modules they need",
      "Unified solution spanning boutique hotels, serviced apartments, large resorts, and co-living spaces",
    ],
    stats: [
      { label: "Tables per tenant", value: "136+" },
      { label: "API endpoints", value: "100+" },
      { label: "Uptime target", value: "99.99%" },
    ],
    customers: [
      { name: "Viswa Group", status: "live" },
      { name: "GRT Group", status: "coming-soon" },
      { name: "Raintree", status: "coming-soon" },
      { name: "DLF", status: "coming-soon" },
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybepharma",
    name: "CybePharma Suite",
    tagline: "Pharma Commercial Platform",
    category: "Pharma",
    summary: "Commercial operations, compliance, and supply chain intelligence for life sciences organizations.",
    status: "preview",
    image: "/assets/products/cybepharma.png",
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
    image: "/assets/products/cybebank.png",
    isPlaceholderContent: true,
  },
  {
    slug: "cybehealth",
    name: "CybeHealth",
    tagline: "Advanced Clinical & Healthcare Operations Platform",
    category: "Healthcare",
    summary:
      "A modern, interoperability-first healthcare ecosystem that bridges the gap between clinical excellence and operational efficiency, empowering hospitals to deliver patient-centric care at scale.",
    status: "coming-soon",
    image: "/assets/products/cybehealth.png",
    portfolioProducts: [
      { name: "Jioplix", url: "https://jioplix.vercel.app/", description: "Healthcare operations and patient engagement" }
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
    slug: "cybeai-suite",
    name: "CybeAI Suite",
    tagline: "Enterprise AI Product Suite",
    category: "AI Platform",
    summary:
      "Composable AI capabilities—copilots, document intelligence, and workflow automation—for enterprise products.",
    status: "coming-soon",
    image: "/assets/products/cybeai-suite.png",
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

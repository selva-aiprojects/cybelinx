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
  requiresBetaAccess?: boolean;
  appUrl?: string;
  demoUrl?: string;
  image?: string;
  icon?: string;
  colorAccent?: string;
  executiveHighlight?: {
    roi: string;
    metricLabel: string;
    compliance: string;
  };
  engineeringHighlight?: {
    latency: string;
    architecture: string;
  };
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
    colorAccent: "#10B981", // Emerald
    appUrl: "https://synthalyst.cybelinx.com/",
    demoUrl: "https://synthalyst.cybelinx.com/",
    portfolioProducts: [
      { name: "SynthalystHRM", url: "https://synthalyst.cybelinx.com/", description: "Core HR & Payroll System" },
      { name: "TalentPulse", url: "https://talentpulse.cybelinx.com/", description: "AI-driven talent acquisition & workforce planning" },
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
      "Scalable architecture designed for large enterprises and multi-subsidiary conglomerates",
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
    image: "/assets/products/cybehms.png",
    colorAccent: "#F59E0B", // Amber
    appUrl: "https://hostsphere.cybelinx.com/",
    demoUrl: "https://hostsphere.cybelinx.com/",
    portfolioProducts: [
      { name: "HostSphere", url: "https://hostsphere.cybelinx.com/", description: "Hospitality Management" }
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
      { label: "Tables per tenant", value: "136+" },
      { label: "API endpoints", value: "100+" },
      { label: "Uptime target", value: "99.99%" },
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
    colorAccent: "#4685ca", // Brand blue
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
    colorAccent: "#6366F1", // Indigo
    isPlaceholderContent: true,
  },
  {
    slug: "cybefintech",
    name: "CybeFinTech",
    tagline: "Accounting, ERP & business operations platform",
    category: "FinTech & ERP",
    summary:
      "A connected financial and operational stack for accounting, ERP automation, and real-estate business workflows.",
    status: "live",
    image: "/assets/products/cybebank.png",
    colorAccent: "#14B8A6",
    appUrl: "https://smartbooks.cybelinx.com/",
    demoUrl: "https://smartbooks.cybelinx.com/",
    portfolioProducts: [
      { name: "Smartbooks", url: "https://smartbooks.cybelinx.com/", description: "Account / Finance Management" },
      { name: "Nexora", url: "https://nexora.cybelinx.com/", description: "BusinessERP System" },
      { name: "Estateflow", url: "https://estateflow.cybelinx.com/", description: "Real-Estate ERP" },
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
    image: "/assets/products/cybehealth.png",
    colorAccent: "#EC4899", // Pink
    portfolioProducts: [
      { name: "Jioplix", url: "https://jioplix.com/", description: "Hospital Management" },
      { name: "Jioplix-Clinic", url: "https://jioplixsmart.cybelinx.com/", description: "Clinic & Smart Hospital Operations" },
      { name: "Mediflow-Pharmacy", url: "https://mediflow.cybelinx.com/", description: "Pharmacy Management" },
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
    slug: "cybecommerce",
    name: "CybeCommerce",
    tagline: "Commerce platform for modern retail & e-commerce operations",
    category: "Commerce",
    summary:
      "A composable commerce platform powering online stores, inventory management, and customer engagement for retail businesses.",
    status: "live",
    image: "/assets/products/cybecommerce.png",
    colorAccent: "#0a8e6e", // Teal
    appUrl: "https://storeai.cybelinx.com/",
    demoUrl: "https://storeai.cybelinx.com/",
    portfolioProducts: [
      { name: "StoreAI", url: "https://storeai.cybelinx.com/", description: "AI-powered e-commerce storefront" },
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cybeerp",
    name: "CybeERP",
    tagline: "Unified enterprise ERP for operations, finance, and business process automation",
    category: "ERP",
    summary:
      "A cloud-native ERP platform designed for enterprises that need a single operating system for finance, procurement, inventory, project execution, and business workflows.",
    status: "live",
    image: "/assets/products/cybebank.png",
    colorAccent: "#22C55E",
    appUrl: "https://nexora.cybelinx.com/",
    demoUrl: "https://nexora.cybelinx.com/",
    portfolioProducts: [
      { name: "Nexora", url: "https://nexora.cybelinx.com/", description: "Business ERP System" },
      { name: "Smartbooks", url: "https://smartbooks.cybelinx.com/", description: "Finance & accounting layer" },
    ],
    problem:
      "Modern enterprises still run on siloed ERP modules, leading to slow approvals, inaccurate reporting, duplicate work, and delayed decisions across operational teams.",
    modules: [
      { title: "Finance & Accounting", description: "General ledger, receivables, payables, budgets, and real-time financial controls." },
      { title: "Procurement & Inventory", description: "Vendor management, purchase workflows, stock movement, and asset lifecycle tracking." },
      { title: "Projects & Operations", description: "Workstreams, cost tracking, project milestones, and cross-functional execution visibility." },
      { title: "Workflow Automation", description: "Approval chains, audit trails, and AI-assisted process orchestration across departments." },
    ],
    differentiators: [
      "Single operational view across finance, procurement, and execution teams",
      "Automation of repetitive ERP workflows and approval cycles",
      "Built for scaling multi-entity, multi-location enterprise operations",
    ],
    isPlaceholderContent: false,
  },
  {
    slug: "cyberealestate",
    name: "CybeRealEstate",
    tagline: "Property operations, leasing, and portfolio intelligence for modern real-estate businesses",
    category: "Real Estate",
    summary:
      "A unified real-estate operating platform for property management, leasing, finance, and portfolio performance tracking across residential, commercial, and mixed-use portfolios.",
    status: "live",
    image: "/assets/products/cybebank.png",
    colorAccent: "#0EA5E9",
    appUrl: "https://estateflow.cybelinx.com/",
    demoUrl: "https://estateflow.cybelinx.com/",
    portfolioProducts: [
      { name: "Estateflow", url: "https://estateflow.cybelinx.com/", description: "Real-Estate ERP & property operations" },
    ],
    problem:
      "Real-estate operators still manage property, leasing, collections, and finance across disconnected tools, leading to delayed updates, missed revenue, and poor portfolio visibility.",
    modules: [
      { title: "Property & Unit Management", description: "Track inventory, occupancy, maintenance, and owner/tenant records across a portfolio." },
      { title: "Lease & Collections", description: "Automate rent collections, renewals, escalations, and delinquency workflows." },
      { title: "Finance & Accounting", description: "Link property cash flow, vendor bills, expenses, and operational reporting in one place." },
      { title: "Portfolio Intelligence", description: "Monitor occupancy, NOI, and operating performance with AI-driven portfolio insights." },
    ],
    differentiators: [
      "Portfolio-wide visibility across property operations, leasing, and accounting",
      "Automation for recurring real-estate workflows such as rent collection and maintenance follow-ups",
      "Built to support mixed-use, residential, commercial, and managed-property portfolios",
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
    colorAccent: "#8B5CF6", // Violet
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

/** Back-compat alias — HostSphere is a first-class entry in `products`. */
export const cybehmsProduct: Product = products.find((p) => p.slug === "cybehms")!;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getPortfolioProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export type NavLink = { 
  href: string; 
  label: string; 
  description?: string;
  category?: "Regulated Markets" | "Enterprise Operations" | "Core PaaS & AI";
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavLink[];
};

export const mainNav: NavGroup[] = [
  { label: "Platform", href: "/platform" },
  {
    label: "Products",
    items: [
      { href: "/products/cybehealth", label: "CybeHealth & Pharma", description: "Clinical EMR & FHIR interoperability", category: "Regulated Markets" },
      { href: "/products/cybebank", label: "CybeBank Core", description: "Digital banking & payments preview", category: "Regulated Markets" },
      { href: "/products/cybefintech", label: "CybeFinTech", description: "Portfolio intelligence & accounting", category: "Regulated Markets" },
      
      { href: "/products/cybehrms", label: "CybeHRMS", description: "AI HRMS & statutory payroll engine", category: "Enterprise Operations" },
      { href: "/products/cybehms", label: "CybeHospitality", description: "HostSphere property & hotel ops", category: "Enterprise Operations" },
      { href: "/products/cybecommerce", label: "CybeCommerce", description: "StoreAI composable retail commerce", category: "Enterprise Operations" },
      { href: "/products/cybeerp", label: "CybeERP", description: "ERP for finance, ops & process automation", category: "Enterprise Operations" },
      { href: "/products/cyberealestate", label: "CybeRealEstate", description: "Property ops & portfolio intelligence", category: "Enterprise Operations" },
      
      { href: "/products/cybeai-suite", label: "CybeAI Suite", description: "Production GenAI & LLMOps engine", category: "Core PaaS & AI" },
      { href: "/platform", label: "Cybelinx Core PaaS", description: "5 Core infrastructure pillars", category: "Core PaaS & AI" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Resources",
    items: [
      { href: "/technologies", label: "Engineering & DevOps", description: "For engineering and platform teams" },
      { href: "/insights", label: "Insights", description: "Perspectives from our teams" },
      { href: "/branding", label: "Branding Kit & Stationery", description: "Official Letterhead (A4), business cards & logo assets" },
      { href: "/#product-news", label: "Product News", description: "Latest product releases and announcements" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/company", label: "About Cybelinx", description: "Mission, story, and global presence" },
      { href: "/leadership", label: "Board & Leadership", description: "Directors, IT architecture & healthcare domain experts" },
      { href: "/careers", label: "Careers", description: "Build with our product teams" },
      { href: "/contact", label: "Contact", description: "Get in touch with our team" },
    ],
  },
];

export const footerNav = {
  products: mainNav[1].items ?? [],
  company: [
    { href: "/company", label: "About" },
    { href: "/leadership", label: "Leadership & Board" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/branding", label: "Brand Kit & Stationery" },
  ],
  capabilities: [
    { href: "/industries", label: "Industries" },
    { href: "/technologies", label: "Engineering & DevOps" },
  ],
  resources: [
    { href: "/platform", label: "Platform" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/branding", label: "Branding Kits" },
    { href: "/#product-news", label: "Product News" },
  ],
};

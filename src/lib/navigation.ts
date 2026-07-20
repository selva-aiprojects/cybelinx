export type NavLink = { href: string; label: string; description?: string };

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
      { href: "/products/cybehrms", label: "CybeHRMS", description: "AI-powered HRMS with statutory compliance — Live" },
      { href: "/products/cybehms", label: "CybeHMS", description: "Enterprise hospitality management — Live" },
      { href: "/products/cybepharma", label: "CybePharma Suite", description: "Pharma commercial & compliance" },
      { href: "/products/cybebank", label: "CybeBank", description: "Digital banking & FinTech platform" },
      { href: "/products/cybehealth", label: "CybeHealth", description: "Healthcare & clinical operations" },
      { href: "/products/cybeai-suite", label: "CybeAI Suite", description: "Enterprise AI product suite" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Resources",
    items: [
      { href: "/technologies", label: "Engineering & DevOps", description: "For engineering and platform teams" },
      { href: "/insights", label: "Insights", description: "Perspectives from our teams" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/company", label: "About Cybelinx", description: "Mission, story, and leadership" },
      { href: "/careers", label: "Careers", description: "Build with our product teams" },
      { href: "/contact", label: "Contact", description: "Get in touch with our team" },
    ],
  },
];

export const footerNav = {
  products: mainNav[1].items ?? [],
  company: [
    { href: "/company", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  capabilities: [
    { href: "/industries", label: "Industries" },
    { href: "/technologies", label: "Engineering & DevOps" },
  ],
  resources: [
    { href: "/platform", label: "Platform" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
  ],
};

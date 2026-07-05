export type NavLink = { href: string; label: string; description?: string };

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavLink[];
};

export const mainNav: NavGroup[] = [
  {
    label: "Products",
    items: [
      { href: "/products/cognihr", label: "CogniHRM", description: "AI-powered HRMS with statutory compliance" },
      { href: "/products/ehms", label: "eHMS", description: "Enterprise hospitality management system" },
      { href: "/products/cybepharma", label: "CybePharma Suite", description: "Pharma commercial & compliance — in progress" },
      { href: "/products/cybebank", label: "CybeBank", description: "Digital banking & FinTech platform" },
      { href: "/products/cybehealth", label: "CybeHealth", description: "Healthcare & clinical operations" },
      { href: "/products/cybeai-suite", label: "CybeAI Suite", description: "Enterprise AI product suite" },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  {
    label: "Capabilities",
    items: [
      { href: "/technologies", label: "Technologies", description: "Modern engineering stack" },
      { href: "/ai-services", label: "AI Services", description: "Applied AI & data engineering" },
      {
        href: "/cloud-platform",
        label: "Cloud & Platform Engineering",
        description: "Cloud-native platforms at scale",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "/case-studies", label: "Case Studies", description: "Outcomes in production" },
      { href: "/insights", label: "Insights", description: "Perspectives from our teams" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/company", label: "About Cybelinx", description: "Mission, story, and leadership" },
      { href: "/careers", label: "Careers", description: "Build with our product teams" },
    ],
  },
];

export const footerNav = {
  products: mainNav[0].items ?? [],
  company: [
    { href: "/company", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  capabilities: mainNav[3].items ?? [],
  resources: mainNav[4].items ?? [],
};

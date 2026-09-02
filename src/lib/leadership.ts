import {
  Cpu,
  Building2,
  HeartPulse,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Award,
  Globe2,
  Code2,
  Briefcase,
  Layers,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type BoardMember = {
  id: string;
  name: string;
  role: string;
  category: "technology" | "healthcare";
  experience: string;
  expertiseBadge: string;
  shortBio: string;
  fullBio: string;
  photoUrl?: string;
  initials: string;
  accentColor: string;
  gradient: string;
  icon: LucideIcon;
  keyCompetencies: string[];
  advisoryFocus: string[];
  quote: string;
};

export const boardMembers: BoardMember[] = [
  {
    id: "haribabu-subaschandrabose",
    name: "Haribabu Subaschandrabose",
    role: "Founder & CEO Board Director & Chief Technology Architect",
    category: "technology",
    experience: "23+ Years",
    expertiseBadge: "Enterprise Technology Architecture",
    shortBio:
      "Over 23 years of distinguished experience architecting mission-critical enterprise systems, distributed cloud platforms, AI-native infrastructure, and high-throughput resilient runtimes.",
    fullBio:
      "Haribabu Subaschandrabose is a veteran technology architect with over 23 years of hands-on leadership in engineering large-scale enterprise platforms. His career spans architecting mission-critical, distributed cloud-native infrastructures, zero-downtime microservices ecosystems, and AI-native data processing pipelines for Fortune 500 enterprises and regulated global institutions.\n\nAt Cybelinx, Haribabu steers the platform architecture governance charter—ensuring that every vertical SaaS and PaaS engine built on the Cybelinx core achieves extreme fault tolerance, sub-200ms P95 AI inference latencies, zero-trust security boundaries, and future-proof adaptability without accumulating technical debt.",
    photoUrl: "/images/leadership/haribabu.jpg",
    initials: "HS",
    accentColor: "#0D47FF",
    gradient: "from-[#0D47FF] to-[#00C2FF]",
    icon: Cpu,
    keyCompetencies: [
      "Enterprise Platform Architecture",
      "Distributed Cloud Systems",
      "AI-Native Infrastructure & LLMOps",
      "High-Throughput Resilient Runtimes",
      "Zero-Trust Multi-Cloud Engineering",
    ],
    advisoryFocus: [
      "Core PaaS & Microservices Architecture",
      "NIST Post-Quantum Cryptography Integration",
      "Enterprise Scalability & Fault Tolerance",
    ],
    quote:
      "Enduring software is not created by chasing transient dev trends—it is engineered through rigorous foundational architecture that adapts seamlessly as technology matures.",
  },
  {
    id: "selvakumar-balakrishnan",
    name: "Selvakumar Balakrishnan",
    role: "Board Director & Chief Solutions Provider",
    category: "technology",
    experience: "25+ Years",
    expertiseBadge: "Enterprise Solution Design & Scale",
    shortBio:
      "Quarter-century of enterprise solution designing expertise, leading transformative digital architectures, complex multi-tenant SaaS platforms, and statutory enterprise workflows.",
    fullBio:
      "With more than 25 years of mastery in enterprise solution design, Selvakumar Balakrishnan brings an extraordinary depth of knowledge in translating complex business imperatives into elegant, robust, and scalable software platforms. He has architected end-to-end digital transformations across banking, financial services, enterprise resource planning (ERP), and multi-entity global supply chains.\n\nSelvakumar's architectural stewardship ensures that Cybelinx platforms feature seamless schema-isolated multi-tenancy, declarative statutory compliance rules, event-driven integration fabrics, and friction-free enterprise onboarding—turning complex software customization into reusable platform configuration.",
    photoUrl: "/images/leadership/selvakumar.jpg",
    initials: "SB",
    accentColor: "#7B61FF",
    gradient: "from-[#7B61FF] to-[#0D47FF]",
    icon: Layers,
    keyCompetencies: [
      "End-to-End Enterprise Solution Design",
      "Multi-Tenant SaaS/PaaS Architecture",
      "Regulated Market Digital Transformation",
      "Enterprise ERP & FinTech Workflows",
      "Event-Driven API & Integration Fabrics",
    ],
    advisoryFocus: [
      "Multi-Entity Organization Data Models",
      "Statutory & Compliance Rule Engines",
      "Continuous Enterprise Delivery Pipelines",
    ],
    quote:
      "A true enterprise solution should empower an organization to expand across borders and verticals without ever needing to fork its underlying codebase.",
  },
  {
    id: "dr-thala-pushpam-hari-babu",
    name: "Dr. Thala Pushpam Hari Babu",
    role: "Board Director & Chief Solutioning Leader",
    category: "healthcare",
    experience: "15+ Years",
    expertiseBadge: "Healthcare Domain & Clinical Informatics",
    shortBio:
      "15+ years of frontline healthcare and clinical domain leadership, guiding clinical workflow intelligence, ABDM statutory compliance, FHIR interoperability, and hospital ecosystems.",
    fullBio:
      "Dr. Thala Pushpam Hari Babu brings over 15 years of distinguished clinical and healthcare domain authority to the Cybelinx Board of Directors. With profound expertise bridging medical science, clinical practice, and healthcare informatics, Dr. Thala Pushpam has been instrumental in shaping modern clinical record standards, doctor-patient digital touchpoints, and hospital workflow optimizations.\n\nAs Cybelinx expands its CybeHealth & Jioplix healthcare platforms, Dr. Thala Pushpam oversees clinical safety protocols, Ayushman Bharat Digital Mission (ABDM Milestone 1, 2, 3) integrations, HL7/FHIR record bridges, and automated diagnostic decision-support guardrails—ensuring our healthcare technologies deliver genuine clinical efficacy and uncompromised patient safety.",
    photoUrl: "/images/leadership/dr-thala-pushpam.jpg",
    initials: "TP",
    accentColor: "#0a8e6e",
    gradient: "from-[#0a8e6e] to-[#00C2FF]",
    icon: Stethoscope,
    keyCompetencies: [
      "Clinical Workflow & Medical Informatics",
      "ABDM Interoperability (M1, M2, M3)",
      "Hospital Information Systems (HIS/EMR)",
      "Healthcare Statutory Compliance & HIPAA",
      "Patient Safety & Diagnostic Guardrails",
    ],
    advisoryFocus: [
      "Digital Health Mission & ABDM Governance",
      "Clinical Decision Support AI Ethics",
      "Hospital & Lab Information Interoperability",
    ],
    quote:
      "In healthcare technology, architectural elegance must always serve clinical accuracy. Software must save clinicians time and protect patient lives at every click.",
  },
  {
    id: "dr-ragunandan-jeyaviswadarsan",
    name: "Dr. Ragunandan Jeyaviswadarsan",
    role: "Board Director & Senior Director",
    category: "healthcare",
    experience: "5+ Years",
    expertiseBadge: "HealthTech Entrepreneurship & Strategy",
    shortBio:
      "Dynamic healthcare entrepreneur and medical professional combining clinical insight with commercial acumen to scale innovative healthtech platforms and market ecosystems.",
    fullBio:
      "Dr. Ragunandan Jeyaviswadarsan represents the vanguard of healthcare entrepreneurship on the Cybelinx Board. Combining a medical foundation with proven entrepreneurial drive over the past 5+ years, Dr. Ragunandan has successfully spearheaded healthcare product commercialization, clinical partner networks, and innovative go-to-market strategies for digital health solutions.\n\nHis strategic perspective bridges real-world healthcare provider pain points with commercially viable, high-growth technology platforms. At Cybelinx, Dr. Ragunandan advises on healthcare market entry, institutional hospital adoption, clinician user experience (UX), and strategic ecosystem alliances across India, the Middle East, and Southeast Asia.",
    photoUrl: "/images/leadership/dr-ragunandan.jpg",
    initials: "RJ",
    accentColor: "#00C2FF",
    gradient: "from-[#00C2FF] to-[#0D47FF]",
    icon: HeartPulse,
    keyCompetencies: [
      "Healthcare Entrepreneurship & Growth",
      "Digital Health Commercialization",
      "Hospital & Clinical Network Strategy",
      "MedTech Product-Market Fit",
      "Global Healthcare Expansion (APAC/MENA)",
    ],
    advisoryFocus: [
      "HealthTech Commercialization Roadmap",
      "Institutional Hospital Partnerships",
      "Clinician-Centric UX & Product Adoption",
    ],
    quote:
      "The greatest healthtech breakthroughs occur when visionary technology architecture meets real-world clinical understanding and decisive entrepreneurial execution.",
  },
];

export const boardStats = [
  { value: "48+", label: "Years of IT Architecture & Solution Design Mastery" },
  { value: "20+", label: "Years of Clinical & Healthcare Domain Leadership" },
  { value: "200+", label: "Enterprise Deployments Governed" },
  { value: "12", label: "Countries with Active Regulatory Footprint" },
];

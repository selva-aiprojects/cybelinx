export type PortfolioContent = {
  id: string;
  title: string;
  hero: {
    tagline: string;
    ctaLabel: string;
    ctaHref: string;
  };
  problem: string[];
  solution: {
    description: string;
    capabilities: string[];
  };
  tech: string[];
  outcomes: string[];
  theme: "indigo" | "teal" | "cyan" | "violet" | "rose" | "blue" | "emerald" | "amber";
  status?: "active" | "phase-2";
};

export const portfolios: PortfolioContent[] = [
  {
    id: "cybeplatforms",
    title: "CybePlatforms",
    hero: {
      tagline: "One AI-native platform. Multiple regulated industries. Shared guardrails.",
      ctaLabel: "Talk to Platform Team",
      ctaHref: "/contact",
    },
    problem: [
      "Fragmented tech stacks across healthcare, banking, and pharma.",
      "Difficulty maintaining strict compliance and auditability in multi-tenant environments.",
      "High operational overhead for orchestrating agentic AI across disjointed systems.",
    ],
    solution: {
      description: "A unified infrastructure providing secure multi-tenant isolation, DevSecOps pipelines, and AI orchestration for data-intensive verticals.",
      capabilities: [
        "Shared identity, continuous audit trails, and global logging.",
        "Tenant-aware LLM routing and vector storage for safe AI.",
        "Configurable compliance profiles per industry (residency, encryption).",
      ],
    },
    tech: [
      "Schema-isolated multi-tenant core.",
      "Automated CI/CD and policy-as-code pipelines.",
      "Agentic AI orchestration layer.",
      "Quantum-ready engineering foundation.",
    ],
    outcomes: [
      "Accelerated time-to-market for regulated enterprise apps.",
      "Zero-downtime deployments across all tenants.",
      "Future-proof architecture supporting complex AI workflows.",
    ],
    theme: "indigo",
    status: "active",
  },
  // Anchor Domains
  {
    id: "cybehms",
    title: "CybeHMS",
    hero: {
      tagline: "Comprehensive Hospital Management Suite for secure, compliant operations.",
      ctaLabel: "Explore CybeHMS",
      ctaHref: "/products/cybehms",
    },
    problem: [
      "Operational silos between front-of-house, clinical teams, and revenue cycle.",
      "Revenue leakage due to disconnected billing and insurance systems.",
      "Inconsistent patient experiences across the care continuum.",
    ],
    solution: {
      description: "Supports end-to-end patient journeys, clinical workflows, and administrative processes with AI-driven care coordination.",
      capabilities: [
        "Patient registration and integrated EMR/EHR records.",
        "Billing, insurance, claims, and AI-assisted revenue cycle management.",
        "Unified pharmacy, lab, and radiology modules.",
      ],
    },
    tech: [
      "ABDM compliance and HL7/FHIR interoperability.",
      "AI-driven triage support and voice-to-text scribes.",
      "End-to-end encryption for Protected Health Information.",
    ],
    outcomes: [
      "Faster patient throughput and reduced wait times.",
      "Automated and error-free insurance claims processing.",
      "Improved clinical decision-making via real-time data.",
    ],
    theme: "teal",
    status: "active",
  },
  {
    id: "cybehealth",
    title: "CybeHealth",
    hero: {
      tagline: "Extending the platform into population health, telemedicine, and preventive care.",
      ctaLabel: "Learn More",
      ctaHref: "/products/cybehealth",
    },
    problem: [
      "Siloed patient data restricting holistic care management.",
      "Inefficient tracking of chronic disease outcomes and remote monitoring.",
      "High costs of delayed interventions in population health.",
    ],
    solution: {
      description: "Enables enterprises and payers to run disease management programs, outcome tracking, and telemedicine on a secure foundation.",
      capabilities: [
        "Chronic disease program management and wellness outreach.",
        "Patient cohort segmentation and risk stratification.",
        "Integration with external health data sources and smart devices.",
      ],
    },
    tech: [
      "Predictive AI models for risk and adherence monitoring.",
      "Interoperable data layers for seamless EMR integration.",
      "Regulatory-grade KPI tracking dashboards.",
    ],
    outcomes: [
      "Proactive interventions improving patient outcomes.",
      "Reduced overall cost of care across cohorts.",
      "Higher adherence rates through automated engagement.",
    ],
    theme: "teal",
    status: "active",
  },
  {
    id: "cybepharma",
    title: "CybePharma Suite",
    hero: {
      tagline: "Rigorous compliance and data integrity for life sciences operations.",
      ctaLabel: "Explore CybePharma",
      ctaHref: "/products/cybepharma",
    },
    problem: [
      "Complex regulatory compliance across R&D and manufacturing.",
      "Data silos delaying digital clinical trials and safety signals.",
      "Manual documentation prone to audit failures.",
    ],
    solution: {
      description: "Supports end-to-end product lifecycle, digital trials, and pharmacovigilance with uncompromising data integrity.",
      capabilities: [
        "Clinical trial management and study data capture.",
        "Quality workflows, deviations, CAPA, and documentation.",
        "Safety monitoring and pharmacovigilance (PV) signal detection.",
      ],
    },
    tech: [
      "Audit-ready records and batch tracking.",
      "AI-powered signal detection and trend analysis.",
      "Policy-as-code enforcing FDA/EMA compliance.",
    ],
    outcomes: [
      "Accelerated clinical trial execution phases.",
      "Zero-defect regulatory audit readiness.",
      "Real-time visibility into supply chain and batch quality.",
    ],
    theme: "cyan",
    status: "active",
  },
  {
    id: "cybehrms",
    title: "CybeHRMS",
    hero: {
      tagline: "Enterprise-grade Human Resource Management built for regulated operations.",
      ctaLabel: "Explore CybeHRMS",
      ctaHref: "/products/cybehrms",
    },
    problem: [
      "Fragmented HR tools leading to compliance risks.",
      "Poor employee engagement and disjointed payroll.",
      "Lack of real-time workforce visibility across multi-location organizations.",
    ],
    solution: {
      description: "Centralizes employee lifecycle management, compliance workflows, and AI-assisted decision support.",
      capabilities: [
        "Core HR: employee records, multi-location org structures.",
        "Leave and shift management with policy rules.",
        "Performance and OKR frameworks with embedded analytics.",
      ],
    },
    tech: [
      "Built on CybePlatforms multi-tenant core.",
      "AI copilots for HR policy and document intelligence.",
      "Secure document storage with strict RBAC.",
    ],
    outcomes: [
      "60% reduction in administrative HR workload.",
      "100% adherence to local labor laws and tax regimes.",
      "Seamless paperless onboarding journeys.",
    ],
    theme: "indigo",
    status: "active",
  },
  // Financial & Insurance Stack
  {
    id: "cybebank",
    title: "CybeBank",
    hero: {
      tagline: "Financial operating systems with built-in compliance and AI-driven security.",
      ctaLabel: "Discover CybeBank",
      ctaHref: "/contact",
    },
    problem: [
      "Legacy banking cores unable to support agile fintech integrations.",
      "High compliance burden for KYC, KYB, and AML processes.",
      "Siloed customer data preventing personalized banking experiences.",
    ],
    solution: {
      description: "A secure banking foundation designed for rapid fintech integrations, robust compliance, and automated risk management.",
      capabilities: [
        "Core banking workflows and open banking APIs.",
        "Automated KYC/KYB and customer onboarding.",
        "Centralized ledger and audit-ready transaction logging.",
      ],
    },
    tech: [
      "Strict pool/silo isolation models for financial tenants.",
      "Agentic AI for continuous compliance monitoring.",
      "Real-time data streaming architectures.",
    ],
    outcomes: [
      "Frictionless onboarding for banking customers.",
      "Reduced risk of regulatory fines through automated AML.",
      "Rapid deployment of new financial products.",
    ],
    theme: "emerald",
    status: "phase-2",
  },
  {
    id: "cybefin",
    title: "CybeFin",
    hero: {
      tagline: "Intersecting fintech and healthcare with seamless payments and financing.",
      ctaLabel: "Discover CybeFin",
      ctaHref: "/contact",
    },
    problem: [
      "Disconnect between healthcare services and financial payments.",
      "Slow and opaque patient financing and reconciliation processes.",
      "High rates of payment fraud and revenue leakage.",
    ],
    solution: {
      description: "Bridges the gap between clinical operations and financial transactions with real-time payments and AI fraud detection.",
      capabilities: [
        "Real-time payment processing and gateway integrations.",
        "Patient financing and integrated healthcare billing.",
        "AI-driven fraud detection and anomaly alerting.",
      ],
    },
    tech: [
      "Seamless API interoperability with CybeHMS and external gateways.",
      "Machine learning models for transaction risk scoring.",
      "PCI-DSS compliant data tokenization.",
    ],
    outcomes: [
      "Accelerated revenue realization across healthcare networks.",
      "Significantly reduced transaction fraud.",
      "Streamlined financial experiences for patients and users.",
    ],
    theme: "emerald",
    status: "phase-2",
  },
  {
    id: "cybeinsure",
    title: "CybeInsure",
    hero: {
      tagline: "Intelligent insurtech rails for automated underwriting and claims processing.",
      ctaLabel: "Discover CybeInsure",
      ctaHref: "/contact",
    },
    problem: [
      "Manual and slow claims processing driving up operational costs.",
      "Inaccurate underwriting due to siloed health and risk data.",
      "High volume of fraudulent claims escaping detection.",
    ],
    solution: {
      description: "Modern insurtech infrastructure that blends health data with financial modeling to automate the insurance lifecycle.",
      capabilities: [
        "Automated claims processing and intelligent routing.",
        "Data-driven underwriting automation.",
        "Insurtech platforms that blend seamlessly with healthcare providers.",
      ],
    },
    tech: [
      "Agentic AI orchestrating claim handling and document parsing.",
      "Integration with EMRs for real-time health data verification.",
      "Advanced fraud detection algorithms.",
    ],
    outcomes: [
      "Drastic reduction in claims processing times.",
      "Improved underwriting accuracy and reduced risk.",
      "Lower operational costs through AI automation.",
    ],
    theme: "amber",
    status: "phase-2",
  },
  {
    id: "cybeanalytics",
    title: "CybeAnalytics",
    hero: {
      tagline: "Cross-platform insights delivering real-time dashboards and predictive models.",
      ctaLabel: "Discover Analytics",
      ctaHref: "/contact",
    },
    problem: [
      "Data locked in application silos preventing unified reporting.",
      "Lack of self-service BI tools for business users.",
      "Reactive decision making due to historical-only data.",
    ],
    solution: {
      description: "A unified analytics layer across all Cybe products offering domain-specific insights to enterprise teams.",
      capabilities: [
        "Pre-built dashboards for HR, hospital ops, and pharma.",
        "Self-service analytics and governed data exploration.",
        "Automated exports and APIs for downstream BI tools.",
      ],
    },
    tech: [
      "AI/ML forecasting and anomaly detection models.",
      "Shared data foundation across the Cybelinx platform.",
      "Role-based access to analytics content.",
    ],
    outcomes: [
      "Empowered business users making data-driven decisions.",
      "Early detection of operational anomalies.",
      "Reduced dependency on data engineering teams for reports.",
    ],
    theme: "blue",
    status: "active",
  },
  {
    id: "cybequantum",
    title: "CybeQuantum",
    hero: {
      tagline: "Quantum-ready workloads preparing enterprises for the next compute revolution.",
      ctaLabel: "Explore Quantum",
      ctaHref: "/contact",
    },
    problem: [
      "Core systems unable to leverage upcoming quantum advancements.",
      "High barrier to entry for experimenting with quantum algorithms.",
      "Risk of disruptive migrations for future-proof computation.",
    ],
    solution: {
      description: "The forward-looking pillar of CybePlatforms focusing on quantum-inspired experimentation and hybrid workflows.",
      capabilities: [
        "Support for experimentation on classical test workloads.",
        "Integration hooks for third-party quantum simulators.",
        "Architectural patterns for progressive, non-disruptive adoption.",
      ],
    },
    tech: [
      "Quantum-ready data models and abstractions.",
      "Hybrid classical-quantum pipelines with full observability.",
      "Seamless integration via CybePlatforms orchestration.",
    ],
    outcomes: [
      "Future-proofed enterprise architecture.",
      "Early access to optimization and risk modeling advantages.",
      "Safe experimentation without risking current production systems.",
    ],
    theme: "violet",
    status: "active",
  },
];

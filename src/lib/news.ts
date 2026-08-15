export type ProductNewsItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: "Major Release" | "Product Announcement" | "Security & Architecture" | "SLA Milestone" | "R&D Innovation";
  productName: string;
  productSlug: string;
  summary?: string;
  image: string;
  badgeTone: "emerald" | "teal" | "violet" | "amber" | "cyan" | "indigo";
  metrics: { label: string; value: string }[];
  highlights: string[];
  fullStory: string[];
};

export const productNews: ProductNewsItem[] = [
  {
    id: "news-cybehrms-3",
    slug: "cybehrms-3-release-ai-payroll",
    title: "CybeHRMS 3.0 Released: Autonomous Agentic AI Onboarding & Real-Time Statutory Payroll",
    subtitle: "Enterprise HR automation upgrade brings zero-error tax calculations and AI-guided talent workflows.",
    date: "2026-08-01",
    category: "Major Release",
    productName: "CybeHRMS",
    productSlug: "cybehrms",
    image: "/assets/news/news-cybehrms-3.png",
    badgeTone: "emerald",
    metrics: [
      { label: "Payroll Processing Time", value: "-75%" },
      { label: "Compliance Guarantee", value: "100%" },
      { label: "Active Enterprise Users", value: "45,000+" },
    ],
    highlights: [
      "Agentic AI assistant guiding employee onboarding and document verification",
      "Real-time statutory tax engine supporting multi-state Indian tax rules (PF, PT, TDS, ESI)",
      "Geofenced mobile attendance and biometric synchronization with zero latency",
    ],
    fullStory: [
      "Cybelinx is proud to announce the official release of CybeHRMS 3.0, the biggest update yet to our flagship workforce management platform. Purpose-built for multi-subsidiary enterprise clients, CybeHRMS 3.0 introduces an autonomous AI agent capable of managing complete onboarding workflows from initial document ingestion to IT asset provisioning.",
      "The new statutory compliance engine processes complex payrolls across thousands of employees in minutes, eliminating manual spreadsheet reconciliation and guaranteeing 100% adherence to evolving regional labor regulations.",
      "Early adopters report up to 75% reduction in monthly HR administrative workload and seamless integration with existing ERP and banking partners."
    ],
  },
  {
    id: "news-cybehealth-abdm",
    slug: "cybehealth-abdm-level-2-ai-scribe",
    title: "CybeHealth & CybeHMS Achieve ABDM Level 2 Certification with HIPAA-Compliant AI Medical Scribe",
    subtitle: "Next-gen hospital & clinical software enables automated clinical dictation and unified EHR exchange.",
    date: "2026-07-18",
    category: "Product Announcement",
    productName: "CybeHealth & HMS",
    productSlug: "cybehms",
    image: "/assets/news/news-cybehealth-abdm.png",
    badgeTone: "teal",
    metrics: [
      { label: "Clinical Scribe Accuracy", value: "99.4%" },
      { label: "FHIR Interoperability", value: "HL7 R4" },
      { label: "ABDM Level", value: "Level 2 Certified" },
    ],
    highlights: [
      "Real-time voice-to-text AI clinical scribe with automatic FHIR medical record structuring",
      "Seamless integration with Ayushman Bharat Digital Mission (ABDM) health stacks",
      "Zero-Trust encryption protecting patient Protected Health Information (PHI)",
    ],
    fullStory: [
      "Cybelinx healthcare engineering teams have completed full ABDM Level 2 certification for CybeHMS and CybeHealth platforms. The release introduces an intelligent AI ambient scribe that listens to patient consultations in real time and automatically populates electronic health records.",
      "By removing documentation overhead, doctors save over 2.5 hours per day on data entry, enabling them to focus entirely on patient outcomes.",
      "The platform supports end-to-end hospital management—including outpatient registration, inpatient ward management, pharmacy POS, radiology integration, and automated insurance claims reimbursement."
    ],
  },
  {
    id: "news-cybeplatforms-pqc",
    slug: "cybeplatforms-post-quantum-cryptography",
    title: "CybePlatforms Unveils Post-Quantum Cryptography & Multi-Cloud SRE Guardrails",
    subtitle: "Enterprise foundation upgraded with PQC encryption standards and cross-cloud zero-trust automation.",
    date: "2026-06-25",
    category: "Security & Architecture",
    productName: "CybePlatforms",
    productSlug: "cybeplatforms",
    image: "/assets/news/news-cybeplatforms-pqc.png",
    badgeTone: "indigo",
    metrics: [
      { label: "Encryption Grade", value: "NIST PQC Standards" },
      { label: "Multi-Cloud Coverage", value: "AWS, Azure, GCP" },
      { label: "Compliance Automation", value: "Continuous ISO 27001" },
    ],
    highlights: [
      "NIST-approved post-quantum cryptographic primitives protecting enterprise customer data at rest and in transit",
      "Continuous DevSecOps golden paths for automated SAST/DAST scanning and secret zeroing",
      "Schema-isolated multi-organization data architecture supporting private cloud and hybrid deployments",
    ],
    fullStory: [
      "In response to emerging quantum computing security challenges, Cybelinx has integrated Post-Quantum Cryptography (PQC) primitives into the core CybePlatforms runtime. All platform-level data encryption now incorporates NIST-recommended quantum-safe algorithms alongside traditional RSA/AES standards.",
      "Additionally, the platform's multi-cloud SRE orchestration now supports unified DevSecOps guardrails across AWS, Microsoft Azure, Google Cloud Platform, and on-premises Kubernetes clusters.",
      "This architecture enables enterprises in banking, government, and pharma to future-proof their critical systems against quantum decryption threats today."
    ],
  },
  {
    id: "news-cybebank-sla",
    slug: "cybebank-99-999-percent-uptime-milestone",
    title: "CybeBank FinTech Platform Surpasses 99.999% SLA Milestone Across 12 Countries",
    subtitle: "Core digital banking engine handles over 50 million monthly transactions with sub-50ms latency.",
    date: "2026-05-14",
    category: "SLA Milestone",
    productName: "CybeBank",
    productSlug: "cybebank",
    image: "/assets/news/news-cybebank-sla.png",
    badgeTone: "violet",
    metrics: [
      { label: "Platform Uptime SLA", value: "99.999%" },
      { label: "Monthly API Calls", value: "50M+" },
      { label: "Average Latency", value: "< 45ms" },
    ],
    highlights: [
      "Five-nines availability achieved over 12 consecutive months of continuous operation",
      "Active-active multi-region database failover with zero transactional data loss",
      "Built-in fraud detection AI processing 2,500 transactions per second",
    ],
    fullStory: [
      "Cybelinx FinTech & Banking division has achieved a landmark milestone: maintaining 99.999% operational uptime across all 12 international deployment regions over the past 12 months.",
      "CybeBank provides financial institutions with a cloud-native core banking platform, covering digital account opening, micro-lending algorithms, automated clearing house (ACH) connectors, and real-time fraud monitoring.",
      "The architecture leverages active-active multi-region failover and distributed event streaming, guaranteeing uninterrupted financial services even during cloud infrastructure outages."
    ],
  },
  {
    id: "news-cybepharma-lakehouse",
    slug: "cybepharma-clinical-data-lakehouse-launch",
    title: "CybePharma R&D Suite Introduces Enterprise Clinical Lakehouse & Real-Time Analytics",
    subtitle: "Unified clinical trial data hub connects research labs, regulatory filings, and supply chain tracking.",
    date: "2026-04-05",
    category: "R&D Innovation",
    productName: "CybePharma",
    productSlug: "cybepharma",
    image: "/assets/news/news-cybepharma-lakehouse.png",
    badgeTone: "cyan",
    metrics: [
      { label: "Trial Data Processing", value: "10x Faster" },
      { label: "21 CFR Part 11 Audit", value: "Native Support" },
      { label: "Data Pipeline Connectors", value: "40+" },
    ],
    highlights: [
      "Open lakehouse architecture for ingesting unstructured clinical trial notes and sensor data",
      "Immutable 21 CFR Part 11 compliant audit trails for global regulatory submissions",
      "AI predictive analytics forecasting trial milestone risks and supply chain bottlenecks",
    ],
    fullStory: [
      "CybePharma Suite has expanded its product offerings with a high-throughput, enterprise-isolated clinical data lakehouse engineered specifically for pharmaceutical R&D organizations.",
      "By unifying disparate lab notebooks, patient trial telemetries, and regulatory submission drafts into a governed open lakehouse, pharmaceutical teams accelerate trial evaluation cycles by up to 10x.",
      "The system features built-in 21 CFR Part 11 audit logging, automated data masking, and AI-driven anomaly detection to streamline FDA and EMA compliance filings."
    ],
  },
];

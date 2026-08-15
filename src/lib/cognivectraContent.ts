export type EnterpriseFlow = {
  id: string;
  title: string;
  desc: string;
  example: string;
  img: string;
  color: string;
  accentColor: string;
  steps: string[];
};

export const enterpriseFlows: EnterpriseFlow[] = [
  {
    id: "business-ai",
    title: "Business Problem to AI Solution",
    desc: "Bridging the gap between manual data silos and intelligent AI orchestration for predictable enterprise growth.",
    example: "Turning manual medical claims review into an AI-assisted automated workflow.",
    img: "/assets/cognivectra/hero-services.webp",
    color: "rgba(79, 70, 229, 0.15)",
    accentColor: "#6366f1",
    steps: ["Data Silo", "Ingest Pipeline", "AI Engine", "Action Trigger", "Automated ROI"],
  },
  {
    id: "devops-pipeline",
    title: "Enterprise DevOps Pipeline",
    desc: "Automated, AI-enhanced CI/CD flows with multi-cloud Kubernetes orchestration and secure IaC deployment.",
    example: "Moving from slow manual releases to secure, zero-touch daily deployments.",
    img: "/assets/cognivectra/hero-engagements.webp",
    color: "rgba(16, 185, 129, 0.15)",
    accentColor: "#22c55e",
    steps: ["Git Commit", "SAST/DAST", "Container Build", "ArgoCD", "Production K8s"],
  },
  {
    id: "cloud-strategy",
    title: "Cloud Strategy & Migration",
    desc: "Seamlessly migrating legacy infrastructure to distributed, resilient, multi-cloud active-active architectures.",
    example: "Transitioning expensive on-premise servers to scalable AWS/GCP Kubernetes clusters.",
    img: "/assets/cognivectra/hero-industries.webp",
    color: "rgba(14, 165, 233, 0.15)",
    accentColor: "#0ea5e9",
    steps: ["Legacy Audit", "IaC Blueprint", "Live Migration", "Zero-Downtime", "Multi-Cloud Ops"],
  },
  {
    id: "modernization",
    title: "IT Modernization with AI",
    desc: "Systematic modernization of monolithic technical debt into scalable, high-performing AI-native microservices.",
    example: "Replacing a tangled monolith with nimble AI microservices and event-driven queues.",
    img: "/assets/cognivectra/hero-results.webp",
    color: "rgba(245, 158, 11, 0.15)",
    accentColor: "#f59e0b",
    steps: ["Monolith", "Strangler-Fig", "API Mesh", "AI Copilot", "Global Scale"],
  },
  {
    id: "custom-ai",
    title: "Solving Unique Enterprise Challenges",
    desc: "Custom AI blueprints designed for specific, non-trivial industry challenges and high-compliance edge cases.",
    example: "Building a specialized clinical trial matching model and real-time fraud detection engine.",
    img: "/assets/cognivectra/hero-whoweare.webp",
    color: "rgba(236, 72, 153, 0.15)",
    accentColor: "#ec4899",
    steps: ["Challenge", "Custom RAG", "Fine-Tuned LLM", "Integration", "Measurable ROI"],
  },
];

export type NetworkNode = {
  id: string;
  layer: string;
  x: number;
  y: number;
  label: string;
  desc: string;
  hoverDetail: string;
};

export type NetworkEdge = {
  from: string;
  to: string;
  reverseFlow?: boolean;
  delayOffset?: number;
};

export type TopologyEcosystem = {
  id: string;
  title: string;
  color: string;
  desc: string;
  nodes: NetworkNode[];
  edges: NetworkEdge[];
};

export const topologyEcosystems: TopologyEcosystem[] = [
  {
    id: "ai",
    title: "AI Platform Engine",
    color: "#ec4899",
    desc: "Distributed intelligence hub for autonomous agents and RAG vector pipelines.",
    nodes: [
      { id: "data", layer: "Data Layer", x: 15, y: 35, label: "Enterprise Data", desc: "ERP / CRM / Logs", hoverDetail: "Multi-modal ingestion pipeline pulling structured and unstructured enterprise data." },
      { id: "vector", layer: "Data Layer", x: 35, y: 15, label: "Vector DB", desc: "Embeddings Cache", hoverDetail: "High-performance vector search engine storing billions of document embeddings." },
      { id: "engine", layer: "Intelligence", x: 50, y: 40, label: "AI Engine", desc: "LLM Orchestration", hoverDetail: "Central API gateway routing prompts while enforcing enterprise security and audit trails." },
      { id: "features", layer: "Intelligence", x: 35, y: 70, label: "Feature Store", desc: "Real-time signals", hoverDetail: "Low-latency cache serving live user profiles and historical signals to the AI." },
      { id: "agents", layer: "Application", x: 75, y: 20, label: "Autonomous Agents", desc: "Action execution", hoverDetail: "Task-specific micro-agents capable of multi-step reasoning and API execution." },
      { id: "business", layer: "Application", x: 80, y: 60, label: "Business Systems", desc: "Process integration", hoverDetail: "Direct integration into existing CRMs or custom frontends for end-user delivery." },
    ],
    edges: [
      { from: "data", to: "engine" },
      { from: "vector", to: "engine", reverseFlow: true },
      { from: "features", to: "engine", delayOffset: 0.5 },
      { from: "engine", to: "agents" },
      { from: "engine", to: "business", delayOffset: 0.8 },
    ],
  },
  {
    id: "platform",
    title: "Platform Evolution",
    color: "#a855f7",
    desc: "Event-driven microservices architecture replacing monolithic legacy systems.",
    nodes: [
      { id: "legacy", layer: "Legacy", x: 15, y: 35, label: "Legacy Core", desc: "On-prem data", hoverDetail: "Strangler-fig pattern gradually extracting domain logic from legacy core." },
      { id: "api", layer: "Gateway", x: 35, y: 35, label: "API Gateway", desc: "Kong / Apigee", hoverDetail: "Secure edge routing with rate-limiting, auth validation, and payload inspection." },
      { id: "eventbus", layer: "Platform", x: 50, y: 15, label: "Event Bus", desc: "Kafka / Kinesis", hoverDetail: "High-throughput asynchronous messaging backbone for decoupled services." },
      { id: "micro", layer: "Platform", x: 65, y: 50, label: "Service Mesh", desc: "Istio / Linkerd", hoverDetail: "Zero-trust network layer handling service-to-service mTLS and observability." },
      { id: "ai", layer: "Intelligence", x: 80, y: 15, label: "Intelligence Layer", desc: "Predictive Models", hoverDetail: "Real-time decision engine flagging anomalies or generating recommendations." },
      { id: "client", layer: "Experience", x: 85, y: 70, label: "Omni-Channel UI", desc: "Web / Mobile App", hoverDetail: "Unified front-end experience consuming scalable microservice APIs." },
    ],
    edges: [
      { from: "legacy", to: "api" },
      { from: "api", to: "eventbus" },
      { from: "api", to: "micro" },
      { from: "eventbus", to: "micro", reverseFlow: true, delayOffset: 0.6 },
      { from: "eventbus", to: "ai" },
      { from: "micro", to: "client" },
      { from: "ai", to: "client", delayOffset: 0.4 },
    ],
  },
  {
    id: "kubernetes",
    title: "Global Multi-Cloud Kubernetes",
    color: "#0ea5e9",
    desc: "Highly available container orchestration across multi-cloud regions.",
    nodes: [
      { id: "traffic", layer: "Edge", x: 15, y: 35, label: "Global LB", desc: "Anycast Routing", hoverDetail: "Anycast load balancing routing users to their nearest healthy data center." },
      { id: "cluster1", layer: "Compute", x: 40, y: 15, label: "US-East Cluster", desc: "AWS EKS", hoverDetail: "Auto-scaling Kubernetes cluster managing active workloads in the US region." },
      { id: "cluster2", layer: "Compute", x: 40, y: 65, label: "EU-West Cluster", desc: "GCP GKE", hoverDetail: "Active-active failover cluster ensuring GDPR compliance for EU users." },
      { id: "dbMaster", layer: "Storage", x: 65, y: 35, label: "Global Spanner DB", desc: "Multi-Region DB", hoverDetail: "Multi-region distributed database with synchronous cross-ocean replication." },
      { id: "cache1", layer: "Edge", x: 80, y: 10, label: "Redis Edge", desc: "Sub-10ms Latency", hoverDetail: "In-memory caching layer reducing DB load and dropping latency." },
      { id: "cache2", layer: "Edge", x: 80, y: 70, label: "Redis Edge", desc: "Sub-10ms Latency", hoverDetail: "In-memory caching layer reducing DB load and dropping latency." },
    ],
    edges: [
      { from: "traffic", to: "cluster1" },
      { from: "traffic", to: "cluster2", delayOffset: 0.5 },
      { from: "cluster1", to: "dbMaster" },
      { from: "cluster2", to: "dbMaster" },
      { from: "cluster1", to: "cache1", delayOffset: 0.2 },
      { from: "cluster2", to: "cache2", delayOffset: 0.7 },
    ],
  },
  {
    id: "devops",
    title: "Enterprise DevOps GitOps",
    color: "#22c55e",
    desc: "Zero-touch CI/CD pipeline with continuous security scanning and GitOps deployment.",
    nodes: [
      { id: "dev", layer: "Code", x: 15, y: 35, label: "Engineering", desc: "Git Commit", hoverDetail: "Developers push code triggering automated pre-commit and linting hooks." },
      { id: "git", layer: "Code", x: 30, y: 35, label: "GitOps Repo", desc: "GitHub / GitLab", hoverDetail: "Single source of truth for both application code and infrastructure manifests." },
      { id: "ci", layer: "Build", x: 45, y: 15, label: "CI Pipeline", desc: "Build & Test", hoverDetail: "Automated unit testing, integration logic, and docker image compilation." },
      { id: "sec", layer: "Security", x: 45, y: 70, label: "SecOps Scan", desc: "Sonar / Snyk", hoverDetail: "Static code analysis and vulnerability scanning blocking unsafe deployments." },
      { id: "registry", layer: "Artifact", x: 65, y: 35, label: "Container Registry", desc: "ECR / ACR", hoverDetail: "Immutable image storage with cryptographic signing for supply-chain security." },
      { id: "prod", layer: "Deploy", x: 80, y: 35, label: "Production K8s", desc: "ArgoCD / Flux", hoverDetail: "GitOps controller automatically pulling and deploying new registry images." },
    ],
    edges: [
      { from: "dev", to: "git" },
      { from: "git", to: "ci" },
      { from: "git", to: "sec", delayOffset: 0.3 },
      { from: "ci", to: "registry" },
      { from: "sec", to: "registry", delayOffset: 0.6 },
      { from: "registry", to: "prod" },
    ],
  },
];

export const cognivectraPlatforms = [
  {
    name: "StoreAI",
    tagline: "Enterprise GenAI Platform for Retail",
    desc: "Predictive inventory analytics, customer behavior forecasting, and enterprise GenAI runtime.",
    badge: "Production Ready",
    href: "/products/cybecommerce",
    accent: "#ec4899",
  },
  {
    name: "MedFlow (Healthezee)",
    tagline: "Enterprise Healthcare EMR & Clinical AI",
    desc: "HIPAA-compliant hospital management, ambient medical AI scribe, and FHIR interoperability.",
    badge: "Live Deployment",
    href: "/products/cybehms",
    accent: "#14b8a6",
  },
  {
    name: "StewardPlatform",
    tagline: "Enterprise SaaS Foundation for FinTech",
    desc: "Powering StockSteward algorithmic trading, portfolio risk intelligence, and statutory compliance.",
    badge: "Enterprise Core",
    href: "/products/cybefintech",
    accent: "#8b5cf6",
  },
  {
    name: "CybeHRMS (CogniHRMS)",
    tagline: "AI-Driven Workforce & Statutory Payroll",
    desc: "Autonomous agentic onboarding, 100% tax compliance, and predictive attrition analytics.",
    badge: "Major Release 3.0",
    href: "/products/cybehrms",
    accent: "#10b981",
  },
  {
    name: "EduPortal AI",
    tagline: "Enterprise Multi-Org Learning Platform",
    desc: "AI personalized learning pathways, automated assessment grading, and institutional analytics.",
    badge: "Production Ready",
    href: "/products",
    accent: "#06b6d4",
  },
  {
    name: "Hospitality eHMS",
    tagline: "Smart Hotel & Property OS",
    desc: "Digital front desk, housekeeping task delegation, night audits, and multi-property CRM.",
    badge: "Live Deployment",
    href: "/products/cybehms",
    accent: "#f59e0b",
  },
];

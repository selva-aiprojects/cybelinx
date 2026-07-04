import Hero from "@/components/Hero";
import Section from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import ArchitectureEcosystem from "@/components/ArchitectureEcosystem";
import CaseStudy from "@/components/CaseStudy";
import { capabilities, industries, whyCybelink } from "@/lib/content";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <AnimatedSection>
          <TrustBar />
        </AnimatedSection>
      </Section>

      <Section id="outcomes">
        <AnimatedSection>
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Enterprise outcomes</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              From strategy and architecture to launch and scale.
            </h2>
            <p className="mt-4 text-base leading-8 text-surface/80">
              We help enterprise teams move with clarity, speed, and governance across every stage of the product lifecycle.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "AI-ready product delivery",
              description: "Turn emerging technology into durable value with design-led execution and measurable adoption.",
            },
            {
              title: "Cloud-native platform acceleration",
              description: "Build scalable foundations for growth, resilience, and rapid feature release across teams.",
            },
            {
              title: "Regulated industry confidence",
              description: "Deliver secure, compliant solutions with the rigor required for high-stakes enterprise environments.",
            },
          ].map((outcome, index) => (
            <AnimatedSection key={outcome.title} delay={index * 0.05}>
              <div className="glass rounded-[1.5rem] border border-white/10 p-7">
                <h3 className="font-display text-xl font-semibold text-white">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-7 text-surface/80">{outcome.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="architecture-flows">
        <AnimatedSection>
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Visualizing Transformation</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Problem to Solution: Enterprise AI Architecture Flows
            </h2>
            <p className="mt-4 text-base leading-8 text-surface/80">
              Real-world transformation scenarios showing how we bridge legacy systems with intelligent AI-driven solutions.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "AI-Powered Process Automation",
              steps: [
                { label: "Manual Process", description: "Existing workflows with human bottlenecks" },
                { label: "Data Integration", description: "Unified data from multiple sources" },
                { label: "AI Training", description: "ML models trained on historical patterns" },
                { label: "Intelligent Automation", description: "Autonomous execution with oversight" },
              ],
              outcome: "Reduce manual processing by 60-80% while maintaining compliance and audit trails.",
            },
            {
              title: "Cloud-Native Platform Acceleration",
              steps: [
                { label: "Monolithic System", description: "Legacy architecture with tight coupling" },
                { label: "Containerization", description: "Microservices wrapped in containers" },
                { label: "Kubernetes Orchestration", description: "Intelligent workload management" },
                { label: "Multi-Cloud Scale", description: "Global deployment with auto-scaling" },
              ],
              outcome: "Move from monthly releases to daily deployments with zero downtime migrations.",
            },
            {
              title: "Data Intelligence Pipeline",
              steps: [
                { label: "Siloed Data", description: "Fragmented data across systems" },
                { label: "Data Lake", description: "Centralized data collection and cleaning" },
                { label: "Feature Engineering", description: "Extracted insights and signals" },
                { label: "Real-time Intelligence", description: "Live dashboards and predictive models" },
              ],
              outcome: "Transform raw data into actionable intelligence for business decision-making.",
            },
            {
              title: "Security & Compliance Modernization",
              steps: [
                { label: "Legacy Security", description: "Manual compliance and static policies" },
                { label: "Zero Trust", description: "Identity-first security architecture" },
                { label: "Automation", description: "Continuous compliance checking" },
                { label: "Certified Excellence", description: "HIPAA, SOC2, ISO ready" },
              ],
              outcome: "Achieve enterprise security posture while maintaining development velocity.",
            },
          ].map((flow, index) => (
            <AnimatedSection key={flow.title} delay={index * 0.05}>
              <ArchitectureFlow {...flow} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section textured id="ecosystem">
        <AnimatedSection>
          <ArchitectureEcosystem
            title="Dynamic Network Ecosystems"
            description="Our AI-native platform architecture designed for scalability, intelligence, and enterprise resilience."
            components={[
              {
                label: "AI Intelligence Layer",
                sublabel: "CORE ENGINE",
                color: "cyan",
                items: ["LLM Orchestration", "RAG Pipelines", "Model Management"],
              },
              {
                label: "Data Fabric",
                sublabel: "DATA FOUNDATION",
                color: "primary",
                items: ["Vector DB", "Data Lakes", "Real-time Sync"],
              },
              {
                label: "Platform Services",
                sublabel: "INFRASTRUCTURE",
                color: "violet",
                items: ["Kubernetes", "DevOps CI/CD", "Multi-cloud"],
              },
              {
                label: "Enterprise Compliance",
                sublabel: "GOVERNANCE",
                color: "cyan",
                items: ["HIPAA/SOC2", "Audit Trails", "Access Control"],
              },
            ]}
          />
        </AnimatedSection>
      </Section>

      <Section id="case-studies">
        <AnimatedSection>
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Success Stories</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Real Results from Enterprise Transformations
            </h2>
            <p className="mt-4 text-base leading-8 text-surface/80">
              Case studies demonstrating measurable impact across healthcare, fintech, and technology sectors.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Healthcare EMR Platform",
              challenge: "Legacy EMR system causing 30% scheduling delays and compliance drift.",
              solution: "Deployed Cybehealth with AI-powered scheduling and automated compliance checks.",
              impact: "40% faster patient intake, 99.9% compliance score",
              metrics: ["40% faster intake", "Automated compliance", "HIPAA certified"],
            },
            {
              title: "FinTech Digital Banking",
              challenge: "Manual loan processing taking 2 weeks per application with high error rates.",
              solution: "Implemented CybeBank with ML-driven underwriting and real-time fraud detection.",
              impact: "Reduced processing time to 24 hours, 99.2% accuracy",
              metrics: ["24h processing", "99.2% accuracy", "90% cost reduction"],
            },
            {
              title: "Enterprise HCM Transformation",
              challenge: "Fragmented HR systems across 5 countries with no unified analytics.",
              solution: "Unified on CybeHCM with AI-powered workforce insights and global compliance.",
              impact: "Single pane of glass, 35% reduction in HR admin time",
              metrics: ["35% time savings", "Global view", "Real-time analytics"],
            },
            {
              title: "AI-Driven Customer Intelligence",
              challenge: "Customer data scattered across 12 systems with no unified segmentation.",
              solution: "Built CybeAI Suite to create real-time customer intelligence and predictive models.",
              impact: "3x increase in personalization accuracy, 25% uplift in engagement",
              metrics: ["3x accuracy", "25% uplift", "2-week deployment"],
            },
            {
              title: "Pharma Compliance Automation",
              challenge: "Manual compliance reviews taking 3 months per audit cycle.",
              solution: "Deployed CybePharma with automated regulatory monitoring and reporting.",
              impact: "Reduced audit cycle to 2 weeks, zero compliance violations",
              metrics: ["2-week cycle", "Zero violations", "15% cost save"],
            },
            {
              title: "Cloud Migration at Scale",
              challenge: "Moving 50TB of legacy data and 500+ workloads to cloud with zero downtime.",
              solution: "Orchestrated multi-cloud migration with Cybelink platform tools.",
              impact: "Zero downtime, 45% infrastructure cost reduction",
              metrics: ["Zero downtime", "45% savings", "3-month delivery"],
            },
          ].map((study, index) => (
            <AnimatedSection key={study.title} delay={index * 0.05}>
              <CaseStudy {...study} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section textured id="capabilities">
        <AnimatedSection>
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Product Engineering</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Full-stack engineering capability for digital products at scale.
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <AnimatedSection key={capability.title} delay={index * 0.05}>
              <FeatureCard
                title={capability.title}
                description={capability.description}
                icon={capability.icon}
                href={
                  capability.title.includes("Cloud")
                    ? "/cloud-platform"
                    : capability.title.includes("AI")
                      ? "/ai-services"
                      : "/solutions"
                }
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="industries">
        <AnimatedSection>
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Industry Solutions</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Deep domain expertise across regulated and high-scale industries.
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.slug} delay={index * 0.04}>
              <FeatureCard
                title={industry.name}
                description={industry.description}
                icon={industry.icon}
                href={`/industries#${industry.slug}`}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section textured id="products">
        <AnimatedSection>
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Product Portfolio</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Cybe* platforms engineered for enterprise outcomes.
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.slug} delay={index * 0.05}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="why-cybelink">
        <AnimatedSection>
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Why Cybelink</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              A partner built for product leaders and engineering executives.
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCybelink.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.06}>
              <FeatureCard title={pillar.title} description={pillar.description} icon={pillar.icon} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <CTABand
            heading="Ready to accelerate your next product initiative?"
            subheading="Talk with our engineering leaders about solutions, platforms, and industry programs."
          />
        </AnimatedSection>
      </Section>
    </>
  );
}

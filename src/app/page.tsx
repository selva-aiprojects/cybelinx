import Hero from "@/components/Hero";
import Section from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
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

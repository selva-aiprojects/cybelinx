import Hero from "@/components/Hero";
import Section, { SceneHeading } from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import { capabilities, industries, whyCybelinx } from "@/lib/content";
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
          <SceneHeading
            scene="Scene 02"
            slug="Int. Product Floor — Day"
            title="Built as products, not billed as hours."
            description="No statements of work, no bench of consultants — Cybelinx ships and maintains its own platforms, the same way any product company does."
          />
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "One codebase, every tenant",
              description: "A multi-tenant architecture from day one, so onboarding a new customer is configuration, not a fork.",
            },
            {
              title: "AI-native, not AI-bolted-on",
              description: "Intelligence is designed into core workflows — payroll, compliance, operations — not layered on as a chatbot.",
            },
            {
              title: "Compliance as a feature",
              description: "Statutory and regulatory rules are treated as first-class product requirements, not a services add-on.",
            },
          ].map((outcome, index) => (
            <AnimatedSection key={outcome.title} delay={index * 0.05}>
              <div className="frame rounded-md p-7">
                <h3 className="font-display text-xl font-semibold text-surface">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-7 text-surface/70">{outcome.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section textured id="products">
        <AnimatedSection>
          <SceneHeading
            scene="Scene 03"
            slug="Int. Product Suite — Continuous"
            title="Seven platforms. Two in production, five in the pipeline."
            description="Every Cybelinx product shares the same multi-tenant core — new industries slot into the platform without a rebuild."
          />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.slug} delay={index * 0.05}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="capabilities">
        <AnimatedSection>
          <SceneHeading
            scene="Scene 04"
            slug="Int. Engineering Floor — Night"
            title="The engineering underneath every product."
          />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <AnimatedSection key={capability.title} delay={index * 0.05}>
              <FeatureCard title={capability.title} description={capability.description} icon={capability.icon} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section textured id="industries">
        <AnimatedSection>
          <SceneHeading
            scene="Scene 05"
            slug="Ext. Industries — Wide Shot"
            title="Domains our platforms are built to run in."
          />
        </AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.slug} delay={index * 0.04}>
              <FeatureCard title={industry.name} description={industry.description} icon={industry.icon} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section id="why-cybelinx">
        <AnimatedSection>
          <SceneHeading scene="Scene 06" slug="Int. Cybelinx — Continuous" title="Why product leaders choose Cybelinx." />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCybelinx.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.06}>
              <FeatureCard title={pillar.title} description={pillar.description} icon={pillar.icon} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <CTABand />
        </AnimatedSection>
      </Section>
    </>
  );
}

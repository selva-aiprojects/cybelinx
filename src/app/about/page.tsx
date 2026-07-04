import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { Globe2, Link2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Cybelinx builds AI-native, multi-tenant SaaS platforms for the way real teams work.",
};

const pillars = [
  { icon: Globe2, title: "Connection", description: "Linking technology, people, and businesses under one platform standard." },
  { icon: Link2, title: "Collaboration", description: "Working alongside customers through rollout, not just at the sale." },
  { icon: Sparkles, title: "Innovation", description: "AI-native design, from the schema up — not features added later." },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">About Cybelinx</span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">Engineering Intelligent Enterprises</h1>
        <p className="mt-5 max-w-xl text-surface/80">
          Cybelinx is a product company. We build AI-native, multi-tenant SaaS platforms — deep, focused tools for
          the teams running HR and hospitality operations today, with more verticals ahead.
        </p>
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6">
              <p.icon className="h-6 w-6 text-cyan" />
              <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white">Our story</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-surface/80">
            {/* PLACEHOLDER — replace with the real founding story once provided */}
            Cybelinx started with a simple observation: most enterprise software is built wide, not deep. We build
            the opposite — platforms that go all the way into one vertical, built multi-tenant and AI-native from
            day one, so the teams using them get a system that actually fits how they work.
          </p>
        </div>
      </Section>

      <Section>
        <CTABand heading="Want to work with us?" subheading="Reach out and we'll get back to you." />
      </Section>
    </>
  );
}

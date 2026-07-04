import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Cybelinx and help build AI-native SaaS platforms.",
};

const values = ["Innovative", "Reliable", "Intelligent", "Collaborative", "Impactful"];

export default function CareersPage() {
  return (
    <>
      <Section className="pt-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Careers</span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">Build with us.</h1>
        <p className="mt-5 max-w-xl text-surface/80">
          We're a small, product-obsessed team building platforms that run real operations. If that sounds like your
          kind of work, we'd like to hear from you.
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-3">
          {values.map((v) => (
            <span key={v} className="glass rounded-full px-5 py-2 text-sm text-surface">
              {v}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        {/* PLACEHOLDER — connect to ATS/open roles feed once available */}
        <div className="glass rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white">No open roles listed right now</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-surface/80">
            We're not actively hiring for a specific role at the moment, but we're always open to hearing from
            people who want to build with us.
          </p>
          <Button href="/contact" className="mt-6">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}

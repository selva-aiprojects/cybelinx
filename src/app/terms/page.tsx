import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${brand.name} Terms of Service — terms governing the use of our website and products.`,
};

export default function TermsPage() {
  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: July 2026`}
      />
      <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-slate">
        <div>
          <h2 className="text-base font-semibold text-surface">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By accessing or using the {brand.name} website and services, you agree to be bound
            by these Terms of Service. If you do not agree, do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">2. Description of Services</h2>
          <p className="mt-2">
            {brand.name} provides multi-tenant SaaS platforms for enterprise operations,
            including but not limited to HRMS, hospitality management, banking, healthcare,
            and AI services. Specific terms for each product are governed by separate
            Subscription Agreements.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">3. Intellectual Property</h2>
          <p className="mt-2">
            All content, trademarks, and intellectual property on this website are owned by
            {brand.name} or its licensors. You may not reproduce, distribute, or create
            derivative works without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">4. Limitation of Liability</h2>
          <p className="mt-2">
            {brand.name} shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of our website or services, to the maximum extent
            permitted by law.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">5. Governing Law</h2>
          <p className="mt-2">
            These terms are governed by the laws of India. Any disputes shall be resolved in
            the courts of Bangalore, Karnataka.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">6. Changes to Terms</h2>
          <p className="mt-2">
            We reserve the right to update these terms at any time. Material changes will be
            notified via email or a notice on our website.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">7. Contact</h2>
          <p className="mt-2">
            Questions about these terms? Contact us at{" "}
            <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
              {brand.email}
            </a>.
          </p>
        </div>
      </div>
    </Section>
  );
}

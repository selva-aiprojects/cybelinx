import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${brand.name} Privacy Policy — how we collect, use, and protect your data.`,
};

export default function PrivacyPage() {
  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: July 2026`}
      />
      <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-slate">
        <div>
          <h2 className="text-base font-semibold text-surface">1. Information We Collect</h2>
          <p className="mt-2">
            We collect information you provide directly: name, work email, company name, and
            message content when you fill out our contact or demo request forms.
          </p>
          <p className="mt-2">
            We also collect standard web analytics data: pages visited, referral source, browser
            type, and device information to improve our site experience.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">2. How We Use Your Information</h2>
          <p className="mt-2">We use your information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Respond to demo requests, inquiries, and support questions</li>
            <li>Provide product trials and evaluate enterprise fit</li>
            <li>Send relevant product updates and whitepapers (opt-out anytime)</li>
            <li>Improve our website and product experience</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">3. Data Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. We may share data with trusted
            sub-processors (cloud infrastructure, email delivery, analytics) who are bound by
            data processing agreements compliant with applicable regulations.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">4. Data Retention</h2>
          <p className="mt-2">
            We retain personal data for as long as needed to fulfill the purposes described
            above, or as required by law. You may request deletion at any time.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">5. Your Rights</h2>
          <p className="mt-2">
            Depending on your jurisdiction, you may have rights to access, correct, delete, or
            port your personal data. To exercise these rights, contact{" "}
            <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
              {brand.email}
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">6. Security</h2>
          <p className="mt-2">
            We implement encryption in transit (TLS 1.3) and at rest, access controls, and
            regular security audits to protect your data.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-surface">7. Contact</h2>
          <p className="mt-2">
            For privacy-related inquiries:{" "}
            <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
              {brand.email}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

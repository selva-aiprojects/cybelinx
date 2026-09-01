import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { brand } from "@/lib/content";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Calendar,
  Sparkles,
  Zap,
  ArrowRight,
  Headphones,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Enterprise Demo | Cybelinx",
  description: `Schedule an architecture review, request a product demo, or contact Cybelinx enterprise engineering teams. Guaranteed 1-business-day response SLA.`,
};

const routingChannels = [
  {
    title: "Enterprise Product Demo",
    description: "Personalized live walk-through with a solutions architect tailored to your regulatory requirements.",
    email: "sales@cybelinx.com",
    badge: "1 Business Day SLA",
    icon: Sparkles,
    color: "#0D47FF",
  },
  {
    title: "Architecture & SRE Review",
    description: "Deep-dive technical session covering schema isolation, multi-cloud PaaS, and Zero-Trust DevSecOps.",
    email: "architecture@cybelinx.com",
    badge: "Staff Architect Led",
    icon: Zap,
    color: "#7B61FF",
  },
  {
    title: "Ecosystem & Integrations",
    description: "OEM partnerships, custom connector development, and third-party SaaS interoperability.",
    email: "partners@cybelinx.com",
    badge: "Strategic Alliances",
    icon: Building,
    color: "#00C2FF",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16 pb-6">
        <AnimatedSection>
          <PageHeader
            eyebrow="Contact & Advisory"
            title="Accelerate your enterprise roadmap."
            description="Request a private product demonstration, book a 30-minute architecture review, or discuss tailored multi-cloud deployments directly with our engineering leadership."
          />
        </AnimatedSection>

        {/* Guaranteed SLA Badge */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-surface">Guaranteed 1-Business-Day Response SLA</div>
                <div className="text-xs text-slate">All inquiries routed directly to dedicated solutions architects, not general sales queues.</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-live">
              <span className="h-2 w-2 rounded-full bg-live animate-pulse" />
              Global Engineering Queue Active
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Direct Routing Channels ────────────────────────────────────── */}
      <Section textured className="py-8">
        <AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routingChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${channel.color}15`, border: `1px solid ${channel.color}35` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: channel.color }} />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: `${channel.color}15`, color: channel.color }}
                    >
                      {channel.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-surface">{channel.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate">{channel.description}</p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:underline"
                  >
                    {channel.email}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Main Form & Fast-Track Booking Grid ─────────────────────────── */}
      <Section className="py-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr,0.7fr]">
          {/* Form */}
          <div>
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-surface">Send an Inquiry</h2>
              <p className="mt-1 text-sm text-slate">Fill out the parameters below and our engineering team will prepare relevant sandbox access.</p>
            </div>
            <ContactForm />
          </div>

          {/* Side Info & Calendar Booking */}
          <div className="space-y-6">
            {/* Instant Calendar Booking Card */}
            <div className="rounded-3xl border border-violet/30 bg-gradient-to-br from-violet/10 via-background to-primary/10 p-6 shadow-md">
              <div className="flex items-center gap-3 text-violet">
                <Calendar className="h-6 w-6" />
                <h3 className="font-display text-lg font-bold text-surface">Need an Immediate Demo?</h3>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate">
                Schedule a 30-minute high-bandwidth session directly with our technical team to evaluate fit, architecture compliance, or live pricing.
              </p>
              <a
                href="mailto:sales@cybelinx.com?subject=Strategic%20Architecture%20Demo%20Request"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-violet py-3 px-4 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4" />
                Book 30-Min Technical Briefing
              </a>
            </div>

            {/* Direct Office Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-xs">
                <Mail className="mt-1 h-5 w-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate/60">Primary Email</div>
                  <a href={`mailto:${brand.email}`} className="mt-1 text-sm font-semibold text-surface hover:text-primary transition-colors">
                    {brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-xs">
                <Phone className="mt-1 h-5 w-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate/60">Direct Enterprise Desk</div>
                  <div className="mt-1 text-sm font-semibold text-surface">+91 (80) 4122-CYBE / Dedicated Support Dispatch</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-xs">
                <MapPin className="mt-1 h-5 w-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate/60">Global Headquarters</div>
                  <div className="mt-1 text-xs leading-relaxed text-surface">{brand.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

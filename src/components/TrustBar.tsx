import { customerLogos, trustMetrics } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="rounded-lg border border-border bg-background p-8 md:p-10">
      <div className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
        <div>
          <span className="slugline">Live in Production</span>
          <h3 className="mt-3 font-display text-2xl font-bold text-surface md:text-3xl">
            Two products shipping, running real operations today.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate md:text-base">
            CybeHRM and CybeHMS are live, multi-tenant SaaS platforms handling statutory
            payroll and multi-property operations for enterprise customers. No concept decks — just production code.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-border bg-charcoal p-4">
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">{metric.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-slate">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-charcoal p-6">
          <div className="slugline">Our Products</div>
          <div className="mt-4 space-y-3">
            {[
              "CybeHRM — AI-powered HRMS with Indian statutory compliance",
              "CybeHMS — Enterprise hospitality management, multi-property",
              "4 more products in development across Banking, Pharma, Healthcare & AI",
            ].map((item) => (
              <div key={item} className="rounded-md border border-border bg-background px-4 py-3 text-sm text-slate">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="slugline">Trusted By</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {customerLogos.map((name) => (
                <div
                  key={name}
                  className="rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-surface"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { customerLogos, trustMetrics } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="frame rounded-2xl p-8 md:p-10">
      <div className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
        <div>
          <span className="slugline">Live in Production</span>
          <h3 className="font-display mt-3 text-2xl font-semibold text-surface md:text-3xl">
            Two products shipping, running real operations today.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-surface/85 md:text-base">
            CybeHRM and CybeHMS are live, multi-tenant SaaS platforms handling statutory
            payroll and multi-property operations for enterprise customers. No concept decks — just production code.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-surface/10 bg-ink/40 p-4">
                <div className="font-display text-2xl font-semibold text-primary md:text-3xl">{metric.value}</div>
                <div className="mt-1 font-slug text-[10px] tracking-widest text-slate">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-surface/10 bg-ink/40 p-6">
          <div className="slugline">Our Products</div>
          <div className="mt-4 space-y-3">
            {[
              "CybeHRM — AI-powered HRMS with Indian statutory compliance",
              "CybeHMS — Enterprise hospitality management, multi-property",
              "6 more products in development across Banking, Pharma, Healthcare & AI",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-surface/10 bg-surface/[0.03] px-4 py-3 text-sm text-surface/80">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="slugline">Trusted By</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {customerLogos.map((name) => (
                <div
                  key={name}
                  className="rounded-lg border border-surface/10 bg-surface/[0.03] px-4 py-3 text-sm font-semibold text-surface/90"
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

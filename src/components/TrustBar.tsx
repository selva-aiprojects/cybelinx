import { customerLogos, trustMetrics } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="frame rounded-md p-8 md:p-10">
      <div className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
        <div>
          <span className="slugline">On Location · Production Stills</span>
          <h3 className="font-display mt-3 text-2xl font-semibold text-surface md:text-3xl">
            Two platforms in production, running real operations today.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-surface/70 md:text-base">
            CogniHR and eHMS aren&apos;t concept decks — they&apos;re live, multi-tenant systems handling statutory
            payroll and multi-property operations for enterprise customers.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="rounded-sm border border-surface/10 bg-ink/40 p-4">
                <div className="font-display text-2xl font-semibold text-primary md:text-3xl">{metric.value}</div>
                <div className="mt-1 font-slug text-[10px] tracking-widest text-slate">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-surface/10 bg-ink/40 p-6">
          <div className="slugline">Currently Streaming</div>
          <div className="mt-4 space-y-3">
            {[
              "CogniHR — AI-powered HRMS with Indian statutory compliance",
              "eHMS — Enterprise hospitality management, multi-property",
              "Built multi-tenant from day one, so the next product slots in clean",
            ].map((item) => (
              <div key={item} className="rounded-sm border border-surface/10 bg-surface/[0.03] px-4 py-3 text-sm text-surface/80">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="slugline">Featured Customers</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {customerLogos.map((name) => (
                <div
                  key={name}
                  className="rounded-sm border border-surface/10 bg-surface/[0.03] px-4 py-3 text-sm font-semibold text-surface/90"
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

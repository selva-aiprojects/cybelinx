import { customerLogos, trustMetrics } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="glass rounded-[2rem] border border-white/10 p-8 md:p-10">
      <div className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Trusted delivery</span>
          <h3 className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">
            Strategic execution for product, platform, and transformation teams.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-surface/80 md:text-base">
            We partner with enterprise leaders to turn ambitious roadmaps into resilient products, modern platforms, and
            measurable operating improvements.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-background/50 p-4">
                <div className="font-display bg-brand-gradient bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-background/60 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate">Engagement focus</div>
          <div className="mt-4 space-y-3">
            {[
              "Product strategy, architecture, and delivery leadership",
              "Cloud-native platform engineering and modernization",
              "AI implementation with governance, quality, and adoption",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-surface/85">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate">Customer logos</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {customerLogos.map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/90"
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

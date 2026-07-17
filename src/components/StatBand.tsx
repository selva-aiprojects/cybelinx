export default function StatBand({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-border bg-background p-6 text-center transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md">
          <div className="font-display text-3xl font-extrabold text-primary md:text-4xl">{stat.value}</div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-slate">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

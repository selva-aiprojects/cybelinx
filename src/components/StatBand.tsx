export default function StatBand({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-border bg-background p-6 text-center">
          <div className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-slate">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

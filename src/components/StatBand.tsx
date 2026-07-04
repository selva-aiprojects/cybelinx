export default function StatBand({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="glass rounded-2xl p-6 text-center">
          <div className="bg-brand-gradient bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            {stat.value}
          </div>
          <div className="mt-2 text-xs uppercase tracking-wide text-slate">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

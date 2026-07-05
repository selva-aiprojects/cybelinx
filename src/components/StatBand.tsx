export default function StatBand({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="frame rounded-md p-6 text-center">
          <div className="font-display text-3xl font-semibold text-primary md:text-4xl">{stat.value}</div>
          <div className="mt-2 font-slug text-[11px] tracking-widest text-slate">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

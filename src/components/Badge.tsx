type BadgeProps = {
  children: React.ReactNode;
  tone?: "live" | "soon" | "new";
};

const tones: Record<string, string> = {
  live: "bg-tally/10 text-tally border-tally/40",
  soon: "bg-slate/10 text-slate border-slate/30",
  new: "bg-cyan/10 text-cyan border-cyan/40",
};

const dot: Record<string, string> = {
  live: "bg-tally",
  soon: "bg-slate",
  new: "bg-cyan",
};

export default function Badge({ children, tone = "live" }: BadgeProps) {
  return (
    <span
      className={`font-slug inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[10px] font-bold tracking-widest ${tones[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}

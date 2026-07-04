type BadgeProps = {
  children: React.ReactNode;
  tone?: "live" | "soon" | "new";
};

const tones: Record<string, string> = {
  live: "bg-cyan/10 text-cyan border-cyan/30",
  soon: "bg-slate/20 text-surface border-slate/40",
  new: "bg-violet/10 text-violet border-violet/30",
};

export default function Badge({ children, tone = "live" }: BadgeProps) {
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}

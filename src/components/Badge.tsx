type BadgeProps = {
  children?: React.ReactNode;
  tone?: "live" | "soon" | "new";
};

const tones: Record<string, string> = {
  live: "bg-live/10 text-live border-live/20",
  soon: "bg-slate/10 text-slate border-slate/20",
  new: "bg-primary/10 text-primary border-primary/20",
};

const dot: Record<string, string> = {
  live: "bg-live",
  soon: "bg-slate",
  new: "bg-primary",
};

export default function Badge({ children, tone = "live" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tones[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}

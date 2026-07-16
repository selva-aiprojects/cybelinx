type BadgeProps = {
  children?: React.ReactNode;
  tone?: "live" | "soon" | "new";
};

const tones: Record<string, string> = {
  live: "bg-green-50 text-green-700 border-green-200",
  soon: "bg-slate-50 text-slate-500 border-slate-200",
  new: "bg-blue-50 text-blue-700 border-blue-200",
};

const dot: Record<string, string> = {
  live: "bg-green-500",
  soon: "bg-slate-400",
  new: "bg-blue-500",
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

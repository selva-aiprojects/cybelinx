import Badge from "./Badge";
import { Customer } from "@/lib/products";

export default function CustomerLogoStrip({ customers }: { customers: Customer[] }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {customers.map((c) => (
        <div
          key={c.name}
          className={`frame flex items-center gap-3 rounded-lg px-5 py-3 ${
            c.status === "coming-soon" ? "opacity-50" : ""
          }`}
        >
          <span className="text-sm font-semibold text-surface">{c.name}</span>
          {c.status === "coming-soon" && <Badge tone="soon">Coming Soon</Badge>}
        </div>
      ))}
    </div>
  );
}

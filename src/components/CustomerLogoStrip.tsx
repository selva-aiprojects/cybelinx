"use client";

import Badge from "./Badge";
import { Customer } from "@/lib/products";
import {
  HeartPulse,
  Landmark,
  Building2,
  Hotel,
  FlaskConical,
  ShoppingBag,
  Truck,
  Zap,
} from "lucide-react";

const enterpriseLogos = [
  { sector: "Hospitality Network", label: "Multi-Region Luxury Hotel Chain", region: "24 Properties · UAE & India", icon: Hotel },
  { sector: "Healthcare Group", label: "Pan-India Hospital Network", region: "2,400+ Beds · ABDM Ready", icon: HeartPulse },
  { sector: "Private Banking", label: "Regional Scheduled Commercial Bank", region: "340+ Branches · 18L Users", icon: Landmark },
  { sector: "Manufacturing Conglomerate", label: "Diversified Industrial Group", region: "12 Subsidiaries · 22K Staff", icon: Building2 },
  { sector: "Life Sciences Suite", label: "Formulations & API Manufacturer", region: "US-FDA Approved Sites", icon: FlaskConical },
  { sector: "Retail Network", label: "Omnichannel Fashion Retailer", region: "500+ Outlets · ONDC Node", icon: ShoppingBag },
  { sector: "Cold-Chain Logistics", label: "National Freight & Supply Chain", region: "1,200+ Fleet · Real-time IoT", icon: Truck },
  { sector: "Clean Energy Grid", label: "Renewable Power Infrastructure", region: "1.4 GW Capacity Telemetry", icon: Zap },
];

export default function CustomerLogoStrip({ customers }: { customers?: Customer[] }) {
  if (customers && customers.length > 0) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {customers.map((c) => (
          <div
            key={c.name}
            className={`flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-surface ${
              c.status === "coming-soon" ? "opacity-50" : ""
            }`}
          >
            <span>{c.name}</span>
            {c.status === "coming-soon" && <Badge tone="soon">Preview</Badge>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate/50">
          Trusted by 200+ Enterprise Operations Across 12 Countries
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
        {enterpriseLogos.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-center rounded-2xl border border-border/80 bg-background/50 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-background hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-primary mb-1">
                <Icon className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate/70">
                  {item.sector}
                </span>
              </div>
              <div className="font-display text-xs font-bold text-surface">{item.label}</div>
              <div className="mt-0.5 text-[10px] text-slate/60">{item.region}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

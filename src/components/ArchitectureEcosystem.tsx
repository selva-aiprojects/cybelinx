"use client";

import { motion } from "framer-motion";

interface EcosystemComponent {
  label: string;
  sublabel: string;
  items: string[];
  icon?: React.ReactNode;
  color?: "cyan" | "primary" | "violet";
}

interface ArchitectureEcosystemProps {
  title: string;
  description: string;
  components: EcosystemComponent[];
}

const colorMap = {
  cyan: "from-cyan/30 to-cyan/5 border-cyan/30",
  primary: "from-primary/30 to-primary/5 border-primary/30",
  violet: "from-violet/30 to-violet/5 border-violet/30",
};

export default function ArchitectureEcosystem({ title, description, components }: ArchitectureEcosystemProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="mb-12">
        <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 max-w-2xl text-surface/80">{description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((comp, index) => {
          const colorClass = colorMap[comp.color || "primary"];
          return (
            <motion.div
              key={comp.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-xl border bg-gradient-to-br p-4 ${colorClass}`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate/60">{comp.sublabel}</p>
                  <h4 className="mt-2 font-display text-sm font-bold text-white">{comp.label}</h4>
                </div>
                {comp.icon && <div className="text-2xl">{comp.icon}</div>}
              </div>

              <div className="mt-3 space-y-1 border-t border-white/10 pt-3">
                {comp.items.map((item) => (
                  <p key={item} className="text-xs text-surface/70">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

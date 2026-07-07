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
  cyan: "from-cyan/30 via-cyan/10 to-transparent border-cyan/40 shadow-[0_0_25px_rgba(96,200,224,0.12)]",
  primary: "from-primary/30 via-primary/10 to-transparent border-primary/40 shadow-[0_0_25px_rgba(74,159,223,0.12)]",
  violet: "from-violet/30 via-violet/10 to-transparent border-violet/40 shadow-[0_0_25px_rgba(139,92,246,0.12)]",
};

export default function ArchitectureEcosystem({ title, description, components }: ArchitectureEcosystemProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="mb-12">
        <span className="slugline">Platform Architecture</span>
        <h3 className="font-display mt-2 text-3xl font-bold text-surface md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-surface/85">{description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((comp, index) => {
          const colorClass = colorMap[comp.color || "primary"];
          return (
            <motion.div
              key={comp.label}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`spotlight-card rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 ${colorClass}`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-cyan/90">{comp.sublabel}</p>
                  </div>
                  <h4 className="mt-2 font-display text-lg font-bold text-surface">{comp.label}</h4>
                </div>
                {comp.icon && <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{comp.icon}</div>}
              </div>

              <div className="mt-4 space-y-2 border-t border-surface/10 pt-4">
                {comp.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-medium text-surface/85">
                    <span className="text-cyan/70">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

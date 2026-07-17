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

export default function ArchitectureEcosystem({ title, description, components }: ArchitectureEcosystemProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="mb-12">
        <span className="slugline">Platform Architecture</span>
        <h3 className="mt-2 font-display text-3xl font-bold text-surface md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">{description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((comp, index) => (
          <motion.div
            key={comp.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-border bg-background p-6 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{comp.sublabel}</p>
                <h4 className="mt-2 font-display text-lg font-bold text-surface">{comp.label}</h4>
              </div>
              {comp.icon && <div className="text-2xl">{comp.icon}</div>}
            </div>

            <div className="mt-4 space-y-2 border-t border-border pt-4">
              {comp.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate">
                  <span className="text-primary">▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

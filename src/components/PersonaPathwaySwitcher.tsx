"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Briefcase, Code2 } from "lucide-react";

export type PersonaMode = "executive" | "engineering";

interface PersonaContextType {
  mode: PersonaMode;
  setMode: (mode: PersonaMode) => void;
}

const PersonaContext = createContext<PersonaContextType>({
  mode: "executive",
  setMode: () => {},
});

export const PersonaProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeState] = useState<PersonaMode>("executive");

  useEffect(() => {
    const saved = localStorage.getItem("cybelinx_persona_mode") as PersonaMode | null;
    if (saved === "executive" || saved === "engineering") {
      setModeState(saved);
    }
  }, []);

  const setMode = (newMode: PersonaMode) => {
    setModeState(newMode);
    localStorage.setItem("cybelinx_persona_mode", newMode);
  };

  return (
    <PersonaContext.Provider value={{ mode, setMode }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => useContext(PersonaContext);

export default function PersonaPathwaySwitcher({ className = "" }: { className?: string }) {
  const { mode, setMode } = usePersona();

  return (
    <div className={`inline-flex max-w-full items-center rounded-2xl border border-border/80 bg-white/80 dark:bg-slate-900/80 p-1.5 backdrop-blur-xl shadow-lg ${className}`} role="group" aria-label="Viewing pathway">
      <span className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 hidden sm:inline-block">
        Viewing Pathway:
      </span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setMode("executive")}
          aria-pressed={mode === "executive"}
          className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${
            mode === "executive"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <Briefcase className="h-3.5 w-3.5" />
          <span>Executive (Business ROI)</span>
        </button>

        <button
          type="button"
          onClick={() => setMode("engineering")}
          aria-pressed={mode === "engineering"}
          className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${
            mode === "engineering"
              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25"
              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <Code2 className="h-3.5 w-3.5" />
          <span>Engineering (Deep Tech)</span>
        </button>
      </div>
    </div>
  );
}

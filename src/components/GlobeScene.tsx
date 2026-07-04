"use client";

export default function GlobeScene() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-cyan/20" />
      <div className="absolute inset-4 rounded-full border border-cyan/20 opacity-70" />
      <div className="absolute inset-10 rounded-full border border-cyan/20 opacity-50" />
      <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-cyan/80 border-r-cyan/60" />
      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.24),transparent_35%,rgba(0,194,255,0.16)_70%,transparent_100%)]" />
      <div className="absolute inset-[22%] rounded-full border border-white/10" />
      <div className="absolute left-[20%] top-[28%] h-3 w-3 rounded-full bg-cyan shadow-[0_0_24px_#00C2FF]" />
      <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#7B61FF] shadow-[0_0_20px_#7B61FF]" />
      <div className="absolute bottom-[24%] left-[24%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_#00C2FF]" />
      <div className="absolute bottom-[20%] right-[26%] h-2.5 w-2.5 rounded-full bg-[#0D47FF] shadow-[0_0_18px_#0D47FF]" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/30 bg-cyan/10 shadow-[0_0_80px_rgba(0,194,255,0.35)]" />
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/40 bg-[radial-gradient(circle,rgba(0,194,255,0.25),rgba(13,71,255,0.12),transparent)] text-4xl font-bold text-white shadow-[0_0_40px_rgba(0,194,255,0.3)]">
        C
      </div>
    </div>
  );
}

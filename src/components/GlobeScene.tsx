import Image from "next/image";

export default function GlobeScene() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-4 rounded-full border border-primary/20 opacity-70" />
      <div className="absolute inset-10 rounded-full border border-primary/20 opacity-50" />
      <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-primary/80 border-r-primary/60" />
      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(232,236,241,0.24),transparent_35%,rgba(42,119,173,0.16)_70%,transparent_100%)]" />
      <div className="absolute inset-[22%] rounded-full border border-white/10" />
      <div className="absolute left-[20%] top-[28%] h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_#4A9FDF]" />
      <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-violet shadow-[0_0_20px_#3281C1]" />
      <div className="absolute bottom-[24%] left-[24%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_#60C8E0]" />
      <div className="absolute bottom-[20%] right-[26%] h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_#4A9FDF]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Image
          src="/assets/cybelinx-logo.png"
          alt="Cybelinx"
          width={160}
          height={44}
          priority
        />
      </div>
    </div>
  );
}

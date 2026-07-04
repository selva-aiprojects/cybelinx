import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pb-16 pt-20 md:pt-28">
      {/* Signature globe motif — used once, prominently, here only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full opacity-40 blur-[2px]"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(0,194,255,0.35), rgba(13,71,255,0.15) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 h-[380px] w-[380px] animate-[spin_60s_linear_infinite] rounded-full border border-cyan/20"
        style={{ borderStyle: "dashed" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan">
          Engineering Intelligent Enterprises
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          One platform philosophy.{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">Products built to run your operation.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-surface/80 md:text-lg">
          Cybelinx builds AI-native, multi-tenant SaaS platforms for the teams who can&apos;t afford disconnected
          tools — starting with HR and hospitality.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/products">Explore Products</Button>
          <Button href="/contact" variant="secondary">
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

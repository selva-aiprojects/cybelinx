import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pb-16 pt-20 md:pt-28">
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
        <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.28em] text-cyan uppercase">
          Enterprise SaaS for Modern Operations
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Build smarter operations with platforms designed for growth, trust, and execution.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-surface/80 md:text-lg">
          Cybelinx creates AI-native, multi-tenant software for organizations that need dependable systems across
          HR, hospitality, and complex service environments.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/products">Explore Our Platforms</Button>
          <Button href="/contact" variant="secondary">
            Schedule a Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
}

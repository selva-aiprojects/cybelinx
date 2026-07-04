import Button from "./Button";

export default function CTABand({
  heading = "Ready to build what’s next with Cybelink?",
  subheading = "Partner with our engineering leaders to shape a platform, modernize a product, or launch the next AI-powered experience.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="glass relative overflow-hidden rounded-[2rem] border border-cyan/20 p-10 text-center md:p-16">
      <div className="bg-brand-gradient pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 opacity-20 blur-3xl" />
      <div className="relative">
        <span className="inline-flex rounded-full border border-cyan/20 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan">
          Let’s build the future
        </span>
        <h2 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-surface/80 md:text-base">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Request a Demo</Button>
          <Button href="/products" variant="secondary">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
}

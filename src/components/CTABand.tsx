import Button from "./Button";

export default function CTABand({
  heading = "See our products in action.",
  subheading = "Book a demo or get a free trial of CybeHRM or CybeHMS for your enterprise.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="frame relative overflow-hidden rounded-2xl p-10 text-center md:p-16">
      <div className="pointer-events-none absolute inset-0 bg-glow-gradient opacity-[0.06]" aria-hidden="true" />
      <div className="relative">
        <span className="slugline">Get Started</span>
        <h2 className="font-display mt-4 text-2xl font-semibold text-surface md:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-surface/85 md:text-base">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Book a Demo</Button>
          <Button href="/products" variant="secondary">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
}

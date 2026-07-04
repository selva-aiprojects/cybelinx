import Button from "./Button";

export default function CTABand({
  heading = "See how Cybelinx can modernize your operation",
  subheading = "Book a strategy session and discover how our platforms support growth, reliability, and clearer decision-making.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
      <div className="bg-brand-gradient pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 opacity-20 blur-3xl" />
      <div className="relative">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-surface/80 md:text-base">{subheading}</p>
        <Button href="/contact" className="mt-8">
          Request a Demo
        </Button>
      </div>
    </div>
  );
}

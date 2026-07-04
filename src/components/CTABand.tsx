import Button from "./Button";

export default function CTABand({
  heading = "See it running on your data",
  subheading = "Book a walkthrough with our team and we'll show you exactly how it fits your organization.",
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

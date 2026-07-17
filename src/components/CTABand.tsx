import Button from "./Button";

export default function CTABand({
  heading = "See our products in action.",
  subheading = "Book a demo or get a free trial of CybeHRM or CybeHMS for your enterprise.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-deep to-violet p-10 text-center md:p-16">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative">
        <span className="text-xs font-bold uppercase tracking-widest text-white/60">Get Started</span>
        <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" className="!bg-white !text-primary-deep !shadow-lg hover:!bg-white/90 hover:!shadow-xl">Book a Demo</Button>
          <Button href="/products" variant="ghost" className="!text-white/90 hover:!bg-white/10">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
}

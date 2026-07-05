import Button from "./Button";

export default function CTABand({
  heading = "Ready to run your operations on Cybelinx?",
  subheading = "See CogniHR and eHMS in a live environment, or talk through where a third product fits your stack.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="frame relative overflow-hidden rounded-md p-10 text-center md:p-16">
      <div className="letterbox-bar absolute inset-x-0 top-0 h-2" aria-hidden="true" />
      <div className="letterbox-bar absolute inset-x-0 bottom-0 h-2" aria-hidden="true" />
      <div className="relative">
        <span className="slugline">Final Scene · Fade In</span>
        <h2 className="font-display mt-4 text-2xl font-semibold text-surface md:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-surface/70 md:text-base">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Talk to Us</Button>
          <Button href="/products" variant="secondary">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
}

import Button from "./Button";

export default function PricingPlaceholder({ productName }: { productName: string }) {
  return (
    <div className="rounded-lg border border-border bg-background p-10 text-center">
      <h3 className="text-2xl font-bold text-surface">Pricing built around your team</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm text-slate">
        {productName} is priced around the size and needs of your organization. Talk to us and we&apos;ll put
        together a plan that fits.
      </p>
      <Button href="/contact" className="mt-6">
        Talk to Sales
      </Button>
    </div>
  );
}

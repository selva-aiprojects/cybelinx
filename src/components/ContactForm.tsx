"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { products } from "@/lib/products";

const interestOptions = [
  "CybeHRMS Demo",
  "CybeHospitality Demo",
  "Products Consultation",
  "Enterprise Pricing",
  ...products.map((p) => p.name),
  "General inquiry",
];

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Enter your company"),
  interest: z.string().min(1, "Select an option"),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialInterest = searchParams.get("interest") || "";
  const attribution = {
    source: searchParams.get("utm_source") || "direct",
    medium: searchParams.get("utm_medium") || "",
    campaign: searchParams.get("utm_campaign") || "",
    content: searchParams.get("utm_content") || "",
    landingPage: searchParams.get("landing_page") || (typeof document !== "undefined" ? document.referrer : "") || "direct",
  };
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: initialInterest },
  });

  async function onSubmit(data: FormData) {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, attribution }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to send your message.");
      }

      setSubmitted(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setSubmitError(message);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-background p-10 text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-live/10">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-display text-xl font-bold text-surface">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-sm text-slate">An engineering leader from our team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-2xl border border-border bg-background p-8 md:p-10" noValidate>
      {submitError && (
        <div role="alert" className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:border-rose-500/40 dark:bg-rose-950/30 dark:text-rose-200">
          {submitError}
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-slate">
          Company
        </label>
        <input
            id="company"
            {...register("company")}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
        />
        {errors.company && <p id="company-error" className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wide text-slate">
          What are you interested in?
        </label>
        <select
          id="interest"
          {...register("interest")}
          defaultValue=""
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? "interest-error" : undefined}
          className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
        >
          <option value="" disabled>
            Select one
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option} className="bg-background">
              {option}
            </option>
          ))}
        </select>
        {errors.interest && <p id="interest-error" className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.interest.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.message.message}</p>}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <p className="text-xs text-slate/60">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        We'll only use this information to follow up on your request.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all duration-200 hover:bg-primary-deep hover:shadow-glow disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? "Sending\u2026" : "Send message"}
      </button>
    </form>
  );
}

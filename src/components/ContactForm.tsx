"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { products } from "@/lib/products";

const interestOptions = [
  "CybeHRM Demo",
  "CybeHMS Demo",
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
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 600));
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-background p-10 text-center">
        <h3 className="font-display text-xl font-bold text-surface">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-sm text-slate">An engineering leader from our team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-lg border border-border bg-background p-8 md:p-10" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
          />
          {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
          />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-slate">
          Company
        </label>
        <input
          id="company"
          {...register("company")}
          className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
        />
        {errors.company && <p className="mt-1 text-xs text-accent">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wide text-slate">
          What are you interested in?
        </label>
        <select
          id="interest"
          {...register("interest")}
          defaultValue=""
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
        {errors.interest && <p className="mt-1 text-xs text-accent">{errors.interest.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="mt-2 w-full rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none transition-colors focus:border-primary"
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 disabled:opacity-60"
      >
        {isSubmitting ? "Sending\u2026" : "Send message"}
      </button>
    </form>
  );
}

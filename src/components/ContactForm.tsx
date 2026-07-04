"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { products } from "@/lib/products";

const interestOptions = [
  "Product Engineering",
  "Cloud & Platform Engineering",
  "AI Services",
  "Solutions Consultation",
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
      <div className="glass rounded-2xl p-10 text-center">
        <h3 className="font-display text-xl font-bold text-white">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-sm text-surface/80">An engineering leader from our team will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-5 rounded-2xl p-8 md:p-10" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus-visible:border-cyan"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus-visible:border-cyan"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-slate">
          Company
        </label>
        <input
          id="company"
          {...register("company")}
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus-visible:border-cyan"
        />
        {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wide text-slate">
          What are you interested in?
        </label>
        <select
          id="interest"
          {...register("interest")}
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus-visible:border-cyan"
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
        {errors.interest && <p className="mt-1 text-xs text-red-400">{errors.interest.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus-visible:border-cyan"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-brand-gradient mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

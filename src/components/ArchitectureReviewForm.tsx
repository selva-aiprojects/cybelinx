"use client";

import { useState } from "react";
import { Sparkles, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ArchitectureReviewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="relative w-full py-16 px-6 sm:px-10 rounded-3xl bg-slate-900/80 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          Strategic Technical Engagement
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Request a 30-Minute Architecture Review
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Bypass the sales pitch. Connect directly with our platform architects to map your technical roadmap, compliance gates, and GenAI integration points.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center relative z-10 animate-in fade-in duration-300">
          <div className="h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white font-display">Transmission Successful</h3>
          <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
            Our platform engineering team has received your architecture review request. A lead architect will reach out within 24 hours to confirm your 30-minute session.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="you@organization.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Organization *
              </label>
              <input
                type="text"
                required
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Current Focus Area *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm transition-colors"
              >
                <option value="">Select focus area</option>
                <option value="healthcare">Healthcare & EMR Systems (MedFlow)</option>
                <option value="fintech">FinTech & Trading Platforms (Steward)</option>
                <option value="retail">Retail AI & Store Automation (StoreAI)</option>
                <option value="hrms">Workforce & HR Automation (CybeHRMS)</option>
                <option value="multi-cloud">Multi-Cloud & Kubernetes DevSecOps</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Primary Technical Challenge *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Briefly describe your platform goals, legacy bottlenecks, or GenAI integration targets..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-primary/30 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Transmitting Specs..." : "Book Architecture Review Session"}
            </button>
            <p className="mt-3 text-xs text-slate-400">
              ✨ Limited to 2 technical reviews per week for enterprise non-clients.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

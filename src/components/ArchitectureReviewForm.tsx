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
    <section id="architecture-review" className="relative w-full py-24 bg-brand-navy-900 text-white overflow-hidden">
      {/* Interactive Grid Mesh Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#102a43_1px,transparent_1px),linear-gradient(to_bottom,#102a43_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-brand-navy-800 rounded-2xl border border-brand-navy-500/50 p-8 sm:p-12 shadow-2xl space-y-8 backdrop-blur-xl">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-500/10 border border-brand-cyan-400/30 text-brand-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Direct Platform Engineering Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">
              Request an Architecture Review Session
            </h2>
            <p className="text-sm text-brand-navy-100 leading-relaxed">
              Skip standard sales call loops. Connect directly with our primary platform engineers to safely review your infrastructure roadmap, data scaling requirements, and automated compliance gates.
            </p>
            <p className="text-xs text-brand-cyan-400 font-mono italic pt-1">
              ✨ Restricted to two technical reviews per week for enterprise non-clients.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center relative z-10 animate-in fade-in duration-300">
              <div className="h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Session Request Transmitted</h3>
              <p className="mt-2 text-sm text-brand-navy-100 max-w-md mx-auto">
                Our core engineering team has logged your submission. A lead platform architect will contact you within 24 hours to confirm your architecture review window.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Full Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-navy-100 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-brand-navy-900 border border-brand-navy-500 rounded-md p-3 text-sm text-white placeholder-brand-navy-500 focus:outline-none focus:border-brand-cyan-400 transition-colors"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-navy-100 uppercase tracking-wider">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@enterprise.com"
                  className="w-full bg-brand-navy-900 border border-brand-navy-500 rounded-md p-3 text-sm text-white placeholder-brand-navy-500 focus:outline-none focus:border-brand-cyan-400 transition-colors"
                />
              </div>

              {/* Organization Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-navy-100 uppercase tracking-wider">
                  Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Corp"
                  className="w-full bg-brand-navy-900 border border-brand-navy-500 rounded-md p-3 text-sm text-white placeholder-brand-navy-500 focus:outline-none focus:border-brand-cyan-400 transition-colors"
                />
              </div>

              {/* Dropdown Selection */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-navy-100 uppercase tracking-wider">
                  Core Focus Vertical *
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-brand-navy-900 border border-brand-navy-500 rounded-md p-3 text-sm text-white focus:outline-none focus:border-brand-cyan-400 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-brand-navy-500">Select target sector...</option>
                  <option value="healthcare">Healthcare & EMR Core (MedFlow)</option>
                  <option value="fintech">Fintech & Banking Systems (Steward)</option>
                  <option value="hr">Workforce & Operations Automation (CybeHRMS)</option>
                  <option value="devops">Multi-Cloud Kubernetes DevSecOps Frameworks</option>
                </select>
              </div>

              {/* Full-Width In-depth Textarea */}
              <div className="sm:col-span-2 flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-navy-100 uppercase tracking-wider">
                  Primary System Bottleneck or Architectural Challenge *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe data ingestion silos, specific scaling pain points, or regulatory blockers..."
                  className="w-full bg-brand-navy-900 border border-brand-navy-500 rounded-md p-3 text-sm text-white placeholder-brand-navy-500 focus:outline-none focus:border-brand-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Full Width Action Submission */}
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-cyan-500 hover:bg-brand-cyan-700 text-brand-navy-900 font-bold p-4 rounded-md shadow-lg transition-all duration-200 uppercase tracking-wider text-sm shadow-[0_4px_20px_rgba(0,212,255,0.25)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Transmitting Requirements..." : "Schedule Technical Architecture Session"}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}

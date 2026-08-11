"use client";

import { useEffect, useRef, useState } from "react";
import { X, Lock, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Product } from "@/lib/products";

interface BetaAccessModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaAccessModal({ product, isOpen, onClose }: BetaAccessModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    workload: "10k-100k events/day",
    notes: "",
  });
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !product) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const focusDialog = window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(focusDialog);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="beta-access-title"
        aria-describedby="beta-access-description"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 dark:border-cyan-500/30 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl transition-all"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close beta access request"
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center" role="status" aria-live="polite">
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 id="beta-access-title" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Beta Access Request Received
            </h3>
            <p id="beta-access-description" className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md">
              Thank you for your interest in <span className="font-semibold text-primary">{product.name}</span>. Our enterprise platform team will review your deployment request and issue sandbox access credentials within 24 hours.
            </p>
            <div className="mt-6">
              <button
                onClick={onClose}
                className="shiny-button bg-gradient-to-r from-primary to-violet text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-primary/25 hover:brightness-110 active:scale-[0.97]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-[11px] font-extrabold border border-cyan-500/30 uppercase tracking-wider">
                <Lock className="h-3 w-3" />
                Gated Beta Discovery
              </span>
            </div>

            <h3 id="beta-access-title" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Request Early Beta Access to {product.name}
            </h3>
            <p id="beta-access-description" className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {product.summary}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="beta-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  id="beta-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="beta-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    id="beta-email"
                    type="email"
                    required
                    placeholder="sarah@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="beta-company" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    id="beta-company"
                    type="text"
                    required
                    placeholder="Acme Financial Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="beta-workload" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Expected Workload / Scale
                </label>
                <select
                  id="beta-workload"
                  value={formData.workload}
                  onChange={(e) => setFormData({ ...formData, workload: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-primary focus:outline-none"
                >
                  <option value="10k-100k events/day">Startup / Pilot (&lt; 100k events/day)</option>
                  <option value="100k-1M events/day">Mid-Enterprise (100k - 1M events/day)</option>
                  <option value="1M+ events/day">Large Institutional (&gt; 1M events/day)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="shiny-button flex items-center gap-1.5 bg-gradient-to-r from-primary via-accent to-violet text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-accent/30 hover:brightness-110 active:scale-[0.97] border border-white/30 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Access Request"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-6xl font-extrabold gradient-text">Something went wrong</h1>
      <p className="mt-4 text-lg text-slate">An unexpected error occurred.</p>
      <button
        onClick={() => reset()}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}

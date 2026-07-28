import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-8xl font-extrabold gradient-text">404</h1>
      <p className="mt-4 text-xl text-slate">Page not found</p>
      <p className="mt-2 text-sm text-slate/60">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
      >
        Go home
      </Link>
    </div>
  );
}

import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function HomePage() {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[var(--tvg-navy)] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tvg-gold)]">
          Tech Ventures Global
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Business Central AI configuration agent
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          A web workspace to read Excel files, suggest setup, and connect to cloud Business
          Central. Sign in or create an account to get started.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-[var(--tvg-gold)] px-6 py-3 text-sm font-semibold text-[var(--tvg-navy)] transition hover:brightness-95"
          >
            Create account
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

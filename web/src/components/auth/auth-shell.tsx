import Link from "next/link";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[var(--tvg-gray)]">
      <header className="border-b border-[var(--tvg-navy)]/10 bg-[var(--tvg-navy)] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--tvg-gold)] text-sm font-bold text-[var(--tvg-navy)]">
              TVG
            </span>
            <div>
              <p className="text-sm font-semibold tracking-wide">Tech Ventures Global</p>
              <p className="text-xs text-white/70">Business Central AI Agent</p>
            </div>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:py-16">
        <section className="lg:w-5/12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--tvg-sky)]">
            Microsoft Dynamics Partner
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[var(--tvg-navy)] md:text-4xl">
            Configure Business Central with an AI-guided setup
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--tvg-muted)]">
            Upload Excel workbooks, review suggested configuration, and connect to
            your cloud Business Central environment — starting with a secure workspace
            for your team.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[var(--tvg-text)]">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--tvg-gold)]" />
              Excel-driven configuration recommendations
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--tvg-gold)]" />
              Cloud Business Central connectivity (environment TBD)
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--tvg-gold)]" />
              Secure sign-in for your implementation projects
            </li>
          </ul>
        </section>

        <section className="w-full rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_50px_rgba(0,46,91,0.08)] lg:w-7/12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--tvg-navy)]">{title}</h2>
            <p className="mt-2 text-sm text-[var(--tvg-muted)]">{subtitle}</p>
          </div>
          {children}
          <div className="mt-6 border-t border-black/5 pt-6 text-sm text-[var(--tvg-muted)]">
            {footer}
          </div>
        </section>
      </main>
    </div>
  );
}

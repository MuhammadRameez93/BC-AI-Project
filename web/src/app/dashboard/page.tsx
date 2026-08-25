import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/auth/logout-button";
import { getSession } from "@/lib/session";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[var(--tvg-gray)]">
      <header className="border-b border-[var(--tvg-navy)]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--tvg-navy)] text-xs font-bold text-[var(--tvg-gold)]">
              TVG
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--tvg-navy)]">BC AI Agent</p>
              <p className="text-xs text-[var(--tvg-muted)]">Tech Ventures Global</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden text-sm text-[var(--tvg-muted)] sm:block">
              {session.name ?? session.email}
            </p>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-[var(--tvg-navy)]/10 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--tvg-sky)]">
            Welcome
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[var(--tvg-navy)]">
            Hello{session.name ? `, ${session.name}` : ""}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--tvg-muted)]">
            You are signed in as <strong className="text-[var(--tvg-text)]">{session.email}</strong>.
            This workspace will host Excel upload, AI configuration suggestions, and Business
            Central cloud connection — we will add those capabilities in the next steps you provide.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Excel intake",
                body: "Upload mapping workbooks for the agent to analyze.",
                status: "Coming soon",
              },
              {
                title: "2. AI suggestions",
                body: "Review proposed BC setup before applying changes.",
                status: "Coming soon",
              },
              {
                title: "3. BC cloud connect",
                body: "Link your online Business Central environment.",
                status: "Environment TBD",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/5 bg-[var(--tvg-gray)] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--tvg-navy)]">
                  {item.status}
                </p>
                <h2 className="mt-2 font-semibold text-[var(--tvg-text)]">{item.title}</h2>
                <p className="mt-2 text-sm text-[var(--tvg-muted)]">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[var(--tvg-muted)]">
            Need another account?{" "}
            <Link href="/register" className="font-semibold text-[var(--tvg-navy)] hover:underline">
              Register a new user
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

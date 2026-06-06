import Link from "next/link";
import type { ComponentType } from "react";
import { Building2, LayoutDashboard, MessageCircle, Plus, Search, Settings, User } from "lucide-react";
import { Header } from "@/components/Header";

type Metric = {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
};

type DashboardShellProps = {
  mode: "owner" | "renter";
  metrics: Metric[];
};

export function DashboardShell({ mode, metrics }: DashboardShellProps) {
  const owner = mode === "owner";
  const nav = owner
    ? ["Property Management", "Add New Property", "Booking Requests", "Analytics", "Earnings Overview", "Messages", "Profile Settings"]
    : ["Saved Properties", "Search History", "Rental Applications", "Messages", "Profile Settings"];

  return (
    <div className="min-h-screen bg-slate-50 text-ink dark:bg-slate-950 dark:text-white">
      <Header />
      <main className="container-page grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 p-4 dark:from-blue-400/10 dark:to-emerald-400/10">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-ocean text-white">
              {owner ? <Building2 className="h-5 w-5" /> : <User className="h-5 w-5" />}
            </span>
            <div>
              <p className="font-black">{owner ? "Owner" : "Renter"} Dashboard</p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">RentSpace Pro</p>
            </div>
          </div>
          <nav className="mt-4 grid gap-1" aria-label={`${mode} dashboard navigation`}>
            {nav.map((item, index) => (
              <a key={item} href="#" className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold transition ${index === 0 ? "bg-ink text-white dark:bg-white dark:text-ink" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"}`}>
                {index === 0 ? <LayoutDashboard className="h-4 w-4" /> : index === 1 ? <Plus className="h-4 w-4" /> : index === 2 ? <Search className="h-4 w-4" /> : index === 3 ? <MessageCircle className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <section className="grid gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-mint">{owner ? "Owner workspace" : "Renter workspace"}</p>
                <h1 className="mt-2 text-3xl font-black">{owner ? "Manage properties, requests, and earnings" : "Track saved homes, applications, and owner chats"}</h1>
              </div>
              <Link href={owner ? "/auth/register" : "/#featured"} className="focus-ring inline-flex w-fit rounded-lg bg-ocean px-5 py-3 text-sm font-black text-white shadow-glow">
                {owner ? "Add New Property" : "Find Rentals"}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <metric.icon className="h-6 w-6 text-mint" />
                <p className="mt-4 text-3xl font-black">{metric.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-black">{owner ? "Booking Requests" : "Rental Applications"}</h2>
              <div className="mt-5 grid gap-3">
                {["Skyline Studio Apartment", "Premium Managed Office", "Green View Family Flat"].map((item, index) => (
                  <div key={item} className="flex flex-col justify-between gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-black">{item}</p>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{owner ? `${index + 2} renter inquiries pending` : index === 0 ? "Application shortlisted" : "Owner reply pending"}</p>
                    </div>
                    <button type="button" className="focus-ring rounded-lg bg-slate-100 px-4 py-2 text-sm font-black text-slate-700 dark:bg-slate-800 dark:text-slate-100">Review</button>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-black">{owner ? "Analytics" : "Search History"}</h2>
              <div className="mt-6 h-56 rounded-lg bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-5 dark:from-blue-400/10 dark:via-slate-950 dark:to-emerald-400/10">
                <div className="flex h-full items-end gap-3">
                  {[44, 72, 58, 86, 64, 92, 76].map((height, index) => (
                    <div key={index} className="flex flex-1 flex-col justify-end">
                      <div style={{ height: `${height}%` }} className="rounded-t-lg bg-gradient-to-t from-ocean to-mint" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

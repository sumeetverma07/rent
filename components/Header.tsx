"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Building2, Menu, Moon, Sun, X } from "lucide-react";

const nav = [
  { label: "Categories", href: "/#categories" },
  { label: "Featured", href: "/#featured" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Dashboards", href: "/dashboard/owner" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("rentspace-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("rentspace-theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="RentSpace home">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-ocean to-mint text-white shadow-glow">
            <Building2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="text-xl font-extrabold tracking-normal text-ink dark:text-white">RentSpace</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md transition hover:text-ocean dark:hover:text-mint">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-mint dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link href="/auth/login" className="focus-ring rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition hover:text-ocean dark:text-slate-200 dark:hover:text-mint">
            Login
          </Link>
          <Link href="/auth/register" className="focus-ring rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ocean dark:bg-white dark:text-ink">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/auth/login" className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-bold dark:border-slate-800">
                Login
              </Link>
              <Link href="/auth/register" className="rounded-lg bg-ocean px-4 py-3 text-center text-sm font-bold text-white">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

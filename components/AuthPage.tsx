import Link from "next/link";
import Image from "next/image";
import { Building2, Chrome, KeyRound, Mail, ShieldCheck, User } from "lucide-react";

type AuthPageProps = {
  mode: "login" | "register" | "forgot";
};

export function AuthPage({ mode }: AuthPageProps) {
  const register = mode === "register";
  const forgot = mode === "forgot";
  const title = forgot ? "Reset your password" : register ? "Create your RentSpace account" : "Welcome back to RentSpace";
  const subtitle = forgot ? "Enter your email and we will send a secure reset link." : register ? "Verify your email and start renting, listing, or managing spaces." : "Access saved properties, dashboards, messages, and applications.";

  return (
    <main className="grid min-h-screen bg-white text-ink dark:bg-slate-950 dark:text-white lg:grid-cols-[0.95fr_1.05fr]">
      <section className="relative hidden overflow-hidden bg-ink p-10 text-white dark:bg-slate-900 lg:flex lg:flex-col lg:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-ocean to-mint"><Building2 className="h-6 w-6" /></span>
            <span className="text-xl font-black">RentSpace</span>
          </Link>
          <h1 className="mt-16 max-w-xl text-5xl font-black">Premium rentals, verified owners, faster decisions.</h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">A polished authentication flow with Google sign-in, email verification, and password recovery patterns.</p>
        </div>
        <Image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80" alt="Modern rental home exterior" className="h-72 rounded-lg object-cover shadow-glow" width={1000} height={288} />
      </section>

      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-10 inline-flex items-center gap-3 lg:hidden">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-ocean to-mint text-white"><Building2 className="h-6 w-6" /></span>
            <span className="text-xl font-black">RentSpace</span>
          </Link>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-mint">{forgot ? "Forgot password" : register ? "Registration" : "Login"}</p>
            <h2 className="mt-3 text-3xl font-black">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{subtitle}</p>
          </div>

          {!forgot ? (
            <button type="button" className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-black shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900">
              <Chrome className="h-5 w-5 text-ocean" /> Continue with Google
            </button>
          ) : null}

          <form className="mt-5 grid gap-4">
            {register ? (
              <label className="rounded-lg border border-slate-200 px-4 py-3 focus-within:border-mint dark:border-slate-800">
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500"><User className="h-4 w-4 text-mint" /> Full name</span>
                <input className="mt-2 w-full bg-transparent text-sm outline-none" placeholder="Your name" />
              </label>
            ) : null}
            <label className="rounded-lg border border-slate-200 px-4 py-3 focus-within:border-mint dark:border-slate-800">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500"><Mail className="h-4 w-4 text-mint" /> Email</span>
              <input type="email" className="mt-2 w-full bg-transparent text-sm outline-none" placeholder="you@example.com" />
            </label>
            {!forgot ? (
              <label className="rounded-lg border border-slate-200 px-4 py-3 focus-within:border-mint dark:border-slate-800">
                <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500"><KeyRound className="h-4 w-4 text-mint" /> Password</span>
                <input type="password" className="mt-2 w-full bg-transparent text-sm outline-none" placeholder="Enter password" />
              </label>
            ) : null}
            {register ? (
              <label className="flex items-start gap-3 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                Email verification will be sent after registration.
              </label>
            ) : null}
            <button type="submit" className="focus-ring rounded-lg bg-ocean px-5 py-4 text-sm font-black text-white shadow-glow">
              {forgot ? "Send Reset Link" : register ? "Create Account" : "Login"}
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-between gap-3 text-sm font-bold">
            {!register && !forgot ? <Link href="/auth/forgot-password" className="text-ocean dark:text-mint">Forgot password?</Link> : null}
            <Link href={register ? "/auth/login" : "/auth/register"} className="text-slate-600 hover:text-ocean dark:text-slate-300 dark:hover:text-mint">
              {register ? "Already have an account?" : "Create an account"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

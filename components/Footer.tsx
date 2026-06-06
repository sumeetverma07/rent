import Link from "next/link";
import { Building2, Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const footerLinks = ["About Us", "Contact", "Terms & Conditions", "Privacy Policy", "Careers"];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-ocean to-mint text-white">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-xl font-extrabold text-ink dark:text-white">RentSpace</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
            A premium rental marketplace for verified homes, workspaces, retail locations, and flexible commercial spaces.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-mint hover:text-ocean dark:border-slate-800 dark:text-slate-300" aria-label="Social media link">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">Company</h2>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link} href="#" className="text-sm font-semibold text-slate-600 transition hover:text-ocean dark:text-slate-300 dark:hover:text-mint">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-mint" /> hello@rentspace.in</span>
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-mint" /> +91 98765 43210</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Copyright 2026 RentSpace. All rights reserved.
      </div>
    </footer>
  );
}

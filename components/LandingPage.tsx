import Link from "next/link";
import { ArrowRight, Check, Download, Smartphone, Star } from "lucide-react";
import { AdvancedFilters, SearchPanel } from "@/components/SearchPanel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, faqs, features, ownerSteps, properties, renterSteps, stats, testimonials } from "@/lib/data";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute inset-x-8 top-8 h-72 rounded-full bg-gradient-to-r from-blue-200/50 to-emerald-200/60 blur-3xl dark:from-blue-500/20 dark:to-emerald-500/20" />
      <div className="mesh-card relative overflow-hidden rounded-lg border border-white/80 p-4 shadow-glow dark:border-slate-800">
        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Premium rental apartment living room"
            className="h-72 w-full rounded-lg object-cover sm:h-[420px]"
          />
          <div className="grid gap-3">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
              alt="Modern office space for rent"
              className="h-36 w-full rounded-lg object-cover sm:h-[202px]"
            />
            <div className="relative h-36 overflow-hidden rounded-lg bg-gradient-to-br from-ocean to-mint p-4 text-white sm:h-[202px]">
              <div className="absolute right-3 top-3 rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold backdrop-blur">Live demand</div>
              <p className="text-sm font-bold text-white/80">Owner dashboard</p>
              <p className="mt-6 text-3xl font-black">42</p>
              <p className="mt-1 text-sm font-bold text-white/80">new requests this week</p>
              <div className="mt-5 h-2 rounded-full bg-white/20">
                <div className="h-2 w-4/5 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 hidden rounded-lg bg-white/90 p-4 shadow-soft backdrop-blur dark:bg-slate-950/80 sm:block">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
              <Check className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-black text-ink dark:text-white">Verified match found</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Indiranagar, within budget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepGroup({ title, steps }: { title: string; steps: typeof ownerSteps }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <h3 className="text-xl font-black text-ink dark:text-white">{title}</h3>
      <div className="mt-5 grid gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 text-ocean dark:from-blue-400/10 dark:to-emerald-400/10 dark:text-mint">
              <step.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Step {index + 1}</p>
              <p className="font-extrabold text-slate-800 dark:text-slate-100">{step.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-ink dark:bg-slate-950 dark:text-white">
      <Header />

      <main>
        <section className="relative overflow-hidden soft-grid">
          <div className="container-page grid gap-12 pb-14 pt-12 lg:grid-cols-[1fr_0.95fr] lg:pb-20 lg:pt-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-extrabold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <Star className="h-4 w-4 fill-current" /> Premium verified rental marketplace
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-normal text-ink dark:text-white sm:text-5xl lg:text-6xl">
                Find Your Perfect Rental Space in Minutes
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                List your property or discover rooms, flats, offices, and commercial spaces near you.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/#featured" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-ocean px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700">
                  Find Rentals <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/dashboard/owner" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-mint dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                  List Your Property
                </Link>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="container-page -mt-3 pb-12">
            <SearchPanel />
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50/70 py-8 dark:border-slate-800 dark:bg-slate-900/35">
          <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <stat.icon className="h-6 w-6 text-mint" />
                <p className="mt-4 text-3xl font-black text-ink dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="categories" className="section-pad">
          <div className="container-page">
            <SectionHeading eyebrow="Rental categories" title="Every kind of space, organized for fast decisions" text="Search residential and commercial rentals with clean categories, visual cues, and verified supply." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <article key={category.title} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
                  <span className={`grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br ${category.color} text-white shadow-sm transition group-hover:scale-105`}>
                    <category.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-ink dark:text-white">{category.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{category.count}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="section-pad bg-slate-50 dark:bg-slate-900/40">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading align="left" eyebrow="Featured properties" title="Verified rentals with rich details" text="Explore polished property cards with galleries, ratings, pricing, location, and quick actions." />
              <Link href="/properties/skyline-studio-indiranagar" className="focus-ring inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-mint dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                Browse details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad">
          <div className="container-page">
            <SectionHeading eyebrow="How it works" title="Simple workflows for owners and renters" text="RentSpace keeps both sides moving with guided steps, clear requests, and dashboard visibility." />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <StepGroup title="For Owners" steps={ownerSteps} />
              <StepGroup title="For Renters" steps={renterSteps} />
            </div>
          </div>
        </section>

        <section className="section-pad bg-slate-50 dark:bg-slate-900/40">
          <div className="container-page">
            <SectionHeading eyebrow="Advanced search" title="Filter by the details that actually matter" text="Narrow your results by budget, furnishing, bedrooms, parking, pets, availability, and more." />
            <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
              <AdvancedFilters />
              <button type="button" className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ocean to-mint px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
                Apply Smart Filters <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page">
            <SectionHeading eyebrow="Why choose us" title="Built for trust, speed, and scale" text="A professional marketplace layer for verified supply, direct communication, and smarter discovery." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
                  <feature.icon className="h-7 w-7 text-mint" />
                  <h3 className="mt-5 text-lg font-black text-ink dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad overflow-hidden bg-slate-50 dark:bg-slate-900/40">
          <div className="container-page">
            <SectionHeading eyebrow="Testimonials" title="Loved by renters and property owners" text="Modern review cards with real marketplace moments from residential and commercial users." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((review) => (
                <article key={review.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">"{review.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-black text-ink dark:text-white">{review.name}</p>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page grid gap-10 rounded-lg border border-slate-200 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-soft dark:border-slate-800 dark:from-slate-950 dark:to-slate-900 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-mint">Mobile apps</p>
              <h2 className="mt-3 text-3xl font-black text-ink dark:text-white sm:text-4xl">Rent, list, and chat from anywhere</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                Promote Android and iOS apps with saved searches, instant owner replies, property approvals, and rental request updates.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-black text-white dark:bg-white dark:text-ink"><Download className="h-5 w-5" /> App Store</button>
                <button type="button" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-black text-ink dark:border-slate-800 dark:bg-slate-950 dark:text-white"><Download className="h-5 w-5" /> Google Play</button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm rounded-[2rem] border-[10px] border-slate-900 bg-slate-950 p-3 shadow-glow">
              <div className="rounded-[1.35rem] bg-white p-4 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <Smartphone className="h-5 w-5 text-ocean" />
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Live</span>
                </div>
                <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80" alt="Rental apartment app preview" className="mt-4 h-56 w-full rounded-lg object-cover" />
                <div className="mt-4 grid gap-2">
                  <div className="h-3 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="h-3 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <button type="button" className="mt-2 rounded-lg bg-ocean py-3 text-sm font-black text-white">Contact Owner</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-slate-50 dark:bg-slate-900/40">
          <div className="container-page grid gap-10 lg:grid-cols-[0.75fr_1fr]">
            <SectionHeading align="left" eyebrow="FAQ" title="Questions before move-in" text="Clear answers for listing, searching, verification, and renter workflows." />
            <div className="grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <summary className="cursor-pointer list-none text-base font-black text-ink marker:hidden dark:text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page rounded-lg bg-ink p-6 text-white shadow-soft dark:bg-white dark:text-ink sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">Get premium rental alerts</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 dark:text-slate-600">
                  Subscribe for verified listings, market insights, and owner tools in your city.
                </p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter">Email address</label>
                <input id="newsletter" type="email" placeholder="you@example.com" className="min-h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white outline-none placeholder:text-slate-300 focus:border-mint dark:border-slate-200 dark:bg-slate-50 dark:text-ink dark:placeholder:text-slate-500" />
                <button type="submit" className="focus-ring min-h-12 rounded-lg bg-mint px-6 text-sm font-black text-white shadow-glow">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

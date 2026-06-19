import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bath, BedDouble, CalendarDays, Car, Heart, MapPin, MessageCircle, Share2, ShieldCheck, Star, Wifi } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/data";

type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export default function PropertyDetailsPage({ params }: PageProps) {
  const property = properties.find((item) => item.id === params.id) ?? properties[0];
  const similar = properties.filter((item) => item.id !== property.id);
  const propertyFacts: Array<[string, LucideIcon]> = [
    [property.beds, BedDouble],
    ["2 Baths", Bath],
    [property.area, ShieldCheck],
    ["Available now", CalendarDays]
  ];
  const amenities: Array<[string, LucideIcon]> = [
    ["High-speed Wi-Fi", Wifi],
    ["Covered Parking", Car],
    ["Verified Owner", ShieldCheck],
    ["Flexible Move-in", CalendarDays],
    ...property.amenities.map((item): [string, LucideIcon] => [item, Star])
  ];

  return (
    <div className="min-h-screen bg-white text-ink dark:bg-slate-950 dark:text-white">
      <Header />
      <main>
        <section className="container-page py-8">
          <Link href="/#featured" className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-black text-slate-600 hover:text-ocean dark:text-slate-300 dark:hover:text-mint">
            <ArrowLeft className="h-4 w-4" /> Back to listings
          </Link>

          <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">Verified {property.type}</p>
              <h1 className="mt-4 text-3xl font-black text-ink dark:text-white sm:text-5xl">{property.title}</h1>
              <p className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-mint" /> {property.location}
              </p>
            </div>
            <div className="flex gap-3">
              <button type="button" className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black dark:border-slate-800"><Share2 className="h-4 w-4" /> Share</button>
              <button type="button" className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black dark:border-slate-800"><Heart className="h-4 w-4" /> Save</button>
            </div>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
            <Image src={property.images[0]} alt={`${property.title} main gallery`} className="h-[360px] w-full rounded-lg object-cover shadow-soft lg:h-[520px]" width={800} height={520} />
            <div className="grid grid-cols-2 gap-3">
              {property.images.slice(1).map((image) => (
                <Image key={image} src={image} alt={`${property.title} gallery view`} className="h-[174px] w-full rounded-lg object-cover shadow-sm lg:h-[253px]" width={400} height={253} />
              ))}
              <div className="grid h-[174px] place-items-center rounded-lg border border-slate-200 bg-slate-50 text-sm font-black text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 lg:h-[253px]">+12 Photos</div>
            </div>
          </div>
        </section>

        <section className="container-page grid gap-8 pb-16 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-6">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-black">Property Information</h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{property.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {propertyFacts.map(([label, Icon]) => (
                  <div key={label} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
                    <Icon className="h-5 w-5 text-mint" />
                    <p className="mt-3 text-sm font-black">{label}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-black">Amenities</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {amenities.map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800">
                    <Icon className="h-5 w-5 text-mint" />
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="p-6">
                <h2 className="text-2xl font-black">Location</h2>
                <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">Google Maps integration preview</p>
              </div>
              <iframe
                title={`${property.location} map`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </article>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950 lg:sticky lg:top-24">
            <p className="text-3xl font-black">{property.rent}</p>
            <p className="mt-2 flex items-center gap-1 text-sm font-bold text-amber-600 dark:text-amber-300">
              <Star className="h-4 w-4 fill-current" /> {property.rating} marketplace rating
            </p>
            <div className="mt-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=180&q=80" alt="Owner profile" className="h-14 w-14 rounded-full object-cover" width={56} height={56} />
                <div>
                  <p className="font-black">Rohan Estates</p>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Verified owner</p>
                </div>
              </div>
            </div>
            <form className="mt-6 grid gap-3">
              <input placeholder="Full name" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-mint dark:border-slate-800 dark:bg-slate-950" />
              <input placeholder="Phone or email" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-mint dark:border-slate-800 dark:bg-slate-950" />
              <textarea placeholder="I am interested in this property..." rows={4} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-mint dark:border-slate-800 dark:bg-slate-950" />
              <button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-ocean px-5 py-4 text-sm font-black text-white shadow-glow">
                <MessageCircle className="h-5 w-5" /> Contact Owner
              </button>
            </form>
          </aside>
        </section>

        <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
          <div className="container-page">
            <h2 className="text-3xl font-black">Similar Properties</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {similar.map((item) => <PropertyCard key={item.id} property={item} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

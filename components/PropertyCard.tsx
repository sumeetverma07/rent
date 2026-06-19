"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Star } from "lucide-react";
import type { Property } from "@/lib/data";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={`${property.title} interior`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-ocean shadow-sm backdrop-blur dark:bg-slate-950/80 dark:text-mint">
          {property.type}
        </div>
        <button
          type="button"
          aria-label={`Save ${property.title}`}
          className="focus-ring absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-lg bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:scale-105 hover:text-rose-500 dark:bg-slate-950/80 dark:text-slate-100"
        >
          <Heart className="h-5 w-5" />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {property.images.slice(0, 3).map((image) => (
            <span key={image} className="h-1.5 w-8 rounded-full bg-white/80 shadow-sm" />
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold text-ink dark:text-white">{property.title}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 text-mint" />
              {property.location}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-extrabold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            {property.rating}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-ocean dark:bg-blue-400/10 dark:text-blue-300">{property.beds}</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">{property.area}</span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xl font-black text-ink dark:text-white">{property.rent}</p>
          <Link href={`/properties/${property.id}`} className="focus-ring rounded-lg bg-ocean px-4 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

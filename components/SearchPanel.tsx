import { CalendarDays, Car, Home, MapPin, PawPrint, Search, SlidersHorizontal, Sofa } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function SearchPanel({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "grid gap-4" : "glass mx-auto mt-8 grid max-w-5xl gap-3 rounded-lg p-3 shadow-soft md:grid-cols-[1.2fr_1fr_1fr_auto]"}>
      <label className="group rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <MapPin className="h-4 w-4 text-mint" /> Location
        </span>
        <input className="mt-2 w-full bg-transparent text-sm font-bold text-ink outline-none placeholder:text-slate-400 dark:text-white" placeholder="City, locality, landmark" />
      </label>
      <label className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Home className="h-4 w-4 text-mint" /> Property Type
        </span>
        <select className="mt-2 w-full bg-transparent text-sm font-bold text-ink outline-none dark:text-white">
          <option>Any space</option>
          <option>Room</option>
          <option>Flat</option>
          <option>Apartment</option>
          <option>PG/Hostel</option>
          <option>Office Space</option>
          <option>Shop</option>
          <option>Warehouse</option>
        </select>
      </label>
      <label className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <SlidersHorizontal className="h-4 w-4 text-mint" /> Budget
        </span>
        <select className="mt-2 w-full bg-transparent text-sm font-bold text-ink outline-none dark:text-white">
          <option>Any budget</option>
          <option>Under Rs 15,000</option>
          <option>Rs 15,000 - Rs 50,000</option>
          <option>Rs 50,000 - Rs 1L</option>
          <option>Above Rs 1L</option>
        </select>
      </label>
      <button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ocean to-mint px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
        <Search className="h-5 w-5" /> Search
      </button>
    </form>
  );
}

export function AdvancedFilters() {
  const filters: Array<[string, string, LucideIcon]> = [
    ["Location", "Bengaluru, Mumbai, Delhi", MapPin],
    ["Property Type", "Residential, commercial", Home],
    ["Budget Range", "Rs 10,000 - Rs 2L", SlidersHorizontal],
    ["Furnishing", "Furnished / Unfurnished", Sofa],
    ["Bedrooms", "1, 2, 3, 4+", Home],
    ["Parking", "Covered, open, none", Car],
    ["Pets Allowed", "Yes / No", PawPrint],
    ["Availability Date", "Move-in timeline", CalendarDays]
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {filters.map(([label, placeholder, Icon]) => (
        <label key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition focus-within:border-mint dark:border-slate-800 dark:bg-slate-950">
          <span className="flex items-center gap-2 text-sm font-extrabold text-ink dark:text-white">
            <Icon className="h-4 w-4 text-mint" />
            {label}
          </span>
          <input className="mt-3 w-full bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400 dark:text-slate-300" placeholder={placeholder} />
        </label>
      ))}
    </div>
  );
}

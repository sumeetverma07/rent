import {
  BadgeCheck,
  BedDouble,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Car,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Contact,
  DoorOpen,
  Factory,
  HeartHandshake,
  Home,
  Hotel,
  HousePlus,
  KeyRound,
  LockKeyhole,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  UploadCloud,
  Users,
  Warehouse,
  Wifi,
  type LucideIcon
} from "lucide-react";

export type Category = {
  title: string;
  count: string;
  icon: LucideIcon;
  color: string;
};

export type Property = {
  id: string;
  title: string;
  location: string;
  rent: string;
  type: string;
  rating: number;
  images: string[];
  beds: string;
  area: string;
  amenities: string[];
  description: string;
};

export const categories: Category[] = [
  { title: "Rooms", count: "2,480 spaces", icon: DoorOpen, color: "from-blue-500 to-cyan-400" },
  { title: "Flats", count: "1,920 homes", icon: Home, color: "from-emerald-500 to-teal-400" },
  { title: "Apartments", count: "3,140 units", icon: Building2, color: "from-sky-500 to-blue-500" },
  { title: "PG/Hostels", count: "870 stays", icon: Hotel, color: "from-green-500 to-emerald-400" },
  { title: "Office Spaces", count: "740 offices", icon: BriefcaseBusiness, color: "from-indigo-500 to-blue-500" },
  { title: "Shops", count: "630 stores", icon: Store, color: "from-cyan-500 to-emerald-400" },
  { title: "Warehouses", count: "410 hubs", icon: Warehouse, color: "from-slate-600 to-blue-500" },
  { title: "Co-working Spaces", count: "520 seats", icon: Users, color: "from-teal-500 to-sky-500" }
];

export const properties: Property[] = [
  {
    id: "skyline-studio-indiranagar",
    title: "Skyline Studio Apartment",
    location: "Indiranagar, Bengaluru",
    rent: "Rs 38,000/mo",
    type: "Apartment",
    rating: 4.9,
    beds: "1 Bed",
    area: "640 sq.ft",
    amenities: ["Furnished", "Wi-Fi", "Parking", "Metro nearby"],
    description:
      "A bright, fully furnished studio with skyline views, high-speed internet, and quick access to cafes, metro, and work hubs.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "premium-office-bkc",
    title: "Premium Managed Office",
    location: "BKC, Mumbai",
    rent: "Rs 1.8L/mo",
    type: "Office Space",
    rating: 4.8,
    beds: "24 Seats",
    area: "1,850 sq.ft",
    amenities: ["Reception", "Meeting room", "Pantry", "24/7 access"],
    description:
      "Move-in-ready office suite with private cabins, meeting rooms, secure access, and a prestigious commercial address.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "green-view-flat-pune",
    title: "Green View Family Flat",
    location: "Koregaon Park, Pune",
    rent: "Rs 52,000/mo",
    type: "Flat",
    rating: 4.7,
    beds: "2 Beds",
    area: "1,120 sq.ft",
    amenities: ["Semi-furnished", "Balcony", "Covered parking", "Pet friendly"],
    description:
      "Peaceful two-bedroom flat with open living space, leafy views, nearby schools, and a pet-friendly society.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80"
    ]
  }
];

export const stats = [
  { label: "Properties Listed", value: 10000, suffix: "+", icon: HousePlus },
  { label: "Happy Renters", value: 50000, suffix: "+", icon: HeartHandshake },
  { label: "Cities Covered", value: 500, suffix: "+", icon: MapPin },
  { label: "User Satisfaction", value: 95, suffix: "%", icon: Star }
];

export const ownerSteps = [
  { title: "Create Account", icon: Contact },
  { title: "Upload Property", icon: UploadCloud },
  { title: "Receive Rental Requests", icon: MessagesSquare },
  { title: "Earn Income", icon: CircleDollarSign }
];

export const renterSteps = [
  { title: "Search Property", icon: Search },
  { title: "Compare Listings", icon: ClipboardCheck },
  { title: "Contact Owner", icon: MessageCircle },
  { title: "Move In", icon: KeyRound }
];

export const features = [
  { title: "Verified Listings", text: "Every listing is screened with owner and property checks.", icon: BadgeCheck },
  { title: "Direct Owner Contact", text: "Skip friction with owner-first communication workflows.", icon: Contact },
  { title: "Secure Communication", text: "Keep conversations and application details protected.", icon: LockKeyhole },
  { title: "Smart Recommendations", text: "Match faster using budget, lifestyle, and location signals.", icon: Sparkles },
  { title: "Location-Based Search", text: "Discover rentals by neighborhood, commute, and landmarks.", icon: MapPin },
  { title: "Instant Property Approval", text: "Owners can publish clean listings with guided approvals.", icon: CheckCircle2 }
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Manager",
    text: "RentSpace helped me shortlist verified apartments near my office in one evening. The owner chat felt clean and transparent.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ishita Rao",
    role: "Property Owner",
    text: "The owner dashboard makes requests, messages, and earnings easy to track. My studio was rented in less than a week.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Kabir Shah",
    role: "Startup Founder",
    text: "We found a furnished office that matched our budget and expansion plan. The listing details were genuinely useful.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  }
];

export const faqs = [
  {
    question: "How does RentSpace verify listings?",
    answer:
      "Listings pass owner identity, address, media, and pricing checks before they receive a verified badge."
  },
  {
    question: "Can owners list residential and commercial spaces?",
    answer:
      "Yes. Owners can list rooms, PGs, flats, apartments, offices, shops, warehouses, co-working seats, and custom spaces."
  },
  {
    question: "Do renters pay brokerage through RentSpace?",
    answer:
      "RentSpace is designed for direct owner contact, so renters can compare options and speak with owners without hidden marketplace friction."
  },
  {
    question: "Can I save properties and apply later?",
    answer:
      "Yes. Renters can save properties, revisit search history, submit applications, and manage owner messages from the dashboard."
  }
];

export const ownerMetrics = [
  { label: "Active Listings", value: "18", icon: Building2 },
  { label: "Booking Requests", value: "42", icon: CalendarDays },
  { label: "Monthly Earnings", value: "Rs 8.4L", icon: ChartNoAxesCombined },
  { label: "Response Time", value: "12 min", icon: Clock3 }
];

export const renterMetrics = [
  { label: "Saved Properties", value: "23", icon: HeartHandshake },
  { label: "Search Alerts", value: "8", icon: Search },
  { label: "Applications", value: "5", icon: ClipboardCheck },
  { label: "Owner Messages", value: "17", icon: MessageCircle }
];

export const amenityIcons = {
  furnished: CheckCircle2,
  wifi: Wifi,
  parking: Car,
  pets: ShieldCheck,
  bedrooms: BedDouble,
  availability: CalendarDays,
  commercial: Factory,
  retail: ShoppingBag
};

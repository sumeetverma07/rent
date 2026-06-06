import { DashboardShell } from "@/components/DashboardShell";
import { renterMetrics } from "@/lib/data";

export default function RenterDashboardPage() {
  return <DashboardShell mode="renter" metrics={renterMetrics} />;
}

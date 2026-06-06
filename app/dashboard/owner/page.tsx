import { DashboardShell } from "@/components/DashboardShell";
import { ownerMetrics } from "@/lib/data";

export default function OwnerDashboardPage() {
  return <DashboardShell mode="owner" metrics={ownerMetrics} />;
}

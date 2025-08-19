"use client";
import dynamic from "next/dynamic";

const ZapDashboardClient = dynamic(
  () => import("@/app/components/ZapDashboard/ZapDashboardClient"),
  { ssr: false },
);

export default function Page() {
  return <ZapDashboardClient />;
}

import { zapOperations } from "@repo/types";

import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { lazy, Suspense } from "react";
import LeftBarSkeleton from "@/app/components/ui/SuspenseLoaders/LeftBarSkeleton";
const LinkedAssets = lazy(() => import("./LinkedAssets"));
const ZapNotes = lazy(() => import("./ZapNotes"));
const ZapHistory = lazy(() => import("./ZapHistory"));
const AdvancedSettings = lazy(() => import("./AdvancedSettings"));
const ZapDetails = lazy(() => import("./ZapDetails"));
const ZapRunDetails = lazy(() => import("./ZapRunDetails"));

export default function CurrentOperation({
  operation,
}: {
  operation: zapOperations;
}) {
  switch (operation) {
    case zapOperations.LINKEDASSETS:
      return (
        <Suspense fallback={<LeftBarSkeleton />}>
          <LinkedAssets />
        </Suspense>
      );
    case zapOperations.ADVANCEDSETTINGS:
      return (
        <Suspense fallback={<LeftBarSkeleton />}>
          <AdvancedSettings />
        </Suspense>
      );
    case zapOperations.NOTES:
      return (
        <Suspense fallback={<LeftBarSkeleton />}>
          <ZapNotes />
        </Suspense>
      );
    case zapOperations.STATUS:
      return <div>Status</div>;
    case zapOperations.CHANGEHISTORY:
      return (
        <Suspense fallback={<LeftBarSkeleton />}>
          <ZapHistory />
        </Suspense>
      );
    case zapOperations.ZAPDETAILS:
      return (
        <Suspense fallback={<LeftBarSkeleton />}>
          <RecoilContextProvider>
            <ZapDetails />
          </RecoilContextProvider>
        </Suspense>
      );
    // case zapOperations.VERSIONS:
    //   return <div>Versions</div>;
    case zapOperations.ZAPRUN:
      return (
        <Suspense fallback={<LeftBarSkeleton />}>
          <ZapRunDetails />
        </Suspense>
      );
    default:
      <>Error</>;
  }
}

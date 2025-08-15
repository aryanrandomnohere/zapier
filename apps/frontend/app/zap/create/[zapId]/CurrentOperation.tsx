import { zapOperations } from "@repo/types";
import { lazy } from "react";

const LinkedAssets = lazy(() => import("./LinkedAssets"));
const ZapRunDetails = lazy(() => import("./ZapRunDetails"));
const ZapNotes = lazy(() => import("./ZapNotes"));
const ZapHistory = lazy(() => import("./ZapHistory"));
const AdvancedSettings = lazy(() => import("./AdvancedSettings"));
const ZapDetails = lazy(() => import("./ZapDetails"));

export default function CurrentOperation({ operation }: { operation: zapOperations }) {
    switch (operation) {
      case zapOperations.LINKEDASSETS:
        return <LinkedAssets />;
      case zapOperations.ADVANCEDSETTINGS:
        return <AdvancedSettings />;
      case zapOperations.NOTES:
        return <ZapNotes />;
      case zapOperations.STATUS:
        return <div>Status</div>;
      case zapOperations.CHANGEHISTORY:
        return <ZapHistory />;
      case zapOperations.ZAPDETAILS:
        return <ZapDetails />;
      // case zapOperations.VERSIONS:
      //   return <div>Versions</div>;
      case zapOperations.ZAPRUN:
        return <ZapRunDetails />;
      default:
        <>Error</>;
    }
  }
import { zapOperations } from "@repo/types";
import LinkedAssets from "./LinkedAssets";
import ZapRunDetails from "./ZapRunDetails";
import ZapNotes from "./ZapNotes";
import ZapHistory from "./ZapHistory";
import AdvancedSettings from "./AdvancedSettings";
import ZapDetails from "./ZapDetails";

export default function CurrentOperation({
  operation,
}: {
  operation: zapOperations;
}) {
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

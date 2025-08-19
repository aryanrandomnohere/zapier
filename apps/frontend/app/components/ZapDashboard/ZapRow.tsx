"use client";
import { Row } from "./Row";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { InlineLoading } from "../ui/LoadingSpinner";
import { zapInterface } from "@repo/types";
import {
  appFilterAtom,
  statusFilterAtom,
} from "@/app/RecoilState/store/dashBoardFilters";
import { useRecoilValue } from "recoil";

interface ZapRowsProps {
  zaps?: zapInterface[];
  loading: boolean;
  refetchZaps: () => void;
}

export const ZapRows: React.FC<ZapRowsProps> = ({
  zaps: propZaps,
  loading,
  refetchZaps,
}) => {
  const zaps = propZaps;
  const statusFilter = useRecoilValue(statusFilterAtom);
  const appFilter = useRecoilValue(appFilterAtom);
  console.log("Filters Updated", statusFilter, appFilter, zaps);

  const filteredZaps = zaps
    ?.filter(
      (zap) =>
        appFilter == "ALL" ||
        zap.trigger?.type.id === appFilter ||
        zap.actions.some((action) => action.actionDetails.id === appFilter),
    )
    .filter(
      (zap) =>
        statusFilter == "ALL" ||
        zap.published === (statusFilter == "ON" ? true : false),
    );

  console.log(filteredZaps);
  const handleZapClick = (id: string): void => {
    console.log(`Clicked zap with id: ${id}`);
  };

  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan={6} className="py-8">
            <div className="flex justify-center">
              <InlineLoading text="Loading Zaps..." />
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  // Commented out skeleton loading
  // return (
  //   <tbody>
  //     <tr>
  //       <td colSpan={6} className="py-8">
  //         <TableLoading rows={4} />
  //       </td>
  //     </tr>
  //   </tbody>
  // );

  return (
    <tbody>
      <RecoilContextProvider>
        {" "}
        {filteredZaps?.map((zap) => (
          <Row
            key={zap.id}
            zap={zap}
            handleZapClick={handleZapClick}
            refetchZaps={refetchZaps}
          />
        ))}
      </RecoilContextProvider>
    </tbody>
  );
};

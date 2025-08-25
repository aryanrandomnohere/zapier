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
  refetchZaps,
}) => {
  const zaps = propZaps;
  const statusFilter = useRecoilValue(statusFilterAtom);
  const appFilter = useRecoilValue(appFilterAtom);

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

  const handleZapClick = (id: string) => {
    console.log(`Clicked zap with id: ${id}`);
  };



  return (
    <RecoilContextProvider>
      {/* ✅ Mobile Cards */}
      <div className=" md:hidden overflow-y-auto  flex flex-col gap-4">
        {filteredZaps?.map((zap) => (
          <Row
            key={zap.id}
            zap={zap}
            handleZapClick={handleZapClick}
            refetchZaps={refetchZaps}
          />
        ))}
      </div>

      {/* ✅ Desktop Table Rows */}
      <tbody className="hidden md:table-row-group gap-y-2 md:gap-y-0">
        {filteredZaps?.map((zap) => (
          <Row
            key={zap.id}
            zap={zap}
            handleZapClick={handleZapClick}
            refetchZaps={refetchZaps}
          />
        ))}
      </tbody>
    </RecoilContextProvider>
  );
};

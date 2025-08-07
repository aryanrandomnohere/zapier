import useZaps from "@/app/hooks/useZaps";
import { Row } from "./Row";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { InlineLoading, TableLoading } from "../ui/LoadingSpinner";
import { zapInterface } from "@repo/types";

interface ZapRowsProps {
  zaps?: zapInterface[];
  loading: boolean;
}

export const ZapRows: React.FC<ZapRowsProps> = ({
  zaps: propZaps,
  loading,
}) => {
  const zaps = propZaps;

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
        {zaps
          ?.filter((zap) => zap.trigger || zap.actions.length > 0)
          .filter((zap) => zap.trigger || zap.actions.length > 0)
          .map((zap) => (
            <Row key={zap.id} zap={zap} handleZapClick={handleZapClick} />
          ))}
      </RecoilContextProvider>
    </tbody>
  );
};

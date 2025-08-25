import { ChevronDown } from "lucide-react";
import { ZapRows } from "./ZapRow";
import { zapInterface } from "@repo/types";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { InlineLoading } from "../ui/LoadingSpinner";

export default function ZapTable({
  zaps,
  loading,
  refetchZaps,
}: {
  zaps: zapInterface[];
  loading: boolean;
  refetchZaps: () => void;
}) {

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px] w-full">
      <InlineLoading text="Loading Zaps..." />
    </div>
    
    );
  }
  return (
    <div className="">
      {/* Mobile → cards, Desktop → table */}
      <div className="block md:hidden w-full">
        <RecoilContextProvider>
          <ZapRows zaps={zaps} loading={loading} refetchZaps={refetchZaps} />
        </RecoilContextProvider>
      </div>

      <table className="hidden md:table w-full bg-[#FFFDF9] border border-[#F3F0E8] rounded-lg">
        <thead className="border-b border-gray-200">
          <tr>
            <th className="text-left py-3 px-6 min-w-[27rem] text-base font-medium text-gray-700">
              <div className="flex items-center gap-2">
                Name <ChevronDown size={14} className="text-gray-400" />
              </div>
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              Apps
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              Location
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              <div className="flex items-center gap-2">
                Last modified{" "}
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              <div className="flex items-center gap-2">
                Status <ChevronDown size={14} className="text-gray-400" />
              </div>
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              Owner
            </th>
          </tr>
        </thead>
        <RecoilContextProvider>
         <ZapRows zaps={zaps} loading={loading} refetchZaps={refetchZaps} />
        </RecoilContextProvider>
      </table>
    </div>
  );
}

import { ChevronDown } from "lucide-react";
import { ZapRows } from "./ZapRow";
import { zapInterface } from "@repo/types";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";

export default function ZapTable({
  zaps,
  loading,
}: {
  zaps: zapInterface[];
  loading: boolean;
}) {
  return (
    <div className="bg-[#FFFDF9] border border-[#F3F0E8] rounded-lg">
      <table className="w-full">
        <thead className=" border-b border-gray-200">
          <tr>
            <th className="text-left py-3 px-6 min-w-[27rem] text-base font-medium text-gray-700">
              <div className="flex items-center gap-2">
                Name
                <ChevronDown size={14} className="text-gray-400" />
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
                Last modified
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              <div className="flex items-center gap-2">
                Status
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </th>
            <th className="text-left py-3 px-6 text-base font-medium text-gray-700">
              Owner
            </th>
          </tr>
        </thead>
        <RecoilContextProvider>
          {" "}
          <ZapRows zaps={zaps} loading={loading} />
        </RecoilContextProvider>
      </table>
    </div>
  );
}

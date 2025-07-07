import ZapRow from "./ZapRow";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import useZaps from "@/app/hooks/useZaps";
export default function ZapTable() {
  const { zaps, loading, error } = useZaps();
  console.log(zaps, loading, error);
  return (
    <div className="flex flex-col h-full">
      {" "}
      <div className="text-3xl tex t-black font-semibold">My Zaps</div>
      <div className="flex text-sm font-bold border-b border-black/20 py-2 pr-10">
        <div className="flex w-3/3 min-w-full gap-0.5 items-center juspify-between">
          <div className="flex min-w-1/3">
            <div className=" p-2 border border-black/50">
              <MdOutlineCheckBoxOutlineBlank className="text-black/50 text-2xl " />
            </div>
            <div className=" p-2 border border-l-0 border-black/50">
              <RiArrowDownSFill className=" text-black/50 text-2xl" />
            </div>
          </div>
          <div className=" text-center min-w-1/4">Name</div>
          <div className="flex gap-12 justify-center  items-center min-w-1/2">
            <div>Last Edited</div> <div>Running</div>
          </div>
        </div>
      </div>
      {loading ? "Loading...." : <ZapRow zaps={zaps} />}
    </div>
  );
}

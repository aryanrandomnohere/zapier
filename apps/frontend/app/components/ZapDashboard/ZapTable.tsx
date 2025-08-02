import ZapRows from "./ZapRow";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
export default function ZapTable() {
  return (
    <div className="flex flex-col justify-start h-full">
      {" "}
      <div className="text-3xl tex t-black font-semibold">My Zaps</div>
      <div className="flex text-sm font-bold border-b border-black/20 py-2 pr-10">
        <div className="flex w-3/3 min-w-full gap-0.5 items-center juspify-between">
          <div className="flex min-w-1/3">
            <div className=" p-2 border border-black/50">
              <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "1.5rem" }}>
                <MdOutlineCheckBoxOutlineBlank />
              </div>
            </div>
            <div className=" p-2 border border-l-0 border-black/50">
              <div style={{ color: "rgba(0,0,0,0.5)", fontSize: "1.5rem" }}>
                <RiArrowDownSFill />
              </div>
            </div>
          </div>
          <div className=" text-center min-w-1/4">Name</div>
          <div className="flex gap-12 justify-center  items-center min-w-1/2">
            <div>Last Edited</div> <div>Running</div>
          </div>
        </div>
      </div>
      <ZapRows />
    </div>
  );
}

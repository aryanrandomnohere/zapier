import { BoltIcon } from "../../ZapDashboard/FolderIcon";
import {SkeletonPulse} from "../Skeleton";

export const SideModalSkeleton = () => {
    return (
      <div      
      className={`min-h-full flex flex-col items-center justify-between w-96 border-blue-800 border-2 z-50  rounded transform-all ease-in-out duration-300 bg-[#FFFDF9] `}
    >
      <div className="flex flex-col  w-full">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center self-start gap-1 text-sm font-bold w-full  bg-blue-300/10">
            <div className="flex items-center justify-center m-2 w-10 h-10 p-1.5 border border-black/20 bg-[#FFFDF9] rounded">
              <BoltIcon  />
            </div>
            <SkeletonPulse className="w-32 h-4" />
          </div>
          <div className="flex flex-col gap-3 w-full items-center px-2 mt-2">
            <SkeletonPulse className="w-full h-4" />
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  
  
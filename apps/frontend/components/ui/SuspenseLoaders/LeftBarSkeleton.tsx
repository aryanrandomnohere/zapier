import { SkeletonPulse } from "../Skeleton";

export default function LeftBarSkeleton() {
  return (
    <div className="fixed px-1 pl-2 pt-3 min-h-full left-11 top-[73px] min-w-xs  bg-[#FFFDF9] shadow-md justify-center z-[1000] border border-zinc-300 flex ">
      <div className="w-full h-full px-2 flex justify-center items-center ">
        {" "}
        <SkeletonPulse className="w-full h-full" />{" "}
      </div>
      <div className="w-full h-full px-2 flex justify-center items-center ">
        {" "}
        <SkeletonPulse className="w-full h-full" />{" "}
      </div>
      <div className="w-full h-full px-2 flex justify-center items-center ">
        {" "}
        <SkeletonPulse className="w-full h-full" />{" "}
      </div>
    </div>
  );
}

import { EllipsisVertical } from "lucide-react";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import Image from "next/image";
import { ItemType } from "@repo/types";
import { IconSkeleton, Skeleton, SkeletonPulse } from "../ui/Skeleton";
import CellActions from "./CellActions";
import DropDownMenu from "@/app/ui/DropDownMenu";

export default function ZapCell({
  title,
  subtitle,
  order,
  imagePath,
  SelectCell,
  loading,
  copiedItem,
  setCopiedItem,
}: {
  title: string;
  subtitle?: string | null;
  order: number;
  imagePath?: string;
  SelectCell: (order: number) => void;
  loading: boolean;
  copiedItem: ItemType | null;
  setCopiedItem: (item: ItemType | null) => void;
}) {
  return (
    <div className="flex flex-col gap-0 zap-cell">
      <div
        className=" flex bg-white w-full hover:cursor-pointer px-2 transition-all transform duration-200 hover:shadow-xl min-w-[20rem] py-2  border-black rounded-xl focus-within:border-blue-600"
        style={{
          borderStyle: "dotted",
          borderWidth: "2px",
          borderSpacing: "11px",
        }}
        tabIndex={0}
        onClick={() => SelectCell(order - 1)}
      >
        <div className=" flex flex-col pl-2 gap-1.5">
          <div className="flex justify-between items-center min-w-[18rem]">
            {" "}
            <div className="flex items-center justify-between gap-2 px-1.5 py-[1px] w-fit border border-black/20 bg-stone-200 rounded-md">
              {imagePath && !loading ? (
                <Image
                  src={imagePath}
                  alt="logo"
                  className="w-5 h-5 rounded-full object-cover"
                  width={20}
                  height={20}
                />
              ) : loading ? (
                <div className="flex items-center justify-center text-white  rounded-full">
                  <LoadingSpinner size="sm" />
                </div>
              ) : (
                <div className="text-white rounded-full">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      fill="#2D2E2E"
                      d="M9 23.66 20.54 9.91H15V.16L3.46 13.91H9v9.75Z"
                    />
                  </svg>
                </div>
              )}
              <div className="font-bold text-sm"> {title}</div>{" "}
            </div>
            {loading ? (
              <IconSkeleton />
            ) : (
              <DropDownMenu
                type="bottom"
                menuClassName="bg-white text-black"
                trigger={
                  <div className="flex items-center justify-center hover:bg-gray-100 rounded p-1">
                    {" "}
                    <EllipsisVertical size={20} />
                  </div>
                }
              >
                <CellActions
                  copiedItem={copiedItem}
                  setCopiedItem={setCopiedItem}
                  index={order}
                />
              </DropDownMenu>
            )}
          </div>
          <div className="flex gap-1 font-bold text-xl">
            <div className="flex gap-1 items-center">
              {loading ? (
                <SkeletonPulse className="h-4 w-44" />
              ) : (
                <>
                  {" "}
                  <div className="text-base"> {order}. </div>
                  <div className=" font-semibold  text-stone-500 text-sm">
                    {subtitle || "An event that starts your Zap"}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

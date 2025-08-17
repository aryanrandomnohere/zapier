import React from "react";
import { BiSolidZap } from "react-icons/bi";
import { SlSizeFullscreen } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: "sm" | "md" | "lg" | "full";
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  width = "w-full",
  height = "h-4",
  rounded = "md",
  animate = true,
}) => {
  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={`${width} ${height} ${roundedClass} bg-gray-200 animate-pulse ${className} ${
        animate ? "animate-pulse" : ""
      }`}
    />
  );
};

// Card skeleton for zap cards
export const ZapCardSkeleton: React.FC = () => (
  <div className="min-w-[270px] max-w-sm p-4 border border-gray-200 rounded shadow-sm bg-white animate-pulse">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-1">
        <Skeleton width="w-16" height="h-5" rounded="sm" />
        <Skeleton width="w-4" height="h-4" rounded="full" />
      </div>
      <Skeleton width="w-4" height="h-4" rounded="full" />
    </div>

    <div className="flex items-center gap-2 mb-4">
      <Skeleton width="w-7" height="h-7" rounded="sm" />
      <Skeleton width="w-7" height="h-7" rounded="sm" />
      <Skeleton width="w-7" height="h-7" rounded="sm" />
    </div>

    <Skeleton width="w-24" height="h-3" className="mb-1" />
    <Skeleton width="w-32" height="h-4" />
  </div>
);

// Service card skeleton
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded shadow-md p-4 border border-gray-200 animate-pulse">
    <div className="flex items-center space-x-3">
      <Skeleton width="w-9" height="h-9" rounded="md" />
      <div className="flex-1 min-w-0">
        <Skeleton width="w-20" height="h-4" className="mb-1" />
        <Skeleton width="w-32" height="h-3" />
      </div>
    </div>
  </div>
);

// Table row skeleton
export const TableRowSkeleton: React.FC = () => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 animate-pulse">
    <div className="flex items-center space-x-3">
      <Skeleton width="w-8" height="h-8" rounded="md" />
      <div>
        <Skeleton width="w-32" height="h-4" className="mb-1" />
        <Skeleton width="w-24" height="h-3" />
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <Skeleton width="w-16" height="h-6" rounded="sm" />
      <Skeleton width="w-4" height="h-4" rounded="full" />
    </div>
  </div>
);

// Button skeleton
export const ButtonSkeleton: React.FC = () => (
  <Skeleton width="w-24" height="h-10" rounded="md" />
);

// Input skeleton
export const InputSkeleton: React.FC = () => (
  <div className="flex flex-col space-y-1">
    <Skeleton width="w-16" height="h-4" />
    <Skeleton width="w-full" height="h-10" rounded="md" />
  </div>
);

// Dropdown skeleton
export const DropdownSkeleton: React.FC = () => (
  <div className="flex flex-col space-y-1">
    <Skeleton width="w-20" height="h-4" />
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
      <Skeleton width="w-32" height="h-4" />
      <Skeleton width="w-4" height="h-4" rounded="full" />
    </div>
  </div>
);

// Modal skeleton
export const ModalSkeleton: React.FC = () => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl p-6 w-96 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <Skeleton width="w-32" height="h-6" />
        <Skeleton width="w-6" height="h-6" rounded="full" />
      </div>
      <div className="space-y-3">
        <Skeleton width="w-full" height="h-4" />
        <Skeleton width="w-3/4" height="h-4" />
        <Skeleton width="w-1/2" height="h-4" />
      </div>
      <div className="flex justify-end space-x-2 mt-6">
        <Skeleton width="w-16" height="h-8" rounded="md" />
        <Skeleton width="w-20" height="h-8" rounded="md" />
      </div>
    </div>
  </div>
);

// List skeleton
export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md animate-pulse"
      >
        <Skeleton width="w-8" height="h-8" rounded="md" />
        <div className="flex-1">
          <Skeleton width="w-32" height="h-4" className="mb-1" />
          <Skeleton width="w-24" height="h-3" />
        </div>
        <Skeleton width="w-4" height="h-4" rounded="full" />
      </div>
    ))}
  </div>
);

// Grid skeleton
export const GridSkeleton: React.FC<{ cols?: number; rows?: number }> = ({
  cols = 3,
  rows = 2,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: cols * rows }).map((_, index) => (
      <ServiceCardSkeleton key={index} />
    ))}
  </div>
);

const SkeletonPulse = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
);

export default function SideModalLoading() {
  return (
    <div className="min-h-full flex flex-col items-center justify-between w-96 border-blue-800 border-2 z-50 rounded transform-all ease-in-out duration-300 bg-[#FFFDF9]">
      <div className="flex flex-col items-center w-full">
        {/* Header */}
        <div className="flex justify-between w-full items-center bg-blue-300/10">
          <div className="flex items-center gap-1 text-sm font-bold">
            <div className="flex items-center justify-center m-2 w-10 h-10 p-1.5 border border-black/20 bg-[#FFFDF9] rounded">
              <BiSolidZap size={22} className="text-gray-400" />
            </div>
            <SkeletonPulse className="w-32 h-4" />
          </div>
          <div className="flex items-center gap-2 m-2">
            <SlSizeFullscreen size={18} className="text-gray-400" />
            <RxCross2 size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Steps Navigation */}
        <div className="flex items-center justify-start gap-0.5 h-10 p-1 w-full border-b border-black/10">
          {/* Setup Step */}
          <div className="text-xs font-semibold flex items-center px-1 gap-1 py-2.5">
            <SkeletonPulse className="w-8 h-3" />
            <div className="text-black/30">
              <IoTimerOutline size={18} />
            </div>
          </div>
          <MdKeyboardArrowRight size={20} className="text-gray-400" />

          {/* Configuration Step */}
          <div className="text-xs font-semibold flex items-center px-1 gap-1 py-2.5">
            <SkeletonPulse className="w-12 h-3" />
            <div className="text-black/30">
              <IoTimerOutline size={18} />
            </div>
          </div>
          <MdKeyboardArrowRight size={20} className="text-gray-400" />

          {/* Test Step */}
          <div className="text-xs font-semibold flex items-center px-1 gap-1 py-2.5">
            <SkeletonPulse className="w-6 h-3" />
            <div className="text-black/30">
              <IoTimerOutline size={18} />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex gap-1 w-full px-2.5">
          <div className="self-start p-2 w-full">
            <div className="space-y-4">
              {/* Form field skeleton 1 */}
              <div className="space-y-2">
                <SkeletonPulse className="w-20 h-4" />
                <SkeletonPulse className="w-full h-10" />
              </div>

              {/* Form field skeleton 2 */}
              <div className="space-y-2">
                <SkeletonPulse className="w-24 h-4" />
                <SkeletonPulse className="w-full h-10" />
              </div>

              {/* Form field skeleton 3 */}
              <div className="space-y-2">
                <SkeletonPulse className="w-16 h-4" />
                <SkeletonPulse className="w-full h-24" />
              </div>

              {/* Additional content skeleton */}
              <div className="space-y-3 mt-6">
                <SkeletonPulse className="w-full h-3" />
                <SkeletonPulse className="w-3/4 h-3" />
                <SkeletonPulse className="w-1/2 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="w-full border-t border-black/10">
        <div className="w-full my-4 px-2">
          <SkeletonPulse className="w-full h-10 rounded" />
        </div>
      </div>
    </div>
  );
}

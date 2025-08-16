"use client";
import { RowProps } from "@repo/types";
import { useState } from "react";
import { ToggleButton } from "../buttons/ToggleButton";
import { formatDate } from "@/app/utils/formatDate";
import { BoltIcon, FolderIcon } from "./FolderIcon";
import { AppIcon } from "./AppIcon";
import { useRouter } from "next/navigation";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import { useRecoilState } from "recoil";
import { getSession } from "next-auth/react";
import axios from "axios";
import RowAction from "./RowAction";
import { LoadingSpinner } from "../ui/LoadingSpinner";

export const Row: React.FC<RowProps> = ({ zap, handleZapClick }) => {
  const [activeZap, setActiveZap] = useState<boolean>(zap.published);
  const [user, setUser] = useRecoilState(userAtom);
  const [publishingLoading, setPublishingLoading] = useState(false);
  const router = useRouter();
  async function handlePublishing() {
    setPublishingLoading(true);
    let userId = user?.userId;
    if (!user) {
      const session = await getSession();
      setUser(session?.user);
      userId = session?.user.userId;
    }
    try {
      if (activeZap) {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/stop/${zap.id}`,
          {},
          {
            withCredentials: true,
          },
        );
        if (response.data.success) setActiveZap(false);
      } else {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/start/${zap.id}`,
          {},
          {
            withCredentials: true,
          },
        );
        if (response.data.success) setActiveZap(true);
      }
    } catch (error) {
      console.error("Error publishing/unpublishing zap:", error);
    } finally {
      setPublishingLoading(false);
    }
  }

  // Sort actions by sortingOrder and get unique apps
  const sortedActions = [...zap.actions].sort(
    (a, b) => a.sortingOrder - b.sortingOrder,
  );
  const uniqueApps = sortedActions.reduce(
    (acc, action) => {
      if (!acc.find((a) => a.id === action.actionDetails.id)) {
        acc.push(action.actionDetails);
      }
      return acc;
    },
    [] as (typeof sortedActions)[0]["actionDetails"][],
  );

  return (
    <tr className="border-b border-gray-100">
      <td
        onClick={() => {
          router.push(`/zap/create/${zap.id}`);
        }}
        className="py-4 px-6 hover:cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <BoltIcon />
          <span className="text-sm text-gray-900 font-medium hover:underline">
            {zap.name}
          </span>
        </div>
      </td>

      <td className="py-4 px-6">
        <div className="flex items-center">
          {/* Trigger */}
          <AppIcon
            imagePath={zap?.trigger?.type.imagePath}
            name={zap.trigger?.type.name}
          />
          {/* Actions */}
          {uniqueApps.map((app, index) => (
            <AppIcon
              key={`${app.id}-${index}`}
              imagePath={app.imagePath}
              name={app.name}
            />
          ))}
        </div>
      </td>

      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <FolderIcon />
          <span className="text-sm text-gray-700">
            {zap.folder.name} (Personal)
          </span>
        </div>
      </td>

      <td className="py-4 px-6">
        <span className="text-sm text-gray-600">
          {formatDate(zap.lastEdited)}
        </span>
      </td>

      <td className="py-4 px-6">
        {publishingLoading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner size="sm" color="primary" />
          </div>
        ) : (
          <ToggleButton isChecked={activeZap} setIsChecked={handlePublishing} />
        )}
      </td>

      <td className="py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 bg-[#AEE0FC] rounded-full flex items-center justify-center">
            <span className="text-black text-xs font-semibold">
              {zap.user.firstname[0].toLocaleUpperCase() +
                zap.user.lastname[0].toLocaleUpperCase()}
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 ml-4">
            <RowAction
              zapId={zap.id}
              currentName={zap.name}
              trigger={
                <span className="text-lg font-extrabold text-[#280200] hover:cursor-pointer p-1 transition-all rounded duration-150 hover:bg-black/5">
                  ⋮
                </span>
              }
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

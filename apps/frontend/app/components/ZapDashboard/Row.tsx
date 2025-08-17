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
import Avatar from "../Avatar";
import { folderInterface } from "./RowAction";
import useFolders from "@/app/hooks/useFolders";
export const Row: React.FC<RowProps> = ({ zap, handleZapClick }) => {
  const { folders } = useFolders();
  console.log(folders);
  const [activeZap, setActiveZap] = useState<boolean>(zap.published);
  const [user, setUser] = useRecoilState(userAtom);
  const [publishingLoading, setPublishingLoading] = useState(false);
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
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

  if (pageLoading) {
    return (
      <div className="fixed bg-black/50 bg-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex  items-center justify-center h-screen z-[9999] w-screen gap-4 text-white text-2xl font-bold">
        This May Take a While, Setting Up the Zap Creation Environment{" "}
        <LoadingSpinner size="lg" color="primary" />
      </div>
    );
  }
  return (
    <tr className="border-b border-gray-100">
      <td
        onClick={() => {
          setPageLoading(true);
          router.push(`/zap/create/${zap.id}`);
        }}
        className="py-4 px-6 hover:cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <BoltIcon />
          <span className="text-base text-gray-900 font-medium hover:underline">
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
          <span className="text-base text-gray-700">
            {zap.folder.name} (Personal)
          </span>
        </div>
      </td>

      <td className="py-4 px-6">
        <span className="text-base text-gray-600">
          {formatDate(zap.lastEdited)}
        </span>
      </td>

      <td className="py-4 items-center justify-center px-6">
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
          <Avatar
            size="sm"
            name={
              zap.user.firstname[0].toLocaleUpperCase() +
              zap.user.lastname[0].toLocaleUpperCase()
            }
          />
          <button className="text-gray-400 hover:text-gray-600 ml-4">
            <RowAction
              currentFolderId={zap.folder.id}
              folders={folders || []}
              zapId={zap.id}
              currentName={zap.name}
              changeOwnerDisabled={true}
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

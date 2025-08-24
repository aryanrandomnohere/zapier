"use client";
import { zapInterface } from "@repo/types";
import { useState } from "react";
import { ToggleButton } from "../buttons/ToggleButton";
import { formatDate } from "@/app/utils/formatDate";
import { BoltIcon, FolderIcon } from "./FolderIcon";
import { AppIcon } from "./AppIcon";
import { usePathname, useRouter } from "next/navigation";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import { useRecoilState } from "recoil";
import { getSession } from "next-auth/react";
import axios from "axios";
import RowAction from "./RowAction";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import Avatar from "../Avatar";
import useFolders from "@/app/hooks/useFolders";
import ToastNotification from "@/app/ui/Notification";
import toast from "react-hot-toast";

export interface RowProps {
  zap: zapInterface;
  handleZapClick: (id: string) => void;
  refetchZaps: () => void;
}

export const Row: React.FC<RowProps> = ({
  zap,
  handleZapClick,
  refetchZaps,
}) => {
  const { folders } = useFolders();
  const [activeZap, setActiveZap] = useState<boolean>(zap.published);
  const [user, setUser] = useRecoilState(userAtom);
  const [publishingLoading, setPublishingLoading] = useState(false);
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  const pathname = usePathname();
  const isTrash = pathname.includes("trash");

  async function handlePublishing() {
    setPublishingLoading(true);
    let userId: string | undefined = user?.userId
      ? String(user.userId)
      : undefined;
    if (!user) {
      const session = await getSession();
      setUser(
        session?.user
          ? {
              ...session.user,
              name: session.user.name || "",
              email: session.user.email || "",
              image: session.user.image || "",
              userId: String(session.user.userId),
            }
          : undefined,
      );
      userId = session?.user.userId ? String(session.user.userId) : undefined;
    }
    try {
      if (activeZap) {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/stop/${zap.id}`,
          {},
          { withCredentials: true },
        );
        if (response.data.success) {
          setActiveZap(false);
          toast.custom((t) => (
            <ToastNotification
              t={t}
              type="success"
              actions={[]}
              onClose={() => toast.dismiss(t.id)}
            >
              <div className="flex gap-1 items-center">
                Zap stopped successfully
              </div>
            </ToastNotification>
          ));
        }
      } else {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/start/${zap.id}`,
          {},
          { withCredentials: true },
        );
        if (response.data.success) {
          setActiveZap(true);
          toast.custom((t) => (
            <ToastNotification
              t={t}
              type="success"
              actions={[]}
              onClose={() => toast.dismiss(t.id)}
            >
              <div className="flex gap-1 items-center">
                Zap published successfully
              </div>
            </ToastNotification>
          ));
        }
      }
    } catch (err: any) {
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="error"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">
            Test failed:{" "}
            {err?.response?.data?.message || "Something went wrong"}
          </div>
        </ToastNotification>
      ));
    } finally {
      setPublishingLoading(false);
    }
  }

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
    <>
      {pageLoading && (
        <div className="fixed bg-black/50 bg-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row px-3  items-center justify-center  h-screen z-[9999] w-screen gap-4 text-white text-2xl font-bold">
          This May Take a While, Setting Up the Zap Creation Environment{" "}
          <LoadingSpinner size="lg" color="primary" />
        </div>
      )}
      {/* ✅ Mobile card */}
      <div className=" block md:hidden border-b border-gray-200 py-4 px-4 border rounded-md ">
        <div
          className="flex items-center gap-3 mb-2 cursor-pointer"
          onClick={() => {
            setPageLoading(true);
            router.push(`/zap/create/${zap.id}`);
          }}
        >
          <BoltIcon />
          <span className="text-base text-gray-900 font-medium hover:underline">
            {zap.name}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <AppIcon
            imagePath={zap?.trigger?.type.imagePath}
            name={zap.trigger?.type.name}
          />
          {uniqueApps.map((app, i) => (
            <AppIcon
              key={`${app.id}-${i}`}
              imagePath={app.imagePath}
              name={app.name}
            />
          ))}
        </div>

        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span className="flex items-center gap-2">
            <FolderIcon />
            {isTrash ? "Trash" : zap.folder.name}
            {/* <div className=" hidden lg:block">" (Personal)"</div> */}
          </span>
          <span>{formatDate(zap.lastEdited)}</span>
        </div>

        <div className="flex items-center justify-between">
          {publishingLoading ? (
            <LoadingSpinner size="sm" color="primary" />
          ) : (
            <ToggleButton
              isChecked={activeZap}
              setIsChecked={handlePublishing}
            />
          )}
          <div className="flex items-center gap-2">
            <Avatar
              size="sm"
              name={
                zap.user.firstname[0].toUpperCase() +
                zap.user.lastname[0].toUpperCase()
              }
            />
            <RowAction
              currentFolderId={zap.folder.id}
              folders={folders || []}
              zapId={zap.id}
              currentName={zap.name}
              changeOwnerDisabled={true}
              refetchZaps={refetchZaps}
              trigger={
                <span className="text-lg font-extrabold text-[#280200] p-1 rounded hover:bg-black/5 cursor-pointer">
                  ⋮
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* ✅ Desktop row */}
      <tr className="hidden md:table-row border-b border-gray-100">
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
            <AppIcon
              imagePath={zap?.trigger?.type.imagePath}
              name={zap.trigger?.type.name}
            />
            {uniqueApps.map((app, i) => (
              <AppIcon
                key={`${app.id}-${i}`}
                imagePath={app.imagePath}
                name={app.name}
              />
            ))}
          </div>
        </td>

        <td className="py-4 px-6 min-w-full">
          <div className="flex items-center gap-2 ">
            <FolderIcon />
            <span className="flex text-base text-gray-700 gap-1 ">
              {isTrash ? "Trash" : zap.folder.name}
              {/* <div className=" hidden lg:block">(Personal)</div> */}
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
            <LoadingSpinner size="sm" color="primary" />
          ) : (
            <ToggleButton
              isChecked={activeZap}
              setIsChecked={handlePublishing}
            />
          )}
        </td>

        <td className="py-4 px-6">
          <div className="flex items-center justify-between">
            <Avatar
              size="sm"
              name={
                zap.user.firstname[0].toUpperCase() +
                zap.user.lastname[0].toUpperCase()
              }
            />
            <RowAction
              currentFolderId={zap.folder.id}
              folders={folders || []}
              zapId={zap.id}
              currentName={zap.name}
              changeOwnerDisabled={true}
              refetchZaps={refetchZaps}
              trigger={
                <span className="text-lg font-extrabold text-[#280200] p-1 rounded hover:bg-black/5 cursor-pointer">
                  ⋮
                </span>
              }
            />
          </div>
        </td>
      </tr>
    </>
  );
};

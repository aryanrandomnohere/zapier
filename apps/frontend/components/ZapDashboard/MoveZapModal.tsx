"use client";
import { useState } from "react";
import { Search, Folder, ChevronRight } from "lucide-react";
import axios from "axios";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton"; 
import ToastNotification from "@/ui/Notification";
import toast from "react-hot-toast";
import useZaps from "@/hooks/useZaps";
export interface folderInterface {
  id: number;
  name: string;
  userId: number;
  type: "root" | "subfolder" | "personal";
  parentId: number | null;
  user: {
    firstname: string;
    lastname: string;
  };
}

interface MoveZapModalProps {
  zapId: string | number;
  zapName: string;
  folderName: string;
  currentFolderId: number;
  folders: folderInterface[];
  onClose: () => void;
  onMoveSuccess?: (folderId: number) => void;
} 

export default function MoveZapModal({
  zapId,
  zapName,
  folderName,
  currentFolderId,
  folders,
  onClose,
  onMoveSuccess,
}: MoveZapModalProps) {
  const [selectedFolderId, setSelectedFolderId] =
    useState<number>(currentFolderId);
  const [filterText, setFilterText] = useState("");
  const [isMoving, setIsMoving] = useState(false);
  const { refetchZaps } = useZaps();
  // Filter folders based on search text
  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  async function handleMove() {
    if (selectedFolderId === currentFolderId) {
      onClose();
      console.log("Selected folder is the same as the current folder");
      return;
    }

    setIsMoving(true);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/move`,
        {
          zapId: Number(zapId),
          folderId: Number(selectedFolderId),
        },
        { withCredentials: true },
      );
      console.log("Move success:", res.data);
      onMoveSuccess?.(selectedFolderId);
      onClose();
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="success"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">
            Zap {zapName} has been moved from{" "}
            <div className="text-blue-500  underline min-w-fit ">
              {folderName}
            </div>{" "}
            to{" "}
            <div className=" text-blue-500 underline min-w-fit ">
              {folders.find((folder) => folder.id === selectedFolderId)?.name}
            </div>
          </div>
        </ToastNotification>
      ));
      refetchZaps();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.custom((t) => (
          <ToastNotification
            t={t}
            type="error"
            actions={[]}
            onClose={() => toast.dismiss(t.id)}
          >
            <div className="flex gap-1 items-center">
              Error moving zap {zapName}
            </div>
          </ToastNotification>
        ));
        console.error("Move error:", err.response?.data?.message);
      } else {
        console.error("An unexpected error occurred:", err);
      }
    } finally {
      setIsMoving(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Move &quot;{zapName || "Untitled Zap"}&quot; to selected folder
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Search Filter */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Filter folders"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Folder List */}
        <div className="max-h-64 overflow-y-auto">
          {filteredFolders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => setSelectedFolderId(folder.id)}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                selectedFolderId === folder.id
                  ? "bg-blue-50 border-l-4 border-l-blue-500"
                  : ""
              }`}
            >
              <div className="flex items-center flex-1">
                {selectedFolderId === folder.id && (
                  <ChevronRight className="text-blue-500 mr-2" size={16} />
                )}
                <div
                  className={`flex items-center gap-2 ${selectedFolderId === folder.id ? "" : "ml-6"}`}
                >
                  <Folder className="text-gray-400" size={16} />
                  <span className="text-sm font-medium text-gray-900">
                    {folder.name}
                  </span>
                  {folder.type === "personal" && (
                    <span className="text-xs text-gray-500">
                      ({folder.user.firstname} {folder.user.lastname})
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleMove} disabled={isMoving}>
            {isMoving ? "Moving..." : "Move to folder"}
          </SaveButton>
        </div>
      </div>
    </div>
  );
}

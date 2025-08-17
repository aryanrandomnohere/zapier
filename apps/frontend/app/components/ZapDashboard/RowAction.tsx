"use client";
import DropDownOptions from "@/app/ui/DropDownOptions";
import {
  Clock,
  Copy,
  FolderOpen,
  Pencil,
  Trash,
  UserRound,
} from "lucide-react";
import { ReactNode, useState } from "react";
import RenameZapModal from "@/app/components/ZapDashboard/RenameZapModal";
import DeleteZapModal from "@/app/components/ZapDashboard/DeleteZapModal";
import MoveZapModal from "@/app/components/ZapDashboard/MoveZapModal";
import { usePathname, useRouter } from "next/navigation";
import DuplicateZapModal from "./DublicateZapModal";

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

interface RowActionProps {
  trigger: ReactNode;
  zapId: string | number;
  currentName: string;
  currentFolderId: number;
  folders: folderInterface[];
  onRenameSuccess?: (newName: string) => void;
  onDeleteSuccess?: () => void;
  onMoveSuccess?: (folderId: number) => void;
  onDuplicateSuccess?: (newZapId: string | number) => void;
  renameDisabled?: boolean;
  dublicateDisabled?: boolean;
  moveToFolderDisabled?: boolean;
  changeOwnerDisabled?: boolean;
  viewHistoryDisabled?: boolean;
  deleteDisabled?: boolean;
}

export default function RowAction({
  trigger,
  zapId,
  currentName,
  currentFolderId,
  folders,
  onRenameSuccess,
  onDeleteSuccess,
  onMoveSuccess,
  onDuplicateSuccess,
  renameDisabled = false,
  dublicateDisabled = false,
  moveToFolderDisabled = false,
  changeOwnerDisabled = false,
  viewHistoryDisabled = false,
  deleteDisabled = false,
}: RowActionProps) {
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const pathname = usePathname();
  const isTrash = pathname.includes("trash");
  const router = useRouter();
  console.log(isTrash, pathname);
  console.log(renameDisabled || isTrash);

  return (
    <>
      <DropDownOptions trigger={trigger}>
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50">
          <div className="py-1 text-sm">
            {/* Rename */}
            <button
              disabled={renameDisabled || isTrash}
              onClick={() => setShowRenameModal(true)}
              className={`flex items-center gap-2 w-full px-4 py-2 transition-all duration-150 ${
                renameDisabled || isTrash
                  ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
                  : "hover:bg-purple-50 text-purple-600 hover:cursor-pointer"
              }`}
            >
              <Pencil
                size={16}
                className={`${renameDisabled || isTrash ? "text-gray-400" : "text-purple-600"}`}
              />
              Rename
            </button>

            {/* View history */}
            {/* <button
              disabled={viewHistoryDisabled || isTrash}
              onClick={() => router.push(`/zap/history/${zapId}`)}
              className={`flex items-center gap-2 w-full px-4 py-2 transition-all duration-150 ${
                (viewHistoryDisabled || isTrash) 
                  ? "cursor-not-allowed text-gray-400 hover:bg-transparent" 
                  : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
              }`}
            >
              <Clock size={16} />
              View history
            </button> */}

            {/* Duplicate */}
            <button
              disabled={dublicateDisabled || isTrash}
              onClick={() => setShowDuplicateModal(true)}
              className={`flex items-center gap-2 w-full px-4 py-2 transition-all duration-150 ${
                dublicateDisabled || isTrash
                  ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
                  : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
              }`}
            >
              <Copy size={16} />
              Duplicate
            </button>

            {/* Change owner */}
            <button
              disabled={changeOwnerDisabled || isTrash}
              className={`flex items-center gap-2 w-full px-4 py-2 transition-all duration-150 ${
                changeOwnerDisabled || isTrash
                  ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
                  : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
              }`}
            >
              <UserRound size={16} />
              Change owner
            </button>

            {/* Divider */}
            <div className="my-1 border-t border-gray-200"></div>

            {/* Move to folder */}
            <button
              disabled={moveToFolderDisabled}
              onClick={() => setShowMoveModal(true)}
              className={`flex items-center gap-2 w-full px-4 py-2 transition-all duration-150 ${
                moveToFolderDisabled
                  ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
                  : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
              }`}
            >
              <FolderOpen size={16} />
              Move to folder
            </button>

            {/* Divider */}
            <div className="my-1 border-t border-gray-200"></div>

            {/* Delete */}
            <button
              disabled={deleteDisabled || isTrash}
              onClick={() => setShowDeleteModal(true)}
              className={`flex items-center gap-2 w-full px-4 py-2 transition-all duration-150 ${
                deleteDisabled || isTrash
                  ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
                  : "hover:bg-red-50 text-red-600 hover:text-red-600 hover:cursor-pointer"
              }`}
            >
              <Trash size={16} />
              Delete
            </button>
          </div>
        </div>
      </DropDownOptions>

      {/* Rename Modal */}
      {showRenameModal && (
        <RenameZapModal
          zapId={zapId}
          currentName={currentName}
          onClose={() => setShowRenameModal(false)}
          onRenameSuccess={(newName) => {
            onRenameSuccess?.(newName);
            setShowRenameModal(false);
          }}
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteZapModal
          zapId={zapId}
          currentName={currentName}
          onClose={() => setShowDeleteModal(false)}
          onDeleteSuccess={() => {
            onDeleteSuccess?.();
            setShowDeleteModal(false);
          }}
        />
      )}

      {/* Move to Folder Modal */}
      {showMoveModal && (
        <MoveZapModal
          zapId={zapId}
          zapName={currentName}
          currentFolderId={currentFolderId}
          folders={folders}
          onClose={() => setShowMoveModal(false)}
          onMoveSuccess={(folderId) => {
            onMoveSuccess?.(folderId);
            setShowMoveModal(false);
          }}
        />
      )}

      {/* Duplicate Modal */}
      {showDuplicateModal && (
        <DuplicateZapModal
          zapId={zapId}
          zapName={currentName}
          onClose={() => setShowDuplicateModal(false)}
          onDuplicateSuccess={(newZapId) => {
            onDuplicateSuccess?.(newZapId);
            setShowDuplicateModal(false);
          }}
        />
      )}
    </>
  );
}

"use client";
import { useState } from "react";
import DropDownOptions from "@/ui/DropDownMenu";
import { folderInterface } from "@repo/types";
import { Pencil, Trash } from "lucide-react";
import { ReactNode } from "react";
import RenameFolderModal from "@/components/ZapDashboard/RenameFolderModal";
import {
  DeleteFolderWithZapsModal,
  DeleteEmptyFolderModal,
} from "@/components/ZapDashboard/DeleteFolderWithZapModal";

interface FolderRowActionProps {
  trigger: ReactNode;
  folder: folderInterface;
  refetchFolders: () => void;
  onRenameSuccess?: (newName: string) => void;
  onDeleteSuccess?: () => void;
}

export default function FolderRowAction({
  trigger,
  folder,
  refetchFolders,
  onRenameSuccess,
  onDeleteSuccess,
}: FolderRowActionProps) {
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <DropDownOptions type="normal" trigger={trigger}>
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50">
          <div className="py-1 text-sm">
            {/* Rename */}
            <button
              onClick={() => setShowRenameModal(true)}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-purple-50 text-purple-600 hover:cursor-pointer transition-all duration-150"
            >
              <Pencil size={16} className="text-purple-600" />
              Rename
            </button>

            {/* Share - Commented for now */}
            {/* <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
              <UserRoundPlus size={16} />
              Share
            </button> */}

            {/* Create subfolder - Commented for now */}
            {/* <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
              <FolderPlus size={16} />
              Create subfolder
            </button> */}

            {/* Move to folder - Commented for now */}
            {/* <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
              <FolderOpen size={16} />
              Move to folder
            </button> */}

            {/* Divider */}
            <div className="my-1 border-t border-gray-200"></div>

            {/* Delete */}
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-red-50 text-red-600 hover:cursor-pointer transition-all duration-150"
            >
              <Trash size={16} />
              Delete
            </button>
          </div>
        </div>
      </DropDownOptions>

      {/* Rename Modal */}
      {showRenameModal && (
        <RenameFolderModal
          folderId={folder.id}
          currentName={folder.name}
          onClose={() => setShowRenameModal(false)}
          onRenameSuccess={(newName) => {
            onRenameSuccess?.(newName);
            refetchFolders();
            setShowRenameModal(false);
          }}
        />
      )}

      {/* Delete Modals */}
      {showDeleteModal && folder.zaps.length > 0 && (
        <DeleteFolderWithZapsModal
          folderName={folder.name}
          zapCount={folder.zaps.length}
          onClose={() => setShowDeleteModal(false)}
        />
      )}

      {showDeleteModal && folder.zaps.length === 0 && (
        <DeleteEmptyFolderModal
          folderId={folder.id}
          folderName={folder.name}
          onClose={() => setShowDeleteModal(false)}
          onDeleteSuccess={() => {
            onDeleteSuccess?.();
            refetchFolders();
            setShowDeleteModal(false);
          }}
        />
      )}
    </>
  );
}

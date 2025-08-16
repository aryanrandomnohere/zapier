"use client";
import DropDownOptions from "@/app/ui/DropDownOptions";
import {
  Clock,
  Copy,
  FolderOpen,
  Grid,
  Pencil,
  Trash,
  UserRound,
} from "lucide-react";
import { ReactNode, useState } from "react";
import RenameZapModal from "@/app/components/ZapDashboard/RenameZapModal";
import DeleteZapModal from "@/app/components/ZapDashboard/DeleteZapModal";

interface RowActionProps {
  trigger: ReactNode;
  zapId: string | number;
  currentName: string;
  onRenameSuccess?: (newName: string) => void;
  onDeleteSuccess?: () => void;
}

export default function RowAction({
  trigger,
  zapId,
  currentName,
  onRenameSuccess,
  onDeleteSuccess,
}: RowActionProps) {
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <DropDownOptions trigger={trigger}>
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50">
          <div className="py-1 text-sm">
            {/* Rename */}
            <button
              onClick={() => setShowRenameModal(true)}
              className="flex hover:cursor-pointer transition-all duration-150 items-center gap-2 w-full px-4 py-2 hover:bg-purple-50 text-purple-600"
            >
              <Pencil size={16} className="text-purple-600" />
              Rename
            </button>

            {/* View history */}
            <button className="flex cursor-not-allowed items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700 transition-all duration-150">
              <Clock size={16} />
              View history
            </button>

            {/* Duplicate */}
            <button className="flex items-center cursor-not-allowed gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700 transition-all duration-150">
              <Copy size={16} />
              Duplicate
            </button>

            {/* Change owner (disabled) */}
            <button
              disabled
              className="flex items-center cursor-not-allowed gap-2 w-full px-4 py-2 text-gray-400"
            >
              <UserRound size={16} />
              Change owner
            </button>

            {/* Divider */}
            <div className="my-1 border-t border-gray-200"></div>

            {/* Move to project */}
            <button className="flex items-center cursor-not-allowed gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700 transition-all duration-150">
              <Grid size={16} />
              Move to project
            </button>

            {/* Move to folder */}
            <button className="flex items-center cursor-not-allowed gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700 transition-all duration-150">
              <FolderOpen size={16} />
              Move to folder
            </button>

            {/* Divider */}
            <div className="my-1 border-t border-gray-200"></div>

            {/* Delete */}
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex items-center hover:cursor-pointer gap-2 w-full px-4 py-2 hover:bg-red-50 text-red-600 transition-all duration-150"
            >
              <Trash size={16} />
              Delete
            </button>
          </div>
        </div>
      </DropDownOptions>

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
    </>
  );
}

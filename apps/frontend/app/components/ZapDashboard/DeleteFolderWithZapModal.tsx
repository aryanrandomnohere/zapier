"use client";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";
import axios from "axios";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

interface DeleteFolderModalProps {
  folderId: string | number;
  folderName: string;
  zapCount: number;
  onClose: () => void;
  onDeleteSuccess?: () => void;
}

// Modal shown when folder has Zaps - prevents deletion
export function DeleteFolderWithZapsModal({
  folderName,
  zapCount,
  onClose,
}: Omit<DeleteFolderModalProps, "folderId" | "onDeleteSuccess">) {
  return (
    <div
      className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded shadow-xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Cannot delete folder
          </h2>
        </div>

        <p className="text-sm text-gray-600 mb-6 text-start">
          The folder "{folderName}" contains {zapCount} Zap
          {zapCount > 1 ? "s" : ""}. Please delete or move the Zap
          {zapCount > 1 ? "s" : ""} to another folder before deleting this
          folder.
        </p>

        <div className="flex justify-end">
          <SaveButton disabled={false} onClick={onClose}>
            Got it
          </SaveButton>
        </div>
      </div>
    </div>
  );
}

// Modal shown when folder is empty - allows deletion
export function DeleteEmptyFolderModal({
  folderId,
  folderName,
  onClose,
  onDeleteSuccess,
}: Omit<DeleteFolderModalProps, "zapCount">) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/folders`,
        { withCredentials: true, data: { id: folderId } },
      );
      onDeleteSuccess?.();
      onClose();
    } catch (err) {
      console.error("Delete folder error:", err);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded shadow-xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg text-start font-semibold mb-2">
          Delete "{folderName}"
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-start">
          Are you sure you want to delete this folder? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-2">
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton
            type="danger"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Folder"}
          </SaveButton>
        </div>
      </div>
    </div>
  );
}

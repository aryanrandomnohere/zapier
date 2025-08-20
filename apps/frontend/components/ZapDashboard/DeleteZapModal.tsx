"use client";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";
import axios from "axios";
import { useState } from "react";
import ToastNotification from "@/ui/Notification";
import toast from "react-hot-toast";

interface DeleteZapModalProps {
  zapId: string | number;
  currentName: string;
  onClose: () => void;
  onDeleteSuccess?: () => void;
}

export default function DeleteZapModal({
  zapId,
  currentName,
  onClose,
  onDeleteSuccess,
}: DeleteZapModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${zapId}`,
        { withCredentials: true },
      );
      onDeleteSuccess?.();
      onClose();
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="success"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">
            Zap {currentName} has been deleted
          </div>
        </ToastNotification>
      ));
    } catch (err) {
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="error"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">
            Error deleting zap {currentName}
          </div>
        </ToastNotification>
      ));
      console.error("Delete error:", err);
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
          Delete “{currentName || "Untitled Zap"}”
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-start">
          Deleted Zaps will be turned off and show up in your{" "}
          <a
            href="#"
            className="text-blue-600 underline"
            onClick={(e) => e.preventDefault()}
          >
            Trash folder
          </a>{" "}
          for 30 days before being permanently deleted.
        </p>
        <div className="flex justify-end gap-2">
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton
            type="danger"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Zap"}
          </SaveButton>
        </div>
      </div>
    </div>
  );
}

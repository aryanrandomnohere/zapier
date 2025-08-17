"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface DuplicateZapModalProps {
  zapId: string | number;
  zapName: string;
  onClose: () => void;
  onDuplicateSuccess?: (newZapId: string | number) => void;
}

export default function DuplicateZapModal({
  zapId,
  zapName,
  onClose,
  onDuplicateSuccess,
}: DuplicateZapModalProps) {
  const [isDuplicating, setIsDuplicating] = useState(false);
  const [isDuplicatingAndEditing, setIsDuplicatingAndEditing] = useState(false);
  const router = useRouter();

  async function handleDuplicate() {
    setIsDuplicating(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/dublicate`,
        { zapId },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        onDuplicateSuccess?.(response.data.zapId);
        onClose();
      }
    } catch (err) {
      console.error("Duplicate error:", err);
    } finally {
      setIsDuplicating(false);
    }
  }

  async function handleDuplicateAndEdit() {
    setIsDuplicatingAndEditing(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/dublicate`,
        { zapId },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        router.push(`/zap/create/${response.data.data.zapId}`);
      }
    } catch (err) {
      console.error("Duplicate and edit error:", err);
    } finally {
      setIsDuplicatingAndEditing(false);
    }
  }

  const displayName = zapName || "Untitled Zap";
  const duplicatedName = `(Copy) ${displayName}`;

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Duplicate "{displayName}" Zap
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-6">
            The new Zap will be named "{duplicatedName}" and will be saved to
            the same folder as the original Zap.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isDuplicating || isDuplicatingAndEditing}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>

            <button
              onClick={handleDuplicate}
              disabled={isDuplicating || isDuplicatingAndEditing}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDuplicating ? "Duplicating..." : "Duplicate"}
            </button>

            <button
              onClick={handleDuplicateAndEdit}
              disabled={isDuplicating || isDuplicatingAndEditing}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDuplicatingAndEditing
                ? "Duplicating..."
                : "Duplicate and edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

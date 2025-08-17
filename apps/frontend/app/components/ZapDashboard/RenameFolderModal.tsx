"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";

interface RenameFolderModalProps {
  folderId: string | number;
  currentName: string;
  onClose: () => void;
  onRenameSuccess?: (newName: string) => void;
}

export default function RenameFolderModal({
  folderId,
  currentName,
  onClose,
  onRenameSuccess,
}: RenameFolderModalProps) {
  const [newName, setNewName] = useState(currentName || "");
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  async function handleSave() {
    if (!newName.trim()) return;
    setIsSaving(true);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/folders/rename`,
        {
          id: folderId,
          name: newName,
        },
        { withCredentials: true },
      );
      console.log("Folder rename success:", res.data);
      onRenameSuccess?.(newName);
      onClose();
    } catch (err) {
      console.error("Folder rename error:", err);
    } finally {
      setIsSaving(false);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
      <form
        className="bg-white rounded shadow-xl w-full max-w-md p-6"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg text-start font-semibold mb-4">
          Rename "{currentName || "Untitled Folder"}"
        </h2>

        <label className="block text-sm text-start font-medium mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          ref={inputRef}
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter new folder name"
        />

        <div className="flex justify-end gap-2">
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton
            onClick={handleSave}
            disabled={isSaving || !newName.trim()}
          >
            {isSaving ? "Saving..." : "Save"}
          </SaveButton>
        </div>
      </form>
    </div>
  );
}

"use client";
import { X } from "lucide-react";
import { useState } from "react";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";

interface CreateFolderSimpleProps {
  onClose: () => void;
  onSave: (folderName: string) => void;
}

export default function CreateFolderSimple({
  onClose,
  onSave,
}: CreateFolderSimpleProps) {
  const [folderName, setFolderName] = useState("");

  const handleSave = () => {
    if (folderName.trim()) {
      onSave(folderName.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && folderName.trim()) {
      handleSave();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="flex flex-col w-full justify-center items-start gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="flex justify-between items-center w-full text-xl font-bold">
        Create New Folder
        <X
          className="w-6 h-6 cursor-pointer hover:text-gray-500"
          onClick={onClose}
        />
      </h1>
      <div className="flex flex-col w-full items-start gap-3">
        <label htmlFor="folderName" className="flex gap-1 text-xs font-bold">
          Folder Name <span className="text-red-500">*</span>
          <div className="text-xs text-gray-500">(required)</div>
        </label>
        <input
          type="text"
          id="folderName"
          placeholder="Folder Name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full border border-gray-300 rounded text-sm p-2"
          maxLength={20}
          autoFocus
        />
        <div className="text-xs text-gray-500">Maximum 20 characters</div>
        <div className="flex gap-2 items-center justify-end self-end">
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave} disabled={!folderName.trim()}>
            Save
          </SaveButton>
        </div>
      </div>
    </div>
  );
}

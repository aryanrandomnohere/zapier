"use client";
import { Folder, ChevronDown } from "lucide-react";
import { useParams } from "next/navigation";
import useZaps from "@/app/hooks/useZaps";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import ZapActions from "./ZapActions";
import { useRouter } from "next/navigation";
import ToastNotification from "@/app/ui/Notification";
import toast from "react-hot-toast";

export default function ZapHeader() {
  const { zapId } = useParams();
  const { zaps } = useZaps();
  const requiredZap = zaps.find((zap) => Number(zap.id) === Number(zapId));
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(requiredZap?.name || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (isRenaming && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select(); // highlight text
    }
  }, [isRenaming]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsRenaming(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleRename(e?: FormEvent) {
    if (e) e.preventDefault();
    if (!isRenaming) {
      setIsRenaming(true);
      inputRef?.current?.focus();
      return;
    }
    if (newName) {
      try {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/rename/${zapId}`,
          { newName },
          {
            withCredentials: true,
          },
        );
        if (response.data.success) {
          setIsRenaming(false);
        }
        toast.custom((t) => (
          <ToastNotification
            t={t}
            type="success"
            actions={[]}
            onClose={() => toast.dismiss(t.id)}
          >
            <div className="flex gap-1 items-center">
              Zap renamed to {newName} from {requiredZap?.name}
            </div>
          </ToastNotification>
        ));
      } catch (err: any) {
        console.error("Rename error:", err.response.data.message);
        toast.custom((t) => (
          <ToastNotification
            t={t}
            type="error"
            actions={[]}
            onClose={() => toast.dismiss(t.id)}
          >
            <div className="flex gap-1 items-center">
              Error renaming zap {newName}
            </div>
          </ToastNotification>
        ));
      }
    }
  }
  async function handleDublicate() {
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
    } catch (err: any) {
      console.error("Dublicate error:", err.response.data.message);
      setIsRenaming(false);
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="error"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">
            Error dublicating zap {newName}
          </div>
        </ToastNotification>
      ));
    }
  }
  async function handleDelete() {
    try {
      if (prompt("Type 'confirm' to delete zap") === "confirm") {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${zapId}`,
          { withCredentials: true },
        );
        if (response.data.success) {
          router.push("/zap/dashboard");
        }
      }
    } catch (err: any) {
      console.error("Delete error:", err.response.data.message);
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="error"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">
            Error deleting zap {newName}
          </div>
        </ToastNotification>
      ));
    }
  }

  return (
    <>
      <div
        className={`flex items-center  space-x-2 bg-[#413736] px-4 text-white text-sm ${isRenaming ? "hidden" : "block"}`}
      >
        {/* Folder */}
        <div className=" items-center hidden md:flex space-x-1 text-gray-300">
          <Folder className="w-4 h-4" />
          <span className="truncate max-w-[100px]">
            {requiredZap?.folder.name}
          </span>
        </div>

        {/* Slash Separator */}
        <span className="text-gray-400 hidden md:block">/</span>

        {/* Avatar */}
        <ZapActions
          handleDelete={handleDelete}
          handleRename={handleRename}
          handleDublicate={handleDublicate}
          trigger={
            <div className="flex items-center space-x-2 hover:bg-white/20  py-2 px-2 hover:cursor-pointer">
              <div className="flex items-center space-x-1">
                <div className="rounded-full bg-pink-200 text-black w-6 h-6 text-xs font-bold flex items-center justify-center">
                  AR
                </div>
                <span className="font-medium">
                  {newName || requiredZap?.name || "Untitled Zap"}
                </span>
              </div>

              {/* Draft badge */}
              <div className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded ml-2">
                Draft
              </div>

              {/* Optional dropdown */}
              <div className="text-white/50">
                <ChevronDown size={16} />
              </div>
            </div>
          }
        />
      </div>
      <form onSubmit={handleRename}>
        <input
          className={` ${!isRenaming ? "hidden" : "block"} outline-none text-white text-sm font-medium `}
          ref={inputRef}
          value={newName || ""}
          onChange={(e) => setNewName(e.target.value)}
        />
      </form>
    </>
  );
}

"use client";
import { Folder } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "next/navigation";
import useZaps from "@/app/hooks/useZaps";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import ZapActions from "./ZapActions";
import { useRouter } from "next/navigation";

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
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/rename/${zapId}`,
        { newName },
        {
          withCredentials: true,
        },
      );
      console.log(response);
    }
    setIsRenaming(false);
  }
  async function handleDublicate() {
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
  }
  async function handleDelete() {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${zapId}`,
        { withCredentials: true },
      );
      if (response.data.success) {
        router.push("/zap/dashboard");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  }

  return (
    <>
      <div
        className={`flex items-center space-x-2 bg-[#413736] px-4 text-white text-sm ${isRenaming ? "hidden" : "block"}`}
      >
        {/* Folder */}
        <div className="flex items-center space-x-1 text-gray-300">
          <Folder className="w-4 h-4" />
          <span className="truncate max-w-[100px]">
            {requiredZap?.folder.name}
          </span>
        </div>

        {/* Slash Separator */}
        <span className="text-gray-400">/</span>

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
                <IoIosArrowDown size={16} />
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

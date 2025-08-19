"use client";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import ZapTable from "@/app/components/ZapDashboard/ZapTable";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import useDeletedZap from "@/app/hooks/useDeletedZap";
import useZaps from "@/app/hooks/useZaps";
import { zapInterface } from "@repo/types";
import axios from "axios";
import { FolderIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrashPage() {
  const { deletedZaps, loading, error, refetchDeletedZaps } = useDeletedZap();
  console.log(deletedZaps);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="flex my-2 items-center gap-2 text-2xl font-bold">
          <FolderIcon className="w-8 h-8" /> Trash
        </h1>
      )}
      <RecoilContextProvider>
        <ZapTable
          zaps={deletedZaps}
          loading={loading}
          refetchZaps={refetchDeletedZaps}
        />
      </RecoilContextProvider>
    </div>
  );
}

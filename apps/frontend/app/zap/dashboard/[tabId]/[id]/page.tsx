"use client";
import useFolders from "@/app/hooks/useFolders";
import useZaps from "@/app/hooks/useZaps";
import { FolderIcon } from "@/app/components/ZapDashboard/FolderIcon";
import { useParams } from "next/navigation";
import ZapTable from "@/app/components/ZapDashboard/ZapTable";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";

export default function page() {
  const { id } = useParams();
  const { zaps, loading: zapsLoading } = useZaps();
  const { folders, isLoading: foldersLoading } = useFolders();
  const folder = folders?.find((folder) => folder.id === Number(id));
  const filteredZaps = zaps?.filter((zap) => zap.folder.id === Number(id));
  return (
    <div>
      {foldersLoading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="flex my-2 items-center gap-2 text-2xl font-bold">
          <FolderIcon className="w-8 h-8" /> {folder?.name}
        </h1>
      )}
      <ZapTable zaps={filteredZaps} loading={zapsLoading} />
    </div>
  );
}

"use client";
import ZapTable from "@/app/components/ZapDashboard/ZapTable";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import { zapInterface } from "@repo/types";
import axios from "axios";
import { FolderIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrashPage() {
  const [deletedZaps, setDeletedZaps] = useState<zapInterface[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchDeletedZaps = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/trash`,
        { withCredentials: true },
      );
      setDeletedZaps(response.data.data);
      setLoading(false);
    };
    fetchDeletedZaps();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="flex my-2 items-center gap-2 text-2xl font-bold">
          <FolderIcon className="w-8 h-8" /> Trash
        </h1>
      )}
      <ZapTable zaps={deletedZaps} loading={loading} />
    </div>
  );
}

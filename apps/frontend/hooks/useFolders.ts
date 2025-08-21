import { getFolders } from "@/services/folderServices";
import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";
import folderAtom from "@/RecoilState/store/folderAtom";
import { folderInterface } from "@repo/types";

export default function useFolders() {
  const [folders, setFolders] = useRecoilState(folderAtom);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetchFolders = useCallback(
    async function refetchFolders() {
      setLoading(true);
      try {
        const response = await getFolders();
        //@ts-expect-error: Temporary fix for type error
        setFolders(response as folderInterface[]);
      } catch (error) {
        //@ts-expect-error: Temporary fix for type error
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [setFolders],
  );

  useEffect(() => {
    if (folders.length > 0) {
      console.log("folders already fetched");
      setLoading(false);
      return;
    }
    refetchFolders();
  }, [refetchFolders, folders.length]);

  return { folders, loading, error, refetchFolders };
}

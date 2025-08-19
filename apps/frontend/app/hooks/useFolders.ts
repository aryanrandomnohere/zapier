import { useQuery } from "@tanstack/react-query";
import { getFolders } from "@/app/services/folderServices";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import folderAtom from "../RecoilState/store/folderAtom";

export default function useFolders() {
  const [folders, setFolders] = useRecoilState(folderAtom);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function refetchFolders() {
    setLoading(true);
    try {
      const response = await getFolders();
      setFolders(response);
    } catch (error: any) {
      //@ts-ignore gemini
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (folders.length > 0) {
      console.log("folders already fetched");
      setLoading(false);
      return;
    }
    refetchFolders();
  }, []);

  return { folders, loading, error, refetchFolders };
}

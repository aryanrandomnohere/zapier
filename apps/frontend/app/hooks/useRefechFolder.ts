import { useRecoilState } from "recoil";
import folderAtom from "../RecoilState/store/folderAtom";
import { getFolders } from "../services/folderServices";

export default function useRefetchFolder() {
  const [folders, setFolders] = useRecoilState(folderAtom);
  const refetchFolders = async () => {
    const response = await getFolders();
    setFolders(response);
  };
  return {
    refetchFolders,
  };
}
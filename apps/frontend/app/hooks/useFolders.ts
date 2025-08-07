import { useQuery } from "@tanstack/react-query";
import { getFolders } from "@/app/services/folderServices";

export default function useFolders() {
  const { data: folders, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => await getFolders(),
  });
  return { folders, isLoading };
}

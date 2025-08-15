import { folderInterface } from "@repo/types";
import axios from "axios";

export async function getFolders(): Promise<folderInterface[]> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/folders`,
    {
      withCredentials: true,
    },
  );
  console.log(response.data.data);
  return response.data.data;
}

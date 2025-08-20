import { atom } from "recoil";

interface folderInterface {
  id: number;
  name: string;
  userId: number;
  type: "root" | "subfolder" | "personal";
  parentId: number | null;
  user: {
    firstname: string;
    lastname: string;
  };
  zaps: {
    id: number;
  }; // Using any to avoid having to define zapInterface
}

const folderAtom = atom<folderInterface[]>({
  key: "folderAtom",
  default: [],
});

export default folderAtom;

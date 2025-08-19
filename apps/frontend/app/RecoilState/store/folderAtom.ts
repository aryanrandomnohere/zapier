import { atom } from "recoil";
import { folderInterface } from "../../../../../packages/types/src";

const folderAtom = atom<folderInterface[]>({
  key: "folderAtom",
  default: [],
});

export default folderAtom;
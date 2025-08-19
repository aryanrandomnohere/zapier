import { atom } from "recoil";
import { zapInterface } from "../../../../../packages/types/src";

const zapAtom = atom<zapInterface[]>({
  key: "zapAtom",
  default: [],
});

export default zapAtom;

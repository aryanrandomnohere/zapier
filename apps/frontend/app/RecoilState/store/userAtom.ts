// recoil/userAtom.ts
import { SessionType } from "@repo/types";
import { atom } from "recoil";

export const userAtom = atom<SessionType  | undefined>({
  key: "UserAtom",
  default:undefined
});
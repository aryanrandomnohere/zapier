import { atom } from "recoil";

export const triggerTested = atom<boolean>({
  key: "triggerTested",
  default: false,
});

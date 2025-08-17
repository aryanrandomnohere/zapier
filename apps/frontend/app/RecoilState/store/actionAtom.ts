import { atom } from "recoil";

export const actionTested = atom<boolean>({
  key: "actionTested",
  default: false,
});

export const skippedAction = atom<boolean>({
  key: "skippedAction",
  default: false,
});

import { atom } from "recoil";

export const triggerTested = atom<boolean>({
  key: "triggerTested",
  default: false,
});

export const skippedTrigger = atom<boolean>({
  key: "skippedTrigger",
  default: false,
});

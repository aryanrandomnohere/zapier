import { atom } from "recoil";

export const appFilterAtom = atom({
  key: "appFilter",
  default: "ALL",
});

export const statusFilterAtom = atom({
  key: "statusFilter",
  default: "ALL",
});

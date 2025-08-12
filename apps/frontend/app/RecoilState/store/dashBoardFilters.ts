import { atom } from "recoil";

export const appFilterAtom = atom({
  key: "appFilter",
  default: (localStorage.getItem("appFilter") as "ALL" | "ON" | "OFF") || "ALL",
});

export const statusFilterAtom = atom({
  key: "statusFilter",
  default:
    (localStorage.getItem("statusFilter") as "ON" | "OFF" | "ALL") || "ALL",
});

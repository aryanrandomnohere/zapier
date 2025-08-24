import { atom } from "recoil";

export const sidebarIsOpenAtom = atom<boolean>({
  key: "sidebarIsOpen",
  default: false,
});
